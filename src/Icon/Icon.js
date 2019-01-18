import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

export const Icon = ({ glyph, size, clickHandler, className, ...props }) => {
    const iconClasses = classnames(
        {
            [`sap-icon--${glyph}`]: glyph,
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

Icon.defaultProps = {
    clickHandler: () => {}
};

Icon.propTypes = {
    glyph: PropTypes.string.isRequired,
    className: PropTypes.string,
    clickHandler: PropTypes.func,
    size: PropTypes.oneOf(['', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl' ])
};
