import React, {useState} from 'react'
import { Button, Container, Paper, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import Searcher from '../../components/Searcher/Searcher'
import { actividadesRows } from '../../constants/searcherConstant'

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
}))

function ActivitiesData() {
	const classes = useStyles();
	// avanced optiosn state
	const [advancedOptions, setAdvancedOptions] = useState(false);
	return (
		<Container>
			<Paper elevation={1} sx={{padding:2}}>
				<Container>
					<Typography variant='h3' color='secondary'> aqui va el nombre </Typography>
					<Typography variant='h5' color='secondary'> aqui va la descripcion </Typography>
				</Container>
				<Container className={classes.mainDatoContainer}>
					<Container disableGutters className={classes.datoContainer}>
						<Container className={classes.dato}>
							<Typography variant='body1' fontWeight='bold'> Fecha de inicio: </Typography>
							<Typography variant='body1'> 12/12/12 </Typography>
						</Container>
						<Container className={classes.dato}>
							<Typography variant='body1' fontWeight='bold'> Fecha de Fin estimada:  </Typography>
							<Typography variant='body1'> 12/12/12 </Typography>
						</Container>
						<Container className={classes.dato}>
							<Typography variant='body1' fontWeight='bold'> Estado:  </Typography>
							<Typography variant='body1'> En curso </Typography>
						</Container>
					</Container>
					<Container className={classes.buttonDatoContainer}>
						<Button variant='contained' color='error'> Terminar Actividad</Button>
					</Container>
				</Container>
			</Paper>
			<Container >
				<Button sx={{margin:2}} variant='contained'>Agregar Becarias</Button>
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
					<Button variant='outlined' color='warning' onClick={()=> setAdvancedOptions(false)}> ⚠ Cerrar Opciones Avanzadas</Button>
				</Container>
				<Container disableGutters>
					<Button variant='contained' color='warning'> ❕ Vaciar Tabla</Button>
					<Button variant='contained' color='error'> ☠ Borrar Actividad</Button>
				</Container>
			</>
			}
		</Container>
	)
}

export default ActivitiesData