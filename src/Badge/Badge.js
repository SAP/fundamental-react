import React from 'react';
import PropTypes from 'prop-types';

export const Badge = props => {
    const { type, modifier, children } = props;
    return (
        <span className={`fd-badge${type ? ' fd-badge--' + type : ''}${modifier ? ' fd-badge--' + modifier : ''}`}>
            {children}
        </span>
    );
};

Badge.propTypes = {
    modifier: PropTypes.oneOf(['', 'pill', 'filled']),
    type: PropTypes.oneOf(['', 'success', 'warning', 'error'])
};

export const Label = props => {
    const { type, children } = props;
    return <span className={`fd-label${type ? ' fd-label--' + type : ''}`}>{children}</span>;
};

Label.propTypes = {
    type: PropTypes.oneOf(['', 'success', 'warning', 'error'])
};

export const Status = props => {
    const { type, glyph, children } = props;
    return (
        <span
            className={`fd-status-label${type ? ' fd-status-label--' + type : ''}${glyph ? ' sap-icon--' + glyph : ''}`}>
            {children}
        </span>
    );
};
Status.propTypes = {
    glyph: PropTypes.string,
    type: PropTypes.oneOf(['', 'success', 'warning', 'error', 'available', 'away', 'busy', 'offline'])
};

export const Counter = props => {
    const { notification, children } = props;
    return (
        <span className={`fd-counter${notification ? ' fd-counter--notification' : ''}`} aria-label='Unread count'>
            {children}
        </span>
    );
};

Counter.propTypes = {
    notification: PropTypes.bool
};
