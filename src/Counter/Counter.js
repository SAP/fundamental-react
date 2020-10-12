import classnamesBind from 'classnames/bind';
import CustomPropTypes from '../utils/CustomPropTypes/CustomPropTypes';
import PropTypes from 'prop-types';
import React from 'react';
import withStyles from '../utils/withStyles';
import styles from 'fundamental-styles/dist/counter.css';

const classnames = classnamesBind.bind(styles);

/** Status Indicators are used to easily highlight the state of an object. */
const Counter = React.forwardRef(({ localizedText, notification, children, className, cssNamespace, ...props }, ref) => {

    const counterClasses = classnames(
        `${cssNamespace}-counter`,
        {
            [`${cssNamespace}-counter--notification`]: notification
        },
        className
    );

    return (
        <span {...props} aria-label={localizedText.counterLabel}
            className={counterClasses}
            ref={ref}>
            {children}
        </span>
    );
});
Counter.displayName = 'Counter';

Counter.propTypes = {
    /** Node(s) to render within the component */
    children: PropTypes.node,
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** Localized text to be updated based on location/language */
    localizedText: CustomPropTypes.i18n({
        /** The aria-label for the <span> element */
        counterLabel: PropTypes.string
    }),
    /** Set to **true** to enable counter with notification */
    notification: PropTypes.bool
};

Counter.defaultProps = {
    localizedText: {
        counterLabel: 'Unread count'
    }
};

export default withStyles(Counter);
