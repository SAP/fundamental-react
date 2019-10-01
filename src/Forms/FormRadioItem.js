import FormItem from './FormItem';
import FormLabel from './FormLabel';
import PropTypes from 'prop-types';
import React from 'react';
import withStyles from '../utils/WithStyles/WithStyles';

const FormRadioItem = React.forwardRef(({ checked, children, className, defaultChecked, disabled, disableStyles, id, inline, inputProps, labelProps, name, value, ...props }, ref) => {

    return (
        <FormItem
            {...props}
            className={className}
            disableStyles={disableStyles}
            isInline={inline}
            key={id}>
            <FormLabel
                {...labelProps}
                disableStyles={disableStyles}
                disabled={disabled}>
                <input
                    {...inputProps}
                    checked={checked}
                    className='fd-radio'
                    disabled={disabled}
                    id={id}
                    name={name}
                    ref={ref}
                    type='radio'
                    value={value} />
                {children}
            </FormLabel>
        </FormItem>
    );
});

FormRadioItem.displayName = 'FormRadioItem';

FormRadioItem.propTypes = {
    children: PropTypes.node.isRequired,
    checked: PropTypes.bool,
    className: PropTypes.string,
    customStyles: PropTypes.object,
    defaultChecked: PropTypes.bool,
    disabled: PropTypes.bool,
    disableStyles: PropTypes.bool,
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

export { FormRadioItem as __FormRadioItem };

export default withStyles(FormRadioItem, { cssFile: 'radio' });
