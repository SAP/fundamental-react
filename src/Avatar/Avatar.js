import { AVATAR_SIZES } from '../utils/constants';
import classnamesBind from 'classnames/bind';
import CustomPropTypes from '../utils/CustomPropTypes/CustomPropTypes';
import PropTypes from 'prop-types';
import React from 'react';
// eslint-disable-next-line sort-imports
import iconStyles from 'fundamental-styles/dist/icon.css';
// eslint-disable-next-line sort-imports
import avatarStyles from 'fundamental-styles/dist/avatar.css';

const classnames = classnamesBind.bind({
    ...iconStyles,
    ...avatarStyles
});

/** An **Avatar** is a visual presentation option around using an icon or user initials. */

const Avatar = React.forwardRef(({ glyph, size, circle, transparent, border, color, label, backgroundImageUrl, children, className, role, placeholder, tile, zoom, ...props }, ref) => {

    const styles = {
        backgroundImage: `url(${backgroundImageUrl})`
    };
    const avatarClasses = classnames(
        'fd-avatar',
        {
            [`fd-avatar--${size}`]: !!size,
            [`sap-icon--${glyph}`]: !!glyph,
            [`fd-avatar--accent-color-${color}`]: !!color,
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
            {zoom && <span className={classnames('fd-avatar__zoom-icon', 'sap-icon--edit')} role='presentation' />}
            {children}
        </span>
    );
});

Avatar.displayName = 'Avatar';

Avatar.propTypes = {
    /** Image URL */
    backgroundImageUrl: PropTypes.string,
    /** Set to **true** to include a border */
    border: PropTypes.bool,
    /** Node(s) to render within the component */
    children: PropTypes.node,
    /** Apply circl style to Avatar */
    circle: PropTypes.bool,
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** Applies a background color */
    color: CustomPropTypes.range(1, 9),
    /** The icon to include. See the icon page for the list of icons */
    glyph: PropTypes.string,
    /** Localized text for label */
    label: PropTypes.string,
    /** Set to **true** to apply placeholder background color */
    placeholder: PropTypes.bool,
    /** Applies an aria-role. Set to button if Avatar opens a Popover or Dialog */
    role: PropTypes.string,
    /** Size of the component:
    'xs',
    's',
    'm',
    'l',
    'xl' */
    size: PropTypes.oneOf(AVATAR_SIZES),
    /** Set to **true** to apply tile background color */
    tile: PropTypes.bool,
    /** Set to **true** to use transparent background */
    transparent: PropTypes.bool,
    /** Set to **true** to include a zoom icon */
    zoom: PropTypes.bool
};

export default Avatar;
