import React from 'react';
import { useEffect,useState } from 'react';
import { Button, Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Searcher from '../../components/Searcher/Searcher';
import { Link } from 'react-router-dom';
import { columnsActivities } from '../../constants/searchedActivities';
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
    const [users, setActivities] = useState([]);

    return (
        <Container sx={{ display: 'flex' }} maxWidth="xl" disableGutters>
            <Container maxWidth="xl" disableGutters>
                <Container maxWidth="xl" disableGutters>
                    <Typography variant="h3">Actividades</Typography>
                </Container>
                <Container maxWidth="xl" disableGutters>
                    <Link className={classes.link} to="/login">
                        <Button variant="contained" sx={{ m: "2rem", py: "1rem" }} >Agregar Actividad</Button>
                    </Link>
                </Container>
                <Container className={classes.search} maxWidth="xl" disableGutters>
                    <Searcher setStateCallback={setActivities} items={items} columns={columnsActivities}/>
                </Container>
            </Container>
        </Container>
    );
};
