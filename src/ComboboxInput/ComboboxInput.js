import Button from '../Button/Button';
import classnamesBind from 'classnames/bind';
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
import requiredIf from 'react-required-if';
import { tabbable } from 'tabbable';
import withStyles from '../utils/withStyles';
import { COMBOBOX_SELECTION_TYPES, FORM_MESSAGE_TYPES } from '../utils/constants';
import React, { useEffect, useImperativeHandle, useRef, useState } from 'react';
import inputGroupStyles from 'fundamental-styles/dist/input-group.css';
import listStyles from 'fundamental-styles/dist/list.css';
import popoverStyles from 'fundamental-styles/dist/popover.css';

const classnames = classnamesBind.bind({
    ...listStyles,
    ...popoverStyles,
    ...inputGroupStyles
});

/** A **ComboboxInput** allows users to select an item from a predefined list.
It provides an editable input field for filtering the list, and a dropdown menu with a list of the available options.
If the entries are not validated by the application, users can also enter custom values. */
const ComboboxInput = React.forwardRef(({
    ariaLabel,
    arrowLabel,
    buttonProps,
    compact,
    className,
    cssNamespace,
    disabled,
    formItemProps,
    filterable,
    showAllEntries,
    id,
    inputProps,
    label,
    maxHeight,
    noMatchesText,
    onClick,
    onSelectionChange,
    optionRenderer,
    options,
    placeholder,
    popoverProps,
    required,
    searchFullString,
    selectedKey,
    selectionType,
    typedValue,
    validationOverlayProps,
    validationState,
    ...props
}, ref) => {
    let [isExpanded, setIsExpanded] = useState(false);
    let [filterString, setFilterString] = useState();
    let [selectedOption, setSelectedOption] = useState();

    const textInputRef = useRef(null);
    const inputAddonBtnRef = useRef(null);
    const popoverRef = useRef(null);
    const popoverBodyRef = useRef(null);

    useEffect(() => {
        const preSelectedOption = options?.find(option => option?.key === selectedKey) || null;
        if (preSelectedOption) {
            select(null, preSelectedOption, 'preSelection');
            setFilterString(preSelectedOption?.text || '');
            if (textInputRef?.current) {
                textInputRef.current.value = preSelectedOption?.text || '';
            }
        } else if (typeof typedValue === 'string') {
            setFilterString(typedValue);
            if (textInputRef?.current) {
                textInputRef.current.value = typedValue;
            }
        }
    }, [selectedKey, textInputRef, typedValue]);

    const inputGroupClass = classnames(
        `${cssNamespace}-input-group--control`,
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
            openPopoverToIndex();
        } else {
            setIsExpanded(false);
        }
    };

    const handleInputKeyDown = (event) => {
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
                        autoSelectFirstOption(event, textFieldValue, 'inputKeyDown');
                        break;
                }
                break;
            case 'esc':
                reset(event);
                break;
            case 'tab':
                switch (resolvedSelectionType) {
                    case 'auto':
                    case 'auto-inline':
                        autoSelectFirstOption(event, textFieldValue, 'inputKeyDown');
                        break;
                    default:
                }
                closePopover();
                break;
            case 'down':
            case 'up':
                let shouldShowOptions = true;
                switch (resolvedSelectionType) {
                    case 'manual':
                    case 'auto': {
                        shouldShowOptions = !!textFieldValue?.trim()?.length || false;
                    }
                        break;
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

        if (inputValue?.trim()) {
            setIsExpanded(true);
            switch (resolvedSelectionType) {
                case 'manual':
                    select(event, {
                        key: -1,
                        text: inputValue
                    }, 'inputChange');
                    break;
                case 'auto':
                    select(event, getFirstFilteredOption(inputValue), 'inputChange');
                    break;
                case 'auto-inline':
                    //try type ahead nudge
                    const firstOption = getFirstFilteredOption(inputValue);
                    if (
                        firstOption
                        && startsWithIgnoreCase(firstOption?.text, inputValue)
                    ) {
                        textInputRef.current.value = firstOption?.text;
                        createSelection(textInputRef.current, inputValue?.length, firstOption?.text?.length);
                    }
                    select(event, firstOption, 'inputChange');
                    break;
                default:
            }
        } else {
            select(event, {
                key: -1,
                text: inputValue
            }, 'inputChange');
            closePopover();
        }
    };

    const handleInputBlur = (event) => {
        switch (resolvedSelectionType) {
            case 'manual':
                if (!selectedOption?.key && filterString?.trim().length) {
                    onSelectionChange && onSelectionChange(event, {
                        'text': filterString,
                        'key': -1 //key is set to -1 for custom input in manual combobox
                    }, 'inputBlur');
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
                select(event, option, 'optionFocus');
                break;
            case 'auto-inline':
                textInputRef.current.value = option?.text;
                select(event, option, 'optionFocus');
                break;
            default:
        }
    };

    const handleOptionKeyDown = (event, option) => {
        switch (keycode(event)) {
            case 'esc':
                reset(event);
                break;
            case 'tab':
                handleOptionSelect(event, option, 'optionKeyDown');
                break;
            case 'enter':
            case 'space':
                event.preventDefault();
                handleOptionSelect(event, option, 'optionKeyDown');
                break;
            default:
        }
    };

    const handleOptionSelect = (event, option, reason) => {
        select(event, option, reason);
        textInputRef.current.value = option?.text;
        setFilterString(option?.text);
        closePopover();
    };

    const handlePopoverOutsideClick = () => {
        isExpanded && closePopover();
        switch (resolvedSelectionType) {
            case 'manual':
                setFilterString(textInputRef?.current?.value);
                break;
            case 'auto':
                setFilterString(selectedOption?.text || '');
                textInputRef.current.value = selectedOption?.text || '';
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

    const autoSelectFirstOption = (event, searchString, reason) => {
        if (searchString) {
            const firstOption = getFirstFilteredOption(searchString);
            if (firstOption) {
                handleOptionSelect(event, firstOption, reason);
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

    const reset = (event) => {
        closePopover();
        textInputRef.current.value = '';
        select(event, {
            key: -1,
            text: ''
        }, 'escKeyDown');
        setFilterString('');
    };

    const select = (event, option, reason) => {
        // at least key or text has to be different to count as a true selection change
        if (selectedOption?.key !== option?.key || selectedOption.text !== option?.text) {
            onSelectionChange && onSelectionChange(event, option, reason);
            setSelectedOption(option);
        }
    };

    const queueFocusManagerAttachment = (initialFocusIndex) => {
        setTimeout(() => {
            attachFocusManager(initialFocusIndex);
        }, 0);
    };

    //String, collection, and DOM utils
    const getFirstFilteredOption = (searchString) => {
        const matchedOptions = getFilteredOptions(searchString);
        return matchedOptions?.length ? matchedOptions[0] : {
            key: -1,
            text: searchString
        };
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
        const words = sentenceLC.split(/\s/i);
        return words?.length && !!words?.find(word => {
            const normalizedWord = word.normalize('NFD').replace(/\p{Diacritic}/gu, '');
            return searchFullString ? normalizedWord.includes(searchLC) : normalizedWord.startsWith(searchLC);
        })?.length;
    };

    const getFilteredOptions = (searchString) => {
        //if non-empty string return options whose text begins with searchString, case insensitive
        if (searchString?.trim()?.length) {
            return options?.filter(eachOption => {
                if (searchString?.toLowerCase().match(/\s/i)?.length) {
                    if (searchFullString) return eachOption?.text?.toLowerCase().includes(searchString?.toLowerCase());
                    else return eachOption?.text?.toLowerCase().startsWith(searchString?.toLowerCase());
                } else return anyWordStartsWith(eachOption?.text, searchString);
            }
            );
        }
        //if empty string return all the options
        return options;
    };

    const getRemainingOptions = (filteredOptions) => {
        if (showAllEntries) {
            if (showAllEntries) return options?.filter( ( el ) => !filteredOptions?.includes( el ) ) || [];
            else return options?.filter( ( el ) => !filteredOptions?.startsWith( el ) ) || [];
        } else {
            return [];
        }
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
            <List.Text>{(filterString?.length && firstOccurrence !== -1) ?
                (<>{leftPart}<b>{matchingPart}</b>{rightPart}</>)
                : option.text}</List.Text>
        );
        return content;
    };

    const filteredOptions = getFilteredOptions(filterString);
    const remainingOptions = getRemainingOptions(filteredOptions);
    const sortedOptions = [...filteredOptions, ...remainingOptions];
    const showPopover = isExpanded && (!!options.length);

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
            ref={inputAddonBtnRef}
            tabIndex='-1' />
    );

    let labelProps = {};
    if (label?.trim()) {
        labelProps['aria-labelledby'] = `${id}-label`;
    } else if (ariaLabel?.trim()) {
        labelProps['aria-label'] = ariaLabel;
    }

    useImperativeHandle(ref, () => ({
        get input() {
            return textInputRef.current;
        },
        get button() {
            return inputAddonBtnRef.current;
        }
    }));

    const inputGroup = (
        <div
            aria-expanded={showPopover}
            aria-haspopup='listbox'
            aria-owns={`${id}-listbox-list`}
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
                validationOverlayProps={validationOverlayProps}
                validationState={isExpanded ? null : validationState}>
                <FormInput
                    autoComplete='off'
                    {...inputProps}
                    {...labelProps}
                    aria-autocomplete={resolvedSelectionType === 'auto-inline' ? 'both' : 'list'}
                    aria-controls={`${id}-listbox-list`}
                    compact={compact}
                    id={`${id}-input`}
                    onBlur={handleInputBlur}
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDown}
                    placeholder={placeholder}
                    ref={textInputRef}
                    required={required} />
                <InputGroup.Addon isButton>
                    {comboboxAddonButton}
                </InputGroup.Addon>
            </InputGroup>
        </div>
    );

    return (
        <FormItem
            {...formItemProps}>
            {
                label?.trim() &&
                <FormLabel
                    disabled={disabled}
                    id={`${id}-label`}
                    required={required} >
                    {label}
                </FormLabel>
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
                                {...validationOverlayProps?.formMessageProps}
                                type={validationState.state}>
                                {validationState.text}
                            </FormMessage>
                        }
                        <List
                            {...labelProps}
                            className={classnames(`${cssNamespace}-list--dropdown`)}
                            compact={compact}
                            id={`${id}-listbox`}
                            noBorder
                            role='listbox'>
                            {!filteredOptions.length ? (
                                <List.Item
                                    tabIndex='-1'>
                                    <List.Text
                                        role='option'>
                                        {noMatchesText || 'No match'}
                                    </List.Text>
                                </List.Item>
                            ) : <></>}
                            {sortedOptions?.length ? sortedOptions.map(option => {

                                const listItemClasses = classnames({
                                    'is-selected': selectedOption?.key ? option?.key === selectedOption?.key : false
                                });

                                return (
                                    <List.Item
                                        className={listItemClasses}
                                        id={`${id}-listbox-option-${option.key}`}
                                        key={option.key}
                                        onClick={(e) => handleOptionSelect(e, option, 'optionClick')}
                                        onFocus={(e) => handleOptionFocus(e, option)}
                                        onKeyDown={(e) => handleOptionKeyDown(e, option)}
                                        role='option'>
                                        {renderListOption(option)}
                                    </List.Item>
                                );
                            }) : <></>}

                        </List>
                    </div>)}
                control={inputGroup}
                disableKeyPressHandler
                disableTriggerOnClick
                disabled={disabled}
                noArrow
                onClickOutside={handlePopoverOutsideClick}
                popperClassName={classnames(`${cssNamespace}-popover__body--dropdown`)}
                ref={popoverRef}
                show={showPopover}
                useArrowKeyNavigation
                widthSizingType='maxTarget' />
        </FormItem>
    );
});

ComboboxInput.displayName = 'ComboboxInput';

ComboboxInput.propTypes = {
    /** Unique id string for combobox control.
     * It is used to bind the various components within.
     * Please don't provide id's for internal components through their individual props
     * */
    id: PropTypes.string.isRequired,
    /** Localized string to use as a ariaLabel for the Combobox, this is required if `label` is not set
     */
    ariaLabel: requiredIf(PropTypes.string, props => !props.label?.trim() && !props.ariaLabel?.trim()),
    /** Localized string to use as a ariaLabel for the Combobox dropdown arrow button.
     *
     * @param {Object} props all props
     * @returns {Error} if arrowLabel is missing, combobox is filterable and selectionType is 'auto-inline'
     */
    arrowLabel: (props) => {
        if (!props.arrowLabel?.trim() && props?.filterable && props?.selectionType === 'auto-inline') {
            return new Error(`
Missing property 'arrowLabel'.
Dropdown arrow/caret button is displayed if combobox is filterable and selectionType is 'auto-inline'.
An accessible localized string is needed for this button.
Please set 'arrowLabel' property to a non-empty localized string.
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
    /** Localized string to use as a visual and semantic label for the Combobox*/
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
    /** Set to **true** to mark input field as required.*/
    required: PropTypes.bool,
    /** Set it to **true** to search through the full string instead of just the beggining */
    searchFullString: PropTypes.bool,
    /** The key corresponding to the selected option */
    selectedKey: PropTypes.string,
    /** String representing option selection behaviors:
     *
     * * `'manual'`: User has to manually select the option by navigating through the listbox options
     * * `'auto'`: First option from the filtered options is automatically selected, user chooses different option by navigating through the list
     * * `'auto-inline'`: First option from the filtered options is automatically selected and its options.text value is populated inline (type-ahead), user chooses different option by navigating through the list
    */
    selectionType: PropTypes.oneOf(COMBOBOX_SELECTION_TYPES),
    /** Set it to **true** to show all entries, also those not maching the searched query */
    showAllEntries: PropTypes.bool,
    /** The value used if selectedKey is not given or it matches no option. */
    typedValue: PropTypes.string,
    /** Additional props to be spread to the ValidationOverlay */
    validationOverlayProps: PropTypes.shape({
        /** Additional classes to apply to validation popover's outermost `<div>` element  */
        className: PropTypes.string,
        /** Additional props to be spread to the ValdiationOverlay's FormMessage component */
        formMessageProps: PropTypes.object,
        /** Additional classes to apply to validation popover's popper child `<div>` wrapping the provided children  */
        innerRefClassName: PropTypes.string,
        /** Additional classes to apply to validation popover's popper `<div>` element  */
        popperClassName: PropTypes.string,
        /** CSS class(es) to add to the ValidationOverlay's reference `<div>` element */
        referenceClassName: PropTypes.string,
        /** Additional props to be spread to the popover's outermost `<div>` element */
        wrapperProps: PropTypes.object
    }),
    /** An object identifying a validation message.  The object will include properties for `state` and `text`; _e.g._, \`{ state: \'warning\', text: \'This is your last warning\' }\` */
    validationState: PropTypes.shape({
        /** State of validation: 'error', 'warning', 'information', 'success' */
        state: PropTypes.oneOf(FORM_MESSAGE_TYPES),
        /** Text of the validation message */
        text: PropTypes.string
    }),
    /** Callback function; triggered when user clicks in the text input field.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent. See https://reactjs.org/docs/events.html.
     * @returns {void}
    */
    onClick: PropTypes.func,
    /** Callback function; triggered when the selected option changes.
     * There can be many reasons for a selection change depending on the `selectionType` of the combobox.
     * The reason is available as a String and could be one of `preSelection`, `inputBlur`, `inputChange`, `inputKeyDown`,
     * `optionFocus`, `optionKeyDown`, `optionClick`.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent. See https://reactjs.org/docs/events.html.
     * @param {Object} selected - the selected option object. Will contain at least the 'key' and 'text' properties.
     * @param {string} reason - what caused the selection to change
     * @returns {void}
    */
    onSelectionChange: PropTypes.func
};

ComboboxInput.defaultProps = {
    filterable: true,
    options: [],
    onClick: () => { },
    onSelectionChange: () => { },
    selectionType: 'manual'
};

export default withStyles(ComboboxInput);
