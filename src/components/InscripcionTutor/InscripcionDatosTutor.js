import Container from '@mui/material/Container';
import {makeStyles} from '@mui/styles';
import Typography from '@mui/material/Typography';
import Grid  from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Input } from '@mui/material';
import { OutlinedInput } from '@mui/material';
import Box from '@mui/material/Box';

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
}));

export default function IngresoDatosBecaria() {
    const classes = useStyles();
    return(
        <Container sx={{display:'flex'}} className={classes.container} maxWidth="sm">
            <Typography variant='h3' color="primary" align="center">Inscripción Tutor</Typography>
            <Grid container mt={3} spacing={2} >
                <Grid item 
                    spacing xs={6}
                >
                    <TextField className={classes.textField} 
                        placeholder="Apellido"
                        focused variant="outlined" 
                        size="normal" 
                        margin="normal"
                        />
                </Grid>
                <Grid item 
                    spacing xs={6}
                >
                    <TextField className={classes.textField} 
                        placeholder="Nombre" 
                        focused variant="outlined" 
                        size="normal"
                        margin="normal"
                    />
                </Grid>
                <Grid item 
                    spacing xs={6}
                >
                    <TextField className={classes.textField} 
                        placeholder="DNI" 
                        focused variant="outlined" 
                        size="normal" 
                        margin="normal"
                        />
                </Grid>
                <Grid item 
                    spacing xs={6}
                >
                     <TextField className={classes.textField} 
                        placeholder="Telefono" 
                        focused variant="outlined" 
                        size="normal" 
                        margin="normal"
                    />
                </Grid>
                <Grid item 
                    spacing xs={6}
                >
                    <TextField className={classes.textField} 
                        placeholder="Correo" 
                        focused variant="outlined" 
                        size="normal" 
                        margin="normal"
                        />
                </Grid>
                <Grid item 
                    spacing xs={6}
                >
                    <TextField className={classes.textField} 
                        placeholder="Alumna asignada" 
                        focused variant="outlined" 
                        size="normal" 
                        margin="normal"
                        />
                </Grid>
                
            </Grid>   
            <Box mt={3} mb={3}>
                <Button  className={classes.boton}
                    variant="contained" 
                >
                    Cargar Tutor
                </Button>
            </Box>
        </Container>
    );
}