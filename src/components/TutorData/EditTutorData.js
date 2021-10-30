import {useState, useEffect} from 'react';
import {makeStyles} from '@mui/styles';
import { TextField,InputLabel,Paper, Button,Grid,Typography,Container,Box  } from '@mui/material';
import BackButton from '../BackButton';
import useFieldValidator from '../../hooks/useValidator';
import {someEmptyField} from '../../utils/func';
import { getTutor } from '../../services/Tutor/serviceTutor';
import { useParams } from 'react-router';


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

export default function EditTutorData({datas}) {
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
      
      
    }
    const classes = useStyles()
    const {id} = useParams()

    const [tutor, setTutor] = useState(datos);
    
    useEffect(() => {
      getTutor(id).then(response => {
        setTutor(response.data)
      }
      )}, [id])

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
    
    const updateTutorState =  (e) => {
        setTutor({
            ...tutor,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(areValidFields && !someEmptyField(tutor)){
            console.log(tutor)
        }
    }

    return(
        <Container maxWidth="md">
        <Paper variant="elevation" elevation={2} > 
        <BackButton path={`/tutor/${id}`}/>
        <form onSubmit={e => handleSubmit(e)}>
        <Container sx={{display:'flex'}} className={classes.container} maxWidth='sm'>
            <Box mt={3}/>
            <Typography variant='h3' color='primary' align="center">Actualizar Tutor</Typography>
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
                        value={tutor.surname}
                        onBlur={(e)=>validateNotEmpty(e)} 
                        onChange={updateTutorState}
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
                        value={tutor.name}
                        onBlur={(e) =>validateNotEmpty(e)}  
                        onChange={updateTutorState}
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
                        value={tutor.dni}
                        onBlur={(e) => validateDni(e)}   
                        onChange={updateTutorState}
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
                        value={tutor.email}
                        name="email"
                        onBlur={(e)=>validateEmail(e)}
                        onChange={updateTutorState}
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
                        value={tutor.birth}
                        margin="normal"
                        name="birth"
                        onBlur={(e) =>validateNotEmpty(e)} onChange={updateTutorState}
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
                        value={tutor.telephone}
                        margin="normal"
                        name="telephone"
                        onBlur={(e)=>validatePhone(e)} 
                        onChange={updateTutorState}
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
                        value={tutor.adress}
                        onBlur={(e) =>validateNotEmpty(e)} 
                        onChange={updateTutorState}
                        error={errors.adress}
                        helperText={errors.adress?'adress invalida':''}
                        required
                        />
                </Grid>
            </Grid>   
            <Box mt={6} mb={6}>
            
                <Button className={classes.boton}
                    variant="contained" 
                    type="submit"
                >
                    Actualizar Tutor
                </Button>
            </Box>

        </Container>
        </form>
        </Paper>
        </Container>
    );
}