import classnames from 'classnames';
import { FORM_MESSAGE_TYPES } from '../utils/constants';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

const FormMessage = React.forwardRef(({ type, children, className, disableStyles, ...props }, ref) => {

    useEffect(() => {
        if (!disableStyles) {
            require('fundamental-styles/dist/fonts.css');
            require('fundamental-styles/dist/icon.css');
            require('fundamental-styles/dist/form-message.css');
        }
    }, []);

    const formMessageClasses = classnames(
        'fd-form-message',
        {
            [`fd-form-message--${type}`]: !!type
        },
        className
    );
    return (
        <span
            {...props}
            className={formMessageClasses}
            ref={ref}>
            {children}
        </span>
    );
});

FormMessage.displayName = 'FormMessage';

FormMessage.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    disableStyles: PropTypes.bool,
    type: PropTypes.oneOf(FORM_MESSAGE_TYPES)
};

export default FormMessage;
