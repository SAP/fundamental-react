import ProductTileContent from './_ProductTileContent';
import ProductTileMedia from './_ProductTileMedia';
import React from 'react';
import Tile from './Tile';

const ProductTile = props => {
    return (<Tile productTile {...props} />);
};

ProductTile.displayName = 'ProductTile';

ProductTile.Content = ProductTileContent;
ProductTile.Media = ProductTileMedia;

export default ProductTile;
