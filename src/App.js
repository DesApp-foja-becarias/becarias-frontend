import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DatosBecaria from "./components/DatosBecaria/DatosBecaria";

import Login from "./components/Login/Login";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";


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
      <Navbar />
      <Container maxWidth="xl" className={classes.root}>
        <Router>
          <Switch>
            <Route path="/">
              {
                //        <Login />

                //<DatosBecaria />
                <Main />
              }
            </Route>
          </Switch>
        </Router>
      </Container>
    </Container>
  );
}
