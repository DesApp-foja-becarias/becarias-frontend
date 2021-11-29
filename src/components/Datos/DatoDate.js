
import { Typography, } from '@mui/material';
import Box from '@mui/material/Box';
import { makeStyles } from "@mui/styles";
import { mappedDate } from '../../utils/func';

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

export default function Dato({title, value, name, }) {
    const classes = useStyles();


    return(
        <div>
            <Box className={classes.Box}>
                <Typography  variant="h6" >{title}</Typography>
            </Box>
            <Box ml={'2px'}>
                <Typography variant="body1">{mappedDate(value)}</Typography>
            </Box>
        </div>
    )
}
