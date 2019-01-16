import PropTypes from 'prop-types';
import React from 'react';

export const Image = ({ size, type, photo, className, ...props }) => {
    return (
        <span
            className={`${'fd-image--' + size}${type ? ' fd-image--' + type : ''}${className ? ' ' + className : ''}`}
            style={{ backgroundImage: 'url(' + photo + ')' }} {...props} />
    );
};

Image.propTypes = {
    photo: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['s', 'm', 'l']).isRequired,
    className: PropTypes.string,
    type: PropTypes.oneOf(['', 'circle'])
};
