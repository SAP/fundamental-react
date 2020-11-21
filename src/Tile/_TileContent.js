import classnamesBind from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import withStyles from '../utils/withStyles';
import styles from 'fundamental-styles/dist/tile.css';

const classnames = classnamesBind.bind(styles);

const TileContent = props => {
    const { children, className, cssNamespace, twoColumns, ...rest } = props;

    const tileContentClasses = classnames(
        `${cssNamespace}-tile__content`,
        {
            [`${cssNamespace}-tile__content--2-col`]: twoColumns
        },
        className
    );

    return (
        <div {...rest} className={tileContentClasses}>
            {twoColumns ? React.Children.toArray(children).map(child => {
                return React.cloneElement(child, {
                    className: classnames(child.className, `${cssNamespace}-tile__section`)
                });
            }) : children }
        </div>
    );
};

TileContent.displayName = 'Tile.Content';

TileContent.propTypes = {
    /** Node(s) to render within the component */
    children: PropTypes.node,
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** Set to **true** to split TileContent into two columns with a 0.25rem vertical padding.
     * Any children must be wrapped in 2 top level `<div>` elements.
    */
    twoColumns: PropTypes.bool
};

export default withStyles(TileContent);
