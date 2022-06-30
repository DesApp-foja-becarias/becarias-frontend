import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Navbar from "./components/Navbar";
import Scholar from "./pages/Scholar";
import ScholarSign from "./pages/ScholarSign";
import TutorSign from "./pages/TutorSign";
import Tutor from "./pages/Tutor";
import TutorEdit from "./pages/TutorEdit";
import ScholarEdit from "./pages/ScholarEdit";
import ScholarEnable from "./pages/ScholarEnable";
import MainTutor from "./pages/MainTutor";
import MainScholars from "./pages/MainScholars";
import ConfigurationPage from "./pages/ConfigurationPage";
import ActivitiesPage from "./pages/Activities/Activities";
import NewActivity from "./pages/NewActivity";
import Activity from "./pages/Activity";
import Carreers from "./pages/Carreers";
import TutorEditCarreer from "./pages/TutorEditCarreer";

const useStyles = makeStyles(() => ({
  root: {
    marginTop: "50px",
    height: "100%",
		
  },
  fixedHeader: {
    marginBottom: "40px",
    fontSize: "30px",
    color: "DarkRed",
    backgroundColor: "Khaki",
    textAlign: "center",
  },
  mainContainer: {
    minHeight: "100vh",
		
  },
}));

export default function App() {
  const classes = useStyles();
  return (
    <Container maxWidth="false" disableGutters className={classes.mainContainer}>
      <Router>
          <Navbar/>
          <Switch>
          <Container maxWidth="xl" className={classes.root}>
            <Route path="/login">
              <Login />
            </Route>
            <Route exact path="/tutor/edit/:id">
              <TutorEdit />
            </Route>
            <Route exact path="/tutor/:id">
              <Tutor />
            </Route>
            <Route exact path="/tutor">
              <MainTutor />
            </Route>
						<Route exact path="/tutor/aditional/editarCarrera/:id">
							<TutorEditCarreer/>
						</Route>
            <Route exact path="/inscribirtutor">
              <TutorSign />
            </Route>
            <Route exact path="/inscribirbecaria">
              <ScholarSign />
            </Route>
            <Route exact path="/becaria/edit/:id">
              <ScholarEdit />
            </Route>
            <Route exact path="/becaria/aditional/:id/:CuentaId">
              <ScholarEnable />
            </Route>
            <Route exact path="/becaria/:id">
              <Scholar />
            </Route>
            <Route exact path="/becaria">
              <MainScholars />
            </Route>
            <Route exact path="/configuracion">
              <ConfigurationPage/>
            </Route>
            <Route exact path="/actividades">
              <ActivitiesPage />
            </Route>
						<Route exact path="/nuevaActividad">
							<NewActivity />
						</Route>
						<Route exact path="/actividades/detalles/:id">
							<Activity/>
						</Route>
						<Route exact path="/carreras">
							<Carreers/>
						</Route>
            <Route exact path="/">
              <Main />
            </Route>
        </Container>
        </Switch>
      </Router>
    </Container>
  );
}
