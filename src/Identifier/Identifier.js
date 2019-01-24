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
    size: PropTypes.string
};

Identifier.propDescriptions = {
    backgroundImageUrl: 'Image URL.',
    color: 'Applies a background color.',
    label: 'Localized text for label.',
    size: 'Size of the image. These sizes are available: **xxs** (extra extra small) - 20px, **xs** (extra small) - 28px, **s** (small) - 32px, **m** (medium) - 48px, **l** (large) - 64px, **xl** (extra lagre) - 88px, and **xxl** (extra extra large). Default matches the base font size (14px).'
};
