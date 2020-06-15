import { BUSY_INDICATOR_SIZES } from '../utils/constants';
import classnames from 'classnames';
import CustomPropTypes from '../utils/CustomPropTypes/CustomPropTypes';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

/** A **Busy Indicator** informs the user of an ongoing operation. */
const BusyIndicator = React.forwardRef(({
    className,
    show,
    size,
    disableStyles,
    localizedText,
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
            [`fd-busy-indicator--${size}`]: size === 'm' || size === 'l',
            'fd-busy-indicator': size === 's'
        },
        className
    );

    if (!show)
        return null;

    return (
        <div
            {...props}
            aria-hidden='false'
            aria-label={localizedText.loading}
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
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** Internal use only */
    disableStyles: PropTypes.bool,
    /** Localized text to be updated based on location/language */
    localizedText: CustomPropTypes.i18n({
        /** aria-label for Busy Indicator component */
        loading: PropTypes.string
    }),
    /** Set to **true** to make Busy Indicator visible */
    show: PropTypes.bool,
    /** Size of the component: 's', 'm' or 'l' */
    size: PropTypes.oneOf(BUSY_INDICATOR_SIZES)
};

BusyIndicator.defaultProps = {
    localizedText: {
        loading: 'Loading'
    },
    size: 'm',
    show: false
};

export default BusyIndicator;
