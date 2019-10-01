import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import withStyles from '../utils/WithStyles/WithStyles';

const FormSelect = React.forwardRef(({ disabled, children, className, disableStyles, ...props }, ref) => {
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
    customStyles: PropTypes.object,
    disabled: PropTypes.bool,
    disableStyles: PropTypes.bool
};

export { FormSelect as __FormSelect };

export default withStyles(FormSelect, { cssFile: 'form-select', fonts: true });
