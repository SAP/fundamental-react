import 'fundamental-styles/dist/radio.css';
import FormItem from './FormItem';
import FormLabel from './FormLabel';
import PropTypes from 'prop-types';
import React from 'react';

const FormRadioItem = ({ checked, children, className, defaultChecked, disabled, id, inline, inputProps, labelProps, name, value, ...props }) => {

    return (
        <FormItem
            {...props}
            className={className}
            isInline={inline}
            key={id}>
            <FormLabel
                {...labelProps}
                disabled={disabled}>
                <input
                    {...inputProps}
                    checked={checked}
                    className='fd-radio'
                    disabled={disabled}
                    id={id}
                    name={name}
                    type='radio'
                    value={value} />
                {children}
            </FormLabel>
        </FormItem>
    );
};

FormRadioItem.displayName = 'FormRadioItem';

FormRadioItem.propTypes = {
    children: PropTypes.node.isRequired,
    checked: PropTypes.bool,
    className: PropTypes.string,
    defaultChecked: PropTypes.bool,
    disabled: PropTypes.bool,
    id: PropTypes.string,
    inline: PropTypes.bool,
    inputProps: PropTypes.object,
    labelProps: PropTypes.object,
    name: PropTypes.string,
    value: PropTypes.string
};

FormRadioItem.propDescriptions = {
    checked: 'Set to **true** when radio input is checked and a controlled component.',
    defaultChecked: 'Set to **true** when the radio input is checked and an uncontrolled component.',
    inline: 'Set to true to display a group of checkboxes in a row.',
    name: 'Sets the `name` for the radio input.',
    value: 'Sets the `value` for the radio input.'
};

export default FormRadioItem;
