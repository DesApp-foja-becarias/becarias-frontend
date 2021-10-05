import React, { useContext } from 'react'
import { IconButton, Input, Select, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { makeStyles } from "@mui/styles";
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import { BecariaContext } from '../../context/DatosBecariaContext';
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

export default function Dato({title, value,mail,cell, name}) {
    const {isEditable, updateBecariaState} = useContext(BecariaContext);
    const classes = useStyles();

    const showInputOrValue = () =>isEditable?
                <Input 
                size='small' 
                name={name} 
                onBlur={updateBecariaState} 
                defaultValue={value}
                />: <Typography variant="body1">{value}</Typography>
    
    return (
        <div>
            <Box className={classes.Box}>  
                <Typography sx={{}}  variant="h6" >{title}</Typography> 
            
                <Box className={classes.spacer}/>  
                {mail && <IconButton color='success'><EmailIcon  /></IconButton>}
                {cell && <IconButton color='success' href={`https://wa.me/54${value}`}><WhatsAppIcon /></IconButton>}

            </Box>
            <Box ml={'2px'}>
                {showInputOrValue()}
            </Box>
        </div>
    )
}
