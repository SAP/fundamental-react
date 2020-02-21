import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

const FormSelect = React.forwardRef(({ disabled, children, className, disableStyles, ...props }, ref) => {

    useEffect(() => {
        if (!disableStyles) {
            require('fundamental-styles/dist/fonts.css');
            require('fundamental-styles/dist/form-select.css');
        }
    }, []);

    const formSelectClasses = classnames(
        'fd-form-select',
        className
    );

    return (
        <select
            {...props}
            className={formSelectClasses}
            disabled={disabled}
            ref={ref}>
            {children}
        </select>
    );
});

FormSelect.displayName = 'FormSelect';

FormSelect.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,

    disabled: PropTypes.bool,
    disableStyles: PropTypes.bool
};

export default FormSelect;
