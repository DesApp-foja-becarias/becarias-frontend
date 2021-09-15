import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const useStyles = makeStyles(() => ({
  root: {
    marginTop: "50px",
  },
  fixedHeader: {
    marginBottom: "40px",
    fontSize: "30px",
    color: "DarkRed",
    backgroundColor: "Khaki",
    textAlign: "center",
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <Container maxWidth="false" disableGutters>
      <Navbar />
      <Container maxWidth="xl" className={classes.root}>
        <Router>

          <Switch>

            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </Container>
    </Container>
  );
}
