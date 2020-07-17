import Button from '../Button/Button';
import classnames from 'classnames';
import FocusManager from '../utils/focusManager/focusManager';
import FormInput from '../Forms/FormInput';
import FormItem from '../Forms/FormItem';
import FormLabel from '../Forms/FormLabel';
import FormMessage from '../Forms/_FormMessage';
import InputGroup from '../InputGroup/InputGroup';
import keycode from 'keycode';
import List from '../List/List';
import Popover from '../Popover/Popover';
import PropTypes from 'prop-types';
import tabbable from 'tabbable';
import { COMBOBOX_SELECTION_TYPES, FORM_MESSAGE_TYPES } from '../utils/constants';
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
    formItemProps,
    filterable,
    id,
    popoverProps,
    inputProps,
    buttonProps,
    selectedKey,
    selectionType,
    label,
    maxHeight,
    noMatchesText,
    onClick,
    onSelectionChange,
    options,
    optionRenderer,
    validationState,
    ...props
}, ref) => {
    let [isExpanded, setIsExpanded] = useState(false);
    let [filterString, setFilterString] = useState();
    let [selectedOption, setSelectedOption] = useState();

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

    const resolvedSelectionType = filterable ? selectionType : 'manual';

    // Event handling
    const handleInputGroupClick = (e) => {
        if (isExpanded) {
            closePopover();
            setFilterString(textInputRef?.current?.value);
        }
        if (!disabled) {
            onClick(e);
        }
    };

    const handleAddonButtonClick = (event) => {
        event.stopPropagation();
        if (!isExpanded) {
            textInputRef?.current?.focus();
            openPopoverToIndex();
        } else {
            setIsExpanded(false);
        }
    };

    const handleInputKeyDown = (event) => {
        const textField = event?.target;
        const textFieldValue = event?.target?.value;
        switch (keycode(event)) {
            case 'backspace':
                textInputRef.current.value = filterString;
                break;
            case 'enter':
                switch (resolvedSelectionType) {
                    case 'manual':
                        event.preventDefault();
                        break;
                    default:
                        autoSelectFirstOption(event, textFieldValue);
                        textField.select();
                        break;
                }
                break;
            case 'esc':
                reset();
                break;
            case 'tab':
                switch (resolvedSelectionType) {
                    case 'auto':
                    case 'auto-inline':
                        autoSelectFirstOption(event, textFieldValue);
                        break;
                    default:
                }
                closePopover();
                break;
            case 'down':
            case 'up':
                let shouldShowOptions = true;
                switch (resolvedSelectionType) {
                    case 'manual': {
                        shouldShowOptions = !!textFieldValue?.trim()?.length || false;
                    }
                        break;
                    case 'auto':
                    case 'auto-inline':
                        break;
                    default:
                }
                if (shouldShowOptions) {
                    let targetIndex = selectedOption?.key ? 1 : 0;
                    if (keycode(event) === 'up') {
                        targetIndex = lastTabbableNodeIndex(popoverBodyRef?.current);
                    }
                    openPopoverToIndex(targetIndex);
                }
                break;
            case 'left':
            case 'right':
                setFilterString(textFieldValue);
                break;
            default:
        }
    };

    const handleInputChange = (event) => {
        const inputValue = event?.target?.value;
        setFilterString(inputValue);
        select(null, null);

        //try type ahead nudge
        if (inputValue?.trim()) {
            setIsExpanded(true);
            const firstOption = getFirstFilteredOption(inputValue);
            switch (resolvedSelectionType) {
                case 'manual':
                    break;
                case 'auto':
                    select(event, firstOption);
                    break;
                case 'auto-inline':
                    if (
                        firstOption
                        && startsWithIgnoreCase(firstOption?.text, inputValue)
                    ) {
                        textInputRef.current.value = firstOption?.text;
                        createSelection(textInputRef.current, inputValue?.length, firstOption?.text?.length);
                    }
                    select(event, firstOption);
                    break;
                default:
            }
        } else {
            closePopover();
        }
    };

    const handleInputBlur = (event) => {
        switch (resolvedSelectionType) {
            case 'manual':
                if (!selectedOption?.key) {
                    onSelectionChange && onSelectionChange(event, {
                        'text': textInputRef?.current?.value,
                        'key': -1
                    });
                }
                break;
            case 'auto':
                break;
            case 'auto-inline':
                break;
            default:
        }
    };

    const handleOptionFocus = (event, option) => {
        switch (resolvedSelectionType) {
            case 'manual':
                break;
            case 'auto':
                select(event, option);
                break;
            case 'auto-inline':
                textInputRef.current.value = option?.text;
                select(event, option);
                break;
            default:
        }
    };

    const handleOptionKeyDown = (event, option) => {
        switch (keycode(event)) {
            case 'esc':
                reset();
                break;
            case 'tab':
                event.stopPropagation();
                switch (resolvedSelectionType) {
                    case 'manual':
                    case 'auto':
                        handleOptionSelect(event, option);
                        // closePopover();
                        // setFilterString(option?.text);
                        // select(event, option);
                        break;
                    case 'auto-inline':
                        closePopover();
                        setFilterString(option?.text);
                        break;
                    default:
                }
                break;
            case 'enter':
            case 'space':
                event.preventDefault();
                handleOptionSelect(event, option);
                break;
            default:
        }
    };

    const handleOptionSelect = (event, option) => {
        closePopover();
        textInputRef.current.value = option?.text;
        textInputRef.current?.select();
        select(event, option);
        setFilterString(option?.text);
    };

    const handlePopoverOutsideClick = () => {
        closePopover();
        switch (resolvedSelectionType) {
            case 'manual':
                setFilterString(textInputRef?.current?.value);
                break;
            case 'auto':
                setFilterString(selectedOption?.text);
                textInputRef.current.value = selectedOption?.text;
                break;
            case 'auto-inline':
                setFilterString(selectedOption?.text);
                break;
            default:
        }
    };

    // DOM and State Manipulation
    const attachFocusManager = (focusNodeIndex = 0) => {
        popoverBodyRef?.current &&
            textInputRef?.current &&
            new FocusManager(popoverBodyRef?.current, textInputRef?.current, true, focusNodeIndex);
    };

    const autoSelectFirstOption = (event, searchString) => {
        if (searchString) {
            const firstOption = getFirstFilteredOption(searchString);
            if (firstOption) {
                handleOptionSelect(event, firstOption);
            }
        }
    };

    const closePopover = () => {
        setIsExpanded(false);
        const popover = popoverRef && popoverRef.current;
        popover && popover.handleEscapeKey();
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

    const openPopoverToIndex = (index) => {
        setIsExpanded(true);
        queueFocusManagerAttachment(index);
    };

    const reset = () => {
        closePopover();
        textInputRef.current.value = '';
        select(null, null);
        setFilterString('');
    };

    const select = (event, option) => {
        onSelectionChange && onSelectionChange(event, option);
        setSelectedOption(option);
    };

    const queueFocusManagerAttachment = (initialFocusIndex) => {
        setTimeout(() => {
            attachFocusManager(initialFocusIndex);
        }, 0);
    };

    //String, collection, and DOM utils
    const getFirstFilteredOption = (searchString) => {
        const matchedOptions = getFilteredOptions(searchString);
        return matchedOptions?.length ? matchedOptions[0] : null;
    };

    const lastTabbableNodeIndex = (container) => {
        return container ? tabbable(container)?.length - 1 || 0 : 0;
    };

    const startsWithIgnoreCase = (optionText, inputValue) => {
        return optionText?.toLowerCase().startsWith(inputValue?.toLowerCase());
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


    // Rendering
    const renderListOption = (option) => {
        if (optionRenderer) {
            return optionRenderer(option);
        }
        const firstOccurrence = option.text?.toLowerCase().indexOf(filterString?.toLowerCase());
        const leftPart = option.text?.substring(0, firstOccurrence);
        const matchingPart = option.text?.substring(firstOccurrence, firstOccurrence + filterString?.length);
        const rightPart = option.text?.substring(firstOccurrence + filterString?.length);
        const content = (
            <List.Text>{filterString?.length ?
                (<>{leftPart}<b>{matchingPart}</b>{rightPart}</>)
                : option.text}</List.Text>
        );
        return content;
    };

    const filteredOptions = getFilteredOptions(filterString);
    const showPopover = isExpanded && !!filteredOptions.length;

    const comboboxAddonButton = (
        <Button
            {...buttonProps}
            aria-label={arrowLabel}
            className={classnames(
                buttonProps?.className,
                {
                    'is-active': showPopover
                }
            )}
            glyph='navigation-down-arrow'
            id={`${id}-combobox-arrow`}
            onClick={handleAddonButtonClick}
            option='transparent'
            ref={ref}
            tabIndex='-1' />
    );

    const inputGroup = (
        <div
            aria-expanded={showPopover}
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
                onClick={handleInputGroupClick}
                validationState={validationState}>
                <FormInput
                    {...inputProps}
                    aria-autocomplete='both'
                    aria-controls={`${id}-listbox`}
                    aria-labelledby={`${id}-label`}
                    autoComplete='off'
                    compact={compact}
                    id={`${id}-input`}
                    onBlur={handleInputBlur}
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDown}
                    placeholder={placeholder}
                    ref={textInputRef} />
                {
                    resolvedSelectionType === 'auto-inline'
                    && (
                        <InputGroup.Addon isButton>
                            {comboboxAddonButton}
                        </InputGroup.Addon>
                    )
                }
            </InputGroup>
        </div>
    );

    return (
        <FormItem
            {...formItemProps}>
            {
                label?.trim() &&
                <FormLabel id={`${id}-label`}>{label}</FormLabel>
            }
            {/* <small>{`typ:${resolvedSelectionType}, fs:${filterString}, sok:${selectedOption?.key}`}</small> */}
            <Popover
                {...popoverProps}
                body={
                    (<div
                        ref={popoverBodyRef}
                        style={{
                            maxHeight: maxHeight,
                            overflowY: 'auto'
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
                                return (
                                    <List.Item
                                        id={`${id}-listbox-option-${option.key}`}
                                        key={option.key}
                                        onClick={(e) => handleOptionSelect(e, option)}
                                        onFocus={(e) => handleOptionFocus(e, option)}
                                        onKeyDown={(e) => handleOptionKeyDown(e, option)}
                                        role='option'
                                        selected={selectedOption?.key ? option?.key === selectedOption?.key : false}>
                                        {renderListOption(option)}
                                    </List.Item>
                                );
                            }) :
                                (<List.Item
                                    tabIndex='-1'>
                                    <List.Text
                                        role='option'>
                                        {noMatchesText || 'No match'}
                                    </List.Text>
                                </List.Item>
                                )}
                        </List>
                    </div>)}
                control={inputGroup}
                disableKeyPressHandler
                disableTriggerOnClick
                disabled={disabled}
                noArrow
                onClickOutside={handlePopoverOutsideClick}
                ref={popoverRef}
                show={showPopover}
                useArrowKeyNavigation
                widthSizingType='minTarget' />
        </FormItem>
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
    /** Set to **false** to disable option filtering. If **false** `selectionType` will be forced to `'manual'`.
     * You can disable filtering to show a static list of options regardless of the text value, for example recent selections etc. */
    filterable: PropTypes.bool,
    /** Additional props to be spread to the combobox FormItem wrapper */
    formItemProps: PropTypes.object,
    /** Additional props to be spread to the `<input>` element */
    inputProps: PropTypes.object,
    /** Localized string to use as a label for the Combobox*/
    label: PropTypes.string,
    /** CSS value for maxHeight property of listbox popover*/
    maxHeight: PropTypes.string,
    /** Localized string to show when no options match the input */
    noMatchesText: PropTypes.string,
    /** A function to render each option*/
    optionRenderer: PropTypes.func,
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
    /** String representing option selection behaviors:
     *
     * * `'manual'`: User has to manually select the option by navigating through the listbox options
     * * `'auto'`: First option from the filtered options is automatically selected, user chooses different option by navigating through the list
     * * `'auto-inline'`: First option from the filtered options is automatically selected and its options.text value is populated inline (type-ahead), user chooses different option by navigating through the list
    */
    selectionType: PropTypes.oneOf(COMBOBOX_SELECTION_TYPES),
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
    filterable: true,
    options: [],
    onClick: () => { },
    onSelect: () => { },
    selectionType: 'manual'
};

export default ComboboxInput;
