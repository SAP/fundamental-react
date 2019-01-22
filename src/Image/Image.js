import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

export const Image = ({ size, type, photo, className, ...props }) => {
    const imageClasses = classnames(
        {
            [`fd-image--${size}`]: !!size,
            [`fd-image--${type}`]: !!type
        },
        className
    );
    return (
        <span
            {...props}
            className={imageClasses}
            style={{ backgroundImage: 'url(' + photo + ')' }} />
    );
};

Image.propTypes = {
    photo: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['s', 'm', 'l']).isRequired,
    className: PropTypes.string,
    type: PropTypes.oneOf(['', 'circle'])
};
