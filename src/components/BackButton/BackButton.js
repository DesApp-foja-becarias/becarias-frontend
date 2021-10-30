
import React from 'react'
import { Button } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    backButton: {
        textDecoration: 'none',
        color: '#333333',
    }
}));

export default function BackButton({ path }) {

    const classes = useStyles();
    
    return (
        <Link className={classes.backButton} to={path}>
            <Button  variant='contained' size='large' startIcon={<ArrowBackIcon /> }>Volver</Button>
        </Link>
    )
}
