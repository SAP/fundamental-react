import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

export const Image = ({ size, type, photo, className, ...props }) => {
    const imageClasses = classnames(
        {
            'fd-image--s': size === 's',
            'fd-image--m': size === 'm',
            'fd-image--l': size === 'l',
            'fd-image--circle': type === 'circle'
        },
        className
    );
    return (
        <span
            className={imageClasses}
            style={{ backgroundImage: 'url(' + photo + ')' }} {...props} />
    );
};

Image.propTypes = {
    photo: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['s', 'm', 'l']).isRequired,
    className: PropTypes.string,
    type: PropTypes.oneOf(['', 'circle'])
};
