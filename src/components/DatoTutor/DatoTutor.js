import React from 'react'

import { makeStyles } from "@mui/styles";
import { Typography,Box ,Button} from '@mui/material';
import { Link } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    Box: {
        display: 'flex',
        flexDirection:'row',
        alignItems: 'center',
    
    },
    marginRigth: {
        marginRight: '10px'
    },
    
        iconRoot: {
        textAlign: "center",
        },
        spacer: {
            width: '10px'
        },
        
    }));

const DatoTutor = ({title, value}) => {
    const classes = useStyles();    
    if(value === null){
        return (
            <Box className={classes.Box}/>
        )
    }
    return (           
        <div>
            <Box className={classes.Box}>
                <Typography sx={{}}  variant="h6" >{title}</Typography>
            </Box>
            <Box sx={{display:'flex', alignItems:'center'}}>
                <Typography variant="body1">{`${value.lastname}, ${value.name}`}</Typography>
            <Box mr='1em'/>
                <Link to={`/tutor/${value.id}`} style={{textDecoration:'none'}}>
                    <Button size="small" variant='contained'>Ver perfil</Button>
                </Link>
            </Box >
        </div>
    )   
}

export default DatoTutor
