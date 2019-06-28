import classnames from 'classnames';
import CustomPropTypes from '../utils/CustomPropTypes/CustomPropTypes';
import PropTypes from 'prop-types';
import React from 'react';
import TileActions from './_TileActions';
import TileContent from './_TileContent';
import TileMedia from './_TileMedia';

const Tile = props => {
    const {
        disabled,
        rowSpan,
        columnSpan,
        colorAccent,
        backgroundColor,
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
            'is-disabled': disabled,
            [`fd-has-grid-row-span-${rowSpan}`]: !!rowSpan,
            [`fd-has-grid-column-span-${columnSpan}`]: !!columnSpan,
            [`fd-has-background-color-accent-${colorAccent}`]: !!colorAccent,
            [`fd-has-background-color-background-${backgroundColor}`]: !!backgroundColor
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
    backgroundColor: PropTypes.number,
    backgroundImage: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    colorAccent: PropTypes.number,
    columnSpan: CustomPropTypes.range(1, 6),
    disabled: PropTypes.bool,
    productTile: PropTypes.bool,
    rowSpan: PropTypes.number
};

Tile.propDescriptions = {
    backgroundColor: 'Sets a background color class.',
    backgroundImage: 'URL of the background image for product tile.',
    colorAccent: 'Sets a background color accent class. Options include numbers from 1 to 9.',
    columnSpan: 'Number of columns the tile covers.',
    productTile: 'Set to **true** to mark component as a product tile.',
    rowSpan: 'Number of rows the tile covers.'
};

Tile.Actions = TileActions;
Tile.Content = TileContent;
Tile.Media = TileMedia;

export default Tile;
