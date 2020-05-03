import classnames from 'classnames';
import { FORM_MESSAGE_TYPES } from '../utils/constants';
import FormItem from './FormItem';
import FormLabel from './FormLabel';
import PropTypes from 'prop-types';
import shortId from '../utils/shortId';
import React, { useEffect, useRef } from 'react';

const getCheckStatus = (checked, indeterminate) => {
    if (indeterminate) {
        return 'mixed';
    } else if (checked) {
        return 'true';
    } else {
        return 'false';
    }
};

/** With checkboxes, all options are visible and the user can make one or more selections.
This component can also be disabled and displayed in a row */

const Checkbox = React.forwardRef(({
    checked,
    children,
    className,
    compact,
    defaultChecked,
    disabled,
    disableStyles,
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

    useEffect(() => {
        if (!disableStyles) {
            require('fundamental-styles/dist/icon.css');
            require('fundamental-styles/dist/checkbox.css');
        }
    }, []);

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
            disableStyles={disableStyles}
            isInline={inline}
            ref={ref}>
            <input
                {...inputProps}
                aria-checked={getCheckStatus(checked, indeterminate)}
                checked={checked || defaultChecked}
                className={classes}
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
                disableStyles={disableStyles}
                htmlFor={checkId}>
                {children}
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
    /** Internal use only */
    disableStyles: PropTypes.bool,
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
