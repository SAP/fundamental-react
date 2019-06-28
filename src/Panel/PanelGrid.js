import classnames from 'classnames';
import CustomPropTypes from '../utils/CustomPropTypes/CustomPropTypes';
import PropTypes from 'prop-types';
import React from 'react';

const PanelGrid = props => {
    const { nogap, cols, children, className, ...rest } = props;

    const panelGridClasses = classnames(
        'fd-panel-grid',
        {
            'fd-panel-grid--nogap': nogap,
            [`fd-panel-grid--${cols}col`]: !!cols
        },
        className
    );

    return (
        <div
            {...rest}
            className={panelGridClasses}>
            {children}
        </div>
    );
};

PanelGrid.displayName = 'PanelGrid';

PanelGrid.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    cols: CustomPropTypes.range(1, 6),
    nogap: PropTypes.bool
};

PanelGrid.propDescriptions = {
    cols: 'The number of columns in the grid.',
    nogap: 'Set to **true** to remove the margins between the panels.'
};

export default PanelGrid;
