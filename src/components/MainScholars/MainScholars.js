import React, { useState, useEffect,useContext } from 'react'
import { Button, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Searcher from '../Searcher/Searcher';
import { Link } from 'react-router-dom';
import { getScholars } from '../../services/Scholar/servicesScholar';
import useAxios from '../../hooks/useAxios';
import LoadingScreen from '../LoadingScreen';
import {LoadingScreenContext} from '../../context/LoadingScreenContext';
import { columnsTutor } from '../../constants/searcherConstant';
import { mapScholarsForSearcher } from '../../utils/scholarUtils';

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

const MainScholars = () => {
    const classes = useStyles();
    const [search, setSearch] = useState('');
    const [scholars, setScholars] = useState([]);
    const { loading } = useContext(LoadingScreenContext);
    
    const getScholarsAxios = useAxios({
        call: () => getScholars()
        , errorMessage: 'No se pudo encontrar las becarias'
        , successMessage: 'Becarias encontradas'
        , loadingMessage: 'Buscando Becarias...'
        , redirectErr: '/'
    })

    useEffect(() => {
        const fetchData = async () => await getScholarsAxios.useAxiosCall().then(
            res => setScholars(( res.data ))
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
                    <Link  className={classes.link} to="/inscribirbecaria">
                        <Button variant="contained" sx={{ m: "2rem", py: "2rem" }}>Inscripción Becaria</Button>
                    </Link>
                </Container>
                <Container className={classes.search} maxWidth="xl" disableGutters>
                    <Searcher items={scholars? mapScholarsForSearcher(scholars):[]} columns={columnsTutor}/>
                </Container>
            </Container>
        </Container>
    );
}

export default MainScholars
