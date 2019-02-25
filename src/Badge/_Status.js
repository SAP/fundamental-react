import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { BADGE_MODIFIERS, BADGE_TYPES, STATUS_TYPES } from '../utils/constants';


export const Badge = ({ type, modifier, children, className, ...props }) => {
    const badgeClasses = classnames(
        'fd-badge',
        {
            [`fd-badge--${type}`]: !!type,
            [`fd-badge--${modifier}`]: !!modifier
        },
        className
    );

    return (
        <span {...props} className={badgeClasses}>
            {children}
        </span>
    );
};
Badge.displayName = 'Badge';

Badge.propTypes = {
    className: PropTypes.string,
    modifier: PropTypes.oneOf(BADGE_MODIFIERS),
    type: PropTypes.oneOf(BADGE_TYPES)
};

export const Status = ({ type, glyph, children, className, ...props }) => {
    const statusClasses = classnames(
        'fd-status-label',
        {
            [`fd-status-label--${type}`]: !!type,
            [`sap-icon--${glyph}`]: !!glyph
        },
        className
    );

    return (
        <span
            {...props}
            className={statusClasses}>
            {children}
        </span>
    );
};
Status.displayName = 'Status';

Status.propTypes = {
    className: PropTypes.string,
    glyph: PropTypes.string,
    type: PropTypes.oneOf(STATUS_TYPES)
};

export const Counter = ({ notification, children, className, ...props }) => {
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
