import { Box, Button, Checkbox, Container, List, ListItem, ListItemIcon, ListItemText, Paper, Typography } from '@mui/material'
import React, {useState,useContext} from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router'
import LoadingScreen from '../../components/LoadingScreen'
import useAxios from '../../hooks/useAxios'
import  BackButton  from '../../components/BackButton'
import { getCarreers } from '../../services/carrers/carreersService'
import { LoadingScreenContext } from '../../context/LoadingScreenContext'
import { getTutor, updateTutorCarreers } from '../../services/Tutor/serviceTutor'

const EditTutorCarreer = () => {
	const {id} = useParams()
	const {loading} = useContext(LoadingScreenContext)

	const [tutor, setTutor] = useState({name:'pedro'})
	const [carreers, setCarreers] = useState([])	
	
	const getCarreersCall = useAxios({
		call: () => getCarreers(),
		errorMessage: 'No se han podida cargar las carreras para editar el tutor',
		loadingMessage:'Buscando carreras', 
	})
	
	const getTutorCall = useAxios({
		call: () => getTutor(id),
		errorMessage: 'No se han podido cargar los datos del tutor',
		loadingMessage:'Buscando datos del tutor',
	})

	const updateTutorCarreersCall = useAxios({
		call: () => updateTutorCarreers(id, tutor.carrerasDeTutor),
		errorMessage: 'No se han podido actualizar los datos del tutor',
		loadingMessage:'Actualizando carreras del tutor',
		successMessage: 'Carreras actualizadas',
		redirectSucc: `/tutor/${id}`
	})

	useEffect(() => {
		const fetchData = async () => {
			await getTutorCall.useAxiosCall().then(res => {
				setTutor(res.data)
			})
			await getCarreersCall.useAxiosCall().then(res => {
				setCarreers(res)
			})
		}
		fetchData()
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	if(loading){
		return <LoadingScreen/>
	}
	return (
		<Container>
			<Box display='flex' justifyContent='space-between'>
				<Typography variant='h4'>
					Edicion carreras del tutor {tutor.lastname}, {tutor.name}
				</Typography>
				<BackButton path={`/tutor/${id}`}/>
			</Box>
			<Paper>
				<Container sx={{marginTop:5}}>
					<Paper>
						<Typography variant='subtitle1'>
							Las Carreras en las cual se encuentra el Tutor son:
						</Typography>
						<Button 
							variant='contained'
							onClick={() => {
								updateTutorCarreersCall.useAxiosCall()
							}}

						> 
							Actulizar Carreras Del Tutor
						</Button>
						<List>
							{carreers.map(carreer => (
							<ListItem
								key={carreer.id}
								dense
							>
								<ListItemIcon>
									<Checkbox
									
									checked={tutor.carrerasDeTutor.includes(carreer.id)}
										onChange={(e) => {
											const newCarreers = [...tutor.carrerasDeTutor]
											if(e.target.checked){
												newCarreers.push(carreer.id)
											}
											else{
												newCarreers.splice(newCarreers.indexOf(carreer.id), 1)
											}
											setTutor({...tutor, carrerasDeTutor: newCarreers})
										}}
									/>
								</ListItemIcon>
								<ListItemText>
									{carreer.nombre}
								</ListItemText>
							</ListItem>
							))}
						</List>

					</Paper>
					</Container>
			</Paper>
		</Container>
	)
}

export default EditTutorCarreer