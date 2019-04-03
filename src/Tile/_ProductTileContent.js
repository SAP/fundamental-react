import classnames from 'classnames';
import CustomPropTypes from '../utils/CustomPropTypes/CustomPropTypes';
import PropTypes from 'prop-types';
import React from 'react';

const ProductTileContent = props => {
    const { title, children, className, headingLevel, titleProps, ...rest } = props;

    const tileProductContentClasses = classnames(
        'fd-product-tile__content',
        className
    );

    const HeadingTag = `h${headingLevel}`;

    return (
        <div {...rest} className={tileProductContentClasses}>
            <HeadingTag {...titleProps} className='fd-product-tile__title'>{title}</HeadingTag>
            {children}
        </div>
    );
};

ProductTileContent.displayName = 'ProductTile.Content';

ProductTileContent.propTypes = {
    className: PropTypes.string,
    headingLevel: CustomPropTypes.range(2, 6),
    title: PropTypes.string,
    titleProps: PropTypes.object
};

ProductTileContent.defaultProps = {
    headingLevel: 3
};

export default ProductTileContent;
