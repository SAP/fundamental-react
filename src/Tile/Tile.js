import 'fundamental-styles/dist/tile.css';
import 'fundamental-styles/dist/product-tile.css';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import TileActions from './_TileActions';
import TileContent from './_TileContent';
import TileMedia from './_TileMedia';

const Tile = props => {
    const {
        disabled,
        backgroundImage,
        children,
        className,
        productTile,
        ...rest
    } = props;

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
            className={tileClasses}>
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
};

Tile.displayName = 'Tile';

Tile.propTypes = {
    backgroundImage: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    productTile: PropTypes.bool
};

Tile.propDescriptions = {
    backgroundImage: 'URL of the background image for product tile.',
    productTile: 'Set to **true** to mark component as a product tile.'
};

Tile.Actions = TileActions;
Tile.Content = TileContent;
Tile.Media = TileMedia;

export default Tile;
