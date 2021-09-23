import {makeStyles} from '@mui/styles';
import Button from '@mui/material/Button';
import  ButtonGroup  from '@mui/material/ButtonGroup';
import { Box } from '@mui/system';
import { Input } from '@mui/material';

const useStyles = makeStyles((theme) => ({
    boton:{
        width: '130px',
        
    },
    
}));

export default function IngresoDatosBecaria() {
    const classes = useStyles();
    return(
        <Box  mt={3}  >
           
                <ButtonGroup 
                    aria-label="outlined button group"
                    size="large"
                >
                    <Button className={classes.boton}>
                        Carta de intenciòn
                    </Button>
            
                    <Button className={classes.boton}>
                        CBU
                    </Button>
            
                    <Button className={classes.boton}>
                        Acta de Compromiso
                    </Button>
           
                    <Button className={classes.boton}>
                        DNI
                    </Button>
                </ButtonGroup>
           
        </Box>
    );
}