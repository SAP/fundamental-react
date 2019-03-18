import classnames from 'classnames';
import { INPUT_TYPES } from '../utils/constants';
import PropTypes from 'prop-types';
import React from 'react';

const FormInput = ({ state, className, disabled, id, name, placeholder, readOnly, type, value, ...props }) => {
    const formInputClasses = classnames(
        'fd-form__control',
        {
            [`is-${state}`]: !!state
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
            type={type}
            value={value} />
    );
};

FormInput.displayName = 'FormInput';

FormInput.propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    id: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    readOnly: PropTypes.bool,
    state: PropTypes.oneOf(INPUT_TYPES),
    type: PropTypes.string,
    value: PropTypes.string
};

FormInput.propDescriptions = {
    state: 'Sets the state of the input. Can be left empty for default styles.'
};

export default FormInput;
