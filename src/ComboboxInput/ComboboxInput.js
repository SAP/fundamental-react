import Button from '../Button/Button';
import classnames from 'classnames';
import { FORM_MESSAGE_TYPES } from '../utils/constants';
import FormInput from '../Forms/FormInput';
import FormMessage from '../Forms/_FormMessage';
import InputGroup from '../InputGroup/InputGroup';
import List from '../List/List';
import Popover from '../Popover/Popover';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

const ComboboxInput = React.forwardRef(({
    placeholder,
    compact,
    className,
    disabled,
    disableStyles,
    popoverProps,
    inputProps,
    buttonProps,
    selectedKey,
    onClick,
    onSelect,
    options,
    validationState,
    ...props
}, ref) => {

    let [isExpanded, setIsExpanded] = useState(false);
    let [selectedOptionKey, setSelectedOptionKey] = useState(selectedKey);

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

    const handleSelect = (e, option) => {
        setIsExpanded(false);
        setSelectedOptionKey(option.key);
        onSelect(e, option);
    };

    const selected = options
        .find(option => typeof selectedOptionKey !== 'undefined' && option.key === selectedOptionKey);

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
                    <List>
                        {options.map(option => (
                            <List.Item
                                key={option.key}
                                onClick={(e) => handleSelect(e, option)}>
                                <List.Text>{option.text}</List.Text>
                            </List.Item>
                        ))}
                    </List>
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
                        onChange={() => null}
                        placeholder={placeholder}
                        value={selected && selected.text} />
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
            show={isExpanded}
            useArrowKeyNavigation
            widthSizingType='matchTarget' />
    );
});

ComboboxInput.displayName = 'ComboboxInput';

ComboboxInput.propTypes = {
    buttonProps: PropTypes.object,
    className: PropTypes.string,
    compact: PropTypes.bool,
    disabled: PropTypes.bool,
    disableStyles: PropTypes.bool,
    inputProps: PropTypes.object,
    options: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    })),
    placeholder: PropTypes.string,
    popoverProps: PropTypes.object,
    selectedKey: PropTypes.string,
    validationState: PropTypes.shape({
        state: PropTypes.oneOf(FORM_MESSAGE_TYPES),
        text: PropTypes.string
    }),
    onClick: PropTypes.func,
    onSelect: PropTypes.func
};

ComboboxInput.defaultProps = {
    options: [],
    onClick: () => {},
    onSelect: () => {}
};

export default ComboboxInput;
