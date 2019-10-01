import classnames from 'classnames';
import CustomPropTypes from '../utils/CustomPropTypes/CustomPropTypes';
import PropTypes from 'prop-types';
import React from 'react';
import withStyles from '../utils/WithStyles/WithStyles';
import { IDENTIFIER_MODIFIERS, IDENTIFIER_SIZES } from '../utils/constants';

const Identifier = React.forwardRef(({ glyph, size, modifier, color, label, backgroundImageUrl, children, className, disableStyles, ...props }, ref) => {
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

    const ariaRole = !children ? 'presentation' : '';

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
    customStyles: PropTypes.object,
    disableStyles: PropTypes.bool,
    glyph: PropTypes.string,
    label: PropTypes.string,
    modifier: PropTypes.oneOf(IDENTIFIER_MODIFIERS),
    size: PropTypes.oneOf(IDENTIFIER_SIZES)
};

Identifier.propDescriptions = {
    backgroundImageUrl: 'Image URL.',
    color: 'Applies a background color.',
    label: 'Localized text for label.',
    size: 'Size of the image. These sizes are available: **xxs** (extra extra small) - 20px, **xs** (extra small) - 28px, **s** (small) - 32px, **m** (medium) - 48px, **l** (large) - 64px, **xl** (extra lagre) - 88px, and **xxl** (extra extra large). Default matches the base font size (14px).'
};

export { Identifier as __Identifier };

export default withStyles(Identifier, { cssFile: ['helpers', 'identifier'], icons: true });
