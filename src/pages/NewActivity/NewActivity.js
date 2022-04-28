import { Button, Container, Paper, TextField, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React, { useState } from 'react'
import { createActivity } from '../../services/Activities/serviceActivities'
import useAxios from '../../hooks/useAxios'

const useStyles = makeStyles((theme) => 

({
	container:{
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			margin:'50px',
			padding:'20px'
	},

	boton:{
			width: "350px",
			height: "60px",
	},
	input:{
			color:"#fff",
			backgroundColor:"#000",
	},
	dateContainer:{
			display: 'flex',
	},
	date:{
		width: '100%',
	}
}));

function NewActivity() {
	const [activityForm, setActivityForm] = useState({
		name: '',
		description: '',
		startDate: '',
		endDate: '',
		validity: true
	})

	const classes = useStyles();

	const newActivityCall = useAxios({
		call: () => createActivity(activityForm),
		successMessage: 'Actividad creada con éxito',
		errorMessage: 'Error al crear la actividad',
		loadingMessage: 'Creando actividad...',
		redirectSucc: '/actividades',
	})
	return (
		<Container maxWidth='md'>
			<Paper variant="elevation" elevation={2} > 
			<Container sx={{display:'flex'}} className={classes.container} maxWidth='sm'>
			<Box mt={3}/>
				<Typography variant="h3" color="primary">Nueva Actividad</Typography>
				<Container>
					<form onSubmit={(e)=> {
					e.preventDefault();
					newActivityCall.useAxiosCall()
					}
				}
					>
						<Container>
							<Typography>Nombre</Typography>
							<TextField fullWidth type="text" value={activityForm.name} onChange={(e) => setActivityForm({...activityForm, name: e.target.value})}/>
						</Container>
						<Container mt={3}>
							<Typography>Descripción</Typography>
							<TextField fullWidth type="text" value={activityForm.description} onChange={(e) => setActivityForm({...activityForm, description: e.target.value})}/>
						</Container>
						<Container sx={{display:'flex', justifyContent:'space-evenly'}}>
							<Box className={classes.date}>
								<Typography>Fecha de inicio</Typography>
								<TextField fullWidth type="date" value={activityForm.startDate} onChange={(e) => setActivityForm({...activityForm, startDate: e.target.value})}/>
							</Box>
							<Box className={classes.date}>
								<Typography>Fecha de fin estimada</Typography>
								<TextField fullWidth type="date" value={activityForm.endDate} onChange={(e) => setActivityForm({...activityForm, endDate: e.target.value})}/>
							</Box>
						</Container>
						<Box mt={3}/>
						<Button fullWidth className={classes.boton} type="submit" variant="contained">Crear</Button>
						<Box mt={3}/>
					</form>
				</Container>
			</Container>
			</Paper>
		</Container>
	)
}

export default NewActivity