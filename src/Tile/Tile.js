import classnames from 'classnames';
import PropTypes from 'prop-types';
import TileActions from './_TileActions';
import TileContent from './_TileContent';
import TileMedia from './_TileMedia';
import React, { useEffect } from 'react';

/** A **Tile** can be used to display information in a simple container format.
A collection of tiles can be displayed using **LayoutGrid** */
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
    /** Add the attribute to make the tile clickable */
    active: PropTypes.bool,
    /** URL of the background image for product tile */
    backgroundImage: PropTypes.string,
    /** Node(s) to render within the component */
    children: PropTypes.node,
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** Set to **true** to mark component as disabled and make it non-interactive */
    disabled: PropTypes.bool,
    /** Internal use only */
    disableStyles: PropTypes.bool,
    /** Set to **true** to mark component as a product tile */
    productTile: PropTypes.bool,
    /** Tab Index to be provided for the tab root node */
    tabIndex: PropTypes.number,
    /** Callback function when user clicks on the component*/
    onClick: PropTypes.func
};

Tile.Actions = TileActions;
Tile.Content = TileContent;
Tile.Media = TileMedia;

export default Tile;
