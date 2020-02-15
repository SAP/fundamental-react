import classnames from 'classnames';
import PropTypes from 'prop-types';
import { IMAGE_SIZES, IMAGE_TYPES } from '../utils/constants';
import React, { useEffect } from 'react';

const Image = React.forwardRef(({ size, type, photo, className, disableStyles, ...props }, ref) => {

    useEffect(() => {
        if (!disableStyles) {
            require('fundamental-styles/dist/image.css');
        }
    }, []);

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
            ref={ref}
            style={{ backgroundImage: 'url(' + photo + ')' }} />
    );
});

Image.displayName = 'Image';

Image.propTypes = {
    photo: PropTypes.string.isRequired,
    size: PropTypes.oneOf(IMAGE_SIZES).isRequired,
    className: PropTypes.string,
    disableStyles: PropTypes.bool,
    type: PropTypes.oneOf(IMAGE_TYPES)
};

Image.propDescriptions = {
    photo: 'Picture URL.'
};

export { Image as __Image };

export default Image;
