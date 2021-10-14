import React, {useEffect, useState} from 'react'
import {makeStyles} from '@mui/styles';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { Dropzone, FileItem } from "@dropzone-ui/react";
 


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

export default function DocumentationFields({updateDocumentation}) {
    const classes = useStyles();
    const [filesState,setFilesState] = useState({
        cartaDeIntencion:[],
        actaDeCompromiso:[],
        cbu:[],
        dni:[],
        certificadoDeMateriasAprobadas:[],
    });

    useEffect(() => {
        updateDocumentation(filesState);
    }, [filesState]);

    const onDelete = ({id}, placeToDelete) => {
        updateFilesState(placeToDelete, filesState[placeToDelete].filter(file => file.id !== id))  
    };

    const updateFilesState = (placeToUpdate, files) => {
        console.log(Object.keys(filesState))
        setFilesState({
            ...filesState,
            [placeToUpdate]: files
        })
    };




    return(
        <Box mt={3} display='flex' flexDirection='column' alignItems='flex-start' width='100%'  className={classes.mainBox}>
            <Typography fontSize={27} className={classes.labelDropdown} gutterBottom>
                Carta de intenciòn

            </Typography>
            <Dropzone 
                onChange={(files) => updateFilesState('cartaDeIntencion',files)}
                value={filesState.cartaDeIntencion}
                name='cartaDeIntencion'
                localization="ES-es"
                style={{minHeight:'10em'}}
            >
                {filesState.cartaDeIntencion.map ((file,index) => (
                    <FileItem
                        {...file}
                        onDelete={()=>onDelete(file ,'cartaDeIntencion')}
                        localization={"ES-es"}
                        key={index}
                        preview
                    />   
                ))}
                </Dropzone>
            <Typography fontSize={27} className={classes.labelDropdown} gutterBottom>
                CBU

            </Typography>
            <Dropzone 
                onChange={(files) => updateFilesState('cbu',files)}
                value={filesState.cbu}
                name='cbu'
                localization="ES-es"
                style={{minHeight:'10em'}}
            >
                {filesState.cbu.map ((file,index) => (
                    <FileItem
                        {...file}
                        onDelete={()=>onDelete(file ,'cbu')}
                        localization={"ES-es"}
                        key={index}
                        preview
                    />   
                ))}
                </Dropzone>
            <Typography fontSize={27} className={classes.labelDropdown} gutterBottom>
                DNI
            </Typography>
            
            <Dropzone 
                onChange={(files) => updateFilesState('dni',files)}
                value={filesState.dni}
                name='dni'
                localization="ES-es"
                style={{minHeight:'10em'}}
            >
                {filesState.dni.map ((file,index) => (
                    <FileItem
                        {...file}
                        onDelete={()=>onDelete(file ,'dni')}
                        localization={"ES-es"}
                        key={index}
                        preview
                    />   
                ))}
                </Dropzone>

            <Typography fontSize={27} className={classes.labelDropdown} gutterBottom>
                Acta de compromiso
            </Typography>
            <Dropzone 
                onChange={(files) => updateFilesState('actaDeCompromiso',files)}
                value={filesState.actaDeCompromiso}
                name='actaDeCompromiso'
                localization="ES-es"
                style={{minHeight:'10em'}}
            >
                {filesState.actaDeCompromiso.map ((file,index) => (
                    <FileItem
                        {...file}
                        onDelete={()=>onDelete(file ,'actaDeCompromiso')}
                        localization={"ES-es"}
                        key={index}
                        preview
                    />   
                ))}
                </Dropzone>
            <Typography fontSize={27} className={classes.labelDropdown} gutterBottom>
                Certificado de materias aprobadas
            </Typography>
            <Dropzone 
                onChange={(files) => updateFilesState('certificadoDeMateriasAprobadas',files)}
                value={filesState.certificadoDeMateriasAprobadas}
                name='certificadoDeMateriasAprobadas'
                localization="ES-es"
                style={{minHeight:'10em'}}
            >
                {filesState.certificadoDeMateriasAprobadas.map ((file,index) => (
                    <FileItem
                        {...file}
                        onDelete={()=>onDelete(file ,'certificadoDeMateriasAprobadas')}
                        localization={"ES-es"}
                        key={index}
                        preview
                    />   
                ))}
                </Dropzone>
        </Box>
    );
}