import { Button, Container} from '@mui/material';
import {makeStyles} from '@mui/styles';
import logoMain from "../../assets/logo_main.svg";
import Searcher from '../Searcher/Searcher';


const useStyles = makeStyles((theme) => ({
    logo: {
        width: "100%",
    },
}));

export default function Main() {
    const classes = useStyles();
    return (
        <Container sx={{ display: 'flex'}} maxWidth="xl" disableGutters="true">
            <Container>
                <Button variant="contained" sx={{ m: "2rem", py:"2rem"}} >Inscripción Becaria</Button>
                <Button variant="contained" sx={{ m: "2rem", py:"2rem"}}>Inscripción Tutor</Button>
                <Container>
                    <Searcher/>
                </Container>
            </Container>
            <Container sx={{paddingTop: "19%"}}>
                <img className={classes.logo} src={logoMain}/>
            </Container>
        </Container>
    );
}