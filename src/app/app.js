// The basics
import React, { Component } from 'react';
import { withRouter } from 'react-router';

// Action creators and helpers
import { isServer } from '../store';

import Routes from './routes';

import './app.css';

class App extends Component {
  componentWillMount() {
    if (!isServer) {
      console.log('mounted');
    }
  }

  render() {
    return (
      <div id="app">
        <div id="content">
          <Routes />
        </div>
      </div>
    );
  }
}

export default withRouter(App);
