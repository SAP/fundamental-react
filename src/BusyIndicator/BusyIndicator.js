import { BUSY_INDICATOR_SIZES } from '../utils/constants';
import classnamesBind from 'classnames/bind';
import CustomPropTypes from '../utils/CustomPropTypes/CustomPropTypes';
import PropTypes from 'prop-types';
import React from 'react';
import withStyles from '../utils/withStyles';
import styles from 'fundamental-styles/dist/busy-indicator.css';

const classnames = classnamesBind.bind(styles);

/** A **Busy Indicator** informs the user of an ongoing operation. */
const BusyIndicator = React.forwardRef(({
    className,
    cssNamespace,
    show,
    size,
    localizedText,
    ...props
}, ref) => {

    const busyIndicatorClasses = classnames(
        {
            [`${cssNamespace}-busy-indicator--${size}`]: size === 'm' || size === 'l',
            [`${cssNamespace}-busy-indicator`]: size === 's'
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
            <div className={classnames(`${cssNamespace}-busy-indicator--circle-0`)} />
            <div className={classnames(`${cssNamespace}-busy-indicator--circle-1`)} />
            <div className={classnames(`${cssNamespace}-busy-indicator--circle-2`)} />
        </div>
    );
});

BusyIndicator.displayName = 'BusyIndicator';

BusyIndicator.propTypes = {
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
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

export default withStyles(BusyIndicator);
