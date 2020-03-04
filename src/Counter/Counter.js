import classnames from 'classnames';
import CustomPropTypes from '../utils/CustomPropTypes/CustomPropTypes';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

const Counter = React.forwardRef(({ localizedText, notification, children, className, disableStyles, ...props }, ref) => {

    useEffect(() => {
        if (!disableStyles) {
            require('fundamental-styles/dist/counter.css');
        }
    }, []);

    const counterClasses = classnames(
        'fd-counter',
        {
            'fd-counter--notification': notification
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
    children: PropTypes.node,
    className: PropTypes.string,
    disableStyles: PropTypes.bool,
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
