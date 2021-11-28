import React, { useState, useEffect,useContext } from 'react'
import { Button, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Searcher from '../Searcher/Searcher';
import { Link } from 'react-router-dom';
import { getTutors } from '../../services/Tutor/serviceTutor';
import useAxios from '../../hooks/useAxios';
import LoadingScreen from '../LoadingScreen';
import {LoadingScreenContext} from '../../context/LoadingScreenContext';
import { columnsTutor } from '../../constants/searcherConstant';
import { mapTutorsForSearcher } from '../../utils/tutorUtils';

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

const MainTutor = () => {
    const classes = useStyles();
    const [search, setSearch] = useState('');
    const [tutors, setTutors] = useState([]);
    const { loading } = useContext(LoadingScreenContext);
    
    const getTutorsAxios = useAxios({
        call: () => getTutors()
        , errorMessage: 'No se pudo encontrar los tutores'
        , loadingMessage: 'Buscando Tutores...'
        , redirectErr: '/'
    })

    useEffect(() => {
        const fetchData = async () => await getTutorsAxios.useAxiosCall().then(
            res => setTutors(( res.data))
            );
        fetchData();
    }, []);

    if (loading) {
        return <LoadingScreen/>
    }  
    return (
        <Container sx={{ display: 'flex' }} maxWidth="xl" disableGutters>
            <Container maxWidth="xl" disableGutters>
                <Container maxWidth="xl" disableGutters>
                    <Link  className={classes.link} to="/inscribirtutor">
                        <Button variant="contained" sx={{ m: "2rem", py: "2rem" }}>Inscripción Tutor</Button>
                    </Link>
                </Container>
                <Container className={classes.search} maxWidth="xl" disableGutters>
                    <Searcher items={tutors? mapTutorsForSearcher(tutors):[]} columns={columnsTutor}/>
                </Container>
            </Container>
        </Container>
    );
}

export default MainTutor
