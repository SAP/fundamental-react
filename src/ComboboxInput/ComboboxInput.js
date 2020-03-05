import Button from '../Button/Button';
import classnames from 'classnames';
import { FORM_MESSAGE_TYPES } from '../utils/constants';
import FormInput from '../Forms/FormInput';
import FormMessage from '../Forms/_FormMessage';
import InputGroup from '../InputGroup/InputGroup';
import Popover from '../Popover/Popover';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

const ComboboxInput = React.forwardRef(({
    placeholder,
    list,
    compact,
    className,
    disabled,
    disableStyles,
    popoverProps,
    inputProps,
    buttonProps,
    onClick,
    validationState,
    ...props
}, ref) => {

    let [isExpanded, setIsExpanded] = useState(false);

    const inputGroupClass = classnames(
        'fd-input-group--control',
        {
            'is-disabled': disabled,
            [`is-${validationState?.state}`]: validationState?.state
        },
        className
    );

    const handleClick = (e) => {
        setIsExpanded(!isExpanded);
        onClick(e);
    };

    const handleClickOutside = () => {
        setIsExpanded(false);
    };

    return (
        <Popover
            {...popoverProps}
            body={
                (<>
                    {validationState &&
                    <FormMessage
                        disableStyles={disableStyles}
                        type={validationState.state}>
                        {validationState.text}
                    </FormMessage>
                    }
                    {list}
                </>)}
            control={
                <InputGroup
                    {...props}
                    aria-expanded={isExpanded}
                    aria-haspopup='true'
                    className={inputGroupClass}
                    compact={compact}
                    disableStyles={disableStyles}
                    disabled={disabled}
                    onClick={handleClick}
                    validationState={!isExpanded ? validationState : null}>
                    <FormInput
                        {...inputProps}
                        compact={compact}
                        disableStyles={disableStyles}
                        placeholder={placeholder} />
                    <InputGroup.Addon isButton>
                        <Button
                            {...buttonProps}
                            disableStyles={disableStyles}
                            glyph='navigation-down-arrow'
                            option='transparent'
                            ref={ref} />
                    </InputGroup.Addon>
                </InputGroup>
            }
            disableKeyPressHandler
            disableStyles={disableStyles}
            disabled={disabled}
            noArrow
            onClickOutside={handleClickOutside}
            useArrowKeyNavigation
            widthSizingType='matchTarget' />
    );
});

ComboboxInput.displayName = 'ComboboxInput';

ComboboxInput.propTypes = {
    list: PropTypes.object.isRequired,
    buttonProps: PropTypes.object,
    className: PropTypes.string,
    compact: PropTypes.bool,
    disabled: PropTypes.bool,
    disableStyles: PropTypes.bool,
    inputProps: PropTypes.object,
    placeholder: PropTypes.string,
    popoverProps: PropTypes.object,
    validationState: PropTypes.shape({
        state: PropTypes.oneOf(FORM_MESSAGE_TYPES),
        text: PropTypes.string
    }),
    onClick: PropTypes.func
};

ComboboxInput.defaultProps = {
    onClick: () => {}
};

ComboboxInput.propDescriptions = {
    list: 'An object containing a `List` component.'
};

export default ComboboxInput;
