import { Button, Container, Paper, TextField, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React, { useState } from 'react'
import { createActivity } from '../../services/Activities/serviceActivities'
import useAxios from '../../hooks/useAxios'

const useStyles = makeStyles((theme) => ({
	container:{
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			marginTop:'50px',
	},
	textField:{
			alignItems:"center",
			marginTop: "5px",
			margin:"normal",
	},
	icon:{
			color: "black",
			fontSize: "30",
	},
	boton:{
			width: "350px",
			height: "60px",
	},
	input:{
			color:"#fff",
			backgroundColor:"#000",}
	}));

function NewActivity() {
	const [activityForm, setActivityForm] = useState({
		name: '',
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
		redirectSucc: '/activities',
		redirectErr: '/activities'
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
						<Container >
							<Typography>Nombre</Typography>
							<TextField type="text" value={activityForm.name} onChange={(e) => setActivityForm({...activityForm, name: e.target.value})}/>
						</Container>
						<Container>
							<Typography>Fecha de inicio</Typography>
							<TextField type="date" value={activityForm.startDate} onChange={(e) => setActivityForm({...activityForm, startDate: e.target.value})}/>
						</Container>
						<Container>
						<Typography>Fecha de fin estimada</Typography>
							<TextField type="date" value={activityForm.endDate} onChange={(e) => setActivityForm({...activityForm, endDate: e.target.value})}/>
						</Container>
						<Box mt={3}/>
						<Button className={classes.boton} type="submit" variant="contained">Crear</Button>
						<Box mt={3}/>
					</form>
				</Container>
			</Container>
			</Paper>
		</Container>
	)
}

export default NewActivity