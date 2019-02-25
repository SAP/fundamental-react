import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const ProductTileContent = props => {
    const { title, children, className, titleProps, ...rest } = props;

    const tileProductContentClasses = classnames(
        'fd-product-tile__content',
        className
    );

    return (
        <div {...rest} className={tileProductContentClasses}>
            <h2 {...titleProps} className='fd-product-tile__title'>{title}</h2>
            {children}
        </div>
    );
};

ProductTileContent.displayName = 'ProductTileContent';

ProductTileContent.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    titleProps: PropTypes.object
};

export default ProductTileContent;
