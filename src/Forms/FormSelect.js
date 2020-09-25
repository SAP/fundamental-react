import classnamesBind from 'classnames/bind';
import { FORM_MESSAGE_TYPES } from '../utils/constants';
import PropTypes from 'prop-types';
import React from 'react';
import styles from 'fundamental-styles/dist/form-select.css';

const classnames = classnamesBind.bind(styles);

/** A **FormSelect** is similar to a **Dropdown** but is more commonly used within a form. It can also be
set to a disabled state. */
const FormSelect = React.forwardRef(({ disabled, children, className, compact, state, ...props }, ref) => {

    const formSelectClasses = classnames(
        'fd-form-select',
        { [`is-${state}`]: state,
            'fd-form-select--compact': compact },
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
    /** Node(s) to render within the component */
    children: PropTypes.node,
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** Set to **true** to enable compact mode */
    compact: PropTypes.bool,
    /** Set to **true** to mark component as disabled and make it non-interactive */
    disabled: PropTypes.bool,
    /** State of validation: 'error', 'warning', 'information', 'success' */
    state: PropTypes.oneOf(FORM_MESSAGE_TYPES)
};

export default FormSelect;
