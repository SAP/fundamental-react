import classnames from 'classnames';
import { FORM_STATES } from '../utils/constants';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

const FormInput = React.forwardRef(({ state, className, compact, disabled, id, name, placeholder, readOnly, type, value, disableStyles, ...props }, ref) => {

    useEffect(() => {
        if (!disableStyles) {
            require('fundamental-styles/dist/fonts.css');
            require('fundamental-styles/dist/input.css');
        }
    }, []);


    const formInputClasses = classnames(
        'fd-input',
        {
            'fd-input--compact': !!compact,
            [`is-${state}`]: state
        },
        className
    );

    return (
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
    state: PropTypes.oneOf(FORM_STATES),
    type: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FormInput.defaultProps = {
    type: 'text'
};

FormInput.propDescriptions = {
    name: 'Value for the `name` attribute on the input.',
    state: 'Sets the state of the input. Can be left empty for default styles.',
    type: 'Value for the `type` attribute on the input.',
    value: 'Value for the `value` attribute on the input.'
};

export default FormInput;
