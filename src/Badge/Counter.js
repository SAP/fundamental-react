import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const Counter = ({ notification, children, className, ...props }) => {
    const counterClasses = classnames(
        'fd-counter',
        {
            'fd-counter--notification': notification
        },
        className
    );

    return (
        <span {...props} aria-label='Unread count'
            className={counterClasses}>
            {children}
        </span>
    );
};
Counter.displayName = 'Counter';

Counter.propTypes = {
    className: PropTypes.string,
    notification: PropTypes.bool
};

Counter.propDescriptions = {
    notification: 'Set to **true** to enable counter with notification.'
};

export default Counter;
