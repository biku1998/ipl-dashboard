import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { getLogo } from "../../utils/logo";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    "& :hover": {
      cursor: "pointer",
      //   transform: "translateY(-5px)",
    },
    // transition: "all 0.3s ease-in",
  },

  container: {
    backgroundColor: theme.palette.secondary.main,
    padding: "1rem 2rem",
  },
  teamTitle: {
    fontSize: "0.9em",
    fontWeight: 600,
  },
  teamCover: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    backgroundColor: theme.palette.primary.main,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& img": {
      width: "80%",
      height: "80%",
      borderRadius: "50%",
      objectFit: "scale-down",
    },
    marginBottom: "1rem",
  },
}));

const TeamCard = ({ team }: { team: { name: string } }) => {
  const history = useHistory();
  const classes = useStyles();
  return (
    <Grid
      item
      md={4}
      lg={4}
      sm={12}
      className={classes.root}
      onClick={() => history.push(`/team/${team.name}`)}
    >
      <Paper elevation={6} className={classes.container}>
        <Grid container direction="column" alignItems="center">
          <Grid item sm={12} md={12} lg={12}>
            <div className={classes.teamCover}>
              <img src={getLogo(team.name)} alt={`${team.name}_cover`} />
            </div>
          </Grid>
          <Grid item sm={12} md={12} lg={12}>
            <Typography
              className={classes.teamTitle}
              onClick={() => history.push(`/team/${team.name}`)}
            >
              {team.name}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default TeamCard;
