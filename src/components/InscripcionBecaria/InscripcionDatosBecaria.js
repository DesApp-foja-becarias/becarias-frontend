import Container from '@mui/material/Container';
import {makeStyles} from '@mui/styles';
import Typography from '@mui/material/Typography';
import Grid  from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import ButtonInscripcion from './ButtonInscripcion';
import Button from '@mui/material/Button';

const useStyles = makeStyles((theme) => ({
    container:{
        width:"400px",
        padding:"60px",
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
    }
}));

export default function IngresoDatosBecaria() {
    const classes = useStyles();
    return(
        <Container className={classes.container} maxWidth="md">
            <Typography variant='h3' color= "primary"align="center">Incripciòn Becaria</Typography>
            <Grid container mt={3} spacing={2} >
                <Grid item xs={6} 
                    spacing xs={3}
                >
                    <TextField className={classes.textField} 
                        placeholder="Apellido"
                        focused variant="outlined" 
                        size="normal" 
                        margin="normal"
                        />
                    <TextField className={classes.textField} 
                        placeholder="Domicilio" 
                        focused variant="outlined" 
                        size="normal"
                        margin="normal"
                        />
                </Grid>
                <Grid item xs={6} spacing xs={3}>
                    <TextField className={classes.textField} 
                        placeholder="Nombre" 
                        focused variant="outlined" 
                        size="normal" 
                        margin="normal"
                        />
                     <TextField className={classes.textField} 
                        placeholder="Localidad" 
                        focused variant="outlined" 
                        size="normal" 
                        margin="normal"
                    />
                </Grid>
                <Grid item xs={6} spacing xs={2}>
                    <Typography variant='h6' 
                        color= "black"
                        align="center"
                    >
                        Fecha de nacimiento
                    </Typography>
                    
                    <TextField className={classes.textField} 
                        placeholder="Dìa" 
                        focused variant="outlined" 
                        size="small" 
                        margin="normal"
                        />
                    <TextField className={classes.textField} 
                        placeholder="Mes" 
                        focused variant="outlined" 
                        size="small"
                        margin="normal"
                    />
                    <TextField className={classes.textField} 
                        placeholder="Año" 
                        focused variant="outlined" 
                        size="small"
                        margin="normal"
                    />
                </Grid>
                <Grid item xs={6} spacing xs={3}>
                    <TextField className={classes.textField} 
                        placeholder="DNI" 
                        focused variant="outlined" 
                        size="small"
                        margin="normal"
                        />
                    <TextField className={classes.textField} 
                        placeholder="Telefono" 
                        focused variant="outlined" 
                        size="small"
                        margin="normal"
                        />
                </Grid> 
                <Grid item xs={6} spacing xs={3}>
                    <TextField className={classes.textField} 
                        placeholder="Carrera" 
                        focused variant="outlined" 
                        size="small" 
                        margin="normal"
                        />
                    <TextField className={classes.textField} 
                        placeholder="Correo" 
                        focused variant="outlined" 
                        size="small"
                        margin="normal"
                    />
                </Grid>
                <Grid item xs={6} spacing xs={2}>
                    <Typography variant='h6' 
                        color= "black"
                        align="center"
                    >
                        Fecha de convocatoria
                    </Typography>
                     <TextField className={classes.textField} 
                        placeholder="Dìa" 
                        focused variant="outlined" 
                        size="small" 
                        margin="normal"
                    />
                    <TextField className={classes.textField} 
                        placeholder="Mes" 
                        focused variant="outlined" 
                        size="small"
                        margin="normal"
                    />
                    <TextField className={classes.textField} 
                        placeholder="Año" 
                        focused variant="outlined" 
                        size="small"
                        margin="normal"
                    />
                </Grid>
                <Grid item xs={6} spacing xs={2}>
                    <Typography variant='h6' 
                        color= "black"
                        align="center"
                    >
                        Fecha de inscripciòn
                    </Typography>
                    <TextField className={classes.textField} 
                        placeholder="Dìa" 
                        focused variant="outlined" 
                        size="small" 
                        margin="normal"
                    />
                    <TextField className={classes.textField} 
                        placeholder="Mes" 
                        focused variant="outlined" 
                        size="small"
                        margin="normal"
                    />
                    <TextField className={classes.textField} 
                        placeholder="Año" 
                        focused variant="outlined" 
                        size="small"
                        margin="normal"
                    />
                </Grid>
                <Grid item xs={6} spacing xs={3}>
                    <TextField className={classes.textField} 
                        placeholder="Documentacion" 
                        focused variant="outlined" 
                        size="small" 
                        margin="normal"
                        />
                </Grid> 
            </Grid>
            <Typography variant='h4'align="center" mt={2} m={3}>Carga de Documentaciòn</Typography>
            <ButtonInscripcion/>
            <Button className={classes.boton}
                variant="contained" 
                fontSize= "200%"
                textAlign= "center"   
            >
                Cargar Becaria
            </Button>
        
        </Container>
    );
}