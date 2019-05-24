import React from 'react';
import TileContent from './_TileContent';

const ProductTileContent = props => {
    const { title } = props;

    return (<TileContent productTile title={title}
        {...props} />);
};

ProductTileContent.displayName = 'ProductTile.Content';

export default ProductTileContent;
