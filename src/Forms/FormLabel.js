import classnamesBind from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import withStyles from '../utils/withStyles';
import styles from 'fundamental-styles/dist/form-label.css';

const classnames = classnamesBind.bind(styles);

/** A **FormLabel** is used to identify form components such as
 * **FormInput**, **Checkbox** and **TextArea**. Best practice is to use this component as a child of **FormGroup**. */
const FormLabel = React.forwardRef(({
    required,
    children,
    className,
    cssNamespace,
    disabled,
    isInlineHelp,
    includeColon,
    ...props
}, ref) => {

    const formLabelClasses = classnames(
        `${cssNamespace}-form-label`,
        {
            'is-disabled': disabled,
            [`${cssNamespace}-form-label--inline-help`]: isInlineHelp,
            [`${cssNamespace}-form-label--required`]: required,
            [`${cssNamespace}-form-label--colon`]: includeColon
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
    /** Set to **true** to add the `:` character at the end of a label as pseudo element.*/
    includeColon: PropTypes.bool,
    /** Set to **true** if child is InlineHelp component */
    isInlineHelp: PropTypes.bool,
    /** Set to **true** for required input fields */
    required: PropTypes.bool
};

export default withStyles(FormLabel);
