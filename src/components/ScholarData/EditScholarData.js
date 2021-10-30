import {useState, useEffect} from 'react';
import {makeStyles} from '@mui/styles';
import {Select, MenuItem, TextField,InputLabel,Paper,Chip, Button,Grid,Typography,Container,Box  } from '@mui/material';
import { carreras } from '../../constants/constants';
import useFieldValidator from '../../hooks/useValidator';
import {someEmptyField} from '../../utils/func';
import { useParams } from 'react-router';
import { getScholar } from '../../services/Scholar/servicesScholar';
import BackButton from '../../components/BackButton';


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
    const datos = 
    {
        name: 'Mariana Agustina',
        surname: 'Etchegaray',
        fotoURL: 'https://st3.depositphotos.com/1007566/13175/v/600/depositphotos_131750410-stock-illustration-woman-female-avatar-character.jpg',
        dni:'14512412',
        birth: '1994-12-12',
        telephone: '123456789',
        adress: 'Calle falsa 123',
        email: 'jsmandolo@gmail.com',
        country: 'Argentina',
        province: 'Buenos Aires',
        city: 'La Plata',
        actualState: 'Aprobada',
        career: ['Licenciatura en Informatica'],
        announcementDate: '2020-01-01',
        inscriptionDate: '2020-01-01',
    }

    const classes = useStyles()
    const [scholar, setScholar] = useState(datos)
    const {id} = useParams()


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
        birth: false,
        telephone: false,
        adress: false,
        city: false,
        province: false,
        country: false,
        career: false,
        announcementDate: false,
        inscriptionDate: false,
    })
    
    const updateScholarState =  (e) => {
        setScholar({
            ...scholar,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(areValidFields && !someEmptyField(scholar)){
            console.log(scholar)
        }
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
        getScholar(id).then(response => {
          setScholar(response.data)
        }
        )}, [id])
  

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
                    <InputLabel htmlFor="surname">Apellido</InputLabel>
                    <TextField 
                        placeholder="Apellido"
                        variant="outlined"
                        name="surname"
                        margin="normal"
                        value={scholar.surname}
                        onBlur={(e)=>validateNotEmpty(e)} 
                        onChange={updateScholarState}
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
                        value={scholar.birth}
                        margin="normal"
                        name="birth"
                        onBlur={(e) =>validateNotEmpty(e)} onChange={updateScholarState}
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
                    <InputLabel htmlFor='adress'>Dirección</InputLabel>
                    <TextField className={classes.textField} 
                        placeholder="Dirección" 
                        variant="outlined" 
                        size="normal"
                        margin="normal"
                        name="adress"
                        value={scholar.adress}
                        onBlur={(e) =>validateNotEmpty(e)} 
                        onChange={updateScholarState}
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
                    <InputLabel htmlFor='province'>Provincia</InputLabel>
                    <TextField className={classes.textField} 
                        placeholder="Provincia" 
                        variant="outlined" 
                        size="normal" 
                        margin="normal"
                        name="province"
                        value={scholar.province}
                        onBlur={(e) =>validateNotEmpty(e)} onChange={updateScholarState}
                        error={errors.province}
                        helperText={errors.province?'province invalida':''}
                        required
                        />
                </Grid>
                <Grid item 
                    xs={6}
                >
                    <InputLabel htmlFor='province'>País</InputLabel>
                    <TextField className={classes.textField} 
                        placeholder="País" 
                        variant="outlined" 
                        size="normal" 
                        margin="normal"
                        name="country"
                        value={scholar.country}
                        onBlur={(e) =>validateNotEmpty(e)} onChange={updateScholarState}
                        error={errors.country}
                        helperText={errors.country}
                        required
                        />
                </Grid>
                <Grid item 
                    xs={6} 
                >
                    <InputLabel htmlFor='career'>Carrera/s</InputLabel>
                    <Select
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
                    </Select>
                </Grid>
                
                <Grid item xs={6} >
                    
                    <InputLabel htmlFor='fechaDeConvocatoria'>Fecha de convocatoria</InputLabel>
                    <TextField 
                        type="date" 
                        variant='outlined'
                        name="announcementDate"
                        value={scholar.announcementDate}
                        onBlur={(e) =>validateNotEmpty(e)} 
                        onChange={updateScholarState}
                        error={errors.announcementDate}
                        helperText={errors.announcementDate?'Fecha de convocatoria invalida':''}
                        required
                    />
                    
                </Grid>
                <Grid item xs={6} >
                    <InputLabel htmlFor='fechaDeInscripción'>Fecha de Inscripciòn</InputLabel>                                        
                    <TextField 
                        type="date" 
                        variant='outlined'
                        pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
                        name="inscriptionDate"
                        value={scholar.inscriptionDate}
                        onBlur={(e) =>validateNotEmpty(e)} 
                        onChange={updateScholarState}
                        error={errors.inscriptionDate}
                        helperText={errors.inscriptionDate?'Fecha de inscripción invalida':''}
                        required
                        />
                </Grid>
                
            </Grid>   
            <Box mt={3} mb={3}/>
            {/*
            <Typography variant='h4' color="primary" align="center" mt={2} m={3}>Carga de Documentaciòn</Typography>
            <DocumentationFields updateDocumentation={updateDocumentation}/>
            */}
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