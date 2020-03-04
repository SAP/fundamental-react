import classnames from 'classnames';
import PropTypes from 'prop-types';
import TileActions from './_TileActions';
import TileContent from './_TileContent';
import TileMedia from './_TileMedia';
import React, { useEffect } from 'react';

const Tile = React.forwardRef(({
    active,
    disabled,
    backgroundImage,
    children,
    className,
    disableStyles,
    onClick,
    productTile,
    tabIndex,
    ...rest
}, ref) => {

    useEffect(() => {
        if (!disableStyles) {
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

    const onTileClick = (event) => {
        onClick(event);
    };

    //to prevent tile click handler from getting called.
    const onActionClick = event => {
        event.stopPropagation();
        return;
    };

    const activeProps = active ? { role: 'button', tabIndex } : { tabIndex };
    rest = { ...activeProps, ...rest };

    return (
        <div
            {...rest}
            className={tileClasses}
            onClick={onTileClick}
            ref={ref}>
            {productTile &&
                <div className='fd-product-tile__media' style={{ backgroundImage: 'url(' + backgroundImage + ')' }} />
            }
            {React.Children.toArray(children).map(child => {
                const isAction = child.type && child.type.displayName === 'Tile.Actions';

                if (isAction) {
                    return React.cloneElement(child, {
                        onClick: onActionClick
                    });
                }

                return React.cloneElement(child, {
                    productTile: productTile
                });
            })}
        </div>
    );
});
Tile.defaultProps = {
    tabIndex: 0
};

Tile.displayName = 'Tile';

Tile.propTypes = {
    active: PropTypes.bool,
    backgroundImage: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    disableStyles: PropTypes.bool,
    productTile: PropTypes.bool,
    tabIndex: PropTypes.number,
    onClick: PropTypes.func
};

Tile.propDescriptions = {
    active: 'Add the attribute to make the tile clickable.',
    backgroundImage: 'URL of the background image for product tile.',
    onClick: 'Listener to be called on tile click.',
    productTile: 'Set to **true** to mark component as a product tile.',
    tabIndex: 'Tab Index to be provided for the tab root node.'
};

Tile.Actions = TileActions;
Tile.Content = TileContent;
Tile.Media = TileMedia;

export default Tile;
