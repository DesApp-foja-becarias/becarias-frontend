import {useState,useContext} from 'react';
import {makeStyles} from '@mui/styles';
import {Select, MenuItem, TextField,InputLabel,Paper,Chip, Button,Grid,Typography,Container,Box, Input  } from '@mui/material';
import { carreras } from '../../constants';
import BackButton from '../BackButton';
import useFieldValidator from '../../hooks/useValidator';
import {someEmptyField} from '../../utils/func';
import useAxios from '../../hooks/useAxios';
import { LoadingScreenContext } from '../../context/LoadingScreenContext';
import LoadingScreen from '../LoadingScreen';
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

export default function SignScholarData() {
    const history = useHistory()
    const classes = useStyles()
    const [scholar, setScholar] = useState({
        name: '',
        lastname: '',
        dni: '',
        email: '',
        birth: '',
        telephone: '',
        adress: '',
        cuit: '',
        city: '',
        carreer: [],
        announcement: '',
        actualState: 'pendiente'
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
        lastname: false,
        dni: false,
        email: false,
        birth: false,
        telephone: false,
        adress: false,
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
        if(areValidFields && !someEmptyField(scholar)){
            createScholarCall.useAxiosCall(scholar).then(res => {
                /* repensar esta parte */
                //res.id
                setTimeout(() => {
                    history.push('/')
                }, 2000);
            })
        }
    }

    const { loading, setLoading } = useContext( LoadingScreenContext )
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
                <Typography variant='h3' color='primary' align="center">Inscripciòn Becaria</Typography>
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
                            name="birth"
                            onBlur={(e) =>validateNotEmpty(e)} onChange={updateBecaria}
                            error={errors.birth}
                            helperText={errors.birth?'Fecha de nacimiento invalida':''}
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
                        <InputLabel htmlFor='adress'>Dirección</InputLabel>
                        <TextField className={classes.textField} 
                            placeholder="Dirección" 
                            variant="outlined" 
                            size="normal"
                            margin="normal"
                            name="adress"
                            onBlur={(e) =>validateNotEmpty(e)} 
                            onChange={updateBecaria}
                            error={errors.adress}
                            helperText={errors.adress?'adress invalida':''}
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
                    <Grid item 
                        xs={6} 
                    >
                        <InputLabel htmlFor='carreer'>Carrera/s</InputLabel>
                        <Select
                            multiple
                            name="carreer"
                            value={scholar.carreer}
                            renderValue={selected =>
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                {selected.map((value) => (
                                    <Chip key={value} label={value} />
                                ))}
                                </Box>}
                            onChange={updateBecaria}
                            placeholder="Carrera/s"
                            sx={{width: '13em' , marginTop:'1em'}}
                        >
                            
                            {carreras.map(car => (
                                <MenuItem key={car.id} value={car.name}>
                                    {car.name}
                                </MenuItem>
                            ))}
                        </Select>
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