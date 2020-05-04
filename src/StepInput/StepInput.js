import Button from '../Button/Button';
import classnames from 'classnames';
import CustomPropTypes from '../utils/CustomPropTypes/CustomPropTypes';
import { FORM_MESSAGE_TYPES } from '../utils/constants';
import FormInput from '../Forms/FormInput';
import FormMessage from '../Forms/_FormMessage';
import InputGroup from '../InputGroup/InputGroup';
import keycode from 'keycode';
import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';

/** The **Step Input** allows numbers to be entered. It is typically used used to enter numbers.
 * The value can be increased or reduced with the provided controls */
const StepInput = React.forwardRef(({
    children,
    className,
    disabled,
    disableStyles,
    placeholder,
    readOnly,
    localizedText,
    validationState,
    value,
    ...rest
}, ref) => {
    const [inputValue, updateInputValue] = useState(value);

    const inputGroupClasses = classnames(
        className,
        'fd-input-group--control',
        {
            'is-disabled': disabled,
            [`is-${validationState?.state}`]: validationState ?.state
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

    const minusBtn = (
        <InputGroup.Addon aria-label={localizedText.stepUpLabel} isButton>
            <Button disabled={disabled}
                glyph='less'
                onClick={decreaseValue}
                option='transparent'
                type='standard' />
        </InputGroup.Addon>
    );

    const plusBtn = (
        <InputGroup.Addon aria-label={localizedText.stepDownLabel} isButton>
            <Button disabled={disabled}
                glyph='add'
                onClick={increaseValue}
                option='transparent'
                type='standard' />
        </InputGroup.Addon>
    );

    return (
        <>
            <InputGroup className={inputGroupClasses}
                disabled={disabled}
                disableStyles={disableStyles}
                ref={ref} {...rest}
                onKeyDown={onKeyDownInput}>
                {readOnly ? null : minusBtn}
                <FormInput
                    disabled={disabled}
                    disableStyles={disableStyles}
                    onChange={onChangeInputValue}
                    placeholder={placeholder}
                    value={inputValue} />
                {readOnly ? null : plusBtn}
            </InputGroup>
            {validationState && (<FormMessage
                disableStyles={disableStyles}
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
    /** Set to **true** to mark component as disabled and make it non-interactive */
    disabled: PropTypes.bool,
    /** Internal use only */
    disableStyles: PropTypes.bool,
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
