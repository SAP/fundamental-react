import React from 'react';
import TileContent from './_TileContent';

const ProductTileContent = props => {
    return (<TileContent productTile {...props} />);
};

ProductTileContent.displayName = 'ProductTile.Content';

export default ProductTileContent;
