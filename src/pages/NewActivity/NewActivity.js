import { Button, Container, Paper, TextField, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React, { useState } from 'react'
import { createActivity } from '../../services/Activities/serviceActivities'
import useAxios from '../../hooks/useAxios'
import { DateTime }	from 'luxon'
import useSnackbar from '../../hooks/useSnackbar';

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
	const { showSnackbar } =useSnackbar()
	const valid_Date = (text) => {
		const startDate = DateTime.fromFormat(activityForm.startDate, 'yyyy-MM-dd')
		const endDate = DateTime.fromFormat(activityForm.endDate, 'yyyy-MM-dd')
		if(text === 'startDate'){
			if (endDate.toMillis() >= startDate.toMillis()) {
				return true
			}
			return false
		}
		else if (text === 'endDate'){
			if (startDate.toMillis() <= endDate.toMillis()) {
				return true
			}
			return false
		}
		return true
	}
	const isValidLimit = (text,limit) => {
		if (text.length > limit) {
			return false
		}
		return true
	}
	
	const [activityForm, setActivityForm] = useState({
		name: '',
		description: '',
		startDate: DateTime.local().toFormat('yyyy-MM-dd'),
		endDate: DateTime.local().plus({ months:3 }).toFormat('yyyy-MM-dd'),
		validity: true
	})

	const handleSubmit = async () => {
		console.log()
		if(valid_Date('startDate') && valid_Date('endDate') && isValidLimit(activityForm.name,150) && isValidLimit(activityForm.description,300)){
			await newActivityCall.useAxiosCall()
		}
		else{
			Promise.reject()
			showSnackbar('Tiene errores en el formulario, intentelo nuevamente', 'error')
		}
	}

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
						handleSubmit()
					}
				}
					>
						<Container>
							<Typography>Nombre</Typography>
							<TextField error={!isValidLimit(activityForm.name,40)} 
							helperText={!isValidLimit(activityForm.name,40) ? 'El nombre debe tener menos de 40 caracteres' : ''}
							fullWidth type="text" value={activityForm.name} onChange={(e) => setActivityForm({...activityForm, name: e.target.value})}
							required
							/>
						</Container>
						<Container mt={3}>
							<Typography>Descripción</Typography>
							<TextField fullWidth type="text" error={!isValidLimit(activityForm.description,100)}
							helperText={!isValidLimit(activityForm.description,100) ? 'La descripción debe tener menos de 100 caracteres' : ''}
							value={activityForm.description} onChange={(e) => setActivityForm({...activityForm, description: e.target.value})}
							/>
						</Container>
						<Container sx={{display:'flex', justifyContent:'space-evenly'}}>
							<Box className={classes.date}>
								<Typography>Fecha de inicio</Typography>
								<TextField 
								fullWidth 
								type="date" 
								defaultValue={DateTime.local().toFormat('yyyy-MM-dd')}
								error={!valid_Date('startDate')}
								helperText={!valid_Date('startDate') ? 'La fecha de inicio debe ser menor que la fecha de fin' : ''}
								onChange={(e) => setActivityForm({...activityForm, startDate: e.target.value})}
								
								required
								/>
							</Box>
							<Box className={classes.date}>
								<Typography>Fecha de fin estimada</Typography>
								<TextField 
								fullWidth 
								type="date" 
								defaultValue={DateTime.local().plus({ months:3 }).toFormat('yyyy-MM-dd')}
								onChange={(e) => setActivityForm({...activityForm, endDate: e.target.value})}
								error={!valid_Date('endDate')}
								helperText={!valid_Date('endDate') ? 'La fecha de fin debe ser mayor que la fecha de inicio' : ''}
								required
							/>
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