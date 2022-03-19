import React from 'react';
import ReactDOM from 'react-dom';
import NAV from './components/navbar/App.jsx';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './mui/theme';

const rootElement = document.getElementById('body');

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <NAV />
  </ThemeProvider>,
  rootElement
);
