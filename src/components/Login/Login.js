import React,{useState} from 'react';
import { Container,  TextField, Button, Box } from '@mui/material';
import {makeStyles} from '@mui/styles';
import LogoUnahur from "../../assets/unahur-imagotipo.svg";
import useAuth from '../../hooks/useAuth';


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
    const [user, setUser] = useState({});
    const { login } = useAuth();
    const classes = useStyles();
    return (
        <Container maxWidth='sm'>
            <Container  className={classes.container}>
                <Container color="black">
                    <img className={classes.logo} alt='logo' src={LogoUnahur} />
                </Container>
                <form onSubmit={(e)=> login(e, user)}>
                    
                    <Box mt={6}>
                        <TextField className={classes.textField}
                        onChange={(e)=> setUser({...user, username: e.target.value})}
                        label="Usuario" variant="outlined"  />
                    </Box>
                    <Box mt={2} >
                        <TextField className={classes.textField}
                        onChange={(e)=> setUser({...user, password: e.target.value})}
                        label="Contraseña" type="password" variant="outlined"  />
                    </Box>
                    <Box mt={3} mb={2}>
                        <Button type='submit' variant='outlined' className={classes.button} >INGRESAR</Button>
                    </Box>
                </form>
            </Container>
        </Container>
    );
}
