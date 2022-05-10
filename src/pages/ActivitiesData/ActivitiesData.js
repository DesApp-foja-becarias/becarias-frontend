import React, {useContext, useEffect, useState} from 'react'
import { Button, Container, Dialog, Paper, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import Searcher from '../../components/Searcher/Searcher'
import { actividadesRows } from '../../constants/searcherConstant'
import { LoadingScreenContext } from '../../context/LoadingScreenContext'
import LoadingScreen from '../../components/LoadingScreen'
import useAxios from '../../hooks/useAxios'
import { useParams } from 'react-router-dom'
import { deleteActivity, getActivity, updateActivity, getScholarInActivity } from '../../services/Activities/serviceActivities'
import ModalActividadBecaria from '../../components/Modals/ModalActividadBecaria'
import { DateTime } from 'luxon'
import useDialog from '../../hooks/useDialog'

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
	const {openDialog} = useDialog()
	const { loading } = useContext(LoadingScreenContext);
	const [activity, setActivity] = useState({
		name: '',
		description: '',
		startDate: '',
		endDate: '',
		validity: '',
	});
	const [activityScholars, setActivityScholars] = useState([]);
	const getActivityAxios = useAxios({
		call: () => getActivity(id)
		, errorMessage: 'No se pudo encontrar la actividad'
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
	const getScholarsInActivity = useAxios({
		call: () => getScholarInActivity(id)
		, errorMessage: 'Ocurrio un error al obtener los becarios de la actividad'
		, loadingMessage: 'Buscando becarias...'
	})


useEffect(() => {
		const fetchData = async () => 
			await getActivityAxios.useAxiosCall().then(
				res => setActivity(( res.data ))
				)
				const fetchScholars = async () =>

				await getScholarsInActivity.useAxiosCall().then(
					res => setActivityScholars(( res.data ))
					)
					fetchData();
					fetchScholars();
		// eslint-disable-next-line react-hooks/exhaustive-deps
}, [activity.validity]);

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
							<Typography variant='body1'> {DateTime.fromISO(activity.startDate).toLocaleString( )} </Typography>
						</Container>
						<Container className={classes.dato}>
							<Typography variant='body1' fontWeight='bold'> Fecha de Fin estimada:  </Typography>
							<Typography variant='body1'> {DateTime.fromISO(activity.endDate).toLocaleString( )} </Typography>
						</Container>
						<Container className={classes.dato}>
							<Typography variant='body1' fontWeight='bold'> Estado:  </Typography>
							<Typography variant='body1'> {activity.validity? 'En curso' : 'Terminada'} </Typography>
						</Container>
					</Container>
					<Container className={classes.buttonDatoContainer}>
						<Button onClick={
							() =>{
								openDialog('Actualizar actividad', <Typography>Estas a punto de terminar con una actividad, Estas segur@?</Typography>, 						
									() => {
										setActivity({
											...activity,
											validity:  false
										})
										updateActivity(id, {
											validity: false
										})
									})								
									
							}
						}
						variant='contained' color='error'> Terminar Actividad</Button>
					</Container>
				</Container>
			</Paper>
			<Container >
				<ModalActividadBecaria activiyScholars={activityScholars}/>
				<Button sx={{margin:2}} variant='contained'>Enviar Correo</Button>
			</Container>
			<Searcher 
			items={activityScholars} 
			columns={actividadesRows}
			/>
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
					<Button onClick={() =>
						openDialog('Eliminar actividad', <Typography>Estas a punto de eliminar una actividad, Estas segur@?</Typography>,() => deleteActivityAxios.useAxiosCall())} variant='contained' color='error' sx={{margin:'5px 0 10px 0'}}> ☠ Borrar Actividad</Button>
				</Container>
				<Dialog
				/>
			</>
			}
		</Container>
	)
}

export default ActivitiesData