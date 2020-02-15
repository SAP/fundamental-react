import classnames from 'classnames';
import PropTypes from 'prop-types';
import { STATUS_TYPES } from '../utils/constants';
import React, { useEffect } from 'react';

const Status = React.forwardRef(({ type, glyph, children, className, disableStyles, ...props }, ref) => {

    useEffect(() => {
        if (!disableStyles) {
            require('fundamental-styles/dist/fonts.css');
            require('fundamental-styles/dist/icon.css');
            require('fundamental-styles/dist/status-label.css');
        }
    }, []);

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
            className={statusClasses}
            ref={ref}>
            {children}
        </span>
    );
});
Status.displayName = 'Status';

Status.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    disableStyles: PropTypes.bool,
    glyph: PropTypes.string,
    type: PropTypes.oneOf(STATUS_TYPES)
};

export { Status as __Status };

export default Status;
