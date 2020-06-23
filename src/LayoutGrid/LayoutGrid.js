import classnames from 'classnames';
import CustomPropTypes from '../utils/CustomPropTypes/CustomPropTypes';
import PropTypes from 'prop-types';
import React from 'react';
import 'fundamental-styles/dist/layout-grid.css';

/** **LayoutGrid** can be used to arrange components evenly in a grid layout. */
const LayoutGrid = React.forwardRef(({ nogap, cols, children, className, colSpan, ...props }, ref) => {

    const layoutGridClasses = classnames(
        'fd-layout-grid',
        {
            'fd-layout-grid--no-gap': nogap,
            [`fd-layout-grid--col-${cols}`]: !!cols
        },
        className
    );

    return (
        <div
            {...props}
            className={layoutGridClasses}
            ref={ref}>
            {children}
        </div>
    );
});

LayoutGrid.displayName = 'LayoutGrid';

LayoutGrid.propTypes = {
    /** Node(s) to render within the component */
    children: PropTypes.node,
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** The number of columns in the grid */
    cols: CustomPropTypes.range(1, 6),
    /** The number of columns to span */
    colSpan: CustomPropTypes.range(2, 6),
    /** Set to **true** to remove the margins between the panels */
    nogap: PropTypes.bool
};

export default LayoutGrid;
