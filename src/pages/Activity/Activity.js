import React, {useContext, useEffect, useState} from 'react'
import { Box, Button, Container, Dialog, Paper, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import Searcher from '../../components/Searcher/Searcher'
import { actividadesRows } from '../../constants/searcherConstant'
import { LoadingScreenContext } from '../../context/LoadingScreenContext'
import LoadingScreen from '../../components/LoadingScreen'
import useAxios from '../../hooks/useAxios'
import { useParams } from 'react-router-dom'
import { deleteActivity, getActivity, updateActivity, getScholarInActivity, deleteScholarActivityRelations } from '../../services/Activities/serviceActivities'
import ModalActividadBecaria from '../../components/Modals/ModalActividadBecaria'
import { DateTime } from 'luxon'
import useDialog from '../../hooks/useDialog'
import { Link } from 'react-router-dom'
import BackButton from '../../components/BackButton'
import MailSender from '../../components/MailSender'

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
	const {openDialog} = useDialog()
	const [advancedOptions, setAdvancedOptions] = useState(false);
	const { loading } = useContext(LoadingScreenContext);
	const [activity, setActivity] = useState({
		name: '',
		description: '',
		startDate: '',
		endDate: '',
		validity: true,
	});
	const [activityScholars, setActivityScholars] = useState([]);
	const [selectedScholars, setSelectedScholars] = useState([]);

	//NOTE: estas son llamadas hechas con hook para no tener que rehacer todo el setLoadingContext en cada llamada.
	
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
		, loadingMessage: 'Buscando becarias de la actividad...'
	})


useEffect(() => {
	
	const fetchData = async () => 
	await getActivityAxios.useAxiosCall().then(
		res => setActivity(( res.data ))
		).finally(async () => await fetchScholars())

	const fetchScholars = async () =>{
		await getScholarsInActivity.useAxiosCall().then(
			res => {
				const mappedScholars = res.data.map(scholar => {
					return {
						...scholar,
						carreras: scholar.academicStatus.reduce((acc, curr) => {
							return acc.concat(`${curr.carrera.carrera} ,`)
						}, ''),
						profile: (
						<Link style={{textDecoration:"none"}} to={`/becaria/${scholar.id}`}>
							<Button color="secondary" variant="contained" size='small' sx={{color:'#fafafa'}}> 
								Ver Perfil
							</Button>
						</Link>
						),
						delete: (
							<Button color="error" variant="contained" size='small' sx={{color:'#fafafa'}} onClick={() => {
								openDialog('Eliminar becaria', `??Est?? seguro que desea eliminar a la becaria ${scholar.name}?`, () => {
									deleteScholarActivityRelations([scholar.id], id)
									window.location.reload(false)
								})
							}}>
								Eliminar
							</Button>
						)
					}
				})
				console.log('llegue')
					setActivityScholars(mappedScholars)
				}
			)
			
		}
		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
}, [activity.validity]);

	if (loading) {
		return <LoadingScreen/>
	}
	else{
		return (
		<Container>
			<Box mb={2}>
				<BackButton path={'/actividades'}/> 
			</Box>
			<Paper elevation={1} sx={{padding:2}}>
				<Container>
					<Typography variant='h3' color='secondary'> {activity.name} </Typography>
					<Typography variant='h5' color='secondary'> {activity.description} </Typography>
				</Container>
				<Container className={classes.mainDatoContainer}>
					<Container disableGutters className={classes.datoContainer}>
						<Container className={classes.dato}>
							<Typography variant='body1' fontWeight='bold'> Fecha de inicio: </Typography>
							<Typography variant='body1'> {DateTime.fromISO(activity.startDate).plus({ hours: 3 }).toFormat('dd/MM/yyyy').toLocaleString()} </Typography>
						</Container>
						<Container className={classes.dato}>
							<Typography variant='body1' fontWeight='bold'> Fecha de Fin estimada:  </Typography>
							<Typography variant='body1'> {DateTime.fromISO(activity.endDate).plus({ hours: 3 }).toFormat('dd/MM/yyyy').toLocaleString()} </Typography>
						</Container>
						<Container className={classes.dato}>
							<Typography variant='body1' fontWeight='bold'> Estado:  </Typography>
							<Typography variant='body1'> {activity.validity? 'En curso' : 'Terminada'} </Typography>
						</Container>
					</Container>
					<Container className={classes.buttonDatoContainer}>
					{
					activity.validity?
						<Button onClick={
							() =>{
								openDialog('Actualizar actividad', <Typography>Est??s a punto de terminar con una actividad, ??Estas segur@?</Typography>, 						
									() => {
										setActivity({
											...activity,
											validity:  false
										})
										updateActivity(id, {
											validity: false
										})
										window.location.reload(false)
									})								
									
							}
						}
						variant='contained' color='error'> Terminar Actividad</Button>
					:null}
					</Container>
				</Container>
			</Paper>
			<Container >
				<MailSender users={selectedScholars}/>
				{
					activity.validity?
				<ModalActividadBecaria activityID={id} activityScholars={activityScholars}/>: null
				}

			</Container>
			<Searcher 
			items={activityScholars} 
			columns={actividadesRows}
			setStateCallback={setSelectedScholars}
			/>
			{
				!advancedOptions ?				
			<Container disableGutters>
				<Button variant='outlined' color='warning' onClick={()=> setAdvancedOptions(true)}> ??? Opciones Avanzadas</Button>
			</Container>
			:
			<>
				<Container disableGutters>
					<Button variant='outlined' color='warning' onClick={()=> setAdvancedOptions(false) } sx={{margin:'5px 0'}}> ??? Cerrar Opciones Avanzadas</Button>
				</Container>
				<Container disableGutters>
					<Button variant='contained' color='warning' sx={{margin:'5px 5px 10px 0'}}
					onClick={()=>{
						openDialog('Vaciar Tabla', <Typography>Est??s a punto de vaciar toda la actividad, ??Estas segur@?</Typography>,() => {
							const mappedScholars = activityScholars.map(scholar => {
								return scholar.id
							})
							deleteScholarActivityRelations(mappedScholars, id)
							window.location.reload(false)
							})}
						}
					> 
					??? Vaciar Tabla</Button>
					<Button onClick={() =>
						openDialog('Eliminar actividad', <Typography>Est??s a punto de eliminar una actividad, ??Estas segur@?</Typography>,() => {
							const mappedScholars = activityScholars.map(scholar => {
								return scholar.id
							})
							deleteScholarActivityRelations(mappedScholars, id)
							deleteActivityAxios.useAxiosCall()
							})} variant='contained' color='error' sx={{margin:'5px 0 10px 0'}}> ??? Borrar Actividad
					</Button>
				</Container>
				<Dialog/>
			</>
			}
		</Container>
		)
	}
}

export default ActivitiesData