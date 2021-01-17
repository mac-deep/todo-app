import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Timelapse, Assignment } from "@material-ui/icons";
import TodoList from "./TodoList/TodoList";
import TimeTracker from "./TimeTracker";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });
  const [component, setComponent] = useState("");

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      style={{ backgroundColor: "rgba(255, 166, 0, 0.671)", height: "100%" }}
    >
      <Avatar className={classes.large} />
      <p>Deep Makadiya</p>
      <List>
        <ListItem button onClick={(e) => setComponent("TodoList")}>
          <ListItemIcon>
            <Assignment />
          </ListItemIcon>
          <ListItemText primary="Todos" />
        </ListItem>
        <ListItem button onClick={(e) => setComponent("TimeTracker")}>
          <ListItemIcon>
            <Timelapse />
          </ListItemIcon>
          <ListItemText primary="Time Tracker" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {["left"].map((anchor) => (
            <React.Fragment key={anchor}>
              <IconButton
                onClick={toggleDrawer(anchor, true)}
                style={{ color: "white" }}
              >
                <MenuIcon />
              </IconButton>

              <SwipeableDrawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
                onOpen={toggleDrawer(anchor, true)}
              >
                {list(anchor)}
              </SwipeableDrawer>
            </React.Fragment>
          ))}
          <Typography variant="h6" className={classes.title}>
            Productivity
          </Typography>
        </Toolbar>
      </AppBar>

      {/* -----Component to render----- */}
      {component === "TodoList" ? (
        <TodoList />
      ) : component === "TimeTracker" ? (
        <TimeTracker />
      ) : (
        <h1>Welcome...</h1>
      )}
    </div>
  );
}
