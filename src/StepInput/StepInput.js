import Button from '../Button/Button';
import { FORM_MESSAGE_TYPES } from '../utils/constants';
import FormInput from '../Forms/FormInput';
import InputGroup from '../InputGroup/InputGroup';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

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
            require('fundamental-styles/dist/fonts.css');
            require('fundamental-styles/dist/input-group.css');
        }
    }, []);
    const [inputValue, updateInputValue] = useState(value);

    const decreaseValue = () => {
        updateInputValue(inputValue - 1);
    };

    const increaseValue = () => {
        updateInputValue(inputValue + 1);
    };

    const onChangeInputValue = (event) => {
        const currentValue = event.target.value;
        updateInputValue(+currentValue);
    };

    const minusBtn = (<Button
        glyph='less'
        onClick={decreaseValue}
        option='light'
        type='standard' />);

    const plusBtn = (<Button
        glyph='add'
        onClick={increaseValue}
        option='light'
        type='standard' />);

    return (
        <div {...rest} className={className}
            ref={ref}>
            <InputGroup className='fd-input-group--control'>
                <InputGroup.Addon isButton>
                    {minusBtn}
                </InputGroup.Addon>
                <FormInput onChange={onChangeInputValue} placeholder='Type number here'
                    value={inputValue} />
                <InputGroup.Addon isButton>
                    {plusBtn}
                </InputGroup.Addon>
            </InputGroup>
        </div>
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
