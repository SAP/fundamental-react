import Button from '../Button/Button';
import classnamesBind from 'classnames/bind';
import CustomPropTypes from '../utils/CustomPropTypes/CustomPropTypes';
import { FORM_MESSAGE_TYPES } from '../utils/constants';
import FormInput from '../Forms/FormInput';
import FormValidationOverlay from '../Forms/_FormValidationOverlay';
import keycode from 'keycode';
import PropTypes from 'prop-types';
import withStyles from '../utils/withStyles';
import React, { useCallback, useState } from 'react';
import styles from 'fundamental-styles/dist/step-input.css';

const classnames = classnamesBind.bind(styles);
const isUsingCssModules = styles && Object.keys(styles).length > 0;
/** The **StepInput** allows the user to change the input values in predefined increments (steps).

Use the step input if:

* * The user needs to adjust amounts, quantities, or other values quickly.
* * The user needs to adjust values for a specific step (for example, in a shopping cart).

Do not use the step input if:

* * The user needs to enter a static number (for example, postal code, phone number, or ID). In this case, use the regular input field control instead.
* * You want to display a value that rarely needs to be adjusted and does not pertain to a particular step. In this case, use the regular input field control instead.
* * You want the user to enter dates and times. In this case, use the date picker, date range selection, time picker, or date/time picker instead.
 */
const StepInput = React.forwardRef(({
    children,
    className,
    compact,
    cssNamespace,
    disabled,
    inputId,
    placeholder,
    readOnly,
    localizedText,
    onChange,
    validationOverlayProps,
    validationState,
    value,
    ...rest
}, ref) => {
    const [inputValue, updateInputValue] = useState(value);

    const stepInputClasses = classnames(
        className,
        `${cssNamespace}-step-input`,
        {
            [`${cssNamespace}-step-input--compact`]: compact,
            'is-disabled': disabled,
            'is-readonly': readOnly,
            [`is-${validationState?.state}`]: validationState?.state
        }
    );

    const ifValeEqualsSign = (val) => val === '' || val === '+' || val === '-';

    const decreaseValue = useCallback(() => {
        if (ifValeEqualsSign(inputValue)) {
            return;
        }
        handleChange(inputValue - 1);
    });

    const increaseValue = useCallback(() => {
        if (ifValeEqualsSign(inputValue)) {
            return;
        }
        handleChange(inputValue + 1);
    });

    const onChangeInputValue = useCallback((event) => {
        const currentValue = event.target.value;
        const isNumber = !isNaN(parseInt(currentValue, 10));
        if (isNumber) {
            handleChange(parseInt(currentValue, 10));
        } else if (ifValeEqualsSign(currentValue)) {
            handleChange(currentValue);
        }
    });

    const handleChange = useCallback((currentValue) => {
        if ( currentValue !== inputValue ) {
            updateInputValue(currentValue);
            onChange(currentValue);
        }
    });

    const onKeyDownInput = useCallback((event) => {
        switch (keycode(event)) {
            case 'up':
                increaseValue();
                event.preventDefault();
                event.stopPropagation();
                break;
            case 'down':
                decreaseValue();
                event.preventDefault();
                event.stopPropagation();
                break;
            default:
        }
    });

    const stepInputControl = (
        <div className={stepInputClasses}
            onKeyDown={onKeyDownInput}
            ref={ref}
            {...rest}>
            <Button
                aria-label={localizedText.stepDownLabel}
                className={classnames(`${cssNamespace}-step-input__button`, { [`${cssNamespace}-button`]: isUsingCssModules })}
                compact={compact}
                disabled={disabled}
                glyph='less'
                onClick={decreaseValue}
                option='transparent'
                tabIndex='-1' />
            <FormInput
                className={classnames(`${cssNamespace}-input--no-number-spinner`, `${cssNamespace}-step-input__input`, { [`${cssNamespace}-input`]: isUsingCssModules })}
                disabled={disabled}
                id={inputId}
                onChange={onChangeInputValue}
                placeholder={placeholder}
                value={inputValue} />
            <Button
                aria-label={localizedText.stepUpLabel}
                className={classnames(`${cssNamespace}-step-input__button`, { [`${cssNamespace}-button`]: isUsingCssModules })}
                compact={compact}
                disabled={disabled}
                glyph='add'
                onClick={increaseValue}
                option='transparent'
                tabIndex='-1' />
        </div>
    );

    return (
        <FormValidationOverlay
            {...validationOverlayProps}
            control={stepInputControl}
            validationState={validationState} />
    );
});

StepInput.displayName = 'StepInput';

StepInput.propTypes = {
    /** Node(s) to render within the component */
    children: PropTypes.node,
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** Set to **true** to enable compact **/
    compact: PropTypes.bool,
    /** Set to **true** to mark component as disabled and make it non-interactive */
    disabled: PropTypes.bool,
    /** ID to be passed to the input element */
    inputId: PropTypes.string,
    /** Localized text to be updated based on location/language */
    localizedText: CustomPropTypes.i18n({
        stepUpLabel: PropTypes.string,
        stepDownLabel: PropTypes.string
    }),
    /** Localized placeholder text of the input */
    placeholder: PropTypes.string,
    /** Set to **true** to mark component as readonly */
    readOnly: PropTypes.bool,
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
    /** Value of the number input */
    value: PropTypes.number,
    /**
     * Callback function; triggered when the step value changes.
     *
     * @param {number} stepValue - current step value as number.
     * @returns {void}
     * */
    onChange: PropTypes.func
};

StepInput.defaultProps = {
    value: 0,
    localizedText: {
        stepUpLabel: 'Step Up',
        stepDownLabel: 'Step Down'
    },
    onChange: () => { }
};

export default withStyles(StepInput);
