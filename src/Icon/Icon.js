import classnames from 'classnames';
import { ICON_SIZES } from '../utils/constants';
import PropTypes from 'prop-types';
import React from 'react';

export const Icon = ({ glyph, size, clickHandler, className, ...props }) => {
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
            onClick={clickHandler} />
    );
};

Icon.propTypes = {
    glyph: PropTypes.string.isRequired,
    className: PropTypes.string,
    clickHandler: PropTypes.func,
    size: PropTypes.oneOf(ICON_SIZES)
};

Icon.propDescriptions = {
    clickHandler: 'Callback function when user clicks on the component.',
    size: 'Size of the icon. Options include **xs**, **s**, **compact**, and **l**. If no size is provided, default (normal) will be used.'
};
