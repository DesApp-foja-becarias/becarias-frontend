import Dato from '../Datos/Dato'
import React, { useState , useEffect} from 'react'
import {Divider, IconButton, Box, Grid, Typography, Tooltip, Container } from '@mui/material';
import { makeStyles } from "@mui/styles";
import EditIcon from '@mui/icons-material/Edit';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import CancelIcon from '@mui/icons-material/Cancel';
import DatoDate from '../Datos/DatoDate';
import {Link, useParams} from 'react-router-dom';
import { getTutor } from '../../services/Tutor/serviceTutor';
import BackButton from '../BackButton';

const useStyles = makeStyles(() => ({
    rootContainer:{
      padding: '15px',
      boxShadow: '0px 0px 10px #00000029',
      borderRadius: '10px',
      backgroundColor: '#fafafa',
    },
    image: {
        height: '200ps',
        width: '200px',
        border: 'solid black 3px',
    },

    subtitulo:{
      fontSize: '2.5em',
    }
  })
  );

export default function ScholarData() {
    const datos = 
        {
            name: 'Mariana Agustina',
            surname: 'Etchegaray',
            fotoURL: 'https://st3.depositphotos.com/1007566/13175/v/600/depositphotos_131750410-stock-illustration-woman-female-avatar-character.jpg',
            dni:'14512412',
            birth: '1994-12-12',
            telephone: '123456789',
            adress: 'Calle falsa 123',
            email: 'jsmandolo@gmail.com',
            country: 'Argentina',
            province: 'Buenos Aires',
            city: 'La Plata',
            actualState: 'Aprobada',
            career: ['Licenciatura en Informatica'],
            tutor: 'Juan Perez',
            inscriptionDate: '2020-01-01',

            //NOTE: EL TUTOR PODRIA LINKEARME AL DATOSTUTOR DEL MISMO
            historial:[],
            actividad:[],
        }

    const {id} = useParams()

    const [scholar, setTutor] = useState(datos);

    useEffect(() => {
      getTutor(id).then(response => {
        setTutor(response.data)
      }
      )}, [id])

    const classes = useStyles();
    return (
          <Container className={classes.rootContainer} maxWidth="md">
            
            
            <Container id='nombreBecaria'>
            <BackButton path='/' />
            <Box mb={3} mt={3}/>
            
              <Grid container>
                <Grid container item xs={8}>
                  <Box>
                    <Typography variant='h4'>{scholar.surname}</Typography>                
                    <Typography variant='h5'>{scholar.name}</Typography>
                  </Box>
                </Grid>
                <Grid container item xs={4}>
                  <Box>
                    <Tooltip title='Editar' followCursor>
                      <Link to={`/becaria/edit/${id}`}>
                        <IconButton  color='warning'>
                          <EditIcon fontSize='large'  />
                        </IconButton>
                      </Link>
                    </Tooltip>
                    <Tooltip title='Aprobar' followCursor>
                      <IconButton color='success'>
                        <PersonAddAlt1Icon  fontSize='large'/>
                      </IconButton>
                    </Tooltip>
                    <Tooltip title='Dar de baja' followCursor>
                      <IconButton color='error'>
                        <CancelIcon fontSize='large'/>
                      </IconButton>
                    </Tooltip>
                  </Box>
                </Grid>
              </Grid>
            </Container>
            <Box mb={2} mt={2}>
              <Divider />
            </Box> 
            <Container id='datosGenerales' >
              <Grid container id='datosGeneralesUp' >
                  <Grid item xs={12} sm={6} id='DatosPersonales' >
                    <img src={scholar.fotoURL} className={classes.image} alt='fotoBecaria'/>
                    <Box mb={2} mt={2}/>
                    <Typography variant="subtitle1">Datos de personales</Typography>
                    <Dato name='dni' title='DNI' value={scholar.dni} />
                    <DatoDate name='fechaNacimiento' date title='Fecha de nacimiento' value={scholar.birth}/>
                    <Dato name='direccion' title='Domicilio' value={scholar.adress}/>
                      <Dato name='ciudad' title='Localidad' value={scholar.city + ', ' + scholar.province + ', ' + scholar.country }/>
                  </Grid>
                  <Grid item xs={12} sm={6}  id='datosContCar' >
                  
                  <Typography variant="subtitle1">Datos de contacto</Typography>
                  
                    <Dato name='email' title='Correo' value={scholar.email} mail/>
                    <Dato name='telefono' title='Celular' value={scholar.telephone} cell/>
                    <Box mb={2} mt={2}>
                      <Divider />
                    </Box>
                    <Typography variant="subtitle1">Datos de carrera</Typography>
                    <Dato name='estadoActual' title='Estado Actual' value={scholar.actualState} />
                    <Dato name='carrera'  title='Carrera' value={scholar.career} career/>
                    <Dato name='tutor' title='Tutor' value={scholar.tutor} />
                    <Typography variant='h6'>Historial</Typography>
                    <Typography variant='h6'>---------</Typography>
                  </Grid>
              </Grid>
              <Box mb={2} mt={2}>
                <Divider />
              </Box>
              <Container id='datosGeneralesBottom'>
                <Typography variant='subtitle1'>Actividad</Typography>
                <Box mb={6} />
              </Container>
            </Container>
        </Container>
    )
}












