import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const FormSelect = React.forwardRef(({
    children,
    className,
    disabled,
    ...props
}, ref) => {
    const formSelectClasses = classnames(
        'fd-form__control',
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
    disabled: PropTypes.bool
};

export default FormSelect;
