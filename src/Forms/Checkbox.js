/* eslint-disable valid-jsdoc */
import classnames from 'classnames';
import { FORM_MESSAGE_TYPES } from '../utils/constants';
import FormItem from './FormItem';
import FormLabel from './FormLabel';
import FormValidationOverlay from './_FormValidationOverlay';
import PropTypes from 'prop-types';
import useUniqueId from '../utils/useUniqueId';
import React, { useEffect, useRef, useState } from 'react';
import 'fundamental-styles/dist/checkbox.css';

/** With a **Checkbox**, all options are visible and the user can make one or more selections.
This component can also be disabled and displayed in a row */

const Checkbox = React.forwardRef(({
    ariaLabel,
    checked,
    children,
    compact,
    defaultChecked,
    disabled,
    id,
    indeterminate,
    inline,
    inputClassName,
    inputProps,
    labelClassName,
    labelProps,
    name,
    onChange,
    value,
    validationOverlayProps,
    validationState,
    ...props
}, ref) => {
    const [checkedState, setCheckedState] = useState(!!checked);
    const inputEl = useRef();

    useEffect(() => {
        inputEl && inputEl.current && (inputEl.current.indeterminate = indeterminate);
    });


    const inputClassNames = classnames(
        'fd-checkbox',
        {
            [`is-${validationState?.state}`]: validationState?.state,
            'fd-checkbox--compact': compact
        },
        inputClassName
    );

    const labelClasses = classnames(
        'fd-checkbox__label',
        labelClassName
    );

    const checkId = useUniqueId(id);

    const checkboxChildren = (typeof children === 'string') ? (
        <span className='fd-checkbox__text'>
            {children}
        </span>
    ) : children;

    const checkbox = (
        <FormItem
            {...props}
            disabled={disabled}
            isInline={inline}
            ref={ref}>
            <input
                {...inputProps}
                aria-checked={checkedState}
                aria-label={ariaLabel}
                checked={checked}
                className={inputClassNames}
                defaultChecked={defaultChecked}
                disabled={disabled}
                id={checkId}
                name={name}
                onChange={(e) => {
                    const toggledState = !checkedState;
                    setCheckedState(toggledState);
                    onChange(e, toggledState);
                }}
                ref={inputEl}
                type='checkbox'
                value={value} />
            <FormLabel {...labelProps}
                className={labelClasses}
                disabled={disabled}
                htmlFor={checkId}>
                {checkboxChildren}
            </FormLabel>
        </FormItem>
    );

    return validationState ? (
        <FormValidationOverlay
            {...validationOverlayProps}
            control={checkbox}
            validationState={validationState} />
    ) : checkbox;
});

Checkbox.displayName = 'Checkbox';

Checkbox.propTypes = {
    /** aria-label for the checkbox when no visible label is used */
    ariaLabel: PropTypes.string,
    /** Set to **true** when checkbox input is checked and a controlled component */
    checked: PropTypes.bool,
    /** Node(s) to render within the component */
    children: (props, propName, componentName) => {
        if (!props.children && !props.ariaLabel) {
            return new Error(`
No \`children\` or \`aria-label\` found for ${componentName}.
Please ensure you are either using a visible \`FormLabel\` or an \`aria-label\` for accessibility purposes.
`
            );
        }
    },
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
    /** Class name to be added to the component `<input>` element */
    inputClassName: PropTypes.string,
    /** Additional props to be spread to the `<input>` element */
    inputProps: PropTypes.object,
    /** Class name to be added to the component `<label>` element */
    labelClassName: PropTypes.string,
    /** Additional props to be spread to the `<label>` element */
    labelProps: PropTypes.object,
    /** Sets the `name` for the checkbox input */
    name: PropTypes.string,
    /** Additional props to be spread to the ValidationOverlay */
    validationOverlayProps: PropTypes.shape({
        /** Additional classes to apply to validation popover's outermost `<div>` element  */
        className: PropTypes.string,
        /** Additional props to be spread to the ValdiationOverlay's FormMessage component */
        formMessageProps: PropTypes.object,
        /** CSS class(es) to add to the ValidationOverlay's reference `<div>` element */
        referenceClassName: PropTypes.string
    }),
    /** An object identifying a validation message.  The object will include properties for `state` and `text`; _e.g._, \`{ state: \'warning\', text: \'This is your last warning\' }\` */
    validationState: PropTypes.shape({
        /** State of validation: 'error', 'warning', 'information', 'success' */
        state: PropTypes.oneOf(FORM_MESSAGE_TYPES),
        /** Text of the validation message */
        text: PropTypes.string
    }),
    /** Sets the `value` for the checkbox input */
    value: PropTypes.string,
    /** Callback function when the change event fires on the component */
    onChange: PropTypes.func
};

Checkbox.defaultProps = {
    onChange: () => {}
};

export default Checkbox;
