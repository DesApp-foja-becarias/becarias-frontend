import Dato from '../Datos/Dato'
import React, { useState , useEffect, useContext} from 'react'
import {Divider, IconButton, Box, Grid, Typography, Table, TableCell, TableBody, TableRow, TableHead, Tooltip, Container, Input } from '@mui/material';
import { makeStyles } from "@mui/styles";
import EditIcon from '@mui/icons-material/Edit';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { BecariaContext } from '../../context/DatosBecariaContext';
import DatoDate from '../Datos/DatoDate';
import EditScholarData from './EditScholarData';

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

            //NOTE: EL TUTOR PODRIA LINKEARME AL DATOSTUTOR DEL MISMO
            historial:[],
            actividad:[],
        }


    const {isEditable , setIsEditable, updateBecariaState, setBecariaInitialState} = useContext(BecariaContext);



    useEffect(() => {
      setBecariaInitialState(datos)
    }, [])

    const classes = useStyles();
    return (
    <div>
    {
      isEditable ?
      <EditScholarData datas={datos} setIsEditable={setIsEditable}/>
      :
      <Container maxWidth="lg" className={classes.rootContainer}>
          <Container className={classes.rootContainer} maxWidth="md">
            <Container id='nombreBecaria'>
              <Grid container>
                <Grid container item xs={8}>
                  <Box>
                    {isEditable? <Input name='name' onBlur={updateBecariaState}  defaultValue={datos.surname}/>:<Typography variant='h4'>{datos.surname}</Typography>}                     
                    {isEditable? <Input name='name' onBlur={updateBecariaState} defaultValue={datos.name}/>:<Typography variant='h5'>{datos.name}</Typography>}
                  </Box>
                </Grid>
                <Grid container item xs={4}>
                  {isEditable?
                  <Tooltip title='Terminar de Editar' followCursor >
                  <IconButton  color='success' onClick={() => setIsEditable(!isEditable)}>
                    <CheckCircleOutlineIcon fontSize='large'/>
                  </IconButton>
                  </Tooltip>
                  :
                  <Box>
                    <Tooltip title='Editar' followCursor>
                      <IconButton  color='warning' onClick={() => setIsEditable(!isEditable)}>
                        <EditIcon fontSize='large'  />
                      </IconButton>
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
                }
                </Grid>
              </Grid>
            </Container>
            <Box mb={2} mt={2}>
              <Divider />
            </Box> 
            <Container id='datosGenerales' >
              <Grid container id='datosGeneralesUp' >
                  <Grid item xs={12} sm={6} id='DatosPersonales' >
                    <img src={datos.fotoURL} className={classes.image} alt='fotoBecaria'/>
                    <Box mb={2} mt={2}/>
                    <Typography variant="subtitle1">Datos de personales</Typography>
                    <Dato name='dni' title='DNI' value={datos.dni} />
                    <DatoDate name='fechaNacimiento' date title='Fecha de nacimiento' value={datos.birth}/>
                    <Dato name='direccion' title='Domicilio' value={datos.adress}/>
                    {isEditable?
                    <>
                      <Dato name='ciudad' title='Localidad' value={datos.city}/>
                      <Dato name='provincia' title='Provincia' value={datos.province}/>
                      <Dato name='pais' title='Pais' value={datos.country}/></>
                      :
                      <Dato name='ciudad' title='Localidad' value={datos.city + ', ' + datos.province + ', ' + datos.country }/>
                    }
                  </Grid>
                  <Grid item xs={12} sm={6}  id='datosContCar' >
                  
                  <Typography variant="subtitle1">Datos de contacto</Typography>
                  
                    <Dato name='email' title='Correo' value={datos.email} mail/>
                    <Dato name='telefono' title='Celular' value={datos.telephone} cell/>
                    <Box mb={2} mt={2}>
                      <Divider />
                    </Box>
                    <Typography variant="subtitle1">Datos de carrera</Typography>
                    <Dato name='estadoActual' title='Estado Actual' value={datos.actualState} />
                    <Dato name='carrera'  title='Carrera' value={datos.career} career/>
                    <Dato name='tutor' title='Tutor' value={datos.tutor} />
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
      </Container>
      }
    </div>
    )
}












