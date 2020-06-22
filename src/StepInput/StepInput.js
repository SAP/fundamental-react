import Button from '../Button/Button';
import classnames from 'classnames';
import CustomPropTypes from '../utils/CustomPropTypes/CustomPropTypes';
import { FORM_MESSAGE_TYPES } from '../utils/constants';
import FormInput from '../Forms/FormInput';
import FormMessage from '../Forms/_FormMessage';
import keycode from 'keycode';
import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';
import 'fundamental-styles/dist/step-input.css';

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
    disabled,
    placeholder,
    readOnly,
    localizedText,
    validationState,
    value,
    ...rest
}, ref) => {
    const [inputValue, updateInputValue] = useState(value);

    const stepInputClasses = classnames(
        className,
        'fd-step-input',
        {
            'fd-step-input--compact': compact,
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
        updateInputValue(inputValue - 1);
    });

    const increaseValue = useCallback(() => {
        if (ifValeEqualsSign(inputValue)) {
            return;
        }
        updateInputValue(inputValue + 1);
    });

    const onChangeInputValue = useCallback((event) => {
        const currentValue = event.target.value;
        const isNumber = !isNaN(parseInt(currentValue, 10));
        if (isNumber) {
            updateInputValue(parseInt(currentValue, 10));
        } else if (ifValeEqualsSign(currentValue)) {
            updateInputValue(currentValue);
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

    return (
        <>
            <div className={stepInputClasses}
                onKeyDown={onKeyDownInput}
                ref={ref}
                {...rest}>
                <Button
                    aria-label={localizedText.stepDownLabel}
                    className='fd-step-input__button'
                    compact={compact}
                    disabled={disabled}
                    glyph='less'
                    onClick={decreaseValue}
                    option='transparent'
                    tabIndex='-1' />
                <FormInput
                    className='fd-input--no-number-spinner fd-step-input__input'
                    disabled={disabled}
                    onChange={onChangeInputValue}
                    placeholder={placeholder}
                    value={inputValue} />
                <Button
                    aria-label={localizedText.stepUpLabel}
                    compact={compact}
                    disabled={disabled}
                    glyph='add'
                    onClick={increaseValue}
                    option='transparent'
                    tabIndex='-1' />
            </div>
            {validationState && (<FormMessage
                type={validationState.state}>
                {validationState.text}
            </FormMessage>)}
        </>
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
    /** Localized text to be updated based on location/language */
    localizedText: CustomPropTypes.i18n({
        stepUpLabel: PropTypes.string,
        stepDownLabel: PropTypes.string
    }),
    /** Localized placeholder text of the input */
    placeholder: PropTypes.string,
    /** Set to **true** to mark component as readonly */
    readOnly: PropTypes.bool,
    /** An object identifying a validation message.  The object will include properties for `state` and `text`; _e.g._, \`{ state: \'warning\', text: \'This is your last warning\' }\` */
    validationState: PropTypes.shape({
        /** State of validation: 'error', 'warning', 'information', 'success' */
        state: PropTypes.oneOf(FORM_MESSAGE_TYPES),
        /** Text of the validation message */
        text: PropTypes.string
    }),
    /** Value of the number input */
    value: PropTypes.number
};

StepInput.defaultProps = {
    value: 0,
    localizedText: {
        stepUpLabel: 'Step Up',
        stepDownLabel: 'Step Down'
    }

};

export default StepInput;
