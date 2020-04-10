import { BUSY_INDICATOR_SIZES } from '../utils/constants';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

const BusyIndicator = React.forwardRef(({
    children,
    className,
    size,
    disableStyles,
    ...props
}, ref) => {

    useEffect(() => {
        if (!disableStyles) {
            require('fundamental-styles/dist/icon.css');
            require('fundamental-styles/dist/busy-indicator.css');
        }
    }, []);

    const busyIndicatorClasses = classnames(
        {
            [`fd-busy-indicator--${size}`]: !!size
        },
        className
    );

    return (
        <div
            {...props}
            className={busyIndicatorClasses}
            ref={ref} >
            <div className='fd-busy-indicator--circle-0' />
            <div className='fd-busy-indicator--circle-1' />
            <div className='fd-busy-indicator--circle-2' />
        </div>
    );
});

BusyIndicator.displayName = 'BusyIndicator';

BusyIndicator.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    disableStyles: PropTypes.bool,
    size: PropTypes.oneOf(BUSY_INDICATOR_SIZES)
};

BusyIndicator.defaultProps = {
    size: 'm'
};

export default BusyIndicator;
