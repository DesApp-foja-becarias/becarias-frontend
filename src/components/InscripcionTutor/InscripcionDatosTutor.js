import {makeStyles} from '@mui/styles';
import {useState} from 'react';
import {Select, MenuItem, TextField,InputLabel,Paper,Chip, Input,Button,Grid,Typography,Container,Box  } from '@mui/material';

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
}));

export default function IngresoDatosBecaria() {
    const classes = useStyles();

    const [becaria, setBecaria] = useState({
        nombre: '',
        apellido: '',
        dni: '',
        correoElectronico: '',
        fechaNacimiento: '',
        telefono: '',
        direccion: '',
        localidad: '',
        provincia: '',
        carrera: [],
        fechaConvocatoria: '',
        fechaInscripcion: '',
    })
    
    const [error, setError] = useState({
        nombre: false,
        apellido: false,
        dni: false,
        correoElectronico: false,
        fechaNacimiento: false,
        telefono: false,
        direccion: false,
        localidad: false,
        provincia: false,
        carrera: false,
        fechaConvocatoria: false,
        fechaInscripcion: false,
    })
    
    const updateError = (e,value) => {
        setError({
            ...error,
            [e.target.name]: value,
        });
    }
    
    const updateBecaria =  (e) => {
        setBecaria({
            ...becaria,
            [e.target.name]: e.target.value,
        })
    }
    
    const validateNotEmpty = (e) => {
        if (becaria[e.target.name].length > 0) {
            updateError (e,false);
        }
        else {
            updateError (e,true);
        }
    }
    
    const validateDni = (e) => {
        if (e.target.value > 0 && e.target.value <100000000){
            updateError (e,false);
        }
        else{
            updateError (e,true);
        }
    }
    
    const validateEmail = (e) => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)){
            updateError (e,false);
        }
        else{
            updateError (e,true);
        }
    }
    
    const validatePhone = (e) => {
        if (e.target.value > 0 && e.target.value <100000000){
            updateError (e,false);
        }
        else{
            updateError (e,true);
        }
    }

    return(
        <Container sx={{display:'flex'}} className={classes.container} maxWidth="sm">
            <Typography variant='h3' color="primary" align="center">Inscripción Tutor</Typography>
            <Grid container mt={3} spacing={2} >
                <Grid item 
                    spacing xs={6}
                >
                    <InputLabel htmlFor="apellido">Apellido</InputLabel>
                    <TextField 
                        placeholder="Apellido"
                        variant="outlined" 
                        name="apellido"
                        margin="normal"
                        onBlur={validateNotEmpty} onChange={updateBecaria}
                        error={error.apellido}
                        helperText={error.apellido ? 'Campo obligatorio' : ''}
                        required
                        />
                </Grid>
                <Grid item 
                    spacing xs={6}
                >
                    <InputLabel htmlFor="nombre">Nombre</InputLabel>
                    <TextField
                        placeholder="Nombre"
                        variant="outlined"
                        name="nombre"
                        margin="normal"
                        onBlur={validateNotEmpty} onChange={updateBecaria}
                        error={error.nombre}
                        helperText={error.nombre ? 'Campo obligatorio' : ''}
                        required
                    />
                </Grid>
                <Grid item 
                    spacing xs={6}
                >
                    <InputLabel htmlFor="dni">DNI</InputLabel>
                    <TextField  
                        placeholder="DNI" 
                        variant="outlined"
                        name="dni"
                        type="number"
                        onBlur={validateDni}
                        margin="normal"
                        helperText={error.dni?'Dni Invalido':''}
                        error={error.dni}
                        required
                        />
                </Grid>
                <Grid item 
                    spacing xs={6}
                >
                    <InputLabel htmlFor='telefono'>Telefono</InputLabel>
                    <TextField className={classes.textField} 
                        placeholder="Telefono" 
                        variant="outlined" 
                        size="normal" 
                        margin="normal"
                        name="telefono"
                        onBlur={validatePhone} 
                        onChange={updateBecaria}
                        error={error.telefono}
                        helperText={error.telefono?'Telefono invalido':''}
                        required
                    />
                </Grid>
                <Grid item 
                    spacing xs={12}
                >
                    <InputLabel htmlFor="Correo electronico">Correo electrónico</InputLabel>
                    <TextField
                        placeholder="Correo electrónico"
                        variant="outlined"
                        size="normal"
                        margin="normal"
                        name="correoElectronico"
                        onBlur={validateEmail}
                        error={error.correoElectronico}
                        helperText={error.correoElectronico?'Correo electronico invalido':''}
                        required
                        sx={{width:"30em"}}
                    />
                </Grid>
            </Grid>   
            <Box mt={3} mb={3}>
                <Button  className={classes.boton}
                    variant="contained" 
                >
                    Cargar Tutor
                </Button>
            </Box>
        </Container>
    );
}