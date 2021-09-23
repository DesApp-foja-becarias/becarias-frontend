import {makeStyles} from '@mui/styles';
import Grid  from '@mui/material/Grid';
import Button from '@mui/material/Button';
import  ButtonGroup  from '@mui/material/ButtonGroup';

const useStyles = makeStyles((theme) => ({
    boton:{
        justifyContent:"center",
        fontSize: "200%",
        textAlign: "center",
    },
    
}));

export default function IngresoDatosBecaria() {
    const classes = useStyles();
    return(
        <Grid container mt={3} spacing={3} justifyContent="center">
            <Grid item xs={8} 
            >
                <ButtonGroup 
                    variant="contained" 
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
            </Grid>
        </Grid>
    );
}