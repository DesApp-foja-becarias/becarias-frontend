import {useState, useEffect} from 'react';
import {makeStyles} from '@mui/styles';
import { Alert, Snackbar, TextField,InputLabel,Paper, Button,Grid,Typography,Container,Box  } from '@mui/material';
import BackButton from '../BackButton';
import useFieldValidator from '../../hooks/useValidator';
import { getTutor } from '../../services/Tutor/serviceTutor';
import { useParams,useHistory } from 'react-router';
import { updateTutor } from '../../services/Tutor/serviceTutor';
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
    input:{
        
        color:"#fff",
        backgroundColor:"#000",}
}));

export default function EditTutorData() {
   
    const classes = useStyles()
    const {id} = useParams()
    const history = useHistory()
    const { openSnackbar } = useSnackbar()
    const [tutor, setTutor] = useState({});
    
    useEffect(() => {
      getTutor(id).then(response => {
        setTutor(response.data.data)
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
        telephone: false,
        adress: false,
    })
    
    const updateTutorState =  (e) => {
        setTutor({
            ...tutor,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
      
            if(areValidFields ){
                await updateTutor(tutor).then(response => {
                
                    openSnackbar('Tutor actualizado correctamente')
                    setTimeout(() => {
                        history.push('/tutores')
                    }, 2000);
                }).catch(error => {
                    console.log(error)
                    openSnackbar('Error al actualizar el tutor', 'error')
                }
                )
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
    )

}