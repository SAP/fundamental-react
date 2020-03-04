import classnames from 'classnames';
import CustomPropTypes from '../utils/CustomPropTypes/CustomPropTypes';
import PropTypes from 'prop-types';
import { IDENTIFIER_MODIFIERS, IDENTIFIER_SIZES } from '../utils/constants';
import React, { useEffect } from 'react';

const Identifier = React.forwardRef(({ glyph, size, modifier, color, label, backgroundImageUrl, children, className, disableStyles, role, ...props }, ref) => {

    useEffect(() => {
        if (!disableStyles) {
            require('fundamental-styles/dist/icon.css');
            require('fundamental-styles/dist/helpers.css');
            require('fundamental-styles/dist/identifier.css');
        }
    }, []);

    const styles = {
        backgroundImage: `url(${backgroundImageUrl})`
    };
    const identifierClasses = classnames(
        'fd-identifier',
        {
            [`fd-identifier--${size}`]: !!size,
            [`sap-icon--${glyph}`]: !!glyph,
            [`fd-identifier--${modifier}`]: !!modifier,
            [`fd-has-background-color-accent-${color}`]: !!color,
            'fd-identifier--thumbnail': backgroundImageUrl
        },
        className
    );

    let ariaRole;
    if (role) {
        ariaRole = role;
    } else {
        ariaRole = !children ? 'presentation' : '';
    }

    return (
        <span
            {...props}
            aria-label={label}
            className={identifierClasses}
            ref={ref}
            role={ariaRole}
            style={backgroundImageUrl && styles}>
            {children}
        </span>
    );
});

Identifier.displayName = 'Identifier';

Identifier.propTypes = {
    backgroundImageUrl: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    color: CustomPropTypes.range(1, 9),
    disableStyles: PropTypes.bool,
    glyph: PropTypes.string,
    label: PropTypes.string,
    modifier: PropTypes.oneOf(IDENTIFIER_MODIFIERS),
    role: PropTypes.string,
    size: PropTypes.oneOf(IDENTIFIER_SIZES)
};

Identifier.propDescriptions = {
    backgroundImageUrl: 'Image URL.',
    color: 'Applies a background color.',
    label: 'Localized text for label.',
    role: 'Applies an aria-role. Set to button if Identifier opens a Popover or Dialog.',
    size: 'Size of the image. These sizes are available: **xxs** (extra extra small) - 20px, **xs** (extra small) - 28px, **s** (small) - 32px, **m** (medium) - 48px, **l** (large) - 64px, **xl** (extra lagre) - 88px, and **xxl** (extra extra large). Default matches the base font size (14px).'
};

export default Identifier;
