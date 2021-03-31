import React from 'react';
import './App.css';
import Home from './Pages/Home/Home';
import { Switch, Route } from 'react-router-dom';
import Sidebar from './Components/Sidebar/Sidebar';
import TodoList from './Pages/TodoList/TodoList';
import Headbar from './Components/Headbar/Headbar';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, ThemeProvider, Toolbar } from '@material-ui/core';
import TimeTracker from './Pages/TimeTracker/TimeTracker';
import Notes from './Pages/Notes/Notes';
// import { Dark, Light } from './Theme';
import { createMuiTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function App() {
  const classes = useStyles();
  const [darkMode, setDarkMode] = React.useState(false);
  const theme = createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <CssBaseline />
        <Headbar setDarkMode={setDarkMode} darkMode={darkMode} />
        <Sidebar />
        <div className={classes.root}>
          <main className={classes.content}>
            <Toolbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/todos" component={TodoList} />
              <Route exact path="/timetracker" component={TimeTracker} />
              <Route exact path="/notes" component={Notes} />
            </Switch>
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
