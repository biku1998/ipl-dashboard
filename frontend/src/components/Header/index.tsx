import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/core/styles";
import { ReactElement } from "react";
import logo from "../../assets/ipl_logo.jpeg";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";

function ElevationScroll(props: { children: ReactElement }) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
  appBar: {},
  customizedToolBar: {
    minHeight: 65,
  },
  logo: {
    cursor: "pointer",
    width: "50px",
    height: "50px",
    marginRight: "0.5rem",
    "& img": {
      width: "100%",
      height: "100%",
      borderRadius: "50%",
    },
  },
  brandName: {
    cursor: "pointer",
    fontSize: "1.5em",
    fontWeight: 650,
  },
}));

const Header = ({ children, ...other }: { children?: ReactElement }) => {
  const history = useHistory();
  const classes = useStyles();
  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed" color="primary">
          <Toolbar className={classes.customizedToolBar}>
            <div className={classes.logo} onClick={() => history.push("/")}>
              <img src={logo} alt="logo" />
            </div>
            <Typography
              className={classes.brandName}
              onClick={() => history.push("/")}
            >
              IPL Dashboard
            </Typography>
            {children}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
};

export default Header;
