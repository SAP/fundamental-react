import classnames from 'classnames';
import { FORM_MESSAGE_TYPES } from '../utils/constants';
import FormItem from './FormItem';
import FormLabel from './FormLabel';
import PropTypes from 'prop-types';
import shortId from '../utils/shortId';
import React, { useEffect, useRef } from 'react';
import 'fundamental-styles/dist/checkbox.css';

/** With a **Checkbox**, all options are visible and the user can make one or more selections.
This component can also be disabled and displayed in a row */

const Checkbox = React.forwardRef(({
    checked,
    children,
    className,
    compact,
    defaultChecked,
    disabled,
    id,
    indeterminate,
    inline,
    inputProps,
    labelClassName,
    labelProps,
    name,
    onChange,
    value,
    state,
    ...props
}, ref) => {

    const inputEl = useRef();

    useEffect(() => {
        inputEl && inputEl.current && (inputEl.current.indeterminate = indeterminate);
    });


    const classes = classnames(
        className,
        'fd-checkbox',
        {
            [`is-${state}`]: state,
            'fd-checkbox--compact': compact
        }
    );

    const labelClasses = classnames(
        'fd-checkbox__label',
        labelClassName
    );

    const checkId = id ? id : shortId.generate();

    return (
        <FormItem
            {...props}
            disabled={disabled}
            isInline={inline}
            ref={ref}>
            <input
                {...inputProps}
                checked={checked}
                className={classes}
                defaultChecked={defaultChecked}
                disabled={disabled}
                id={checkId}
                name={name}
                onChange={(e) => {
                    onChange(e, !checked);
                }}
                ref={inputEl}
                type='checkbox'
                value={value} />
            <FormLabel {...labelProps}
                className={labelClasses}
                disabled={disabled}
                htmlFor={checkId}>
                <span className='fd-checkbox__text'>
                    {children}
                </span>
            </FormLabel>
        </FormItem>
    );
});

Checkbox.displayName = 'Checkbox';

Checkbox.propTypes = {
    /** Node(s) to render within the component */
    children: PropTypes.node.isRequired,
    /** Set to **true** when checkbox input is checked and a controlled component */
    checked: PropTypes.bool,
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** Set to **true** to enable compact mode */
    compact: PropTypes.bool,
    /** Set to **true** when the checkbox input is checked and an uncontrolled component */
    defaultChecked: PropTypes.bool,
    /** Set to **true** to mark component as disabled and make it non-interactive */
    disabled: PropTypes.bool,
    /** Value for the `id` attribute on the element */
    id: PropTypes.string,
    /** When true, the checkbox renders a "mixed" state */
    indeterminate: PropTypes.bool,
    /** Internal use only */
    inline: PropTypes.bool,
    /** Additional props to be spread to the `<input>` element */
    inputProps: PropTypes.object,
    /** Class name to be added to the component `<label>` element */
    labelClassName: PropTypes.string,
    /** Additional props to be spread to the `<label>` element */
    labelProps: PropTypes.object,
    /** Sets the `name` for the checkbox input */
    name: PropTypes.string,
    /** State of validation: 'error', 'warning', 'information', 'success' */
    state: PropTypes.oneOf(FORM_MESSAGE_TYPES),
    /** Sets the `value` for the checkbox input */
    value: PropTypes.string,
    /** Callback function when the change event fires on the component */
    onChange: PropTypes.func
};

Checkbox.defaultProps = {
    onChange: () => {}
};

export default Checkbox;
