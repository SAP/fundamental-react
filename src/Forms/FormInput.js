import classnames from 'classnames';
import { FORM_MESSAGE_TYPES } from '../utils/constants';
import FormValidationOverlay from './_FormValidationOverlay';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

const FormInput = React.forwardRef(({ className, compact, disabled, id, name, placeholder, readOnly, type, value, validationState, disableStyles, ...props }, ref) => {
    useEffect(() => {
        if (!disableStyles) {
            require('fundamental-styles/dist/input.css');
        }
    }, []);

    const formInputClasses = classnames(
        'fd-input',
        {
            'fd-input--compact': !!compact,
            [`is-${validationState?.state}`]: validationState?.state
        },
        className
    );

    const formInput = (
        <input
            {...props}
            className={formInputClasses}
            disabled={disabled}
            id={id}
            name={name}
            placeholder={placeholder}
            readOnly={readOnly}
            ref={ref}
            type={type}
            value={value} />
    );

    return (
        validationState ? (
            <FormValidationOverlay
                control={formInput}
                id={id}
                validationState={validationState} />
        ) :
            formInput
    );
});

FormInput.displayName = 'FormInput';

FormInput.propTypes = {
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** Set to **true** to enable compact mode */
    compact: PropTypes.bool,
    /** Set to **true** to mark component as disabled and make it non-interactive */
    disabled: PropTypes.bool,
    /** Internal use only */
    disableStyles: PropTypes.bool,
    /** Value for the `id` attribute on the element */
    id: PropTypes.string,
    name: PropTypes.string,
    /** Localized placeholder text of the input */
    placeholder: PropTypes.string,
    /** Set to **true** to mark component as readonly */
    readOnly: PropTypes.bool,
    /** Sets the variation of the component. Primarily used for styling */
    type: PropTypes.string,
    /** An object identifying a validation message.  The object will include properties for `state` and `text`; _e.g._, \`{ state: \'warning\', text: \'This is your last warning\' }\` */
    validationState: PropTypes.shape({
        /** State of validation */
        state: PropTypes.oneOf(FORM_MESSAGE_TYPES),
        /** Text of the validation message */
        text: PropTypes.string
    }),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FormInput.defaultProps = {
    type: 'text'
};

FormInput.propDescriptions = {
    name: 'Value for the `name` attribute on the input.',
    type: 'Value for the `type` attribute on the input.',
    value: 'Value for the `value` attribute on the input.'
};

export default FormInput;
