import 'fundamental-styles/dist/form-message.css';
import classnames from 'classnames';
import { FORM_MESSAGE_TYPES } from '../utils/constants';
import PropTypes from 'prop-types';
import React from 'react';

const FormMessage = ({ type, children, className, ...props }) => {
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
            className={formMessageClasses}>
            {children}
        </span>
    );
};

FormMessage.displayName = 'FormMessage';

FormMessage.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    type: PropTypes.oneOf(FORM_MESSAGE_TYPES)
};

export default FormMessage;
