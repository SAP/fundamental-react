import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import 'fundamental-styles/dist/form-label.css';

/** A **FormLabel** is used to identify form components such as
 * **FormInput**, **Checkbox** and **TextArea**. Best practice is to use this component as a child of **FormGroup**. */
const FormLabel = React.forwardRef(({
    required,
    children,
    className,
    disabled,
    isInlineHelp,
    ...props
}, ref) => {

    const formLabelClasses = classnames(
        'fd-form-label',
        {
            'is-disabled': disabled,
            'fd-form-label--inline-help': isInlineHelp,
            'fd-form-label--required': required
        },
        className
    );

    return (
        <label
            {...props}
            aria-required={required}
            className={formLabelClasses}
            ref={ref}>
            {children}
        </label>
    );
});

FormLabel.displayName = 'FormLabel';

FormLabel.propTypes = {
    /** Node(s) to render within the component */
    children: PropTypes.node,
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** Set to **true** to mark component as disabled and make it non-interactive */
    disabled: PropTypes.bool,
    /** Set to **true** if child is InlineHelp component */
    isInlineHelp: PropTypes.bool,
    /** Set to **true** for required input fields */
    required: PropTypes.bool
};

export default FormLabel;
