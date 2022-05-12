import React, { useState , useEffect, useContext} from 'react'
import Dato from '../../components/Datos/Dato'
import {Divider, IconButton, Box, Grid, Typography, Tooltip, Container } from '@mui/material';
import { makeStyles } from "@mui/styles";
import EditIcon from '@mui/icons-material/Edit';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import CancelIcon from '@mui/icons-material/Cancel';
import {Link, useParams} from 'react-router-dom';
import { getScholar, downScholar, deleteTutorForScholar} from '../../services/Scholar/servicesScholar';
import BackButton from '../../components/BackButton';
import TableMock from '../../constants/mock/TablaMock';
import TablaCuentaMock from '../../constants/mock/TablaCuentaMock';
import useAxios from '../../hooks/useAxios';
import LoadingScreen from '../../components/LoadingScreen';
import {LoadingScreenContext} from '../../context/LoadingScreenContext';
import ScholarPhoto from '../../assets/scholarPhoto.svg'
import DatoTutor from '../../components/DatoTutor';
import TableCareers from '../../components/TableCareers';
import { showComponentWhen_ } from '../../utils/scholarUtils';
import MailSender from '../../components/MailSender';
import { DateTime } from 'luxon';




const useStyles = makeStyles(() => ({
    rootContainer:{
      padding: '15px',
      boxShadow: '0px 0px 10px #00000029',
      borderRadius: '10px',
      backgroundColor: '#fafafa',
    },
    image: {
        height: '200ps',
        width: '200px',
        border: 'solid black 3px',
    },

    subtitulo:{
      fontSize: '2.5em',
    }
  })
  );

export default function ScholarData() {
    const { loading } = useContext( LoadingScreenContext );
    const {id} = useParams()

    const [scholar, setScholar] = useState({});
    const [scholarRelations, setScholarRelations] = useState({});

    const downScholarAxios = useAxios({
      call:  
      () => downScholar(scholar)
    })

    const deleteTutorForScholarAxios = useAxios({
      call:
      () => deleteTutorForScholar(scholarRelations.tutor[0].id)
    })

    const getScholarAxios = useAxios({
      call:  
      () => getScholar(id)
      , successMessage: 'Becaria encontrada'
      , errorMessage: 'No se encontro la becaria'
      , loadingMessage: 'Buscando becaria...'
      , redirectErr: '/'
  })


    useEffect(() => {
      getScholarAxios.useAxiosCall().then( response => {
        setScholar({...response.data,
        })
        const {BecariasTutor, MateriasDeBecaria, Documentos, CarrerasDeBecaria, ActividadesDeBecaria} = response.data;
        setScholarRelations({
          tutor: BecariasTutor,
          assignments: MateriasDeBecaria,
          documents: Documentos,
          careers: CarrerasDeBecaria,
          activities: ActividadesDeBecaria
        })
      })
    }, [])

    const classes = useStyles();

    if(loading){
      return (
          <LoadingScreen/>
      )
    }
    return (
          <Container className={classes.rootContainer} maxWidth="md">
            <Container id='nombreBecaria'>
            <BackButton path='/' />
            <Box mb={3} mt={3}/>
              <Grid container>
                <Grid container item xs={8}>
                  <Box>
                    <Typography variant='h4'>{scholar.lastname}</Typography>                
                    <Typography variant='h5'>{scholar.name}</Typography>
                  </Box>
                </Grid>
                <Grid container item xs={4}>
                  <Box>
                    <Tooltip title='Editar' followCursor>
                      <Link to={`/becaria/edit/${id}`}>
                        <IconButton  color='warning'>
                          <EditIcon fontSize='large'/>
                        </IconButton>
                      </Link>
                    </Tooltip>
                    {
                    showComponentWhen_(
                      scholar.actualState !== "Aceptada",
                        <Tooltip title='Aprobar' followCursor>
                          <Link to={`/becaria/aditional/${id}/${scholar.CuentaId}`}>
                            <IconButton color='success'> 
                              <PersonAddAlt1Icon  fontSize='large'/>
                            </IconButton>
                          </Link>
                        </Tooltip>
                    )
                    }
                    {
                    showComponentWhen_(
                      scholar.actualState === "Aceptada",
                    <Tooltip title='Dar de baja' onClick={
                      ()=>
                      {
                        downScholarAxios.useAxiosCall()
                        deleteTutorForScholarAxios.useAxiosCall()
                        setScholar({...scholar, actualState: 'Baja'})
                      }
                      } followCursor>
                      <IconButton color='error'>
                        <CancelIcon fontSize='large'/>
                      </IconButton>
                    </Tooltip>
                    )
                    }
                  </Box>
                </Grid>
              </Grid>
            </Container>
            <Box mb={2} mt={2}>
              <Divider />
            </Box> 
            <Container id='datosGenerales' >
              <Grid container id='datosGeneralesUp' >
                  <Grid item xs={12} sm={6} id='DatosPersonales' >
                    <img src={ScholarPhoto} className={classes.image} alt='fotoBecaria'/>
                    <Box mb={2} mt={2}/>
                    <Typography variant="subtitle1">Datos de personales</Typography>
                    <Dato name='dni' title='DNI' value={scholar.dni} />
                    <Dato name='birthday' title='Fecha de nacimiento' value=
                    {
											DateTime.fromISO(scholar.birthday).toLocaleString()
                    } 
										/>
                    {/* <DatoDate name='fechaNacimiento' date title='Fecha de nacimiento' value={scholar.birthday}/> */}
                    <Dato name='direccion' title='Domicilio' value={scholar.address}/>
                      <Dato name='ciudad' title='Localidad' value={scholar.city }/>
                  </Grid>
                  <Grid item xs={12} sm={6}  id='datosContCar' >
                  
                  <Typography variant="subtitle1">Datos de contacto</Typography>
                  
                    <Dato name='email' title='Correo' value={scholar.email} mail/>
                    <Dato name='telefono' title='Celular' value={scholar.telephone} cell/>
                    <Box mb={2} mt={2}>
                      <Divider />
                    </Box>
                    <Typography variant="subtitle1">  </Typography>
                    <Dato name='estadoActual' title='Estado Actual' value={scholar.actualState} />
                    {/* <Dato name='carrera'  title='Carrera' value={scholar.career} career/> */}
                    {
                    showComponentWhen_(
                      scholar.actualState === "Aceptada",
                      
                        scholarRelations.tutor?
                        <DatoTutor name='tutor' title='Tutor' value={scholarRelations.tutor[0].Tutor} />
                        :
                        <Dato name='tutor' title='Tutor' value='No tiene tutor' />
                      
                    )
                    }
                  </Grid>
              </Grid>
              <Box mb={2} mt={2}>
                <Divider />
              </Box>
							<MailSender users={[scholar]}/>
              <Container id='datosGeneralesBottom'>
                <Typography variant='subtitle1'>Carreras</Typography>
                <TableCareers careers={scholarRelations.careers}/>
                <Box mb={3} />
                {
                    showComponentWhen_(
                      scholar.actualState === "Aceptada",
                      <>
                <Typography variant='subtitle1'>Actividad</Typography>             
                <TableMock/>
                <Box mb={3} />
                <Typography variant='subtitle1'>Cuenta</Typography>
                <TablaCuentaMock/>
                    </>)
                }
                <Box mb={6} />
              </Container>
            </Container>
        </Container>
    )
}