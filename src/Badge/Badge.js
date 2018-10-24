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
    type: PropTypes.string,
    modifier: PropTypes.string
};

export const Label = props => {
    const { type, children } = props;
    return <span className={`fd-label${type ? ' fd-label--' + type : ''}`}>{children}</span>;
};

Label.propTypes = {
    type: PropTypes.string
};

export const Status = props => {
    const { type, glyph, children } = props;
    return (
        <span
            className={`fd-status-label${type ? ' fd-status-label--' + type : ''}${glyph ? ' sap-icon--' + glyph : ''}`}
        >
            {children}
        </span>
    );
};
Status.propTypes = {
    type: PropTypes.string,
    glyph: PropTypes.string
};
