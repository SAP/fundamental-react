import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const TileFooter = props => {
    const { children, className, ...rest } = props;

    const tileFooterClasses = classnames(
        'fd-tile__footer',
        className
    );

    return (
        <div {...rest} className={tileFooterClasses}>
            {children}
        </div>);
};

TileFooter.displayName = 'Tile.Footer';

TileFooter.propTypes = {
    /** Node(s) to render inside the header element */
    children: PropTypes.node,
    /** CSS class(es) to add to the element */
    className: PropTypes.string
};

export default TileFooter;
