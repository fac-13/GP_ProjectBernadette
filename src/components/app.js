import React from 'react';
import Wayfinder from './wayfinder/wayfinder.js';
import { ThemeProvider } from 'styled-components';

// Grandparents Plus brand colors
const theme = {
  color: {
    orange: '#ec632f',
    yellow: '#fdc800',
    navy: '#1c2243',
    blue: '#669dad',
    white: '#FFF',
    graydark: '#575756',
    graymid: '#b2b2b2',
    graylight: '#dadada'
  },
  weight: {
    lead: '900',
    link: '600',
    body: '300'
  }
};

export default class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Wayfinder />
      </ThemeProvider>
    );
  }
}
