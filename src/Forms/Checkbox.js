/* eslint-disable valid-jsdoc */
import classnamesBind from 'classnames/bind';
import { FORM_MESSAGE_TYPES } from '../utils/constants';
import FormItem from './FormItem';
import FormLabel from './FormLabel';
import FormValidationOverlay from './_FormValidationOverlay';
import PropTypes from 'prop-types';
import useUniqueId from '../utils/useUniqueId';
import withStyles from '../utils/withStyles';
import React, { useEffect, useRef, useState } from 'react';
import styles from 'fundamental-styles/dist/checkbox.css';

const classnames = classnamesBind.bind(styles);

/** With a **Checkbox**, all options are visible and the user can make one or more selections.
This component can also be disabled and displayed in a row */

const Checkbox = React.forwardRef(({
    ariaLabel,
    checked,
    children,
    cssNamespace,
    textClassName,
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
    const [checkedState, setCheckedState] = useState(!!checked || !!defaultChecked);
    const inputEl = useRef();

    useEffect(() => {
        inputEl && inputEl.current && (inputEl.current.indeterminate = indeterminate);
    });

    useEffect(()=> {
        // eslint-disable-next-line no-undefined
        if (checked !== undefined) {
            setCheckedState(!!checked);
        }
    }, [checked]);


    const inputClassNames = classnames(
        `${cssNamespace}-checkbox`,
        {
            [`is-${validationState?.state}`]: validationState?.state,
            [`${cssNamespace}-checkbox--compact`]: compact
        },
        inputClassName
    );

    const labelClasses = classnames(
        `${cssNamespace}-checkbox__label`,
        labelClassName
    );

    const childrenClasses = classnames(
        `${cssNamespace}-checkbox__text`,
        textClassName
    );

    const checkId = useUniqueId(id);

    const checkboxChildren = (typeof children === 'string') ? (
        <span className={childrenClasses}>
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
                checked={checkedState}
                className={inputClassNames}
                defaultChecked={defaultChecked}
                disabled={disabled}
                id={checkId}
                name={name}
                onChange={(e) => {
                    // eslint-disable-next-line no-undefined
                    if (checked === undefined) {
                        setCheckedState(e.target.checked);
                    }
                    onChange(e, e.target.checked);
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
    /** Additional classes to apply to children */
    textClassName: PropTypes.string,
    /** Additional props to be spread to the ValidationOverlay */
    validationOverlayProps: PropTypes.shape({
        /** Additional classes to apply to validation popover's outermost `<div>` element  */
        className: PropTypes.string,
        /** Additional props to be spread to the ValdiationOverlay's FormMessage component */
        formMessageProps: PropTypes.object,
        /** Additional classes to apply to validation popover's popper child `<div>` wrapping the provided children  */
        innerRefClassName: PropTypes.string,
        /** Additional classes to apply to validation popover's popper `<div>` element  */
        popperClassName: PropTypes.string,
        /** CSS class(es) to add to the ValidationOverlay's reference `<div>` element */
        referenceClassName: PropTypes.string,
        /** Additional props to be spread to the popover's outermost `<div>` element */
        wrapperProps: PropTypes.object
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
    /**
     * Callback function; triggered when the change event fires on the HTML checkbox `<input>`.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent. See https://reactjs.org/docs/events.html.
     * @param {Boolean} checkedState - represents the final checked state of the HTML checkbox input.
     * @returns {void}
    */
    onChange: PropTypes.func
};

Checkbox.defaultProps = {
    onChange: () => {}
};

export default withStyles(Checkbox);
