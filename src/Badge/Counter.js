import classnames from 'classnames';
import CustomPropTypes from '../utils/CustomPropTypes/CustomPropTypes';
import PropTypes from 'prop-types';
import React from 'react';

const Counter = ({ localizedText, notification, children, className, ...props }) => {
    const counterClasses = classnames(
        'fd-counter',
        {
            'fd-counter--notification': notification
        },
        className
    );

    return (
        <span {...props} aria-label={localizedText.counterLabel}
            className={counterClasses}>
            {children}
        </span>
    );
};
Counter.displayName = 'Counter';

Counter.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    localizedText: CustomPropTypes.i18n({
        counterLabel: PropTypes.string
    }),
    notification: PropTypes.bool
};

Counter.defaultProps = {
    localizedText: {
        counterLabel: 'Unread count'
    }
};

Counter.propDescriptions = {
    localizedTextShape: {
        counterLabel: 'The aria-label for the <span> element.'
    },
    notification: 'Set to **true** to enable counter with notification.'
};

export default Counter;
