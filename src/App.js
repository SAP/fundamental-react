import React, { Component } from 'react';
import './App.scss';
import Routes from './Routes';
import '@babel/polyfill';

class App extends Component {
  render() {
    return (
        <div className='App'>
            <Routes />
        </div>
    );
  }
}

export default App;
