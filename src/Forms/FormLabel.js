import 'fundamental-styles/dist/form-label.css';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const FormLabel = ({ required, children, className, disabled, ...props }) => {
    const formLabelClasses = classnames(
        'fd-form-label',
        { 'is-disabled': disabled },
        className
    );

    return (
        <label
            {...props}
            aria-required={required}
            className={formLabelClasses}>
            {children}
            {required ? '*' : ''}
        </label>
    );
};

FormLabel.displayName = 'FormLabel';

FormLabel.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    required: PropTypes.bool
};

FormLabel.propDescriptions = {
    required: 'Set to **true** for required input fields.'
};

export default FormLabel;
