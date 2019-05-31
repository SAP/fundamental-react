import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const TileMedia = props => {
    const { children, className, productTile, backgroundImage, ...rest } = props;

    const tileMediaClasses = classnames(
        {
            'fd-tile__media': !productTile,
            'fd-product-tile__media': productTile
        },
        className
    );

    return (
        <div {...rest} className={tileMediaClasses}
            style={{ backgroundImage: 'url(' + backgroundImage + ')' }}>{children}</div>);
};

TileMedia.displayName = 'Tile.Media';

TileMedia.propTypes = {
    backgroundImage: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string
};

TileMedia.propDescriptions = {
    backgroundImage: 'URL of the background image for product tile.'
};

export default TileMedia;
