import classnames from 'classnames';
import { FORM_STATES } from '../utils/constants';
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

    const inputClassNames = classnames(
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
                className={inputClassNames}
                disabled={disabled}
                id={radioId}
                name={name}
                ref={ref}
                type='radio'
                value={value} />
            <FormLabel
                {...labelProps}
                className='fd-radio__label'
                disableStyles={disableStyles}
                disabled={disabled}
                htmlFor={radioId}>
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
    compact: PropTypes.bool,
    defaultChecked: PropTypes.bool,
    disabled: PropTypes.bool,
    disableStyles: PropTypes.bool,
    id: PropTypes.string,
    inline: PropTypes.bool,
    inputProps: PropTypes.object,
    labelProps: PropTypes.object,
    name: PropTypes.string,
    state: PropTypes.oneOf(FORM_STATES),
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
