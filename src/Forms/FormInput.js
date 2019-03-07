import classnames from 'classnames';
import { INPUT_TYPES } from '../utils/constants';
import PropTypes from 'prop-types';
import React from 'react';

const FormInput = ({ state, className, ...props }) => {
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
            className={formInputClasses} />
    );
};

FormInput.displayName = 'FormInput';

FormInput.propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    state: PropTypes.oneOf(INPUT_TYPES)
};

FormInput.propDescriptions = {
    state: 'Sets the state of the input.'
};

export default FormInput;
