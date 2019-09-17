import 'fundamental-styles/dist/textarea.css';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const FormTextarea = ({ children, className, ...props }) => {
    const formTextAreaClasses = classnames(
        'fd-textarea',
        className
    );

    return (
        <textarea
            {...props}
            className={formTextAreaClasses}>
            {children}
        </textarea>
    );
};

FormTextarea.displayName = 'FormTextarea';

FormTextarea.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

export default FormTextarea;
