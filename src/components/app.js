import React from 'react';
import Wayfinder from './wayfinder/wayfinder.js';
import gpTheme from '../css/theme';
import { ThemeProvider } from 'styled-components';

export default class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={gpTheme}>
        <Wayfinder />
      </ThemeProvider>
    );
  }
}
