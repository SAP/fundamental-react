import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

export const Identifier = ({ glyph, size, modifier, color, label, backgroundImageUrl, children, className, ...props }) => {
    const styles = {
        backgroundImage: `url(${backgroundImageUrl})`
    };
    const identifierClasses = classnames(
        {
            'fd-identifier': !size,
            [`fd-identifier--${size}`]: !!size,
            [`sap-icon--${glyph}`]: !!glyph,
            [`fd-identifier--${modifier}`]: !!modifier,
            [`fd-has-background-color-accent-${color}`]: !!color,
            'fd-identifier--thumbnail': backgroundImageUrl
        },
        className
    );

    return (
        <span
            {...props}
            aria-label={label}
            className={identifierClasses}
            role={`${!children ? 'presentation' : ''}`}
            style={backgroundImageUrl && styles}>
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
