import classnames from 'classnames';
import CustomPropTypes from '../utils/CustomPropTypes/CustomPropTypes';
import PropTypes from 'prop-types';
import React from 'react';
import withStyles from '../utils/WithStyles/WithStyles';

const LayoutGrid = React.forwardRef(({ nogap, cols, children, className, colSpan, disableStyles, ...props }, ref) => {

    const layoutGridClasses = classnames(
        'fd-layout-grid',
        {
            'fd-layout-grid--nogap': nogap,
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
    customStyles: PropTypes.object,
    disableStyles: PropTypes.bool,
    nogap: PropTypes.bool
};

LayoutGrid.propDescriptions = {
    cols: 'The number of columns in the grid.',
    nogap: 'Set to **true** to remove the margins between the panels.'
};

export { LayoutGrid as __LayoutGrid };

export default withStyles(LayoutGrid, { cssFile: 'layout-grid' });
