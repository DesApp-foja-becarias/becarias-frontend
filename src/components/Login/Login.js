import { Box, Container, makeStyles, TextField, Button } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import iconLogin from "../../assets/logo_gatito.jpg";

const useStyles = makeStyles((theme) => ({
    logo: {
        width: "400px",
        justifyContent:"center",
    },
    container: {
        textAlign:"center",
    },
    textField: {
        color: "green",
        width:"450px",
        marginTop:"30px",
    },
    button: {
        width:"410px",
        marginTop:"40px",
        fontSize:"130%",
        textAlign: "center",
        border: "1px solid green",
    },
 
}));

export default function Login() {
    const classes = useStyles();
    return (
        <Container className={classes.container}>

            <Container color="black">
                <img className={classes.logo} src={iconLogin} />
            </Container>
            <Container className={classes.textField}>
                <TextField label="Username" focused variant="outlined" fullWidth/>
            </Container>
            <Container className={classes.textField}>
                <TextField placeholder="Password" focused variant="outlined" fullWidth/>
            </Container>
            <Container>
                <Button className={classes.button} href="">INGRESAR</Button>
            </Container>
        </Container>

    );
}

//Algunas anotaciones
//focused en textField se usa para que no se modifique la casilla cuando se cliquea sobre ella
