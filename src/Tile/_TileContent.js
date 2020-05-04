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
    /** Localized text for the heading */
    title: PropTypes.string.isRequired,
    /** Node(s) to render within the component */
    children: PropTypes.node,
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** Heading level. `<h1>` is reserved for the page title. It should not appear in components */
    headingLevel: CustomPropTypes.range(2, 6),
    productTile: PropTypes.bool,
    /**Additional props to be spread to the title\'s heading element */
    titleProps: PropTypes.object
};

TileContent.defaultProps = {
    headingLevel: 3
};

export default TileContent;
