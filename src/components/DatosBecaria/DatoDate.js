import React, { useContext } from 'react'
import { IconButton, Input, MenuItem, Select, TextField, Typography, } from '@mui/material';
import Box from '@mui/material/Box';
import { makeStyles } from "@mui/styles";
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import {estadoBecarias} from '../../constants'

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

    const showInputOrValue = () =>
     (
        <div>
            <Box className={classes.Box}>
                <Typography sx={{}}  variant="h6" >{title}</Typography>
            </Box>
            <Box ml={'2px'}>
                {isEditable?
                <Input 
                size='small' 
                name={name} 
                onBlur={updateBecariaState} 
                defaultValue={value}
                type={cell?'number':date?'date':'text'}
                />
                : <Typography variant="body1">{value}</Typography>}
            </Box>
        </div>
    )
}
