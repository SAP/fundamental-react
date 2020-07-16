import Button from '../Button/Button';
import classnames from 'classnames';
import FocusManager from '../utils/focusManager/focusManager';
import { FORM_MESSAGE_TYPES } from '../utils/constants';
import FormInput from '../Forms/FormInput';
import FormLabel from '../Forms/FormLabel';
import FormMessage from '../Forms/_FormMessage';
import InputGroup from '../InputGroup/InputGroup';
import keycode from 'keycode';
import List from '../List/List';
import Popover from '../Popover/Popover';
import PropTypes from 'prop-types';
import tabbable from 'tabbable';
import React, { useRef, useState } from 'react';

/** A **ComboboxInput** allows users to select an item from a predefined list.
It provides an editable input field for filtering the list, and a dropdown menu with a list of the available options.
If the entries are not validated by the application, users can also enter custom values. */
const ComboboxInput = React.forwardRef(({
    ariaLabel,
    arrowLabel,
    placeholder,
    compact,
    className,
    disabled,
    id,
    popoverProps,
    inputProps,
    buttonProps,
    selectedKey,
    label,
    noMatchesText,
    onClick,
    onSelectionChange,
    options,
    validationState,
    ...props
}, ref) => {
    let [isExpanded, setIsExpanded] = useState(false);
    let [filterString, setFilterString] = useState();
    const textInputRef = useRef(null);
    const popoverRef = useRef(null);
    const popoverBodyRef = useRef(null);

    const inputGroupClass = classnames(
        'fd-input-group--control',
        {
            'is-disabled': disabled,
            [`is-${validationState?.state}`]: validationState?.state
        },
        className
    );

    const closePopover = () => {
        setIsExpanded(false);
        const popover = popoverRef && popoverRef.current;
        popover && popover.handleEscapeKey();
    };

    const handleClick = (e) => {
        if (!disabled) {
            onClick(e);
        }
    };

    const handleOptionSelect = (e, option) => {
        closePopover();

        textInputRef.current.value = option?.text;
        textInputRef.current?.select();

        //an option has been selected
        onSelectionChange && onSelectionChange(e, option);

        //update the string that filters the options
        setFilterString(option?.text);
    };

    const handleOptionFocus = (e, option) => {
        textInputRef.current.value = option?.text;
        onSelectionChange && onSelectionChange(e, option);
    };

    const handleOptionKeyDown = (e, option) => {
        switch (keycode(e)) {
            case 'esc':
            case 'tab':
                e.stopPropagation();
                closePopover();
                break;
            case 'enter':
            case 'space':
                e.preventDefault();
                handleOptionSelect(e, option);
                break;
            default:
        }
    };

    const createSelection = (field, start, end) => {
        if (field?.createTextRange) {
            var selRange = field.createTextRange();
            selRange.collapse(true);
            selRange.moveStart('character', start);
            selRange.moveEnd('character', end);
            selRange.select();
        } else if (field?.setSelectionRange) {
            field.setSelectionRange(start, end);
        } else if (field?.selectionStart) {
            field.selectionStart = start;
            field.selectionEnd = end;
        }
    };

    const attachFocusManager = (focusNodeIndex = 0) => {
        isExpanded &&
            popoverBodyRef?.current &&
            textInputRef?.current &&
            new FocusManager(popoverBodyRef?.current, textInputRef?.current, true, focusNodeIndex);
    };

    const getFirstFilteredOption = (searchString) => {
        const matchedOptions = getFilteredOptions(searchString);
        return matchedOptions?.length ? matchedOptions[0] : null;
    };

    const handleInputKeyDown = (event) => {
        const textField = event?.target;
        const textFieldValue = event?.target?.value;
        const selectedText = textFieldValue?.substring(textField?.selectionStart, textField?.selectionEnd);
        switch (keycode(event)) {
            case 'backspace':
                // console.debug('\n\nhandleInputKeyDown');
                // console.debug('selectedText', selectedText);

                const allTextIsSelected = selectedText?.length === textFieldValue?.length;
                // console.debug('allSelected', allTextIsSelected);

                const finalCharacter = selectedText?.length === textFieldValue?.length - 1;
                // console.debug('finalCharacter', finalCharacter);

                if (finalCharacter) {
                    createSelection(textField, 0, textFieldValue?.length);
                }

                if (allTextIsSelected) {
                    clearInputField();
                } else {
                    const fsMinusOne = filterString?.length && filterString.substring(0, filterString?.length - 1);
                    // console.debug('fsMinusOne', fsMinusOne);
                    handleInputChange({
                        target: {
                            value: fsMinusOne
                        }
                    }, true);
                }
                break;
            case 'enter':
                if (textFieldValue) {
                    // console.debug('matched');
                    const firstOption = getFirstFilteredOption(textFieldValue);
                    if (firstOption) {
                        handleOptionSelect(null, firstOption);
                        textField.select();
                    }
                }
                break;
            case 'esc':
                clearInputField();
                break;
            case 'tab':
                autoSelect(textFieldValue);
                closePopover();
                break;
            case 'up':
                setIsExpanded(true);
                attachFocusManager(lastTabbableNodeIndex(popoverBodyRef?.current));
                break;
            case 'down':
                setIsExpanded(true);
                attachFocusManager();
                break;
            default:
        }
    };

    const lastTabbableNodeIndex = (container) => {
        return container ? tabbable(container)?.length - 1 || 0 : 0;
    };

    const clearInputField = () => {
        textInputRef.current.value = '';
        setFilterString('');
        onSelectionChange && onSelectionChange(null, null);
        closePopover();
    };

    const autoSelect = (searchString) => {
        if (searchString) {
            const firstOption = getFirstFilteredOption(searchString);
            if (firstOption) {
                handleOptionSelect(null, firstOption);
                textInputRef?.current?.select();
            }
        }
    };

    const shouldTypeAhead = (optionText, inputValue) => {
        return optionText?.toLowerCase().startsWith(inputValue?.toLowerCase());
    };

    const handleInputChange = (event, erasing) => {

        const inputValue = event?.target?.value;
        //update
        setFilterString(inputValue);

        // editing text means selection is cleared
        onSelectionChange && onSelectionChange(null, null);

        //try type ahead nudge
        if (erasing) {
            textInputRef.current.value = filterString;
        } else if (inputValue) {
            setIsExpanded(true);
            const firstOption = getFirstFilteredOption(inputValue);
            if (firstOption && shouldTypeAhead(firstOption?.text, inputValue)) {
                textInputRef.current.value = firstOption?.text;
                createSelection(textInputRef.current, inputValue?.length, firstOption?.text?.length);
            }
        } else {
            closePopover();
        }
    };

    const anyWordStartsWith = (sentence, search) => {
        const sentenceLC = sentence?.toLowerCase();
        const searchLC = search?.toLowerCase();
        const words = sentenceLC.split(/[^a-zA-Z0-9.]/i);
        return words?.length && !!words?.find(word => word.startsWith(searchLC))?.length;
    };

    const getFilteredOptions = (searchString) => {
        //if non-empty string return options whose text begins with searchString, case insensitive
        if (searchString?.trim()?.length) {
            return options?.filter(eachOption => searchString?.toLowerCase().match(/\s/i)?.length ?
                eachOption?.text?.toLowerCase().startsWith(searchString?.toLowerCase())
                : anyWordStartsWith(eachOption?.text, searchString)
            );
        }
        //if empty string return all the options
        return options;
    };

    const comboboxAddonButton = (
        <Button
            {...buttonProps}
            aria-label={arrowLabel}
            glyph='navigation-down-arrow'
            id={`${id}-combobox-arrow`}
            onClick={(event) => {
                event.stopPropagation();
                setIsExpanded(!isExpanded);
            }}
            option='transparent'
            ref={ref}
            tabIndex='-1' />
    );

    const inputGroup = (
        <div
            aria-expanded={isExpanded}
            aria-haspopup='listbox'
            aria-owns={`${id}-listbox`}
            id={`${id}-combobox`}
            // disabling since we're using aria-owns
            // eslint-disable-next-line jsx-a11y/role-has-required-aria-props
            role='combobox' >
            <InputGroup
                {...props}
                className={inputGroupClass}
                compact={compact}
                disabled={disabled}
                onClick={handleClick}
                validationState={validationState}>
                <FormInput
                    {...inputProps}
                    aria-autocomplete='both'
                    aria-controls={`${id}-listbox`}
                    aria-labelledby={`${id}-label`}
                    compact={compact}
                    id={`${id}-input`}
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDown}
                    placeholder={placeholder}
                    ref={textInputRef} />
                <InputGroup.Addon isButton>
                    {comboboxAddonButton}
                </InputGroup.Addon>
            </InputGroup>
        </div>
    );

    const filteredOptions = getFilteredOptions(filterString);

    return (
        <>
            {
                label?.trim() &&
                <FormLabel id={`${id}-label`}>{label}</FormLabel>
            }
            <Popover
                {...popoverProps}
                body={
                    (<div
                        ref={popoverBodyRef}
                        style={{
                            maxHeight: '500px',
                            overflowY: 'scroll'
                        }}>
                        {validationState &&
                            <FormMessage
                                type={validationState.state}>
                                {validationState.text}
                            </FormMessage>
                        }
                        <List
                            aria-labelledby={`${id}-label`}
                            className='fd-list--dropdown'
                            id={`${id}-listbox`}
                            role='listbox'>
                            {filteredOptions?.length ? filteredOptions.map(option => {
                                const firstOccurrence = option.text?.toLowerCase().indexOf(filterString?.toLowerCase());
                                const leftPart = option.text?.substring(0, firstOccurrence);
                                const matchingPart = option.text?.substring(firstOccurrence, firstOccurrence + filterString?.length);
                                const rightPart = option.text?.substring(firstOccurrence + filterString?.length);
                                return (
                                    <List.Item
                                        key={option.key}
                                        onClick={(e) => handleOptionSelect(e, option)}
                                        onFocus={(e) => handleOptionFocus(e, option)}
                                        onKeyDown={(e) => handleOptionKeyDown(e, option)}
                                        role='option'>
                                        <List.Text>{filterString?.length ?
                                            (<>{leftPart}<b>{matchingPart}</b>{rightPart}</>)
                                            : option.text}</List.Text>
                                    </List.Item>
                                );
                            }) :
                                (<List.Item>
                                    <List.Text>{noMatchesText}</List.Text>
                                </List.Item>
                                )}
                        </List>
                    </div>)}
                control={inputGroup}
                disableKeyPressHandler
                disabled={disabled}
                firstFocusIndex={0}
                noArrow
                ref={popoverRef}
                show={isExpanded}
                useArrowKeyNavigation
                widthSizingType='minTarget' />
        </>
    );
});

ComboboxInput.displayName = 'ComboboxInput';

ComboboxInput.propTypes = {
    /** Localized string to use as a ariaLabel for the Combobox dropdown arrow button*/
    arrowLabel: PropTypes.string.isRequired,
    /** Unique id string for combobox control.
     * It is used to bind the various components within.
     * Please don't provide id's for internal components through their individual props*/
    id: PropTypes.string.isRequired,
    /** Localized string to use as a ariaLabel for the Combobox, this is required if `label` is not set
     * @param {Object} props all props
     * @returns {Error} if ariaLabel and label both are missing
    */
    ariaLabel: (props) => {
        if (!props.label?.trim() && !props.ariaLabel?.trim()) {
            return new Error(`
Missing property 'ariaLabel' on 'Combobox'.
Please set either 'label' or 'ariaLabel' property to a non-empty localized string.
`
            );
        }
    },
    /** Additional props to be spread to the `<button>` element */
    buttonProps: PropTypes.object,
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** Set to **true** to enable compact mode */
    compact: PropTypes.bool,
    /** Set to **true** to mark component as disabled and make it non-interactive */
    disabled: PropTypes.bool,
    /** Additional props to be spread to the `<input>` element */
    inputProps: PropTypes.object,
    /** Localized string to use as a label for the Combobox*/
    label: PropTypes.string,
    /** Localized string to show when no options match the input */
    noMatchesText: PropTypes.string,
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
        /** State of validation: 'error', 'warning', 'information', 'success' */
        state: PropTypes.oneOf(FORM_MESSAGE_TYPES),
        /** Text of the validation message */
        text: PropTypes.string
    }),
    /** Callback function when user clicks on the component*/
    onClick: PropTypes.func,
    /** Callback function when selected option changes after
     *
     * * user clicks on an option
     * * enters text that causes de-selection*/
    onSelectionChange: PropTypes.func
};

ComboboxInput.defaultProps = {
    options: [],
    onClick: () => { },
    onSelect: () => { }
};

export default ComboboxInput;
