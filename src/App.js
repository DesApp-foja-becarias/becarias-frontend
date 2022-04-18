import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import ScholarData from "./pages/ScholarData";
import SignScholarData from "./pages/SignScholarData";
import SignTutorData from "./pages/SignTutorData";
import TutorData from "./pages/TutorData";
import EditTutorData from "./pages/TutorData/EditTutorData";
import EditScholarData from "./pages/ScholarData/EditScholarData";
import MainTutor from "./pages/MainTutor";
import MainScholars from "./pages/MainScholars";
import ConfigurationPage from "./pages/ConfigurationPage";
import NewActivity from "./pages/NewActivity";

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
              <EditTutorData />
            </Route>
            <Route exact path="/tutor/:id">
              <TutorData />
            </Route>
            <Route exact path="/tutor">
              <MainTutor />
            </Route>
            <Route exact path="/inscribirtutor">
              <SignTutorData />
            </Route>
            <Route exact path="/inscribirbecaria">
              <SignScholarData />
            </Route>
            <Route exact path="/becaria/edit/:id">
              <EditScholarData />
            </Route>
            <Route exact path="/becaria/:id">
              <ScholarData />
            </Route>
            <Route exact path="/becaria">
              <MainScholars />
            </Route>
            <Route exact path="/configuracion">
              <ConfigurationPage/>
            </Route>
						<Route exact path="/nuevaActividad">
							<NewActivity />
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
