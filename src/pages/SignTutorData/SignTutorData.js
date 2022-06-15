import {makeStyles} from '@mui/styles';
import { useState , useEffect, useContext } from 'react';
import BackButton from '../../components/BackButton';
import {TextField,InputLabel,Paper,Button,Grid,Typography,Container,Box } from '@mui/material';
import useFieldValidator from '../../hooks/useValidator';
import {someEmptyField} from '../../utils/func';
import { createTutor } from '../../services/Tutor/serviceTutor';
import useAxios from '../../hooks/useAxios';
import LoadingScreen from '../../components/LoadingScreen';
import { LoadingScreenContext } from '../../context/LoadingScreenContext';
import { useHistory } from 'react-router';
import DropdownMultiple from '../../components/DropdownMultiple';

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
    const { loading } = useContext( LoadingScreenContext );
    const [tutor, setTutor] = useState({
        name: '',
        lastname: '',
        dni: '',
        email: '',
        telephone: '',
				carreers: [],
    });
    
    const {
        areValidFields,
        errors,
        validateNotEmpty,
        validateDni,
        validateEmail,
        validatePhone
    } = useFieldValidator({
        name: false,
        lastname: false,
        dni: false,
        email: false,
        telephone: false,
    });
    const history = useHistory();
    const createTutorCall = useAxios({
        call: () => createTutor(tutor)
        , successMessage: 'Tutor Creado'
        , errorMessage: 'No se pudo crear el tutor'
        , loadingMessage: 'Creando Tutor...'
        , redirectErr: '/'
        , redirectSuccess: '/'
    }
    )

    const updateTutor =  (e) => {
        setTutor({
            ...tutor,
            [e.target.name]: e.target.value,
        })
    }
		const updateCarrer = (e) => {
			setTutor({
				...tutor,
				carreers: e.target.value,
			})
		}

    const handleSubmit = (e) => {
        e.preventDefault();
        if(areValidFields && !someEmptyField(tutor)){
            createTutorCall.useAxiosCall().then(res => {
                setTimeout(() => {
                    history.push('/')
                }, 2000);
            })
    }
    }

    if (loading) {
        return <LoadingScreen/>
    }    
    return(
        <Container maxWidth="md">
        <Paper variant="elevation" elevation={2} >
        <BackButton path={`/`}/>
        <form  onSubmit={(e) =>handleSubmit(e)}>
            <Container sx={{display:'flex'}} className={classes.container} maxWidth="sm">
            <Box mt={3}/>
                <Typography variant='h3' color="primary" align="center">Inscripción Tutor</Typography>
                <Grid container mt={3} spacing={2} >
                    <Grid item 
                        xs={6}
                    >
                        <InputLabel htmlFor="lastname">Apellido</InputLabel>
                        <TextField 
                            placeholder="Apellido"
                            variant="outlined" 
                            name="lastname"
                            margin="normal"
                            onBlur={validateNotEmpty} 
                            onChange={updateTutor}
                            error={errors.lastname}
                            helperText={errors.lastname ? 'Campo obligatorio' : ''}
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
											{/*dropdown de carreras */}
											<DropdownMultiple update={updateCarrer} signedCarreers={tutor.carreers}/>
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