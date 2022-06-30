import React, { useState, useEffect } from 'react'
import { CircularProgress, Divider, Modal, Paper } from '@mui/material';
import { Button, Container, Typography } from '@mui/material'
import SelectedUsersDashboard from '../SelectedUsersDashboard'
import { Box } from '@mui/system';
import FreeScholarsDataTable from '../FreeScholarsDataTable/FreeScholarsDataTable';
import { pushScholarInActivity } from '../../services/Activities/serviceActivities'
import {makeStyles} from '@mui/styles'
import { getScholars } from '../../services/Scholar/servicesScholar';
import useAxios from '../../hooks/useAxios';
const useStyles = makeStyles((theme) => ({
	modal: {
		overflowY: 'scroll',
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		border: '2px solid #000',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
		width:  '100%',
		height: '90%',
		maxHeight: '90%',
		overflowY: 'scroll',
		'&::-webkit-scrollbar': {
			width: '0.5rem',
			height: '0.5rem',
			background: '#cccccc',
			borderRadius: '0.5rem',
		},
	},
}))

function ModalActividadBecaria({activityID,activityScholars}) {
	const classes = useStyles();
	const [open,setOpen] = useState(false)
	const [avilableUsers, setAvilableUsers] = useState([])
	const [selectedUsers,setSelectedUsers] = useState([])
	const [loading, setLoading] = useState(false)
	const handleOpen = () => {
		setOpen(true)
	}

	
	const handlePushScholarInActivity = async () => {
		await pushScholarInActivityCall.useAxiosCall().then(() => {
			setOpen(false)
			window.location.reload(false)
		})
	}

		const pushScholarInActivityCall = useAxios({
		call: () => pushScholarInActivity(activityID, selectedUsers),
		loadingMessage: 'Agregando Becarias a la actividad...',
		successMessage: 'Becarias agregadas a la actividad',
		errorMessage: 'Error al agregar becarias a la actividad',
		
	})

	useEffect(() => {
		
		const fetchData = async () => {
			setLoading(true)
			await getScholars().then(res => {
				// availableUsers son aquellos que
				// no estan en la actividad Y tampoco estan dados de baja
				const data = res.data
				const activeAvailableUsers = data.data.filter(scholar => scholar.actualState === 'Aceptada')
				const availableUsers = activeAvailableUsers.filter(scholar => !activityScholars.some(scholarInActivity => scholarInActivity.id === scholar.id ))
				setAvilableUsers(availableUsers)
				console.log(availableUsers)
				setLoading(false)
				})
		} 
		if(open===true){
			fetchData()
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ open ])

		return (
			<>
			<Box sx={{margin:'1rem 0rem'}}>
				<Button variant='contained' onClick={handleOpen}>
					Agregar Becaria
				</Button>
			</Box>
			<Modal open={open} onClose={() => setOpen(false)} className={classes.modal}
			>
				<Container maxWidth='lg' >
					<Box >
					<Paper className={classes.paper}>
						<Box  className={classes.container}>
							<Typography variant='h4'>
								Agregar Becaria
							</Typography>
							<Box m={2}>
								<Divider/>
							</Box>
							<Button variant='contained' onClick={async () => await handlePushScholarInActivity()}>
								Agregar a las becarias seleccionadas
							</Button>
								{loading ? <LoadingScreenTable/>:
								<>
								
								<SelectedUsersDashboard selectedUsers={selectedUsers} setSelectedUsers={setSelectedUsers}/>
								<FreeScholarsDataTable scholars={avilableUsers} setScholars={setSelectedUsers}/>
								</>
								}

								</Box>
					</Paper>
					</Box>
				</Container>		
			</Modal>
			</>
		)
	
}


export default ModalActividadBecaria

export const LoadingScreenTable = () => {
	return (
			<Box  sx={
					{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							height: '500px',
							width: '100%',
							backgroundColor: '#fff',
					}
			}>
					<Box sx={
							{ 
									display:'flex',
									flexDirection: 'column',
									alignItems: 'center',
									justifyContent: 'center',
							}}
					>
					<CircularProgress/>
					<Typography mt={2} sx={{
							fontSize: '1.25rem',
							fontWeight: 'normal',
							color: '#666',
					}}
					>
					Por Favor Espere...
					</Typography>
					</Box>
			</Box>
	)
}