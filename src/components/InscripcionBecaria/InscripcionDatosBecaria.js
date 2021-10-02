import {makeStyles} from '@mui/styles';
import TextField from '@mui/material/TextField';
import ButtonInscripcion from './ButtonInscripcion';
import { OutlinedInput,InputLabel,Paper,Divider, Input,Button,Grid,Typography,Container,Box  } from '@mui/material';


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

export default function IngresoDatosBecaria() {
    const classes = useStyles();
    return(
        <Container maxWidth="md">
        <Paper variant="elevation" elevation={2} > 

        <Container sx={{display:'flex'}} className={classes.container} maxWidth='sm'>
        <Box mt={3}/>

            <Typography variant='h3' color="primary" align="center">Inscripciòn Becaria</Typography>
            <Grid container mt={3} spacing={4} >
                <Grid item 
                    spacing xs={6}
                >
                    <InputLabel htmlFor="apellido">Apellido</InputLabel>
                    <OutlinedInput className={classes.textField} 
                        placeholder="Apellido"
                        focused variant="outlined" 
                        
                        size="normal" 
                        margin="normal"
                        />
                </Grid>
                <Grid item 
                    spacing xs={6}
                >
                    <InputLabel htmlFor="nombre">Nombre</InputLabel>
                    <OutlinedInput className={classes.textField} 
                        placeholder="Nombre" 
                        focused variant="outlined" 
                        size="normal"
                        margin="normal"
                    />
                </Grid>
                <Grid item 
                    spacing xs={6}
                >
                    <InputLabel htmlFor="dni">DNI</InputLabel>
                    <OutlinedInput className={classes.textField} 
                        placeholder="DNI" 
                        focused variant="outlined" 
                        size="normal" 
                        margin="normal"
                        />
                </Grid>
                <Grid item xs={6} >
                    <InputLabel htmlFor="Correo electronico">Correo electronico</InputLabel>
                    <OutlinedInput className={classes.textField}
                        placeholder="Correo electronico"
                        focused variant="outlined"
                        size="normal"
                        margin="normal"
                    />
                </Grid>
                <Grid item xs={6} >
                    <InputLabel htmlFor="fechaDeInscripción">Fecha de Nacimiento</InputLabel>
                    <OutlinedInput type="date" variant='outlined'  placeholder='Fecha de nacimiento' />
                </Grid>
                <Grid item 
                    spacing xs={6}
                >
                    <InputLabel htmlFor='telefono'>Telefono</InputLabel>
                    <OutlinedInput className={classes.textField} 
                        placeholder="Telefono" 
                        focused variant="outlined" 
                        size="normal" 
                        margin="normal"
                    />
                </Grid>
                <Grid item 
                    spacing xs={6}
                >
                    <InputLabel htmlFor='direccion'>Direccion</InputLabel>
                    <OutlinedInput className={classes.textField} 
                        placeholder="Domicilio" 
                        focused variant="outlined" 
                        size="normal"
                        margin="normal"
                        />
                </Grid>
                <Grid item 
                    spacing xs={6}
                >
                    <InputLabel htmlFor='localidad'>Localidad</InputLabel>
                    <OutlinedInput className={classes.textField} 
                        placeholder="Localidad" 
                        focused variant="outlined" 
                        size="normal"
                        margin="normal"
                    />
                </Grid>
                <Grid item 
                    spacing xs={6}
                >
                    <InputLabel htmlFor='provincia'>Provincia</InputLabel>
                    <OutlinedInput className={classes.textField} 
                        placeholder="Provincia" 
                        focused variant="outlined" 
                        size="normal" 
                        margin="normal"
                        />
                </Grid>
                <Grid item 
                    spacing xs={6} 
                >
                    <InputLabel htmlFor='Carrera'>Carrera</InputLabel>
                    <OutlinedInput className={classes.textField} 
                        placeholder="Carrera" 
                        focused variant="outlined" 
                        size="normal"
                        margin="normal"
                    />
                </Grid>
                
                <Grid item xs={6} >
                    
                    <InputLabel htmlFor='fechaDeConvocatoria'>Fecha de convocatoria</InputLabel>
                    <OutlinedInput type="date" variant='outlined'/>
                    
                </Grid>
                <Grid item xs={6} >
                    <InputLabel htmlFor='fechaDeInscripción'>Fecha de Inscripciòn</InputLabel>                                        
                    <OutlinedInput type="date" variant='outlined'/>
                </Grid>
                
            </Grid>   
            <Box mt={3} mb={3}/>
            <Typography variant='h4' color="primary" align="center" mt={2} m={3}>Carga de Documentaciòn</Typography>
            <ButtonInscripcion/>
            
            <Box mt={6} mb={6}>
            
                <Button  className={classes.boton}
                    variant="contained" 
                >
                    Cargar Becaria
                </Button>
            </Box>

        </Container>
        </Paper>
        </Container>
    );
}