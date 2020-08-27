import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AlertDialog from "./components/modal";

import "./styles.css";
import Orders from "./components/orders";
import Order from "./components/order";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    background: "#e0f2f1",
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
});

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Orders />
          </Route>
          <Route path="/create">
            <Order />
          </Route>
          <Route path="/order/:id">
            <Order />
          </Route>
        </Switch>
      </Router>
      <AlertDialog />
    </div>
  );
}
