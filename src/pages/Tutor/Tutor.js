import Dato from '../../components/Datos/Dato';
import React, { useEffect, useState, useContext} from 'react'
import {Divider, IconButton, Box, Grid, Typography, Tooltip, Container, Button } from '@mui/material';
import { makeStyles } from "@mui/styles";
import EditIcon from '@mui/icons-material/Edit';
import BackButton from '../../components/BackButton';
import { getTutor, getBecariasDeTutor } from '../../services/Tutor/serviceTutor';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import tutorPhoto from '../../assets/tutor.svg'
import useAxios from '../../hooks/useAxios';
import { LoadingScreenContext } from "../../context/LoadingScreenContext";
import LoadingScreen from '../../components/LoadingScreen';
import TableScholars from '../../components/TableScholars';
import DisplayTutorCarreers from '../../components/DisplayTutorCarreers/DisplayTutorCarreers';
import MailSender from '../../components/MailSender';

const useStyles = makeStyles((theme) => ({
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


  
export default function TutorData() {

    
    const { loading } = useContext(LoadingScreenContext);
    const {id} = useParams()
		const history = useHistory();
    const [tutor, setTutor] = useState({});
    const [tutorRelations, setTutorRelations] = useState([]);
		const [tutorScholars, setTutorScholars] = useState([]);
    const tutorAxios = useAxios({
        call:  
        () => getTutor(id)
        , successMessage: 'Tutor cargado'
        , errorMessage: 'No se encontro el tutor'
        , loadingMessage: 'Cargando tutor...'
        , redirectErr: '/'
    })

    useEffect(() => {
      tutorAxios.useAxiosCall().then( response => {
        setTutor(response.data)
				const { MateriasDeTutor, CarrerasDeTutor} = response.data;

				setTutorRelations({
						assignments: MateriasDeTutor,
						careers: CarrerasDeTutor,
					})
				getBecariasDeTutor(id).then(response => {
					setTutorScholars(response.data.data)
					setTutorRelations({
						...tutorRelations,
						scholars: response.data.data,
					})
				})
			})
		// eslint-disable-next-line react-hooks/exhaustive-deps
		}, [])
    
    const classes = useStyles();

    if(loading){
        return (
            <LoadingScreen/>
        )
    }
    return  (
      <>
        <Container className={classes.rootContainer} maxWidth="md">
            <Container  id='nombreTutor'>
            <BackButton path='/' />
            <Box mb={3} mt={3}/>
            
              <Grid container>
                <Grid container item xs={11}>
                  <Box>
                    <Typography variant='h4'>{tutor.lastname}</Typography>              
                    <Typography variant='h5'>{tutor.name}</Typography>
                  </Box>
                </Grid>
                <Grid container item xs={1}>
                  <Box>
                    <Link to={`/tutor/edit/${id}`}>
                      <Tooltip title='Editar' followCursor>
                        <IconButton  color='warning'>
                          <EditIcon fontSize='large'  />
                        </IconButton>
                      </Tooltip>
                    </Link>
                  </Box>
                </Grid>
              </Grid>
            </Container>
            <Box mb={2} mt={2}>
              <Divider />
            </Box> 
            <Container id='datosGenerales' >
              <Grid container id='datosGeneralesUp' disableGutters>
                  <Grid item xs={12} sm={5} id='DatosPersonales' disableGutters>
                    <img src={tutorPhoto} className={classes.image} alt='fotoBecaria'/>
                  </Grid>
                  
                  <Grid item xs={12} sm={6}  id='datosContCar' disableGutters>
                  <Typography variant="subtitle1">Datos de personales</Typography>
                    <Dato name='dni' title='DNI' value={tutor.dni} />
                  <Box mb={2} mt={2}>
                    <Divider />
                  </Box>

                  <Typography variant="subtitle1">Datos de contacto</Typography>
                  
                    <Dato name='email' title='Correo' value={tutor.email} mail/>
                    <Dato name='telefono' title='Celular' value={tutor.telephone} cell/>
                    <Box mb={2} mt={2}>
                      <Divider />
                    </Box>
                  </Grid>
              </Grid>
              <Box mb={2} mt={2}>
                <Divider />
              </Box>
							<MailSender users={[tutor]}/>
                    <Box mb={2} mt={2}>
											<Divider />
										</Box>
              <Container id='datosGeneralesBottom'>
              <Typography variant='subtitle1'>Carrera/s</Typography>
							<Button variant="contained" color="primary" onClick={() => history.push(`/tutor/aditional/editarCarrera/${id}`)}> Editar Carreras de tutor</Button>
              <DisplayTutorCarreers carreers={tutor.academicStatus?tutor.academicStatus:[]}/>
              <Box mb={6} />
                <Typography variant='subtitle1'>Becarias Asignadas</Typography>
                <TableScholars scholars={tutorScholars}/>
                <Box mb={6} />
              </Container>
            </Container>
        </Container>
    
    </>
    )
}
