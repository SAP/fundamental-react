import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const ProductTileMedia = props => {
    const { image, className, ...rest } = props;

    const tileProductMediaClasses = classnames(
        'fd-product-tile__media',
        className
    );

    return (
        <div
            {...rest}
            className={tileProductMediaClasses}
            style={{ backgroundImage: 'url(' + image + ')' }} />
    );
};

ProductTileMedia.displayName = 'ProductTileMedia';

ProductTileMedia.propTypes = {
    image: PropTypes.string.isRequired,
    className: PropTypes.string
};

ProductTileMedia.propDescriptions = {
    image: 'URL of the image.'
};

export default ProductTileMedia;
