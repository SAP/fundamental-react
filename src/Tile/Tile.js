import classnamesBind from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import TileContent from './_TileContent';
import TileFooter from './_TileFooter';
import TileHeader from './_TileHeader';
import withStyles from '../utils/withStyles';
import styles from 'fundamental-styles/dist/tile.css';

const classnames = classnamesBind.bind(styles);

/** A **Tile** can be used to represent an app similar to the SAP Fiori launchpad home page.
 * They can display different types of content, which are based on the data supplied by the app.
 * They can contain an icon, a title, an informative text, KPIs, counters and charts. */

const Tile = React.forwardRef(({
    disabled,
    backgroundImage,
    children,
    className,
    cssNamespace,
    isDouble,
    onClick,
    size,
    ...rest
}, ref) => {

    const tileClasses = classnames(
        `${cssNamespace}-tile`,
        {
            [`${cssNamespace}-tile--${size}`]: size === 's',
            [`${cssNamespace}-tile--double`]: isDouble,
            'is-disabled': disabled
        },
        className
    );

    return (
        <div
            {...rest}
            className={tileClasses}
            onClick={onClick}
            ref={ref}
            role='button'
            tabIndex='0'>
            {children}
        </div>
    );
});

Tile.displayName = 'Tile';

Tile.propTypes = {
    /** Callback function when user clicks on the component*/
    onClick: PropTypes.func.isRequired,
    /** URL of the background image for product tile */
    backgroundImage: PropTypes.string,
    /** Node(s) to render within the component */
    children: PropTypes.node,
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** Set to **true** to mark component as disabled and make it non-interactive */
    disabled: PropTypes.bool,
    /** Set to **true** to increase tile dimensions to 2x1 */
    isDouble: PropTypes.bool,
    /** Default tiles are designed for screens larger than 374px. For smaller screens use 's' */
    size: PropTypes.oneOf(['s'])
};

Tile.Content = TileContent;
Tile.Header = TileHeader;
Tile.Footer = TileFooter;

export default withStyles(Tile);
