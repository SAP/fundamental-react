import React from 'react';
import TileContent from './_TileContent';
/*eslint-disable*/

//  need to be able to have product Tile to be passed through this without having to name it
const ProductTileContent = props => {
    console.log(props);
    return (<TileContent productTile {...props} />);
};

ProductTileContent.displayName = 'ProductTile.Content';

export default ProductTileContent;
