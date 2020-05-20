import { AVATAR_SIZES } from '../utils/constants';
import classnames from 'classnames';
import CustomPropTypes from '../utils/CustomPropTypes/CustomPropTypes';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

/** An **Identifier** is a visual presentation option around using an icon or user initials. */

const Identifier = React.forwardRef(({ glyph, size, circle, transparent, border, color, label, backgroundImageUrl, children, className, disableStyles, role, placeholder, tile, zoom, ...props }, ref) => {

    useEffect(() => {
        if (!disableStyles) {
            require('fundamental-styles/dist/icon.css');
            require('fundamental-styles/dist/helpers.css');
            require('fundamental-styles/dist/avatar.css');
        }
    }, []);

    const styles = {
        backgroundImage: `url(${backgroundImageUrl})`
    };
    const avatarClasses = classnames(
        'fd-avatar',
        {
            [`fd-avatar--${size}`]: !!size,
            [`sap-icon--${glyph}`]: !!glyph,
            [`fd-has-background-color-accent-${color}`]: !!color,
            'fd-avatar--thumbnail': backgroundImageUrl,
            'fd-avatar--placeholder': placeholder,
            'fd-avatar--tile': tile,
            'fd-avatar--circle': circle,
            'fd-avatar--transparent': transparent,
            'fd-avatar--border': border
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
            className={avatarClasses}
            ref={ref}
            role={ariaRole}
            style={backgroundImageUrl && styles}>
            {zoom && <span className='fd-avatar__zoom-icon sap-icon--edit' role='presentation' />}
            {children}
        </span>
    );
});

Identifier.displayName = 'Identifier';

Identifier.propTypes = {
    /** Image URL */
    backgroundImageUrl: PropTypes.string,
    /** Include a border */
    border: PropTypes.bool,
    /** Node(s) to render within the component */
    children: PropTypes.node,
    /** Apply circl style to Avatar */
    circle: PropTypes.bool,
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
    /** Apply placeholder background color */
    placeholder: PropTypes.bool,
    /** Applies an aria-role. Set to button if Identifier opens a Popover or Dialog */
    role: PropTypes.string,
    /** Size of the component:
    'xs',
    's',
    'm',
    'l',
    'xl' */
    size: PropTypes.oneOf(AVATAR_SIZES),
    /** Apply tile background color */
    tile: PropTypes.bool,
    /** Use transparent background */
    transparent: PropTypes.bool,
    /** Include a zoom icon */
    zoom: PropTypes.bool
};

export default Identifier;
