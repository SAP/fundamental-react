import classnames from 'classnames';
import { ICON_SIZES } from '../utils/constants';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

/** Icons are used throughout the UI to save space, allow for visual clarity
and focus, and for fun. Icons can be used adaptively if desired, but at
this point they are used more as visual elements within other
components. */
const Icon = React.forwardRef(({ glyph, size, className, disableStyles, ...props }, ref) => {

    useEffect(() => {
        if (!disableStyles) {
            require('fundamental-styles/dist/icon.css');
        }
    }, []);

    const iconClasses = classnames(
        {
            [`sap-icon--${glyph}`]: !!glyph,
            [`sap-icon--${size}`]: !!size
        },
        className
    );

    return (
        <span
            {...props}
            className={iconClasses}
            ref={ref} />
    );
});

Icon.displayName = 'Icon';

Icon.propTypes = {
    /** The icon to include. See the icon page for the list of icons */
    glyph: PropTypes.string.isRequired,
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** Internal use only */
    disableStyles: PropTypes.bool,
    /** Size of the component: 's', 'm', 'l', 'xl' */
    size: PropTypes.oneOf(ICON_SIZES)
};

export default Icon;
