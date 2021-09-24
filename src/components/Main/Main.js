import { Button, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Searcher from '../Searcher/Searcher';


const useStyles = makeStyles((theme) => ({
    logo: {
        width: "100%",
        marginLeft: "28%",
        paddingTop: "42.5%"
    },
    search: {
        marginRight: "20%",
    },
}));

export default function Main() {
    const classes = useStyles();
    return (
        <Container sx={{ display: 'flex' }} maxWidth="xl" disableGutters="true">
            <Container>
                <Container>
                    <Button variant="contained" sx={{ m: "2rem", py: "2rem" }} >Inscripción Becaria</Button>
                    <Button variant="contained" sx={{ m: "2rem", py: "2rem" }}>Inscripción Tutor</Button>
                </Container>
                <Container className={classes.search}>
                    <Searcher />
                </Container>
            </Container>
        </Container>
    );
}