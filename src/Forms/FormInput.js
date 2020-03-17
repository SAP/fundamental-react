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
    className: PropTypes.string,
    compact: PropTypes.bool,
    disabled: PropTypes.bool,
    disableStyles: PropTypes.bool,
    id: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    readOnly: PropTypes.bool,
    type: PropTypes.string,
    validationState: PropTypes.shape({
        state: PropTypes.oneOf(FORM_MESSAGE_TYPES),
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
