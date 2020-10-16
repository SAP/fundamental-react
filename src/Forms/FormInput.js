import classnamesBind from 'classnames/bind';
import { FORM_MESSAGE_TYPES } from '../utils/constants';
import FormValidationOverlay from './_FormValidationOverlay';
import PropTypes from 'prop-types';
import React from 'react';
import withStyles from '../utils/withStyles';
import styles from 'fundamental-styles/dist/input.css';

const classnames = classnamesBind.bind(styles);
/** A **FormInput** is used to collect data from the user. When a field is required,
the \`required\` property will include an asterisk (*). */
const FormInput = React.forwardRef(({
    className,
    cssNamespace,
    compact,
    disabled,
    name,
    placeholder,
    readOnly,
    type,
    value,
    validationOverlayProps,
    validationState,
    ...props
}, ref) => {

    const formInputClasses = classnames(
        `${cssNamespace}-input`,
        {
            [`${cssNamespace}-input--compact`]: !!compact,
            [`is-${validationState?.state}`]: validationState?.state
        },
        className
    );

    const formInput = (
        <input
            {...props}
            className={formInputClasses}
            disabled={disabled}
            name={name}
            placeholder={placeholder}
            readOnly={readOnly}
            ref={ref}
            type={type}
            value={value} />
    );

    return validationState ? (
        <FormValidationOverlay
            {...validationOverlayProps}
            control={formInput}
            validationState={validationState} />
    ) : formInput;
});

FormInput.displayName = 'FormInput';

FormInput.propTypes = {
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** Set to **true** to enable compact mode */
    compact: PropTypes.bool,
    /** Set to **true** to mark component as disabled and make it non-interactive */
    disabled: PropTypes.bool,
    /** Value for the `name` attribute on the input */
    name: PropTypes.string,
    /** Localized placeholder text of the input */
    placeholder: PropTypes.string,
    /** Set to **true** to mark component as readonly */
    readOnly: PropTypes.bool,
    /** Value for the `type` attribute on the input */
    type: PropTypes.string,
    /** Additional props to be spread to the ValidationOverlay */
    validationOverlayProps: PropTypes.shape({
        /** Additional classes to apply to validation popover's outermost `<div>` element  */
        className: PropTypes.string,
        /** Additional props to be spread to the ValdiationOverlay's FormMessage component */
        formMessageProps: PropTypes.object,
        /** Additional classes to apply to validation popover's popper child `<div>` wrapping the provided children  */
        innerRefClassName: PropTypes.string,
        /** Additional classes to apply to validation popover's popper `<div>` element  */
        popperClassName: PropTypes.string,
        /** CSS class(es) to add to the ValidationOverlay's reference `<div>` element */
        referenceClassName: PropTypes.string,
        /** Additional props to be spread to the popover's outermost `<div>` element */
        wrapperProps: PropTypes.object
    }),
    /** An object identifying a validation message.  The object will include properties for `state` and `text`; _e.g._, \`{ state: \'warning\', text: \'This is your last warning\' }\` */
    validationState: PropTypes.shape({
        /** State of validation: 'error', 'warning', 'information', 'success' */
        state: PropTypes.oneOf(FORM_MESSAGE_TYPES),
        /** Text of the validation message */
        text: PropTypes.string
    }),
    /** Value for the `value` attribute on the input */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FormInput.defaultProps = {
    type: 'text'
};

export default withStyles(FormInput);
