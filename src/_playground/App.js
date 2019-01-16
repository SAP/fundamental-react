import './App.scss';
import '@babel/polyfill';
import Routes from './Routes';
import React, { Component } from 'react';

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
