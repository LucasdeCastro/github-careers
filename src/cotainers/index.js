import React, { Component } from 'react';

import App from './App';
import store from '../store';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

export default class extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    );
  }
}
