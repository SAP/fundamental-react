import classnames from 'classnames';
import ProductTileContent from './_ProductTileContent';
import ProductTileMedia from './_ProductTileMedia';
import PropTypes from 'prop-types';
import React from 'react';

const ProductTile = props => {
    const { disabled, children, className, ...rest } = props;

    const tileProductClasses = classnames(
        'fd-product-tile',
        {
            'is-disabled': disabled
        },
        className
    );

    return (
        <div
            {...rest}
            className={tileProductClasses}>
            {children}
        </div>
    );
};

ProductTile.displayName = 'ProductTile';

ProductTile.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool
};

ProductTile.Content = ProductTileContent;
ProductTile.Media = ProductTileMedia;

export default ProductTile;
