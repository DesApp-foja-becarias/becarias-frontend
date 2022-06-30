import {useState, useContext} from 'react';
import {makeStyles} from '@mui/styles';
import {TextField,InputLabel,Paper, Button,Grid,Typography,Container,Box} from '@mui/material';
import BackButton from '../../components/BackButton';
import useFieldValidator from '../../hooks/useValidator';
import useAxios from '../../hooks/useAxios';
import { LoadingScreenContext } from '../../context/LoadingScreenContext';
import LoadingScreen from '../../components/LoadingScreen';
import { createScholar } from '../../services/Scholar/servicesScholar';
import { useHistory } from 'react-router';

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
    
    export default function ScholarSign() {
    const history = useHistory()
    const classes = useStyles()
    const [scholar, setScholar] = useState({
        name: '',
        lastname: '',
        dni: '',
        email: '',
        birthday: '',
        telephone: '',
        address: '',
        cuit: '',
        city: '',
        announcement: '',
        actualState: 'pendiente'
    })


    const {
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
        birthday: false,
        telephone: false,
        address: false,
        cuit: false,
        city: false,
        announcement: false,
        
    })
    
    const updateBecaria =  (e) => {
        setScholar({
            ...scholar,
            [e.target.name]: e.target.value,
        })
    }
    const handleSubmit = (e) => {
    e.preventDefault();
        createScholarCall.useAxiosCall(scholar).then(res => {
            setTimeout(() => {
                history.push('/')
            }, 2000);
        })
    }

    const { loading } = useContext( LoadingScreenContext )
    const createScholarCall = useAxios({
        call: () => createScholar(scholar)
        , successMessage: 'Becaria Creada'
        , errorMessage: 'No se pudo crear la becaria'
        , loadingMessage: 'Creando Becaria...'
        , redirectErr: '/'
        , redirectSuccess: '/becaria'
    })

    if (loading) {
        return <LoadingScreen/>
    }  
    return(
        <Container maxWidth="md">
        <Paper variant="elevation" elevation={2} > 
        <BackButton path={`/`}/>
        <form onSubmit={e => handleSubmit(e)}>
        <Container sx={{display:'flex'}} className={classes.container} maxWidth='sm'>
            <Box mt={3}/>
                <Typography variant='h3' color='primary' align="center">Inscripción Becaria</Typography>
                <Grid container mt={3} spacing={4} >
                    <Grid item 
                        xs={6}
                    >
                        <InputLabel htmlFor="lastname">Apellido</InputLabel>
                        <TextField 
                            placeholder="Apellido"
                            variant="outlined"
                            name="lastname"
                            margin="normal"
                            onBlur={(e)=>validateNotEmpty(e)} onChange={updateBecaria}
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
                            onBlur={(e) =>validateNotEmpty(e)}  
                            onChange={updateBecaria}
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
                            onBlur={(e) => validateDni(e)}   
                            onChange={updateBecaria}
                            margin="normal"
                            helperText={errors.dni?'Dni Invalido':''}
                            error={errors.dni}
                            required
                            />
                    </Grid>
                    <Grid item 
                        xs={6}
                    >
                        <InputLabel htmlFor="cuit">CUIT</InputLabel>
                        <TextField  
                            placeholder="CUIT" 
                            variant="outlined"
                            name="cuit"
                            type="number"
                            onBlur={(e) => validateNotEmpty(e)}   
                            onChange={updateBecaria}
                            margin="normal"
                            helperText={errors.cuit?'CUIT Invalido':''}
                            error={errors.cuit}
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
                            name="email"
                            onBlur={(e)=>validateEmail(e)}
                            onChange={updateBecaria}
                            error={errors.email}
                            helperText={errors.email?'Correo electronico invalido':''}
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
                            name="birthday"
                            onBlur={(e) =>validateNotEmpty(e)} onChange={updateBecaria}
                            error={errors.birthday}
                            helperText={errors.birthday?'Fecha de nacimiento invalida':''}
                            required
                        />
                    </Grid>
                    <Grid item 
                        xs={6}
                    >
                        <InputLabel htmlFor='telephone'>Teléfono</InputLabel>
                        <TextField className={classes.textField} 
                            placeholder="Teléfono" 
                            variant="outlined" 
                            size="normal" 
                            margin="normal"
                            name="telephone"
                            onBlur={(e)=>validatePhone(e)} 
                            onChange={updateBecaria}
                            error={errors.telephone}
                            type="number"
                            helperText={errors.telephone?'telephone invalido':''}
                            required
                        />
                    </Grid>
                    <Grid 
                        item 
                        xs={6}
                    >
                        <InputLabel htmlFor='address'>Dirección</InputLabel>
                        <TextField className={classes.textField} 
                            placeholder="Dirección" 
                            variant="outlined" 
                            size="normal"
                            margin="normal"
                            name="address"
                            onBlur={(e) =>validateNotEmpty(e)} 
                            onChange={updateBecaria}
                            error={errors.address}
                            helperText={errors.address?'Dirección invalida':''}
                            required
                            />
                    </Grid>
                    <Grid item 
                        xs={6}
                    >
                        <InputLabel htmlFor='city'>Ciudad</InputLabel>
                        <TextField className={classes.textField} 
                            placeholder="Ciudad" 
                            variant="outlined" 
                            size="normal"
                            margin="normal"
                            name="city"
                            onBlur={(e) =>validateNotEmpty(e)} onChange={updateBecaria}
                            error={errors.city}
                            helperText={errors.city?'city invalida':''}
                            required
                        />
                    </Grid>
                    
                    <Grid item xs={6} >
                        <InputLabel htmlFor='announcement'>Fecha de convocatoria</InputLabel>
                        <TextField 
                            type="string" 
                            variant='outlined'
                            name="announcement"
                            onBlur={(e) =>validateNotEmpty(e)} onChange={updateBecaria}
                            error={errors.announcement}
                            helperText={errors.announcement?'Fecha de convocatoria invalida':''} 
                            margin="normal"
                            required
                        />
                        
                    </Grid>
                    
                </Grid>   
                <Box mt={6} mb={6}>
                <Button className={classes.boton}
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