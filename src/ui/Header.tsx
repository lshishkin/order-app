import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { colors } from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      background: "#90caf9"
    },
    link: {
      cursor: "pointer"
    },
    img: {
      maxWidth: 200
    }
  })
);

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Link to={"/"} className={classes.link}>
        <img
          className={classes.img}
          alt="character"
          src="https://uploads.codesandbox.io/uploads/user/c83d422d-9513-48cd-a1e1-ea75cd6f1273/8XN--logo-truck.png"
        />
      </Link>
    </div>
  );
};

export default Header;
