import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

export const Icon = ({ glyph, size, clickHandler, className, ...props }) => {
    const iconClasses = classnames(
        {
            [`sap-icon--${glyph}`]: glyph,
            'sap-icon--xxs': size === 'xxs',
            'sap-icon--xs': size === 'xs',
            'sap-icon--s': size === 's',
            'sap-icon--m': size === 'm',
            'sap-icon--l': size === 'l',
            'sap-icon--xl': size === 'xl',
            'sap-icon--xxl': size === 'xxl'
        },
        className
    );

    return (
        <span
            {...props}
            className={iconClasses}
            onClick={clickHandler} />
    );
};

Icon.defaultProps = {
    clickHandler: () => {}
};

Icon.propTypes = {
    glyph: PropTypes.string.isRequired,
    className: PropTypes.string,
    clickHandler: PropTypes.func,
    size: PropTypes.oneOf(['', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl' ])
};
