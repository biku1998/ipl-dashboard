import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import EventIcon from "@material-ui/icons/Event";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import Button from "@material-ui/core/Button";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "1rem",
  },
  icon: {
    color: theme.palette.primary.main,
  },
  btnText: {
    "& .MuiButton-label": {
      //   color: theme.palette.text.primary,
      color: "#b4b8bd",
      textTransform: "none",
    },
  },
  teamName: {
    fontSize: "1.3em",
    fontWeight: 600,
    marginBottom: "1rem",
    cursor: "pointer",
  },
  moreInfoContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  infoContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    marginBottom: "0.8rem",
  },
  infoTitle: {
    fontSize: "1em",
    fontWeight: 500,
  },
  info: {
    fontSize: "1.1em",
    opacity: 0.6,
  },
}));

interface matchDetailProps {
  detail: {
    city: string;
    date: Date;
    player_of_match: string;
    venue: string;
    team1: string;
    team2: string;
    toss_winner: string;
    winner: string;
    result: string;
    result_margin: number;
    umpire1: string;
    umpire2: string;
  };
  currentTeam: string;
}

const MatchDetail = ({ detail, currentTeam }: matchDetailProps) => {
  const history = useHistory();

  const classes = useStyles();
  return (
    <Grid item sm={4} md={4} lg={4}>
      <Paper className={classes.root}>
        <Grid container>
          <Grid item sm={12} md={12} lg={12}>
            <Typography>Vs</Typography>
          </Grid>
          <Grid item sm={12} md={12} lg={12}>
            <Typography
              className={classes.teamName}
              onClick={() => {
                history.push(
                  `/team/${
                    detail.team1 === currentTeam ? detail.team2 : detail.team1
                  }`
                );
              }}
            >
              {detail.team1 === currentTeam ? detail.team2 : detail.team1}
            </Typography>
          </Grid>
          <Grid item sm={12} md={12} lg={12}>
            <Button
              variant="text"
              color="primary"
              size="large"
              className={classes.btnText}
              startIcon={<EventIcon className={classes.icon} />}
            >
              {detail.date.toString().split("T")[0]}
            </Button>
          </Grid>
          <Grid item sm={12} md={12} lg={12}>
            <Button
              variant="text"
              size="large"
              color="primary"
              className={classes.btnText}
              startIcon={<LocationOnIcon className={classes.icon} />}
            >
              {detail.venue}
            </Button>
          </Grid>
          <Grid item sm={12} md={12} lg={12}>
            <Button
              variant="text"
              color="primary"
              size="large"
              className={classes.btnText}
              startIcon={<ContactSupportIcon className={classes.icon} />}
            >
              {detail.winner === currentTeam
                ? `won by ${detail.result_margin} ${detail.result}`
                : `lost by ${detail.result_margin} ${detail.result}`}
            </Button>
          </Grid>
          <Grid item sm={12} md={12} lg={12}>
            <Accordion elevation={0}>
              <AccordionSummary expandIcon={<ExpandMoreIcon color="primary" />}>
                <Typography>More Details</Typography>
              </AccordionSummary>
              <AccordionDetails className={classes.moreInfoContainer}>
                <div className={classes.infoContainer}>
                  <Typography className={classes.infoTitle}>
                    Player of the match
                  </Typography>
                  <Typography className={classes.info}>
                    {detail.player_of_match}
                  </Typography>
                </div>
                <div className={classes.infoContainer}>
                  <Typography className={classes.infoTitle}>Umpires</Typography>
                  <Typography className={classes.info}>
                    {detail.umpire1},{detail.umpire2}
                  </Typography>
                </div>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default MatchDetail;
