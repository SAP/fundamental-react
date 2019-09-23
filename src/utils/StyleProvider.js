import PropTypes from 'prop-types';
import React from 'react';
import { STYLE_LOOKUP } from './styleLookup';

export default (WrappedComponent) => {
    const componentName = WrappedComponent.displayName || WrappedComponent.name;

    const withStyles = (props) => {
        const {
            disableStyles,
            customStyles,
            useIcons,
            ...otherProps
        } = props;
        console.log(disableStyles)
        if (!disableStyles) {
            if (STYLE_LOOKUP[componentName].fonts) {
                require('fundamental-styles/dist/fonts.css');
            }

            if (useIcons) {
                require('fundamental-styles/dist/icon.css');
            }

            customStyles ? customStyles : require('../../node_modules/fundamental-styles/dist/' + STYLE_LOOKUP[componentName].name + '.css');
        }

        return (
            <WrappedComponent {...otherProps} />
        );
    };

    withStyles.displayName = componentName;

    withStyles.propTypes = {
        customStyles: PropTypes.object,
        disableStyles: PropTypes.bool,
        useIcons: PropTypes.bool
    };

    return withStyles;
};
