import {useState, useEffect, useContext} from 'react';
import {makeStyles} from '@mui/styles';
import { TextField,InputLabel,Paper, Button,Grid,Typography,Container,Box, Select, MenuItem, FormControl  } from '@mui/material';
import useFieldValidator from '../../hooks/useValidator';
import { useParams } from 'react-router';
import { getTutors } from '../../services/Tutor/serviceTutor';
import { getScholar, acceptScholar } from '../../services/Scholar/servicesScholar';
import { createAccount } from '../../services/Account/serviceAccount';
import BackButton from '../../components/BackButton';
import useAxios from '../../hooks/useAxios';
import { LoadingScreenContext } from '../../context/LoadingScreenContext';
import LoadingScreen from '../../components/LoadingScreen';
import SingleSeacher from '../../components/Searcher/SingleSeacher';
import { columnsTutorShort } from '../../constants/searcherConstant';

const useStyles = makeStyles((theme) => ({
    container:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:'50px',
    },
    textField:{
        alignItems:"center",
        marginTop: "5px",
        margin:"normal",
    },
    icon:{
        color: "black",
        fontSize: "30",
    },
    boton:{
        width: "350px",
        height: "60px",
    },
    input:{
        
        color:"#fff",
        backgroundColor:"#000",}
}));

export default function EditScholarData() {
    const {id} = useParams()
    const {loading} = useContext(LoadingScreenContext)

    const classes = useStyles()
    const [scholar, setScholar] = useState({});
    const [tutors, setTutors] = useState([]);
    const [tutorSelected, setTutorSelected] = useState([]);
    const [account, setAccount] = useState({
        bank: '',
        accountHolder: '',
        accountNumber: '',
        accountType: '',
        branchOffice: '',
        cbu: '',
        BecariaId: id
    })

    const {
        areValidFields,
        errors,
        validateNotEmpty,
        validateAccountNumber,
        validateCBU
    } = useFieldValidator({
        Bank: false,
        accountHolder: false,
        accountNumber: false,
        accountType: false,
        branchOffice: false,
        cbu: false,
        BecariaId: false
    })

    const getScholarAxios = useAxios({
        call:  
        () => getScholar(id)
        , successMessage: 'Becaria encontrada'
        , errorMessage: 'No se encontro la becaria'
        , loadingMessage: 'Buscando becaria...'
        , redirectErr: '/'
    })

    const getTutorsAxios = useAxios({
        call:
        () => getTutors()
        , successMessage: 'Tutores encontrados'
        , errorMessage: 'No se encontraron tutores'
        , loadingMessage: 'Buscando tutores...'
        , redirectErr: '/'
    })

    const createAccountCall = useAxios({
        call: () => createAccount(account)
        , successMessage: 'Cuenta Creada'
        , errorMessage: 'No se pudo crear la cuenta'
        , loadingMessage: 'Creando Cuenta...'
        , redirectErr: '/'
        , redirectSuccess: `/becaria/${id}`
    })

    const acceptScholarAxios = useAxios({
        call:  
        () => acceptScholar({
            ...scholar,
            TutorId: tutorSelected.id,
            actualState: 'Aceptada'
        })
    })

    const updateAccountState =  (e) => {
        setAccount({
            ...account,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createAccountCall.useAxiosCall(account);
        acceptScholarAxios.useAxiosCall();
    }
    
    useEffect(() => {
        getTutorsAxios.useAxiosCall().then(res => {
            setTutors(res.data); 
        })
        
        getScholarAxios.useAxiosCall().then(res => {
            setScholar(res.data)
        })
    }, [])

    if (loading) {
        return <LoadingScreen/>
    }      
    return(
        <Container maxWidth="md">
        <Paper variant="elevation" elevation={2} > 
        <BackButton path={`/becaria/${id}`}/>
        <form onSubmit={e => handleSubmit(e)}>
        <Container sx={{display:'flex'}} className={classes.container} maxWidth='sm'>
            <Box mt={3}/>
            <Typography variant='h3' color='primary' align="center">Datos Adicionales</Typography>
                <Grid container mt={3} spacing={4} >
                <Typography variant='subtitle1' align="left">Cuenta</Typography>
                    <Grid item xs={6}></Grid>
                    <Grid item 
                        xs={6}
                    >
                        <InputLabel htmlFor="bank">Banco</InputLabel>
                        <TextField 
                            placeholder="Banco"
                            variant="outlined"
                            name="Bank"
                            margin="normal"
                            onBlur={(e)=>validateNotEmpty(e)} onChange={updateAccountState}
                            error={errors.bank}
                            helperText={errors.bank ? 'Campo obligatorio' : ''}
                            required
                            />
                    </Grid>
                    <Grid item
                        xs={6}
                    >
                        <InputLabel htmlFor="name">Nombre del dueño de la cuenta</InputLabel>
                        <TextField
                            placeholder="Nombre"
                            variant="outlined"
                            name="accountHolder"
                            margin="normal"
                            onBlur={(e) =>validateNotEmpty(e)}  
                            onChange={updateAccountState}
                            error={errors.accountHolder}
                            helperText={errors.accountHolder ? 'Campo obligatorio' : ''}
                            required
                        />
                    </Grid>
                    <Grid item 
                        xs={6}
                    >
                        <InputLabel htmlFor="accountNumber">Numero de Cuenta</InputLabel>
                        <TextField  
                            placeholder="Numero de cuenta" 
                            variant="outlined"
                            name="accountNumber"
                            type="number"
                            onBlur={(e) => validateAccountNumber(e)}   
                            onChange={updateAccountState}
                            margin="normal"
                            helperText={errors.accountNumber?'Numero de cuenta Invalido':''}
                            error={errors.accountNumber}
                            required
                            />
                    </Grid>
                    <Grid item 
                        xs={6}
                    >
                        <InputLabel htmlFor="accountType">Tipo</InputLabel>
                        <TextField  
                            placeholder="Tipo" 
                            variant="outlined"
                            name="accountType"
                            onBlur={(e) => validateNotEmpty(e)}   
                            onChange={updateAccountState}
                            margin="normal"
                            helperText={errors.accountType?'Campo obligatorio':''}
                            error={errors.accountType}
                            required
                            />
                    </Grid>
                    <Grid item xs={6} >
                        <InputLabel htmlFor="branchOffice">Sucursal</InputLabel>
                        <TextField className={classes.textField}
                            placeholder="Sucursal"
                            variant="outlined"
                            size="normal"
                            margin="normal"
                            name="branchOffice"
                            onBlur={(e)=>validateNotEmpty(e)}
                            onChange={updateAccountState}
                            error={errors.branchOffice}
                            helperText={errors.branchOffice? 'Campo obligatorio' : ''}
                            required
                        />
                    </Grid>
                    <Grid item xs={6} >
                        <InputLabel htmlFor="cbu">CBU</InputLabel>
                        <TextField 
                            type='number'
                            variant='outlined'  
                            placeholder='CBU'  
                            margin="normal"
                            name="cbu"
                            onBlur={(e) =>validateCBU(e)} 
                            onChange={updateAccountState}
                            error={errors.cbu}
                            helperText={errors.cbu?'Numero de cbu invalido':''}
                            required
                        />
                    </Grid>
                </Grid>   
                <Grid container mt={3} spacing={4}>
                <Typography variant='subtitle1' align="left">Asignar Tutor</Typography>
                <Grid item xs={6}></Grid>
                <Grid item xs={12}>
                    {tutorSelected.length === 0 ?
                        <InputLabel htmlFor='tutor'>Tutor: No hay un tutor asignado</InputLabel>
                        :
                        tutorSelected.map(tutor => {
                            return (
                                <InputLabel htmlFor='tutor'>Tutor: {tutor.lastname + " " +tutor.name}</InputLabel>
                            )
                        })
                    }
                   
                    <SingleSeacher setStateCallback={setTutorSelected} items={tutors} columns={columnsTutorShort}/>
                </Grid>
                </Grid>   
            <Box mt={3} mb={3}/>
            <Box mt={6} mb={6}>
            
                <Button className={classes.boton}
                    variant="contained" 
                    type="submit"
                    disabled={tutorSelected.length > 0 ? false : true}
                >
                    APROBAR BECARIA
                </Button>
            </Box>

        </Container>
        </form>
        </Paper>
        </Container>
    );
}