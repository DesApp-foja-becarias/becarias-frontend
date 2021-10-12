import React, {useState} from 'react'
import { DropzoneArea } from 'material-ui-dropzone';
import {makeStyles} from '@mui/styles';
import { Box } from '@mui/system';
import './ButtonInscripcion.css'
import { Typography } from '@mui/material';


const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(1),
        minHeight: '2em',
    },

    labelDropdown:{
        fontSize: '40px',
        fontWeight: 'bold',
        color: '#a3a3a3',
        marginBottom: '0.5em',
    },
    textContainer:{
        color: '#a3a3a3',
    },
    icon:{
        color: '#a3a3a3',
    },
    
}));

export default function IngresoDatosBecaria() {
    const classes = useStyles();
    const [filesState,setFilesState] = useState({
        cartaDeIntencion:[],
        actaDeCompromiso:[],
        cbu:[],
        dni:[],
        certificadoDeMateriasAprobadas:[],
    });
    

    return(
        <Box mt={3} display='flex' flexDirection='column' alignItems='flex-start' width='100%'  className={classes.mainBox}>
            <Typography fontSize={27} className={classes.labelDropdown} gutterBottom>
                Carta de intenciòn

            </Typography>
            <DropzoneArea 
                onDrop={(files) => setFilesState({...filesState,cartaDeIntencion:files})}
                name='cartaDeIntencion'
                filesLimit={6}
                multiple={true}
                showFileNamesInPreview
                dropzoneText="Arrastra los archivos aquí"
                showFileNames
                dropzoneClass={classes.root}
                useChipsForPreview
            />
            <Typography fontSize={27} className={classes.labelDropdown} gutterBottom>
                CBU

            </Typography>
            <DropzoneArea 
                filesLimit={6}
                onDrop={(files) => setFilesState({...filesState,cbu:files})}
                name='cbu'
                multiple={true}
                showFileNamesInPreview
                dropzoneText="Arrastra los archivos aquí"
                showFileNames
                dropzoneClass={classes.root}
                useChipsForPreview
            />
            <Typography fontSize={27} className={classes.labelDropdown} gutterBottom>
                DNI
            </Typography>
            <DropzoneArea 
                filesLimit={6}
                onDrop={(files) => setFilesState({...filesState,dni:files})}
                name='dni'
                multiple={true}
                showFileNamesInPreview
                dropzoneText="Arrastra los archivos aquí"
                showFileNames
                dropzoneClass={classes.root}
                useChipsForPreview
            />
            <Typography fontSize={27} className={classes.labelDropdown} gutterBottom>
                Acta de compromiso
            </Typography>
            <DropzoneArea 
                filesLimit={6}
                onDrop={(files) => setFilesState({...filesState,actaDeCompromiso:files})}
                name='actaDeCompromiso'
                multiple={true}
                showFileNamesInPreview
                dropzoneText="Arrastra los archivos aquí"
                showFileNames
                dropzoneClass={classes.root}
                useChipsForPreview
            />
            <Typography fontSize={27} className={classes.labelDropdown} gutterBottom>
                Certificado de materias aprobadas
            </Typography>
            <DropzoneArea 
                filesLimit={6}
                onDrop={(files) => setFilesState({...filesState,certificadoDeMateriasAprobadas:files})}
                name='certificadoDeMateriasAprobadas'
                multiple={true}
                showFileNamesInPreview
                dropzoneText="Arrastra los archivos aquí"
                showFileNames
                dropzoneClass={classes.root}
                useChipsForPreview
            />
        </Box>
    );
}