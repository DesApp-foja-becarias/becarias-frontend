import { Alert, Container, Snackbar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import useSnackbar from "./hooks/useSnackbar";
import Login from "./components/Login/Login";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import ScholarData from "./components/ScholarData";
import SignScholarData from "./components/SignScholarData";
import SignTutorData from "./components/SignTutorData";
import TutorData from "./components/TutorData";
import EditTutorData from "./components/TutorData/EditTutorData";
import EditScholarData from "./components/ScholarData/EditScholarData";
import MainTutor from "./components/MainTutor/MainTutor";
import PrivateRoute from "./components/PrivateRoute";
import MainScholars from "./components/MainScholars";
import ConfigurationPage from "./components/ConfigurationPage";

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
  const {snackbar,  closeSnackbar } = useSnackbar();
  return (
    <Container maxWidth="false" disableGutters className={classes.mainContainer}>
      <Router>
          <Navbar/>
          <Switch>
          <Container maxWidth="xl" className={classes.root}>
          <PrivateRoute>
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
            <Route exact path="/">
              <Main />
            </Route>
          </PrivateRoute>
        </Container>
        </Switch>
      </Router>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        open={snackbar.open}
        autoHideDuration={5000}
        message="Note archived"
        onClose={() => closeSnackbar()}
      >
        <Alert severity={snackbar.severity} variant="filled">
          {snackbar.message}
        </Alert>

      </Snackbar>
    </Container>
  );
}
