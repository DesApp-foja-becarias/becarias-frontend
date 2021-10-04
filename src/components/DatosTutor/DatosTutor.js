import Dato from '../DatosBecaria/Dato';
import React, { useState , useEffect, useContext} from 'react'
import {Divider, IconButton, Box, Grid, Typography, Table, TableCell, TableBody, TableRow, TableHead, Tooltip, Container, Input } from '@mui/material';
import { makeStyles } from "@mui/styles";
import EditIcon from '@mui/icons-material/Edit';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { BecariaContext } from '../../context/DatosBecariaContext';

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

export default function DatosBecaria() {
    const datos = 
        {
            nombre: 'Mariana Agustina',
            apellido: 'Etchegaray',
            fotoURL: 'https://st3.depositphotos.com/1007566/13175/v/600/depositphotos_131750410-stock-illustration-woman-female-avatar-character.jpg',
            dni:'14512412',
            fechaNacimiento: '12/12/12',
            telefono: '123456789',
            direccion: 'Calle falsa 123',
            email: 'jsmandolo@gmail.com',
            pais: 'Argentina',
            provincia: 'Buenos Aires',
            ciudad: 'La Plata',
            estadoActual: 'Aprobada',
            carrera: 'Ingenieria en Informatica',
            tutor: 'Juan Perez',

            //NOTE: EL TUTOR PODRIA LINKEARME AL DATOSTUTOR DEL MISMO
            historial:[],
            actividad:[],
        }
    
    const {isEditable , setIsEditable, datosBecariaEdit, updateBecariaState, setBecariaInitialState} = useContext(BecariaContext);
    
    useEffect(() => {
      setBecariaInitialState(datos)
    }, [])

    const classes = useStyles();
    return (
        <Container className={classes.rootContainer} maxWidth="md">
            <Container  id='nombreBecaria'>
              <Grid container>
                <Grid container item xs={11}>
                  <Box>
                    {isEditable? <Input name='apellido' onBlur={updateBecariaState}  defaultValue={datos.apellido}/>:<Typography variant='h4'>{datos.apellido}</Typography>}                     
                    {isEditable? <Input name='apellido' onBlur={updateBecariaState} defaultValue={datos.nombre}/>:<Typography variant='h5'>{datos.nombre}</Typography>}
                  </Box>
                </Grid>
                <Grid container item xs={1}>
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
                  </Box>
                }
                </Grid>
              </Grid>
            </Container>
            <Box mb={2} mt={2}>
              <Divider />
            </Box> 
            <Container id='datosGenerales' >
              <Grid container id='datosGeneralesUp' disableGutters>
                  <Grid item xs={12} sm={5} id='DatosPersonales' disableGutters>
                    <img src={datos.fotoURL} className={classes.image} alt='fotoBecaria'/>
                  </Grid>
                  
                  <Grid item xs={12} sm={6}  id='datosContCar' disableGutters>
                  <Typography variant="subtitle1">Datos de personales</Typography>
                    <Dato name='dni' title='DNI' value={datos.dni} />
                  <Box mb={2} mt={2}>
                    <Divider />
                  </Box>

                  <Typography variant="subtitle1">Datos de contacto</Typography>
                  
                    <Dato name='email' title='Correo' value={datos.email} mail/>
                    <Dato name='telefono' title='Celular' value={datos.telefono} cell/>
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
                <Box mb={6} >
                <Table bgcolor='#f0f0f0'>
                  <TableHead>
                    <TableRow>
                      <TableCell><Typography fontWeight='bold' variant='body1'>Apellido</Typography></TableCell>
                      <TableCell><Typography fontWeight='bold' variant='body1'>Nombre</Typography></TableCell>
                      <TableCell><Typography fontWeight='bold' variant='body1'>D.N.I</Typography></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>{datos.apellido}</TableCell>
                      <TableCell>{datos.nombre}</TableCell>
                      <TableCell>{datos.dni}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>{datos.apellido}</TableCell>
                      <TableCell>{datos.nombre}</TableCell>
                      <TableCell>{datos.dni}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>{datos.apellido}</TableCell>
                      <TableCell>{datos.nombre}</TableCell>
                      <TableCell>{datos.dni}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                </Box>
                <Box mb={2}>
                  <Divider />
                </Box>
              </Container>
            </Container>
        </Container>
    )
}












