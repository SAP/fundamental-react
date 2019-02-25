import classnames from 'classnames';
import CustomPropTypes from '../utils/CustomPropTypes/CustomPropTypes';
import PropTypes from 'prop-types';
import React from 'react';

const TileGrid = props => {
    const { col, children, className, ...rest } = props;

    const tileGridClasses = classnames(
        'fd-tile-grid',
        `fd-tile-grid--${col}col`,
        className
    );

    return (
        <div
            {...rest}
            className={tileGridClasses}>
            {children}
        </div>
    );
};
TileGrid.displayName = 'TileGrid';

TileGrid.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    col: CustomPropTypes.range(1, 6)
};

TileGrid.defaultProps = {
    col: 3
};

export default TileGrid;
