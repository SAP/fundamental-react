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
                    disabled={disabled}
                    disableStyles={disableStyles}
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
            disabled={disabled}
            disableKeyPressHandler
            disableStyles={disableStyles}
            noArrow
            onClickOutside={handleClickOutside}
            show={isExpanded}
            useArrowKeyNavigation
            widthSizingType='matchTarget' />
    );
});

ComboboxInput.displayName = 'ComboboxInput';

ComboboxInput.propTypes = {
    /** Additional props to be spread to the `<button>` element */
    buttonProps: PropTypes.object,
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** Set to **true** to enable compact mode */
    compact: PropTypes.bool,
    /** Set to **true** to mark component as disabled and make it non-interactive */
    disabled: PropTypes.bool,
    /** Internal use only */
    disableStyles: PropTypes.bool,
    /** Additional props to be spread to the `<input>` element */
    inputProps: PropTypes.object,
    /** An array of objects with a key and text to render the selectable options */
    options: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    })),
    /** Localized placeholder text of the input */
    placeholder: PropTypes.string,
    /** Additional props to be spread to the Popover component */
    popoverProps: PropTypes.object,
    /** The key corresponding to the selected option */
    selectedKey: PropTypes.string,
    /** An object identifying a validation message.  The object will include properties for `state` and `text`; _e.g._, \`{ state: \'warning\', text: \'This is your last warning\' }\` */
    validationState: PropTypes.shape({
        /** State of validation */
        state: PropTypes.oneOf(FORM_MESSAGE_TYPES),
        /** Text of the validation message */
        text: PropTypes.string
    }),
    /** Callback function when user clicks on the component*/
    onClick: PropTypes.func,
    /** Callback function when user clicks on an option */
    onSelect: PropTypes.func
};

ComboboxInput.defaultProps = {
    options: [],
    onClick: () => {},
    onSelect: () => {}
};

export default ComboboxInput;
