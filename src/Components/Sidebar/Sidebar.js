import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import SidebarData from './SidebarData';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  active: {
    color: theme.palette.text.secondary,
  },
}));

function Navbar() {
  const classes = useStyles();
  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Toolbar />
      <div className={classes.drawerContainer}>
        <List>
          {SidebarData.map((item, index) => {
            const { link, icon, title } = item;
            return (
              <NavLink to={link} activeClassName={classes.active}>
                <ListItem button>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText color="textPrimary" primary={title} />
                </ListItem>
              </NavLink>
            );
          })}
        </List>
      </div>
    </Drawer>
  );
}

export default Navbar;
