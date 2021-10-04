import { Button, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Searcher from '../Searcher/Searcher';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    logo: {
        width: "100%",
        marginLeft: "28%",
        paddingTop: "42.5%"
    },
    search: {
        marginRight: "20%",
    },
    link:{
        textDecoration: "none",

    }
}));

export default function Main() {
    const classes = useStyles();
    return (
        <Container sx={{ display: 'flex' }} maxWidth="xl" disableGutters>
            <Container maxWidth="xl" disableGutters>
                <Container maxWidth="xl" disableGutters>
                    <Link className={classes.link} to="/inscribirbecaria">
                        <Button variant="contained" sx={{ m: "2rem", py: "2rem" }} >Inscripción Becaria</Button>
                    </Link>
                    <Link  className={classes.link} to="/inscribirtutor">
                        <Button variant="contained" sx={{ m: "2rem", py: "2rem" }}>Inscripción Tutor</Button>
                    </Link>
                </Container>
                <Container className={classes.search} maxWidth="xl" disableGutters>
                    <Searcher />
                </Container>
            </Container>
        </Container>
    );
}