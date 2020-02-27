import classnames from 'classnames';
import { ICON_SIZES } from '../utils/constants';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

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
    glyph: PropTypes.string.isRequired,
    className: PropTypes.string,
    disableStyles: PropTypes.bool,
    size: PropTypes.oneOf(ICON_SIZES)
};

Icon.propDescriptions = {
    size: 'Size of the icon. Options include **xs**, **s**, **compact**, and **l**. If no size is provided, default (normal) will be used.'
};

export default Icon;
