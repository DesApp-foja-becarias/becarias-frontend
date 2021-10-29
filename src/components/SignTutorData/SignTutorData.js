import {makeStyles} from '@mui/styles';
import { useState , useEffect } from 'react';
import {TextField,InputLabel,Paper,Button,Grid,Typography,Container,Box  } from '@mui/material';
import useFieldValidator from '../../hooks/useValidator';
import {someEmptyField} from '../../utils/func';

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

export default function SignTutorData() {
    const classes = useStyles();

    const [tutor, setTutor] = useState({
        nombre: '',
        apellido: '',
        dni: '',
        correoElectronico: '',
        telefono: '',
    })
    
    const {
        areValidFields,
        errors,
        validateNotEmpty,
        validateDni,
        validateEmail,
        validatePhone
    } = useFieldValidator({
        nombre: false,
        apellido: false,
        dni: false,
        correoElectronico: false,
        telefono: false,
    });

    const updateTutor =  (e) => {
        setTutor({
            ...tutor,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if( !someEmptyField(tutor)){
            console.log(tutor)
        }
        else{
            console.log(someEmptyField(tutor))
            console.log(errors)
        }
    }

    useEffect(() => {
    }, [errors])

    
    return(
        <Container maxWidth="md">
        <Paper variant="elevation" elevation={2} >
        <form  onSubmit={handleSubmit}>
            <Container sx={{display:'flex'}} className={classes.container} maxWidth="sm">
            <Box mt={3}/>
                <Typography variant='h3' color="primary" align="center">Inscripción Tutor</Typography>
                <Grid container mt={3} spacing={2} >
                    <Grid item 
                        xs={6}
                    >
                        <InputLabel htmlFor="apellido">Apellido</InputLabel>
                        <TextField 
                            placeholder="Apellido"
                            variant="outlined" 
                            name="apellido"
                            margin="normal"
                            onBlur={validateNotEmpty} 
                            onChange={updateTutor}
                            error={errors.apellido}
                            helperText={errors.apellido ? 'Campo obligatorio' : ''}
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
                            onBlur={validateNotEmpty} 
                            onChange={updateTutor}
                            error={errors.nombre}
                            helperText={errors.nombre ? 'Campo obligatorio' : ''}
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
                            onChange={updateTutor}
                            margin="normal"
                            helperText={errors.dni?'DNI Invalido':''}
                            error={errors.dni}
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
                            onChange={updateTutor}
                            error={errors.telefono}
                            helperText={errors.telefono?'Telefono invalido':''}
                            required
                        />
                    </Grid>
                    <Grid item 
                        xs={12}
                    >
                        <InputLabel htmlFor="Correo electronico">Correo electrónico</InputLabel>
                        <TextField
                            placeholder="Correo electrónico"
                            variant="outlined"
                            size="normal"
                            margin="normal"
                            name="correoElectronico"
                            onBlur={validateEmail}
                            onChange={updateTutor}
                            error={errors.correoElectronico}
                            helperText={errors.correoElectronico?'Correo electronico invalido':''}
                            required
                            sx={{width:"30em"}}
                        />
                    </Grid>
                </Grid>   
                <Box mt={3} mb={3}>
                    <Button  className={classes.boton}
                        variant="contained" 
                        type="submit"
                    >
                        Cargar Tutor
                    </Button>
                </Box>
            </Container>
        </form>
        </Paper>
        </Container>
    );
}