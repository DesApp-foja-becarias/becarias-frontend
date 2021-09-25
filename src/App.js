import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DatosBecaria from "./components/DatosBecaria/DatosBecaria";

import Login from "./components/Login/Login";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import InscripcionBecaria from "./components/InscripcionBecaria/InscripcionDatosBecaria";


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
        <Container maxWidth="xl" className={classes.root}>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/inscribirbecaria">
            <InscripcionBecaria />
          </Route>
          <Route path="/becaria">
            <DatosBecaria />
          </Route>
          <Route  path="/">
            <Main />
          </Route>
        </Switch>
        </Container>
      </Router>
    </Container>
  );
}
