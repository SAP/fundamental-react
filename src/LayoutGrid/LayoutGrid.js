import 'fundamental-styles/dist/layout-grid.css';
import classnames from 'classnames';
import CustomPropTypes from '../utils/CustomPropTypes/CustomPropTypes';
import PropTypes from 'prop-types';
import React from 'react';

const LayoutGrid = props => {
    const { nogap, cols, children, className, colSpan, ...rest } = props;

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
            {...rest}
            className={layoutGridClasses}>
            {children}
        </div>
    );
};

LayoutGrid.displayName = 'LayoutGrid';

LayoutGrid.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    cols: CustomPropTypes.range(1, 6),
    colSpan: CustomPropTypes.range(2, 6),
    nogap: PropTypes.bool
};

LayoutGrid.propDescriptions = {
    cols: 'The number of columns in the grid.',
    nogap: 'Set to **true** to remove the margins between the panels.'
};

export default LayoutGrid;
