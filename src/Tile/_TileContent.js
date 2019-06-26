import classnames from 'classnames';
import CustomPropTypes from '../utils/CustomPropTypes/CustomPropTypes';
import PropTypes from 'prop-types';
import React from 'react';

const TileContent = props => {
    const { title, children, className, headingLevel, titleProps, productTile, ...rest } = props;

    const tileContentClasses = classnames(
        {
            'fd-tile__content': !productTile,
            'fd-product-tile__content': productTile
        },
        className
    );

    const tileContentHeadingClass = classnames(
        {
            'fd-tile__title': !productTile,
            'fd-product-tile__title': productTile
        },
        className
    );

    const HeadingTag = `h${headingLevel}`;

    return (
        <div {...rest} className={tileContentClasses}>
            <HeadingTag {...titleProps} className={tileContentHeadingClass}>{title}</HeadingTag>
            {children}
        </div>
    );
};

TileContent.displayName = 'Tile.Content';

TileContent.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
    className: PropTypes.string,
    headingLevel: CustomPropTypes.range(2, 6),
    productTile: PropTypes.bool,
    titleProps: PropTypes.object
};

TileContent.defaultProps = {
    headingLevel: 3
};

export default TileContent;
