import 'fundamental-styles/dist/image.css';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { IMAGE_SIZES, IMAGE_TYPES } from '../utils/constants';

const Image = ({ size, type, photo, className, ...props }) => {
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

Image.displayName = 'Image';

Image.propTypes = {
    photo: PropTypes.string.isRequired,
    size: PropTypes.oneOf(IMAGE_SIZES).isRequired,
    className: PropTypes.string,
    type: PropTypes.oneOf(IMAGE_TYPES)
};

Image.propDescriptions = {
    photo: 'Picture URL.'
};

export default Image;
