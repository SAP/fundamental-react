import classnames from 'classnames';
import CustomPropTypes from '../utils/CustomPropTypes/CustomPropTypes';
import PropTypes from 'prop-types';
import { IDENTIFIER_MODIFIERS, IDENTIFIER_SIZES } from '../utils/constants';
import React, { useEffect } from 'react';

/** An **Identifier** is a visual presentation option around using an icon or user initials. */

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
    /** Image URL */
    backgroundImageUrl: PropTypes.string,
    /** Node(s) to render within the component */
    children: PropTypes.node,
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** Applies a background color */
    color: CustomPropTypes.range(1, 9),
    /** Internal use only */
    disableStyles: PropTypes.bool,
    /** The icon to include. See the icon page for the list of icons */
    glyph: PropTypes.string,
    /** Localized text for label */
    label: PropTypes.string,
    /** Sets a style variation for a modified appearance: 'circle', 'transparent' */
    modifier: PropTypes.oneOf(IDENTIFIER_MODIFIERS),
    /** Applies an aria-role. Set to button if Identifier opens a Popover or Dialog */
    role: PropTypes.string,
    /** Size of the component:  'xxs',
    'xs',
    's',
    'm',
    'l',
    'xl',
    'xxl' */
    size: PropTypes.oneOf(IDENTIFIER_SIZES)
};

export default Identifier;
