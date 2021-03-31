import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AccountCircle } from '@material-ui/icons';
import Dark from '@material-ui/icons/Brightness4';
import Light from '@material-ui/icons/Brightness7';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  title: {
    flex: 1,
  },
}));

const Headbar = ({ setDarkMode, darkMode }) => {
  const classes = useStyles();
  // const handleChange = () => setDark(!dark);
  return (
    <AppBar position="absolute" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" className={classes.title} noWrap>
          Productivity
        </Typography>
        <IconButton onClick={() => setDarkMode(!darkMode)}>{darkMode ? <Light /> : <Dark />}</IconButton>
        <IconButton edge="end">
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Headbar;
