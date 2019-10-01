import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import withStyles from '../utils/WithStyles/WithStyles';

const FormLabel = React.forwardRef(({ required, children, className, disabled, disableStyles, ...props }, ref) => {
    const formLabelClasses = classnames(
        'fd-form-label',
        { 'is-disabled': disabled },
        className
    );

    return (
        <label
            {...props}
            aria-required={required}
            className={formLabelClasses}
            ref={ref}>
            {children}
            {required ? '*' : ''}
        </label>
    );
});

FormLabel.displayName = 'FormLabel';

FormLabel.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    customStyles: PropTypes.object,
    disabled: PropTypes.bool,
    disableStyles: PropTypes.bool,
    required: PropTypes.bool
};

FormLabel.propDescriptions = {
    required: 'Set to **true** for required input fields.'
};

export { FormLabel as __FormLabel };

export default withStyles(FormLabel, { cssFile: 'form-label', fonts: true });
