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
    /** Size of the component: 's', 'm', 'l' */
    size: PropTypes.oneOf(IMAGE_SIZES).isRequired,
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** Internal use only */
    disableStyles: PropTypes.bool,
    /** Sets the variation of the component. Primarily used for styling: 'circle' */
    type: PropTypes.oneOf(IMAGE_TYPES)
};

Image.propDescriptions = {
    photo: 'Picture URL.'
};

export default Image;
