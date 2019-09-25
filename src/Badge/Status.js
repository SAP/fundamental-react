import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { STATUS_TYPES } from '../utils/constants';
import withStyles from '../utils/StyleProvider';

const Status = ({ type, glyph, children, className, customStyles, disableStyles, useIcons, ...props }) => {
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
    customStyles: PropTypes.object,
    disableStyles: PropTypes.bool,
    glyph: PropTypes.string,
    type: PropTypes.oneOf(STATUS_TYPES),
    useIcons: PropTypes.bool
};

Status.defaultProps = {
    useIcons: true
};

export default withStyles(Status, { cssFile: 'status-label', font: true });
