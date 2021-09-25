import { Container,  TextField, Button, Box } from '@mui/material';
import {makeStyles} from '@mui/styles';
import LogoUnahur from "../../assets/unahur-imagotipo.svg";


const useStyles = makeStyles((theme) => ({
    logo: {
        width: "200px",
        justifyContent: "center",
    },
    container: {
        display: "flex",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
    },
    textField: {
        color: "green",
        width: "320px",
        marginTop: "30px",
    },
    button: {
        width: "320px",
        height: "60px",
        marginTop: "40px",
        fontSize: "130%",
        textAlign: "center",
        border: "1px solid green",
    },

}));

export default function Login() {
    const classes = useStyles();
    return (
        <Container maxWidth='sm'>
            <Container  className={classes.container}>
                <Container color="black">
                    <img className={classes.logo} alt='logo' src={LogoUnahur} />
                </Container>
                    <Box mt={6}>
                        <TextField className={classes.textField} label="Usuario" variant="outlined"  />
                    </Box>
                    <Box mt={2} >
                        <TextField className={classes.textField} label="Contraseña" variant="outlined"  />
                    </Box>
                    <Box mt={3} mb={2}>
                        <Button variant='outlined' className={classes.button} href="">INGRESAR</Button>
                    </Box>
            </Container>
        </Container>
    );
}

//Algunas anotaciones
//focused en textField se usa para que no se modifique la casilla cuando se cliquea sobre ella
