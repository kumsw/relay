import React from "react";
import { makeStyles, createStyles, Theme, Typography } from "@material-ui/core";
import Login from "../components/Login";
import image from "../assets/welcome-screen.png";
import { lavenderBlush } from "theme";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    welcome: {
      backgroundColor: lavenderBlush,
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    welcomeBody: {
      margin: theme.spacing(2),
    },
    image: {
      width: "80%",
    },
  })
);

const Welcome: React.FC<{ signIn: () => void; user: any }> = ({
  signIn,
  user,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.welcome} data-testid="welcome-page">
      <Typography variant="h1" data-testid="welcome-title">
        Welcome
      </Typography>
      <img
        className={classes.image}
        src={image}
        alt="welcome screen"
        data-testid="welcome-img"
      />
      <Typography
        variant="body1"
        className={classes.welcomeBody}
        data-testid="welcome-body"
      >
        Are you ready to start your own race?
      </Typography>
      <Login signIn={signIn} user={user} />
    </div>
  );
};

export default Welcome;