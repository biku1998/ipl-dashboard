import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Team from "./pages/Team";
import Teams from "./pages/Teams";
import Header from "./components/Header";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    margin: "1rem",
    padding: "1rem",
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Router>
        <Header />
        <Grid container>
          <Grid item md={1} lg={1} sm={1}></Grid>
          <Grid item md={10} lg={10} sm={10}>
            <Switch>
              <Route exact path="/" component={Teams} />
              <Route path="/team/:teamName" component={Team} />
            </Switch>
          </Grid>
          <Grid item md={1} lg={1} sm={1}></Grid>
        </Grid>
      </Router>
    </div>
  );
};

export default App;
