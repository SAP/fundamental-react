import './App.scss';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { HelmetProvider } from 'react-helmet-async';
import { Routes } from './Routes';
import React, { Component } from 'react';

class App extends Component {
    render() {
        return (
            <HelmetProvider>
                <div className='frDocs-App'>
                    <Routes />
                </div>
            </HelmetProvider>
        );
    }
}

export default App;
