import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const FormSelect = ({ disabled, children, className, ...props }) => {
    const formSelectClasses = classnames(
        'fd-form__control',
        className
    );

    return (
        <select
            {...props}
            className={formSelectClasses}
            disabled={disabled}>
            {children}
        </select>
    );
};

FormSelect.displayName = 'FormSelect';

FormSelect.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool
};

export default FormSelect;
