import React from "react";
import TeamCard from "./TeamCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "1rem",
  },
}));

interface teamCardsProps {
  teams: { name: string }[];
}

const TeamCards = ({ teams }: teamCardsProps) => {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={3} className={classes.root}>
        {teams.map((team) => (
          <TeamCard team={team} key={team.name} />
        ))}
      </Grid>
    </>
  );
};

export default TeamCards;
