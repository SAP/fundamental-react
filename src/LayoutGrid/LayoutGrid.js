import classnames from 'classnames';
import CustomPropTypes from '../utils/CustomPropTypes/CustomPropTypes';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

const LayoutGrid = React.forwardRef(({ nogap, cols, children, className, colSpan, disableStyles, ...props }, ref) => {

    useEffect(() => {
        if (!disableStyles) {
            require('fundamental-styles/dist/layout-grid.css');
        }
    }, []);

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
    children: PropTypes.node,
    className: PropTypes.string,
    cols: CustomPropTypes.range(1, 6),
    colSpan: CustomPropTypes.range(2, 6),
    disableStyles: PropTypes.bool,
    nogap: PropTypes.bool
};

LayoutGrid.propDescriptions = {
    cols: 'The number of columns in the grid.',
    nogap: 'Set to **true** to remove the margins between the panels.'
};

export { LayoutGrid as __LayoutGrid };

export default LayoutGrid;
