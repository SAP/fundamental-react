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
                disableStyles={disableStyles}
                disabled={disabled}
                ref={ref} {...rest}
                onKeyDown={onKeyDownInput}>
                {readOnly ? null : minusBtn}
                <FormInput
                    disableStyles={disableStyles}
                    disabled={disabled}
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
    children: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    disableStyles: PropTypes.bool,
    localizedText: CustomPropTypes.i18n({
        stepUpLabel: PropTypes.string,
        stepDownLabel: PropTypes.string
    }),
    placeholder: PropTypes.string,
    readOnly: PropTypes.bool,
    validationState: PropTypes.shape({
        state: PropTypes.oneOf(FORM_MESSAGE_TYPES),
        text: PropTypes.string
    }),
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
