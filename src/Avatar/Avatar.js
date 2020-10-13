import { AVATAR_SIZES } from '../utils/constants';
import classnamesBind from 'classnames/bind';
import CustomPropTypes from '../utils/CustomPropTypes/CustomPropTypes';
import Icon from '../Icon/Icon';
import PropTypes from 'prop-types';
import React from 'react';
import withStyles from '../utils/withStyles';
import avatarStyles from 'fundamental-styles/dist/avatar.css';
import iconStyles from 'fundamental-styles/dist/icon.css';

const classnames = classnamesBind.bind({
    ...iconStyles,
    ...avatarStyles
});

/** An **Avatar** is a visual presentation option around using an icon or user initials. */
const Avatar = React.forwardRef(({ glyph, size, circle, cssNamespace, transparent, border, color, label, backgroundImageUrl, children, className, role, placeholder, tile, zoom, zoomLabel, ...props }, ref) => {

    const styles = {
        backgroundImage: `url(${backgroundImageUrl})`
    };
    const avatarClasses = classnames(
        `${cssNamespace}-avatar`,
        {
            [`${cssNamespace}-avatar--${size}`]: !!size,
            [`${cssNamespace}-avatar--accent-color-${color}`]: !!color,
            [`${cssNamespace}-avatar--thumbnail`]: backgroundImageUrl,
            [`${cssNamespace}-avatar--placeholder`]: placeholder,
            [`${cssNamespace}-avatar--tile`]: tile,
            [`${cssNamespace}-avatar--circle`]: circle,
            [`${cssNamespace}-avatar--transparent`]: transparent,
            [`${cssNamespace}-avatar--border`]: border
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
            {glyph && <Icon ariaHidden className={classnames(`${cssNamespace}-avatar__icon`)}
                glyph={glyph} />}
            {zoom && <Icon ariaLabel={zoomLabel} className={classnames(`${cssNamespace}-avatar__zoom-icon`)}
                glyph={'edit'} />}
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
    zoom: PropTypes.bool,
    /** Localized text for zoom icon label */
    zoomLabel: PropTypes.string
};

export default withStyles(Avatar);
