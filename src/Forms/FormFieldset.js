import 'fundamental-styles/dist/fieldset.css';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const FormFieldset = ({ children, className, ...props }) => {
    const formFieldsetClasses = classnames(
        'fd-fieldset',
        className
    );

    return (
        <fieldset
            {...props}
            className={formFieldsetClasses}>
            {children}
        </fieldset>
    );
};

FormFieldset.displayName = 'FormFieldset';

FormFieldset.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

export default FormFieldset;
