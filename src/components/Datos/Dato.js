import { IconButton,Typography, } from '@mui/material';
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

export default function Dato({title, value,mail,cell, career}) {
    const classes = useStyles();

    return (
        <div>
            <Box className={classes.Box}>
                <Typography sx={{}}  variant="h6" >{title}</Typography>
                <Box className={classes.spacer}/>
                {mail && <IconButton color='secondary' href={`mailto:${value}`} ><EmailIcon/></IconButton>}
                {cell && <IconButton color='secondary' href={`https://wa.me/54${value}`} target='_blank'><WhatsAppIcon /></IconButton>}
            </Box>
            <Box ml={'2px'}>
                {career? 
                value.map( car =><Typography variant="body2" >{car}</Typography>)
            :
            <Typography variant="body1">{value}</Typography>
            }
            
            </Box>
        </div>
    )
}
