import React, { useContext } from 'react'
import { IconButton, Input, MenuItem, Select, TextField, Typography, } from '@mui/material';
import Box from '@mui/material/Box';
import { makeStyles } from "@mui/styles";
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import {estadoBecarias} from '../../constants'
import { mappedDate } from '../../utils/func';

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

export default function Dato({title, value,mail,cell, date, name, becariaState}) {
    const {isEditable, updateBecariaState} = useContext(BecariaContext);
    const classes = useStyles();


    return(
        <div>
            <Box className={classes.Box}>
                <Typography  variant="h6" >{title}</Typography>
            </Box>
            <Box ml={'2px'}>
                {isEditable?
                <Input 
                size='small' 
                name={name} 
                onBlur={updateBecariaState} 
                defaultValue={value}
                type='date'
                />
                : <Typography variant="body1">{mappedDate(value)}</Typography>}
            </Box>
        </div>
    )
}
