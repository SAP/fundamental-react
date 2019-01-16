import PropTypes from 'prop-types';
import React from 'react';

export const Badge = ({ type, modifier, children, className, ...props }) => {
    return (
        <span className={`fd-badge${type ? ' fd-badge--' + type : ''}${modifier ? ' fd-badge--' + modifier : ''}${className ? ' ' + className : ''}`} {...props}>
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
    return <span className={`fd-label${type ? ' fd-label--' + type : ''}${className ? ' ' + className : ''}`} {...props}>{children}</span>;
};

Label.propTypes = {
    className: PropTypes.string,
    type: PropTypes.oneOf(['', 'success', 'warning', 'error'])
};

export const Status = ({ type, glyph, children, className, ...props } ) => {
    return (
        <span
            className={`fd-status-label${type ? ' fd-status-label--' + type : ''}${glyph ? ' sap-icon--' + glyph : ''}${className ? ' ' + className : ''}`} {...props}>
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
    return (
        <span aria-label='Unread count' className={`fd-counter${notification ? ' fd-counter--notification' : ''}${className ? ' ' + className : ''}`}
            {...props}>
            {children}
        </span>
    );
};

Counter.propTypes = {
    className: PropTypes.string,
    notification: PropTypes.bool
};
