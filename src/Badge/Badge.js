import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';


export const Badge = ({ type, modifier, children, className, ...props }) => {
    const badgeClasses = classnames(
        'fd-badge',
        {
            'fd-badge--success': type === 'success',
            'fd-badge--warning': type === 'warning',
            'fd-badge--error': type === 'error',
            'fd-badge--pill': modifier === 'pill',
            'fd-badge--filled': modifier === 'filled'
        },
        className
    );

    return (
        <span {...props} className={badgeClasses}>
            {children}
        </span>
    );
};

Badge.propTypes = {
    className: PropTypes.string,
    modifier: PropTypes.oneOf(['', 'pill', 'filled']),
    type: PropTypes.oneOf(['', 'success', 'warning', 'error'])
};

export const Label = ({ type, children, className, ...props }) => {
    const labelClasses = classnames(
        'fd-label',
        {
            'fd-label--success': type === 'success',
            'fd-label--warning': type === 'warning',
            'fd-label--error': type === 'error'
        },
        className
    );

    return <span {...props} className={labelClasses}>{children}</span>;
};

Label.propTypes = {
    className: PropTypes.string,
    type: PropTypes.oneOf(['', 'success', 'warning', 'error'])
};

export const Status = ({ type, glyph, children, className, ...props } ) => {
    const statusClasses = classnames(
        'fd-status-label',
        {
            'fd-status-label--success': type === 'success',
            'fd-status-label--warning': type === 'warning',
            'fd-status-label--error': type === 'error',
            'fd-status-label--available': type === 'available',
            'fd-status-label--away': type === 'away',
            'fd-status-label--busy': type === 'busy',
            'fd-status-label--offline': type === 'offline',
            [`sap-icon--${glyph}`]: glyph
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
Status.propTypes = {
    className: PropTypes.string,
    glyph: PropTypes.string,
    type: PropTypes.oneOf(['', 'success', 'warning', 'error', 'available', 'away', 'busy', 'offline'])
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

Counter.propTypes = {
    className: PropTypes.string,
    notification: PropTypes.bool
};
