import Dato from '../Datos/Dato';
import React, { useEffect, useState, useContext} from 'react'
import {Divider, IconButton, Box, Grid, Typography, Tooltip, Container } from '@mui/material';
import { makeStyles } from "@mui/styles";
import EditIcon from '@mui/icons-material/Edit';
import BackButton from '../BackButton';
import { getTutor } from '../../services/Tutor/serviceTutor';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import tutorPhoto from '../../assets/tutor.svg'
import useAxios from '../../hooks/useAxios';
import { LoadingScreenContext } from '../../context/LoadingScreenContext';
import axios from 'axios';
import LoadingScreen from '../LoadingScreen';


const useStyles = makeStyles((theme) => ({
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

export default function TutorData() {
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
        }

    const [loading] = useContext(LoadingScreenContext);

    const {id} = useParams()

    const [tutor, setTutor] = useState(datos);
    const tutorAxios = useAxios({
        call:  
        () => axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
        , successMessage: 'Tutor encontrado'
        , errorMessage: 'No se encontro el tutor'
    });

    useEffect(() => {
      console.log(tutorAxios)
      }, [tutorAxios])

    const classes = useStyles();
    if(loading) return <LoadingScreen/>
    else 
  
   return  (
      <>
      
        <Container className={classes.rootContainer} maxWidth="md">
            <Container  id='nombreTutor'>
            <BackButton path='/' />
            <Box mb={3} mt={3}/>
            
              <Grid container>
                <Grid container item xs={11}>
                  <Box>
                    <Typography variant='h4'>{tutor.surname}</Typography>              
                    <Typography variant='h5'>{tutor.name}</Typography>
                  </Box>
                </Grid>
                <Grid container item xs={1}>
                  <Box>
                    <Link to={`/tutor/edit/${id}`}>
                      <Tooltip title='Editar' followCursor>
                        <IconButton  color='warning'>
                          <EditIcon fontSize='large'  />
                        </IconButton>
                      </Tooltip>
                    </Link>
                  </Box>
                </Grid>
              </Grid>
            </Container>
            <Box mb={2} mt={2}>
              <Divider />
            </Box> 
            <Container id='datosGenerales' >
              <Grid container id='datosGeneralesUp' disableGutters>
                  <Grid item xs={12} sm={5} id='DatosPersonales' disableGutters>
                    <img src={tutorPhoto} className={classes.image} alt='fotoBecaria'/>
                  </Grid>
                  
                  <Grid item xs={12} sm={6}  id='datosContCar' disableGutters>
                  <Typography variant="subtitle1">Datos de personales</Typography>
                    <Dato name='dni' title='DNI' value={tutor.dni} />
                  <Box mb={2} mt={2}>
                    <Divider />
                  </Box>

                  <Typography variant="subtitle1">Datos de contacto</Typography>
                  
                    <Dato name='email' title='Correo' value={tutor.email} mail/>
                    <Dato name='telefono' title='Celular' value={tutor.telephone} cell/>
                    <Box mb={2} mt={2}>
                      <Divider />
                    </Box>
                    
                  </Grid>
              </Grid>
              <Box mb={2} mt={2}>
                <Divider />
              </Box>
              <Container id='datosGeneralesBottom'>
                <Typography variant='subtitle1'>Becarias Asignadas</Typography>
                <Box mb={6} />
              </Container>
            </Container>
        </Container>
    
    </>
    )
}












