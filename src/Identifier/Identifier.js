import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

export const Identifier = ({ glyph, size, modifier, color, label, backgroundImageUrl, children, className, ...props }) => {
    const styles = {
        backgroundImage: `url(${backgroundImageUrl})`
    };
    const identifierClasses = classnames(
        {
            'fd-identifier': !!size === false,
            'fd-identifier--xxs': size === 'xxs',
            'fd-identifier--xs': size === 'xs',
            'fd-identifier--s': size === 's',
            'fd-identifier--m': size === 'm',
            'fd-identifier--l': size === 'l',
            'fd-identifier--xl': size === 'xl',
            'fd-identifier--xxl': size === 'xxl',
            [`sap-icon--${glyph}`]: glyph,
            'fd-identifier--circle': modifier === 'circle',
            'fd-identifier--transparent': modifier === 'transparent',
            'fd-has-background-color-accent-1': color === 1,
            'fd-has-background-color-accent-2': color === 2,
            'fd-has-background-color-accent-3': color === 3,
            'fd-has-background-color-accent-4': color === 4,
            'fd-has-background-color-accent-5': color === 5,
            'fd-has-background-color-accent-6': color === 6,
            'fd-has-background-color-accent-7': color === 7,
            'fd-has-background-color-accent-8': color === 8,
            'fd-has-background-color-accent-9': color === 9,
            'fd-identifier--thumbnail': backgroundImageUrl
        },
        className
    );

    return (
        <span
            aria-label={label}
            className={identifierClasses}
            style={backgroundImageUrl && styles} {...props}>
            {children}
        </span>
    );
};

Identifier.propTypes = {
    backgroundImageUrl: PropTypes.string,
    className: PropTypes.string,
    color: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9]),
    glyph: PropTypes.string,
    label: PropTypes.string,
    modifier: PropTypes.oneOf(['', 'circle', 'transparent']),
    size: PropTypes.oneOf(['', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl' ])
};
