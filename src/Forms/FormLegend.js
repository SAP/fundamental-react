import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const FormLegend = ({ children, className, ...props }) => {
    const formLegendClasses = classnames(
        'fd-form__legend',
        className
    );

    return (
        <legend
            {...props}
            className={formLegendClasses}>
            {children}
        </legend>
    );
};

FormLegend.displayName = 'FormLegend';

FormLegend.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

export default FormLegend;
