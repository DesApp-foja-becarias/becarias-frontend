import React, { useState, useEffect } from 'react'
import { Divider, Modal, Paper } from '@mui/material';
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

	const scholarsNotInTheActivity = async () => {
		const {data} = await getScholars()
		const availableUsers = data.data.filter(scholar => !activityScholars.some(scholarInActivity => scholarInActivity.id === scholar.id))
		setAvilableUsers(availableUsers)
	}

	useEffect(() => {
		scholarsNotInTheActivity()
	}, [open])

	return (
		<>
		<Button variant='contained' onClick={handleOpen}>
			Agregar Becaria
		</Button>
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
						<SelectedUsersDashboard selectedUsers={selectedUsers} setSelectedUsers={setSelectedUsers}/>
						<FreeScholarsDataTable scholars={avilableUsers} setScholars={setSelectedUsers}/>
					</Box>
				</Paper>
				</Box>
			</Container>		
		</Modal>
		
		</>
	)
}

export default ModalActividadBecaria