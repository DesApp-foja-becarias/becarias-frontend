import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { makeStyles } from "@mui/styles";
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
              <Typography sx={{}}  variant="h6" >{title}</Typography> 
              
              <Box class={classes.spacer}/>  
              
              {
                  mail && <EmailIcon />
              }
              {
                  cell && <WhatsAppIcon />
              }    
            </Box>
            <Box ml={'2px'}>
                <Typography variant="body1">{value}</Typography>
            </Box>
        </div>
    )
}
