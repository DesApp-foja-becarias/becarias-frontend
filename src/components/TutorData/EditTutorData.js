import {useState} from 'react';
import {makeStyles} from '@mui/styles';
import { TextField,InputLabel,Paper, Button,Grid,Typography,Container,Box  } from '@mui/material';

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
    input:{
        
        color:"#fff",
        backgroundColor:"#000",}
}));

export default function EditScholarData({datas}) {
    const classes = useStyles()
    const [becaria, setBecaria] = useState(datas)


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
    
    const updateBecaria =  (e) => {
        setBecaria({
            ...becaria,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(areValidFields && !someEmptyField(becaria)){
            console.log(becaria)
        }
    }

    return(
        <Container maxWidth="md">
        <Paper variant="elevation" elevation={2} > 
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
                        value={becaria.surname}
                        onBlur={(e)=>validateNotEmpty(e)} 
                        onChange={updateBecaria}
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
                        value={becaria.name}
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
                        value={becaria.dni}
                        onBlur={(e) => validateDni(e)}   
                        onChange={updateBecaria}
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
                        value={becaria.email}
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
                        value={becaria.birth}
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
                        value={becaria.telephone}
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
                        value={becaria.adress}
                        onBlur={(e) =>validateNotEmpty(e)} 
                        onChange={updateBecaria}
                        error={errors.adress}
                        helperText={errors.adress?'adress invalida':''}
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
                    Actualizar Tutor
                </Button>
            </Box>

        </Container>
        </form>
        </Paper>
        </Container>
    );
}