import React, {useContext, useEffect, useState} from 'react'
import { Button, Container, Paper, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import Searcher from '../../components/Searcher/Searcher'
import { actividadesRows } from '../../constants/searcherConstant'
import { LoadingScreenContext } from '../../context/LoadingScreenContext'
import LoadingScreen from '../../components/LoadingScreen'
import useAxios from '../../hooks/useAxios'
import { useParams } from 'react-router-dom'
import { deleteActivity, getActivity, updateActivity } from '../../services/Activities/serviceActivities'
import ModalActividadBecaria from '../../components/Modals/ModalActividadBecaria'

const useStyles = makeStyles((theme) => ({
	mainDatoContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		height: '100%',
		width: '100%',
		padding: 2,

	},
	datoContainer: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		margin: '10px 0'
	},

	dato : {
		display: 'flex',
		flexDirection: 'row',
	},
	buttonDatoContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-end',
		margin: '10px 0'
	},
	advancedButton: {
		marginLeft: '20px',
		marginRight: '20px',
		marginTop: '10px',
		marginBottom: '10px'
	}
}))

function ActivitiesData() {
	const classes = useStyles();
	const {id} = useParams()
	// avanced optiosn state
	const [advancedOptions, setAdvancedOptions] = useState(false);
	
	const { loading } = useContext(LoadingScreenContext);
	const [activity, setActivity] = useState({
		name: '',
		description: '',
		startDate: '',
		endDate: '',
		vigency: '',
	});
	const getActivityAxios = useAxios({
		call: () => getActivity(id)
		, errorMessage: 'No se pudo encontrar la actividad'
		, successMessage: 'Actividad encontrada'
		, loadingMessage: 'Buscando actividad...'
		, redirectErr: '/actividades'
	})
	const deleteActivityAxios = useAxios({
		call: () => deleteActivity(id)
		, errorMessage: 'No se pudo eliminar la actividad'
		, successMessage: 'Actividad eliminada'
		, loadingMessage: 'Eliminando actividad...'
		, redirectErr: '/actividades'
		, redirectSucc: '/actividades'
	})

useEffect(() => {
		const fetchData = async () => await getActivityAxios.useAxiosCall().then(
				res => setActivity(( res.data ))
				);
		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

	if (loading) {
		return <LoadingScreen/>
	}
	return (
		<Container>
			<Paper elevation={1} sx={{padding:2}}>
				<Container>
					<Typography variant='h3' color='secondary'> {activity.name} </Typography>
					<Typography variant='h5' color='secondary'> {activity.description} </Typography>
				</Container>
				<Container className={classes.mainDatoContainer}>
					<Container disableGutters className={classes.datoContainer}>
						<Container className={classes.dato}>
							<Typography variant='body1' fontWeight='bold'> Fecha de inicio: </Typography>
							<Typography variant='body1'> {activity.startDate} </Typography>
						</Container>
						<Container className={classes.dato}>
							<Typography variant='body1' fontWeight='bold'> Fecha de Fin estimada:  </Typography>
							<Typography variant='body1'> {activity.endDate} </Typography>
						</Container>
						<Container className={classes.dato}>
							<Typography variant='body1' fontWeight='bold'> Estado:  </Typography>
							<Typography variant='body1'> {activity.vigency? 'En curso' : 'Terminada'} </Typography>
						</Container>
					</Container>
					<Container className={classes.buttonDatoContainer}>
						<Button onClick={()=> updateActivity(id, {
							vigency: false
						})} variant='contained' color='error'> Terminar Actividad</Button>
					</Container>
				</Container>
			</Paper>
			<Container >
				<ModalActividadBecaria/>
				<Button sx={{margin:2}} variant='contained'>Enviar Correo</Button>
			</Container>
			<Searcher items={[{ id:1 ,name:'Ailen', lastName:'Giordanengo', carreer:'Tecnicatura en informatica'},{ id:2 ,name:'Ailen', lastName:'Giordanengo', carreer:'Tecnicatura en informatica'}]} 
			columns={actividadesRows}/>
			{
				!advancedOptions ?				
			<Container disableGutters>
				<Button variant='outlined' color='warning' onClick={()=> setAdvancedOptions(true)}> ⚠ Opciones Avanzadas</Button>
			</Container>
			:
			<>
				<Container disableGutters>
					<Button variant='outlined' color='warning' onClick={()=> setAdvancedOptions(false) } sx={{margin:'5px 0'}}> ⚠ Cerrar Opciones Avanzadas</Button>
				</Container>
				<Container disableGutters>
					<Button variant='contained' color='warning' sx={{margin:'5px 5px 10px 0'}}> ❕ Vaciar Tabla</Button>
					<Button onClick={()=> deleteActivityAxios.useAxiosCall()} variant='contained' color='error' sx={{margin:'5px 0 10px 0'}}> ☠ Borrar Actividad</Button>
				</Container>
			</>
			}
		</Container>
	)
}

export default ActivitiesData