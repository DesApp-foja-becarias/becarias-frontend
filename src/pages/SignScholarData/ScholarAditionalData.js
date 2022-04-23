import {useState, useEffect, useContext} from 'react';
import {makeStyles} from '@mui/styles';
import { TextField,InputLabel,Paper, Button,Grid,Typography,Container,Box, Select, MenuItem, FormControl  } from '@mui/material';
import useFieldValidator from '../../hooks/useValidator';
import { useParams } from 'react-router';
import { getTutors } from '../../services/Tutor/serviceTutor';
import { createAccount } from '../../services/Account/serviceAccount';
import BackButton from '../../components/BackButton';
import useAxios from '../../hooks/useAxios';
import { LoadingScreenContext } from '../../context/LoadingScreenContext';
import LoadingScreen from '../../components/LoadingScreen';

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
    const {id} = useParams()
    const {loading} = useContext(LoadingScreenContext)

    const classes = useStyles()
    const [tutors, setTutors] = useState([]);
    const [tutorSelected, setTutorSelected] = useState({});
    const [account, setAccount] = useState({
        bank: '',
        accountHolder: '',
        accountNumber: '',
        accountType: '',
        branchOffice: '',
        cbu: '',
        BecariaId: id
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
        cuit: false,
        email: false,
        birthday: false,
        telephone: false,
        address: false,
        city: false,
        announcement: false,   
    })

    const getTutorsAxios = useAxios({
        call:
        () => getTutors()
        , successMessage: 'Tutores encontrados'
        , errorMessage: 'No se encontraron tutores'
        , loadingMessage: 'Buscando tutores...'
        , redirectErr: '/'
    })

    const updateAccountState =  (e) => {
        setAccount({
            ...account,
            [e.target.name]: e.target.value,
        })
    }

    const createAccountCall = useAxios({
        call: () => createAccount(account)
        , successMessage: 'Cuenta Creada'
        , errorMessage: 'No se pudo crear la cuenta'
        , loadingMessage: 'Creando Cuenta...'
        , redirectErr: '/'
        , redirectSuccess: '/becaria'
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        //updateScholarAxios.useAxiosCall()
    }
    
    useEffect(() => {
        getTutorsAxios.useAxiosCall().then(res => {
            setTutors(res.data);
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
            <Typography variant='h3' color='primary' align="center">Datos Adicionales</Typography>
                <Grid container mt={3} spacing={4} >
                <Typography variant='subtitle1' align="left">Cuenta</Typography>
                    <Grid item xs={6}></Grid>
                    <Grid item 
                        xs={6}
                    >
                        <InputLabel htmlFor="lastname">Banco</InputLabel>
                        <TextField 
                            placeholder="Banco"
                            variant="outlined"
                            name="Bank"
                            margin="normal"
                            onBlur={(e)=>validateNotEmpty(e)} onChange={updateAccountState}
                            error={errors.lastname}
                            helperText={errors.lastname ? 'Campo obligatorio' : ''}
                            required
                            />
                    </Grid>
                    <Grid item
                        xs={6}
                    >
                        <InputLabel htmlFor="name">Nombre del dueño de la cuenta</InputLabel>
                        <TextField
                            placeholder="Nombre"
                            variant="outlined"
                            name="accountHolder"
                            margin="normal"
                            onBlur={(e) =>validateNotEmpty(e)}  
                            onChange={updateAccountState}
                            error={errors.name}
                            helperText={errors.name ? 'Campo obligatorio' : ''}
                            required
                        />
                    </Grid>
                    <Grid item 
                        xs={6}
                    >
                        <InputLabel htmlFor="dni">Numero de Cuenta</InputLabel>
                        <TextField  
                            placeholder="Numero de cuenta" 
                            variant="outlined"
                            name="accountNumber"
                            type="number"
                            onBlur={(e) => validateDni(e)}   
                            onChange={updateAccountState}
                            margin="normal"
                            helperText={errors.dni?'Dni Invalido':''}
                            error={errors.dni}
                            required
                            />
                    </Grid>
                    <Grid item 
                        xs={6}
                    >
                        <InputLabel htmlFor="cuit">Tipo</InputLabel>
                        <TextField  
                            placeholder="Tipo" 
                            variant="outlined"
                            name="accountType"
                            onBlur={(e) => validateNotEmpty(e)}   
                            onChange={updateAccountState}
                            margin="normal"
                            helperText={errors.cuit?'CUIT Invalido':''}
                            error={errors.cuit}
                            required
                            />
                    </Grid>
                    <Grid item xs={6} >
                        <InputLabel htmlFor="Correo electronico">Sucursal</InputLabel>
                        <TextField className={classes.textField}
                            placeholder="Sucursal"
                            variant="outlined"
                            size="normal"
                            margin="normal"
                            name="branchOffice"
                            onBlur={(e)=>validateEmail(e)}
                            onChange={updateAccountState}
                            error={errors.email}
                            helperText={errors.email?'Correo electronico invalido':''}
                            required
                        />
                    </Grid>
                    <Grid item xs={6} >
                        <InputLabel htmlFor="fechaDeNacimiento">CBU</InputLabel>
                        <TextField 
                            type='number'
                            variant='outlined'  
                            placeholder='CBU'  
                            margin="normal"
                            name="cbu"
                            onBlur={(e) =>validateNotEmpty(e)} onChange={updateAccountState}
                            error={errors.birthday}
                            helperText={errors.birthday?'Fecha de nacimiento invalida':''}
                            required
                        />
                    </Grid>
                </Grid>   
                <Grid container mt={3} spacing={4}>
                <Typography variant='subtitle1' align="left">Tutor Asignado</Typography>
                    <Grid item xs={6}></Grid>
                    <Grid item 
                        xs={6} 
                    >
                        <InputLabel htmlFor='tutor'>Seleccione un Tutor</InputLabel>
                        <FormControl required>
                            <Select
                                name="Tutor"
                                value={tutorSelected.name}
                                onChange={setTutorSelected}
                                placeholder="Tutor"
                                sx={{width: '13em' , marginTop:'1em'}}
                            >
                                {tutors.map(tutor => (
                                    <MenuItem key={tutor.id} value={tutor}>
                                        {tutor.lastname + " " + tutor.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>   
            <Box mt={3} mb={3}/>
            <Box mt={6} mb={6}>
            
                <Button className={classes.boton}
                    variant="contained" 
                    type="submit"
                >
                    APROBAR BECARIA
                </Button>
            </Box>

        </Container>
        </form>
        </Paper>
        </Container>
    );
}