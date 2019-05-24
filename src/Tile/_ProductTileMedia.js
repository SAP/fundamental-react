import PropTypes from 'prop-types';
import React from 'react';
import TileMedia from './_TileMedia';

const ProductTileMedia = props => {
    const { image } = props;
    return (
        <TileMedia productTile {...props}
            style={{ backgroundImage: 'url(' + image + ')' }} />
    );
};

ProductTileMedia.displayName = 'ProductTile.Media';

ProductTileMedia.propTypes = {
    image: PropTypes.string.isRequired
};

ProductTileMedia.propDescriptions = {
    image: 'URL of the image.'
};

export default ProductTileMedia;
