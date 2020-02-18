/* eslint-disable default-case */
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

const ThemeContext = React.createContext(null);

function ThemeProvider(props) {
    const { children, theme, disableStyles } = props;
    useEffect(() => {
        if (!disableStyles) {
            //require fonts and icons
            require('fundamental-styles/dist/fonts.css');
            require('fundamental-styles/dist/icon.css');
        }
    }, []);

    useEffect(() => {
        if (!disableStyles) {
            // css variable root declarations
            console.log(theme)
            switch (theme) {
                case 'dark':
                    require('@sap-theming/theming-base-content/content/Base/baseLib/sap_fiori_3_dark/css_variables.css');
                    break;
                case 'light-dark':
                    require('@sap-theming/theming-base-content/content/Base/baseLib/sap_fiori_3_light_dark/css_variables.css');
                    break;
                case 'default':
                    require('@sap-theming/theming-base-content/content/Base/baseLib/sap_fiori_3/css_variables.css');
                    break;
            }
        }
    }, [theme]);


    return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
}

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
    disableStyles: PropTypes.bool,
    theme: PropTypes.oneOf(['dark', 'light-dark', 'default'])
};

export default ThemeProvider;

