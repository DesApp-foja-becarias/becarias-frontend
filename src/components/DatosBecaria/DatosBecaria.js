import { Container } from '@material-ui/core'
import Dato from './Dato'
import React from 'react'
import Typography from '@mui/material/Typography';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    image: {
        height: '200ps',
        width: '200px',
        border: 'solid black 3px',
    },

    }));

export default function DatosBecaria() {
    const datos = 
        {
            nombre: 'Elizabeth',
            apellido: 'De la Iglesia',
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
            tutor: '[Juan Perez]',
            //NOTE: EL TUTOR PODRIA LINKEARME AL DATOSTUTOR DEL MISMO
            historial:[],
            actividad:[],


        }

    const classes = useStyles();

    return (
        <Container maxWidth="md">
            <Container id='nombreBecaria'> 
              <Typography variant='h5'>{datos.nombre}</Typography>
              <Typography variant='h5'>{datos.apellido}</Typography>
            </Container>
            <Container id='datosGenerales' >
                <Container id='datosGeneralesUp' disableGutters>
                    <Container id='DatosPersonales' disableGutters>
                        <img src={datos.fotoURL} className={classes.image} alt='fotoBecaria'/>
                        <Dato title='DNI' value={datos.dni} mail=''/>
                        <Dato title='Nombre' value={datos.nombre}/>
                        <Dato title='Apellido' value={datos.apellido}/>
                        

                    </Container>
                    <Container id='datosContCar' disableGutters>
                     
                    </Container>
                </Container>
                <Container id='datosGeneralesBottom'>

                </Container>
            </Container>
        </Container>
    )
}












