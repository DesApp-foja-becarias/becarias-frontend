import React from 'react'
import { Input, TextField, Typography } from '@mui/material';
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

export default function Dato({title, value,mail,cell,editable}) {

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
                {editable?
                <Input size='small' defaultValue={value}></Input>:
                <Typography variant="body1">{value}</Typography>}
            </Box>
        </div>
    )
}
