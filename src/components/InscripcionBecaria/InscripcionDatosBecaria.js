import {useState} from 'react';
import {makeStyles} from '@mui/styles';
import ButtonInscripcion from './ButtonInscripcion';
import {Select, MenuItem, TextField,InputLabel,Paper,Chip, Input,Button,Grid,Typography,Container,Box  } from '@mui/material';
import { carreras } from '../../constants';

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
        <Container maxWidth="md">
        <Paper variant="elevation" elevation={2} > 
        <form action="">
        <Container sx={{display:'flex'}} className={classes.container} maxWidth='sm'>
            <Box mt={3}/>
        
            <Typography variant='h3' color='primary' align="center">Inscripciòn Becaria</Typography>
            <Grid container mt={3} spacing={4} >
                <Grid item 
                    xs={6}
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
                    xs={6}
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
                    xs={6}
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
                <Grid item xs={6} >
                    <InputLabel htmlFor="Correo electronico">Correo electrónico</InputLabel>
                    <TextField className={classes.textField}
                        placeholder="Correo electrónico"
                        variant="outlined"
                        size="normal"
                        margin="normal"
                        name="correoElectronico"
                        onBlur={validateEmail}
                        error={error.correoElectronico}
                        helperText={error.correoElectronico?'Correo electronico invalido':''}
                        required
                    />
                </Grid>
                <Grid item xs={6} >
                    <InputLabel htmlFor="fechaDeNacimiento">Fecha de Nacimiento</InputLabel>
                    <TextField 
                        type="date" 
                        variant='outlined'  
                        placeholder='Fecha de nacimiento'  
                        margin="normal"
                        name="fechaNacimiento"
                        onBlur={validateNotEmpty} onChange={updateBecaria}
                        error={error.fechaNacimiento}
                        helperText={error.fechaNacimiento?'Fecha de nacimiento invalida':''}
                        required
                    />
                </Grid>
                <Grid item 
                    xs={6}
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
                <Grid 
                    item 
                    xs={6}
                >
                    <InputLabel htmlFor='direccion'>Dirección</InputLabel>
                    <TextField className={classes.textField} 
                        placeholder="Dirección" 
                        variant="outlined" 
                        size="normal"
                        margin="normal"
                        name="direccion"
                        onBlur={validateNotEmpty} 
                        onChange={updateBecaria}
                        error={error.direccion}
                        helperText={error.direccion?'Direccion invalida':''}
                        required
                        />
                </Grid>
                <Grid item 
                    xs={6}
                >
                    <InputLabel htmlFor='localidad'>Localidad</InputLabel>
                    <TextField className={classes.textField} 
                        placeholder="Localidad" 
                        variant="outlined" 
                        size="normal"
                        margin="normal"
                        name="localidad"
                        onBlur={validateNotEmpty} onChange={updateBecaria}
                        error={error.localidad}
                        helperText={error.localidad?'Localidad invalida':''}
                        required
                    />
                </Grid>
                <Grid item 
                    xs={6}
                >
                    <InputLabel htmlFor='provincia'>Provincia</InputLabel>
                    <TextField className={classes.textField} 
                        placeholder="Provincia" 
                        variant="outlined" 
                        size="normal" 
                        margin="normal"
                        name="provincia"
                        onBlur={validateNotEmpty} onChange={updateBecaria}
                        error={error.provincia}
                        helperText={error.provincia?'Provincia invalida':''}
                        required
                        />
                </Grid>
                <Grid item 
                    xs={6} 
                >
                    <InputLabel htmlFor='Carrera'>Carrera</InputLabel>
                    <Select
                        multiple
                        name="carrera"
                        value={becaria.carrera}
                        renderValue={selected =>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {selected.map((value) => (
                                <Chip key={value} label={value} />
                            ))}
                            </Box>}
                        onChange={updateBecaria}
                        placeholder="Carrera"
                        sx={{width: '13em' , marginTop:'1em'}}
                    >
                        
                        {carreras.map(carrera => (
                            <MenuItem key={carrera.id} value={carrera.nombre}>
                                {carrera.nombre}
                            </MenuItem>
                        ))}
                    </Select>
                </Grid>
                
                <Grid item xs={6} >
                    
                    <InputLabel htmlFor='fechaDeConvocatoria'>Fecha de convocatoria</InputLabel>
                    <TextField 
                        type="date" 
                        variant='outlined'
                        name="fechaConvocatoria"
                        onBlur={validateNotEmpty} onChange={updateBecaria}
                        error={error.fechaConvocatoria}
                        helperText={error.fechaConvocatoria?'Fecha de convocatoria invalida':''}
                        required
                    />
                    
                </Grid>
                <Grid item xs={6} >
                    <InputLabel htmlFor='fechaDeInscripción'>Fecha de Inscripciòn</InputLabel>                                        
                    <TextField 
                        type="date" 
                        variant='outlined'
                        name="fechaInscripcion"
                        onBlur={validateNotEmpty} onChange={updateBecaria}
                        error={error.fechaInscripcion}
                        helperText={error.fechaInscripcion?'Fecha de inscripción invalida':''}
                        required
                        />
                </Grid>
                
            </Grid>   
            <Box mt={3} mb={3}/>
            <Typography variant='h4' color="primary" align="center" mt={2} m={3}>Carga de Documentaciòn</Typography>
            <ButtonInscripcion/>
            
            <Box mt={6} mb={6}>
            
                <Button  className={classes.boton}
                    variant="contained" 
                    type="submit"
                >
                    Cargar Becaria
                </Button>
            </Box>

        </Container>
        </form>
        </Paper>
        </Container>
    );
}