import React from 'react';
import { useEffect,useState } from 'react';
import { Button, Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Searcher from '../../components/Searcher/Searcher';
import { Link } from 'react-router-dom';
import { columnsActivities } from '../../constants/searchedActivities';
import { rowss } from '../../constants/searchedActivities';
import { getAllActivities } from '../../services/Activities/serviceActivities';
import { mapActivitiesForSearcher } from '../../utils/activitiesUtils';
import useAxios from '../../hooks/useAxios';


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


export default function Activities(params) {
    const classes = useStyles();
    const [items, setItems] = useState([]);
    const [users, setUsers] = useState([]);

    const getAllActivitiesAxios = useAxios({
        call: () => getAllActivities()
    })

    useEffect(() => {
        
        const fetchData = async () => 
				await getAllActivitiesAxios.useAxiosCall().then(
					async res => await setItems(prevState=> prevState.concat(mapActivitiesForSearcher(res.data)) )
				);
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        
    }, []);

    return (
        <Container sx={{ display: 'flex' }} maxWidth="xl" disableGutters>
            <Container maxWidth="xl" disableGutters>
                <Container maxWidth="lg" disableGutters>
                    <Typography variant="h3" color='primary'>Actividades</Typography>
                </Container>
                <Container maxWidth="lg" disableGutters>
                    { /*TODO Colocar el redireccionamiento a "agregar actividad" cuando este listo */ }
                    <Link className={classes.link} to="/nuevaActividad">
                        <Button variant="contained" sx={{ m: "2rem", py: "1rem" }} >Agregar Actividad</Button>
                    </Link>
                </Container>
                <Container className={classes.search} maxWidth="xl" disableGutters>
                    <Searcher setStateCallback={setUsers} items={items} columns={columnsActivities}/>
                </Container>
            </Container>
        </Container>
    );
};
