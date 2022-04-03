import { useEffect,useState } from 'react';
import { Button, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Searcher from '../Searcher/Searcher';
import { Link } from 'react-router-dom';
import { columnsTutor } from '../../constants/searcherConstant';
import useAxios from '../../hooks/useAxios';
import { getTutors } from '../../services/Tutor/serviceTutor';
import { getScholars } from '../../services/Scholar/servicesScholar';
import { mapScholarsForSearcher } from '../../utils/scholarUtils';
import { mapTutorsForSearcher } from '../../utils/tutorUtils';
import MailSender from '../MailSender/MailSender';

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
    const [items, setItems] = useState([]);
    const [users, setUsers] = useState([]);

    const getScholarsAxios = useAxios({
        call: () => getScholars()
    })
    const getTutorsAxios = useAxios({
        call: () => getTutors()
    })

    useEffect(() => {
        const fetchData = async () => 
        { 
            await getScholarsAxios.useAxiosCall().then(
                async res => await setItems(prevState=> prevState.concat(mapScholarsForSearcher(res.data)) )
                
                )
            await getTutorsAxios.useAxiosCall().then(
                async res => await setItems(prevState => prevState.concat(mapTutorsForSearcher(res.data)))
            )
        }
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
                    <MailSender users={users} />
                    <Searcher setStateCallback={setUsers} items={items} columns={columnsTutor}/>
                </Container>
            </Container>
        </Container>
    );
}