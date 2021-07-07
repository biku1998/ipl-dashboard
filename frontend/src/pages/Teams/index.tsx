import React from "react";
import Typography from "@material-ui/core/Typography";
import { dataFetcher } from "../../utils/utils";
import TeamCards from "../../components/TeamCards";

const Teams = () => {
  const [teams, setTeams] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      const resp = await dataFetcher("/teams?fields=name", "get");
      if (resp.success) {
        const { teams } = resp.data;
        if (teams) {
          setTeams(resp.data.teams);
        }
        setLoading(false);
      } else {
        alert(resp.reason);
        setLoading(false);
      }
    })();
  }, []);

  return (
    <>
      <Typography style={{ fontWeight: 650, fontSize: "2.5em" }}>
        Pick a team!
      </Typography>
      {loading ? "Loading ...." : <TeamCards teams={teams} />}
    </>
  );
};

export default Teams;
