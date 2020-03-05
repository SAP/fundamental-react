import Button from '../Button/Button';
import classnames from 'classnames';
import { FORM_MESSAGE_TYPES } from '../utils/constants';
import FormInput from '../Forms/FormInput';
import FormMessage from '../Forms/_FormMessage';
import InputGroup from '../InputGroup/InputGroup';
import keycode from 'keycode';
import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useState } from 'react';

const StepInput = React.forwardRef(({
    children,
    className,
    disabled,
    disableStyles,
    placeholder,
    readOnly,
    validationState,
    value,
    ...rest
}, ref) => {
    useEffect(() => {
        if (!disableStyles) {
            require('fundamental-styles/dist/input.css');
        }
    }, []);
    const [inputValue, updateInputValue] = useState(value);

    const inputGroupClasses = classnames(
        className,
        'fd-input-group--control',
        {
            'is-disabled': disabled,
            [`is-${validationState?.state}`]: validationState ?.state
        }
    );

    const decreaseValue = useCallback(() => {
        updateInputValue(inputValue - 1);
    });

    const increaseValue = useCallback(() => {
        updateInputValue(inputValue + 1);
    });

    const onChangeInputValue = useCallback((event) => {
        const currentValue = event.target.value;
        const isNumber = !isNaN(parseInt(currentValue, 10));
        if (isNumber) {
            updateInputValue(parseInt(currentValue, 10));
        } else if (currentValue === '' || currentValue === '-' || currentValue === '+') {
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
        <InputGroup.Addon isButton>
            <Button disabled={disabled}
                glyph='less'
                onClick={decreaseValue}
                option='transparent'
                type='standard' />
        </InputGroup.Addon>
    );

    const plusBtn = (
        <InputGroup.Addon isButton>
            <Button disabled={disabled}
                glyph='add'
                onClick={increaseValue}
                option='transparent'
                type='standard' />
        </InputGroup.Addon>
    );

    return (
        <>
            <InputGroup className={inputGroupClasses} disabled={disabled}
                ref={ref} {...rest}
                onKeyDown={onKeyDownInput}>
                {readOnly ? null : minusBtn}
                <FormInput disabled={disabled} onChange={onChangeInputValue}
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
    placeholder: PropTypes.string,
    readOnly: PropTypes.bool,
    validationState: PropTypes.shape({
        state: PropTypes.oneOf(FORM_MESSAGE_TYPES),
        text: PropTypes.string
    }),
    value: PropTypes.number
};

StepInput.defaultProps = {
    value: 0
};

export default StepInput;
