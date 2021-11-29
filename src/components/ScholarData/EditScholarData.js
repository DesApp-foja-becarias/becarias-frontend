import {useState, useEffect, useContext} from 'react';
import {makeStyles} from '@mui/styles';
import {Select, MenuItem, TextField,InputLabel,Paper,Chip, Button,Grid,Typography,Container,Box  } from '@mui/material';
import { carreras } from '../../constants/constants';
import useFieldValidator from '../../hooks/useValidator';
import {someEmptyField} from '../../utils/func';
import { useParams } from 'react-router';
import { getScholar, updateScholar } from '../../services/Scholar/servicesScholar';
import BackButton from '../../components/BackButton';
import useAxios from '../../hooks/useAxios';
import { LoadingScreenContext } from '../../context/LoadingScreenContext';
import LoadingScreen from '../LoadingScreen';

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

export default function EditScholarData() {
    const classes = useStyles()
    const [scholar, setScholar] = useState({})
    const {id} = useParams()
    const {loading} = useContext(LoadingScreenContext)

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
        cuit: false,
        email: false,
        birthday: false,
        telephone: false,
        address: false,
        city: false,
        announcement: false,   
    })
    const getScholarAxios = useAxios({
        call:  
        () => getScholar(id)
        , successMessage: 'Becaria encontrada'
        , errorMessage: 'No se encontro la becaria'
        , loadingMessage: 'Buscando becaria...'
        , redirectErr: '/'
    })

    const updateScholarAxios = useAxios({
        call:  
        () => updateScholar(id, scholar)
        , successMessage: 'Becaria Actualizada'
        , errorMessage: 'No se pudo actualizar la becaria'
        , loadingMessage: 'Actualizando becaria...'
        , redirectErr: '/'
        , redirectSucc: `/becaria/${id}`
    })

    const updateScholarState =  (e) => {
        setScholar({
            ...scholar,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        updateScholarAxios.useAxiosCall()
        
    }
    /*    
    // NOTE: CHEQUEAR PARA CUANDO PODAMOS AGREGAR DOCUMENTACION
    const updateDocumentation = (e) => {
        setScholar({
            ...scholar,
            documentacion: e
        })
    }
    */      
    useEffect(() => {
        getScholarAxios.useAxiosCall().then(res => {
            setScholar(res.data)
        })
    }, [])

    if (loading) {
        return <LoadingScreen/>
    }      
    return(
        <Container maxWidth="md">
        <Paper variant="elevation" elevation={2} > 
        <BackButton path={`/becaria/${id}`}/>
        <form onSubmit={e => handleSubmit(e)}>
        <Container sx={{display:'flex'}} className={classes.container} maxWidth='sm'>
            <Box mt={3}/>
            <Typography variant='h3' color='primary' align="center">Actualizar Becaria</Typography>
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
                        value={scholar.lastname}
                        onBlur={(e)=>validateNotEmpty(e)} 
                        onChange={updateScholarState}
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
                        value={scholar.name}
                        onBlur={(e) =>validateNotEmpty(e)}  
                        onChange={updateScholarState}
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
                        value={scholar.dni}
                        onBlur={(e) => validateDni(e)}   
                        onChange={updateScholarState}
                        margin="normal"
                        helperText={errors.dni?'Dni Invalido':''}
                        error={errors.dni}
                        required
                        />
                </Grid>
                <Grid item xs={6} >
                    <InputLabel htmlFor='Ponderación'>CUIT</InputLabel>                                        
                    <TextField 
                        type="string" 
                        variant='outlined'
                        name="cuit"
                        value={scholar.cuit}
                        onBlur={(e) =>validateNotEmpty(e)} 
                        onChange={updateScholarState}
                        error={errors.cuit}
                        helperText={errors.cuit?'cuit invalido':''}
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
                        value={scholar.email}
                        name="email"
                        onBlur={(e)=>validateEmail(e)}
                        onChange={updateScholarState}
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
                        value={scholar.birthday}
                        margin="normal"
                        name="birthday"
                        onBlur={(e) =>validateNotEmpty(e)} onChange={updateScholarState}
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
                        value={scholar.telephone}
                        margin="normal"
                        name="telephone"
                        onBlur={(e)=>validatePhone(e)} 
                        onChange={updateScholarState}
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
                        value={scholar.address}
                        onBlur={(e) =>validateNotEmpty(e)} 
                        onChange={updateScholarState}
                        error={errors.address}
                        helperText={errors.address?'Domicilio invalido':''}
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
                        value={scholar.city}
                        onBlur={(e) =>validateNotEmpty(e)} onChange={updateScholarState}
                        error={errors.city}
                        helperText={errors.city?'city invalida':''}
                        required
                    />
                </Grid>
                <Grid item 
                    xs={6} 
                >
                    <InputLabel htmlFor='career'>Carrera/s</InputLabel>
                    {/* <Select
                        multiple
                        name="career"
                        value={scholar.career}
                        renderValue={selected =>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {selected.map((value) => (
                                <Chip key={value} label={value} />
                            ))}
                            </Box>}
                        onChange={updateScholarState}
                        placeholder="Carrera/s"
                        sx={{width: '13em' , marginTop:'1em'}}
                    >
                        
                        {carreras.map(car => (
                            <MenuItem key={car.id} value={car.name}>
                                {car.name}
                            </MenuItem>
                        ))}
                    </Select> */}
                </Grid>
                
                <Grid item xs={6} >
                    
                    <InputLabel htmlFor='fechaDeConvocatoria'>Fecha de convocatoria</InputLabel>
                    <TextField 
                        type="string" 
                        variant='outlined'
                        name="announcement"
                        value={scholar.announcement}
                        onBlur={(e) =>validateNotEmpty(e)} 
                        onChange={updateScholarState}
                        error={errors.announcement}
                        helperText={errors.announcement?'Fecha de convocatoria invalida':''}
                        required
                    />
                    
                </Grid>
            </Grid>   
            <Box mt={3} mb={3}/>
            <Box mt={6} mb={6}>
            
                <Button className={classes.boton}
                    variant="contained" 
                    type="submit"
                >
                    Actualizar Becaria
                </Button>
            </Box>

        </Container>
        </form>
        </Paper>
        </Container>
    );
}