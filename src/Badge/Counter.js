import classnames from 'classnames';
import CustomPropTypes from '../_playground/documentation/utils/CustomPropTypes';
import PropTypes from 'prop-types';
import React from 'react';

const Counter = ({ ariaLabel, notification, children, className, ...props }) => {
    const counterClasses = classnames(
        'fd-counter',
        {
            'fd-counter--notification': notification
        },
        className
    );

    return (
        <span {...props} aria-label={ariaLabel}
            className={counterClasses}>
            {children}
        </span>
    );
};
Counter.displayName = 'Counter';

Counter.propTypes = {
    className: PropTypes.string,
    localizedText: CustomPropTypes.i18n({
        ariaLabel: PropTypes.string
    }),
    notification: PropTypes.bool
};

Counter.defaultProps = {
    localizedText: {
        ariaLabel: 'Unread Count'
    }
};

Counter.propDescriptions = {
    notification: 'Set to **true** to enable counter with notification.'
};

export default Counter;
