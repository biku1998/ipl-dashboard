import React from "react";
import { useParams } from "react-router";
import Typography from "@material-ui/core/Typography";
import { dataFetcher } from "../../utils/utils";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { PieChart } from "react-minimal-pie-chart";
import { getLogo } from "../../utils/logo";
import MatchDetail from "../../components/MatchDetail";

interface teamInfo {
  team: {
    name: string;
    total_matches: number;
    total_wins: number;
  };
  matches: {
    id: number;
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
  }[];
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "1rem",
    width: "100%",
    height: "100%",
  },
  paperContainer: {
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  playedTitle: {
    fontSize: "2.5em",
  },
  metricTitle: {
    fontSize: "3em",
    fontWeight: 550,
  },
  pieChart: {
    width: "280px",
    height: "280px",
    margin: "3rem 0 0 3rem",
  },
  teamCover: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& img": {
      width: "90%",
      height: "90%",
      borderRadius: "50%",
      objectFit: "contain",
    },
  },
  matchDetailsContainer: {
    marginTop: "1.5rem",
  },
}));

const Team = () => {
  const [teamInfo, setTeamInfo] = React.useState<teamInfo | null>(null);
  const { teamName } = useParams<{ teamName: string }>();

  React.useEffect(() => {
    (async () => {
      const resp = await dataFetcher(`/teams/${teamName}`, "get");
      if (resp.success) {
        setTeamInfo(resp.data);
      }
    })();
  }, [teamName]);

  const classes = useStyles();
  return (
    <Grid container spacing={1} alignItems="center">
      <Grid item sm={8} md={8} lg={8}>
        <Grid container spacing={1}>
          <Grid item sm={12} md={12} lg={12}>
            <Grid container alignItems="center">
              <Grid sm={3} md={3} lg={3}>
                {teamInfo && (
                  <div className={classes.teamCover}>
                    <img
                      src={getLogo(teamInfo.team.name)}
                      alt={`${teamInfo.team.name}_cover`}
                    />
                  </div>
                )}
              </Grid>
              <Grid sm={9} md={9} lg={9}>
                <Typography style={{ fontWeight: 600, fontSize: "3em" }}>
                  {teamName}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={12} md={12} lg={12}>
            <Typography className={classes.playedTitle}>
              {teamInfo?.team.total_matches} Played
            </Typography>
          </Grid>
          <Grid item sm={12} md={12} lg={12}>
            <Grid container spacing={2}>
              <Grid item sm={6} md={6} lg={6}>
                <Paper className={classes.paperContainer}>
                  <Typography
                    className={classes.metricTitle}
                    style={{ color: "#4da375" }}
                  >
                    {teamInfo?.team.total_wins}
                  </Typography>
                  <Typography variant="h5">Won</Typography>
                </Paper>
              </Grid>
              <Grid item sm={6} md={6} lg={6}>
                <Paper className={classes.paperContainer}>
                  <Typography
                    className={classes.metricTitle}
                    style={{ color: "#a34d5d" }}
                  >
                    {teamInfo &&
                      teamInfo.team.total_matches - teamInfo.team.total_wins}
                  </Typography>
                  <Typography variant="h5">Lost</Typography>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item sm={4} md={4} lg={4}>
        <div className={classes.pieChart}>
          {teamInfo && (
            <PieChart
              data={[
                {
                  title: "Losses",
                  value: teamInfo.team.total_matches - teamInfo.team.total_wins,
                  color: "#a34d5d",
                },
                {
                  title: "Wins",
                  value: teamInfo.team.total_wins,
                  color: "#4da375",
                },
              ]}
              animate
            />
          )}
        </div>
      </Grid>
      <Grid
        item
        sm={12}
        md={12}
        lg={12}
        className={classes.matchDetailsContainer}
      >
        <Grid container spacing={2}>
          {teamInfo &&
            teamInfo.matches.map((match) => (
              <MatchDetail
                detail={match}
                key={match.id}
                currentTeam={teamName}
              />
            ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Team;
