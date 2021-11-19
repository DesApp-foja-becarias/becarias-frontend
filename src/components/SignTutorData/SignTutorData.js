import {makeStyles} from '@mui/styles';
import { useState , useEffect } from 'react';
import BackButton from '../BackButton';
import {TextField,InputLabel,Paper,Button,Grid,Typography,Container,Box, Snackbar, Alert  } from '@mui/material';
import useFieldValidator from '../../hooks/useValidator';
import {someEmptyField} from '../../utils/func';
import { createTutor } from '../../services/Tutor/serviceTutor';
import { useHistory } from 'react-router';
import useSnackbar from '../../hooks/useSnackbar';

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
    const { openSnackbar } = useSnackbar();
    const history = useHistory();
    const [tutor, setTutor] = useState({
        name: '',
        surname: '',
        dni: '',
        email: '',
        telephone: '',
    })
    
    const {
        areValidFields,
        errors,
        validateNotEmpty,
        validateDni,
        validateEmail,
        validatePhone
    } = useFieldValidator({
        name: false,
        surname: false,
        dni: false,
        email: false,
        telephone: false,
    });

    const updateTutor =  (e) => {
        setTutor({
            ...tutor,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(areValidFields && !someEmptyField(tutor)){
            createTutor(tutor)
            .then(response => {
                    openSnackbar('Tutor creado correctamente', 'success');
                    setTimeout(() => {
                        history.push('/');
                    }, 2000);
            }
            ).catch(error => {
                openSnackbar('Error al crear el tutor', 'error');
            }
            )
        }
    }

    useEffect(() => {
    }, [errors])

    
    return(
        <Container maxWidth="md">
        <Paper variant="elevation" elevation={2} >
        <BackButton path={`/`}/>
        <form  onSubmit={handleSubmit}>
            <Container sx={{display:'flex'}} className={classes.container} maxWidth="sm">
            <Box mt={3}/>
                <Typography variant='h3' color="primary" align="center">Inscripción Tutor</Typography>
                <Grid container mt={3} spacing={2} >
                    <Grid item 
                        xs={6}
                    >
                        <InputLabel htmlFor="surname">Apellido</InputLabel>
                        <TextField 
                            placeholder="Apellido"
                            variant="outlined" 
                            name="surname"
                            margin="normal"
                            onBlur={validateNotEmpty} 
                            onChange={updateTutor}
                            error={errors.surname}
                            helperText={errors.surname ? 'Campo obligatorio' : ''}
                            required
                            />
                    </Grid>
                    <Grid item 
                        xs={6}
                    >
                        <InputLabel htmlFor="name">Nombre</InputLabel>
                        <TextField
                            placeholder="Nombre"
                            variant="outlined"
                            name="name"
                            margin="normal"
                            onBlur={validateNotEmpty} 
                            onChange={updateTutor}
                            error={errors.name}
                            helperText={errors.name ? 'Campo obligatorio' : ''}
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
                        <InputLabel htmlFor='telephone'>Telefono</InputLabel>
                        <TextField className={classes.textField} 
                            placeholder="Telefono" 
                            variant="outlined" 
                            size="normal" 
                            margin="normal"
                            name="telephone"
                            onBlur={validatePhone} 
                            onChange={updateTutor}
                            error={errors.telephone}
                            helperText={errors.telephone?'Telefono invalido':''}
                            required
                        />
                    </Grid>
                    <Grid item 
                        xs={12}
                    >
                        <InputLabel htmlFor="email">Correo electrónico</InputLabel>
                        <TextField
                            placeholder="Correo electrónico"
                            variant="outlined"
                            size="normal"
                            margin="normal"
                            name="email"
                            onBlur={validateEmail}
                            onChange={updateTutor}
                            error={errors.email}
                            helperText={errors.email?'Correo electronico invalido':''}
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