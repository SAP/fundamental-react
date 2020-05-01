import classnames from 'classnames';
import { FORM_MESSAGE_TYPES } from '../utils/constants';
import FormItem from './FormItem';
import FormLabel from './FormLabel';
import PropTypes from 'prop-types';
import shortId from '../utils/shortId';
import React, { useEffect } from 'react';

const FormRadioItem = React.forwardRef(({
    checked,
    children,
    className,
    compact,
    defaultChecked,
    disabled,
    disableStyles,
    id,
    inline,
    inputProps,
    labelProps,
    name,
    state,
    value,
    ...props }, ref) => {

    useEffect(() => {
        if (!disableStyles) {
            require('fundamental-styles/dist/radio.css');
        }
    }, []);

    const inputClassName = classnames(
        'fd-radio',
        {
            'fd-radio--compact': compact,
            [`is-${state}`]: state
        }
    );

    const radioId = id ? id : shortId.generate();

    return (
        <FormItem
            {...props}
            className={className}
            disableStyles={disableStyles}
            isInline={inline}
            key={id}>
            <input
                {...inputProps}
                checked={checked}
                className={inputClassName}
                disabled={disabled}
                id={radioId}
                name={name}
                ref={ref}
                type='radio'
                value={value} />
            <FormLabel
                {...labelProps}
                className='fd-radio__label'
                disabled={disabled}
                disableStyles={disableStyles}
                htmlFor={radioId}>
                {children}
            </FormLabel>
        </FormItem>
    );
});

FormRadioItem.displayName = 'FormRadioItem';

FormRadioItem.propTypes = {
    /** Node(s) to render within the component */
    children: PropTypes.node.isRequired,
    checked: PropTypes.bool,
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** Set to **true** to enable compact mode */
    compact: PropTypes.bool,
    defaultChecked: PropTypes.bool,
    /** Set to **true** to mark component as disabled and make it non-interactive */
    disabled: PropTypes.bool,
    /** Internal use only */
    disableStyles: PropTypes.bool,
    /** Value for the `id` attribute on the element */
    id: PropTypes.string,
    inline: PropTypes.bool,
    /** Additional props to be spread to the `<input>` element */
    inputProps: PropTypes.object,
    /** Additional props to be spread to the `<label>` element */
    labelProps: PropTypes.object,
    name: PropTypes.string,
    /** State of validation: 'error', 'warning', 'information', 'success' */
    state: PropTypes.oneOf(FORM_MESSAGE_TYPES),
    value: PropTypes.string
};

FormRadioItem.propDescriptions = {
    checked: 'Set to **true** when radio input is checked and a controlled component.',
    defaultChecked: 'Set to **true** when the radio input is checked and an uncontrolled component.',
    inline: '_INTERNAL USE ONLY._',
    name: 'Sets the `name` for the radio input.',
    value: 'Sets the `value` for the radio input.'
};

export default FormRadioItem;
