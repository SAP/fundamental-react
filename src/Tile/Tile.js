import classnames from 'classnames';
import PropTypes from 'prop-types';
import TileActions from './_TileActions';
import TileContent from './_TileContent';
import TileMedia from './_TileMedia';
import React, { useEffect } from 'react';

const Tile = React.forwardRef(({
    disabled,
    backgroundImage,
    children,
    className,
    disableStyles,
    productTile,
    ...rest

}, ref) => {

    useEffect(() => {
        if (!disableStyles) {
            require('fundamental-styles/dist/fonts.css');
            require('fundamental-styles/dist/tile.css');
            require('fundamental-styles/dist/product-tile.css');
        }
    }, []);

    const tileClasses = classnames(
        {
            'fd-tile': !productTile,
            'fd-product-tile': productTile,
            'is-disabled': disabled
        },
        className
    );

    return (
        <div
            {...rest}
            className={tileClasses}
            ref={ref}>
            {productTile &&
                <div className='fd-product-tile__media' style={{ backgroundImage: 'url(' + backgroundImage + ')' }} />
            }
            {React.Children.toArray(children).map(child => {
                const isAction = child.type && child.type.displayName === 'Tile.Actions';

                if (isAction) {
                    return child;
                }

                return React.cloneElement(child, {
                    productTile: productTile
                });
            })}
        </div>
    );
});

Tile.displayName = 'Tile';

Tile.propTypes = {
    backgroundImage: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    disableStyles: PropTypes.bool,
    productTile: PropTypes.bool
};

Tile.propDescriptions = {
    backgroundImage: 'URL of the background image for product tile.',
    productTile: 'Set to **true** to mark component as a product tile.'
};

Tile.Actions = TileActions;
Tile.Content = TileContent;
Tile.Media = TileMedia;

export { Tile as __Tile };

export default Tile;
