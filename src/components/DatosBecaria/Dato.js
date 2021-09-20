import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { makeStyles } from "@material-ui/core/styles";
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

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

export default function Dato({title, value,mail,cell}) {

    const classes = useStyles();
    return (
        <div>
            <Box className={classes.Box}>  
              <Typography  variant="h6">{title}</Typography> 
              
              <Box class={classes.spacer}/>  
              
              {
                  mail && <EmailIcon />
              }
              {
                  cell && <WhatsAppIcon />
              }    
            </Box>
            <Typography variant="subtitle2">{mail|| cell || value}</Typography>
        </div>
    )
}
