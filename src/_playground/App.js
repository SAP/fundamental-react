import './App.scss';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { HelmetProvider } from 'react-helmet-async';
import { Routes } from './Routes';
import ThemeProvider from '../ThemeProvider/ThemeProvider';
import React, { useState } from 'react';

const ThemeToggleContext = React.createContext();
export const useTheme = () => React.useContext(ThemeToggleContext);

const App = () => {

    let [themeState, setThemeState] = useState('default');

    const toggle = (e) => {
        setThemeState(e.target.value);
    };

    return (
        <HelmetProvider>
            <ThemeToggleContext.Provider value={{ toggle: toggle }}>
                <ThemeProvider theme={themeState}>
                    <div className='frDocs-App'>
                        <Routes />
                    </div>
                </ThemeProvider>
            </ThemeToggleContext.Provider>
        </HelmetProvider>
    );
};

export default App;
