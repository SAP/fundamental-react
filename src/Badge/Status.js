import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { STATUS_TYPES } from '../utils/constants';

const Status = ({ type, glyph, children, className, ...props }) => {
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
    children: PropTypes.node,
    className: PropTypes.string,
    glyph: PropTypes.string,
    type: PropTypes.oneOf(STATUS_TYPES)
};

export default Status;
