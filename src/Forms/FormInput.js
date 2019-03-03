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
    state: PropTypes.oneOf(INPUT_TYPES)
};

FormInput.propDescriptions = {
    state: 'Sets the state of the input. Options include \'normal\', \'valid\', \'invalid\', \'warning\', \'help\', \'disabled\', and \'readonly\'. Leave empty for normal.'
};

export default FormInput;
