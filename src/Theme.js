import { createMuiTheme } from '@material-ui/core/styles';

export const Light = createMuiTheme({
  palette: {
    type: 'light',
  },
});

export const Dark = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: 'rgba(0, 150, 0, 1)',
    },
  },
});
