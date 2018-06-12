import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import './css/global-styles';

ReactDOM.render(<App />, document.getElementById('root'));

window.addEventListener('beforeunload', e => {
  var confirmationMessage = 'Refreshing will lose your data, continue?';
  e.returnValue = confirmationMessage; // Gecko, Trident, Chrome 34+
  return confirmationMessage; // Gecko, WebKit, Chrome <34
});
