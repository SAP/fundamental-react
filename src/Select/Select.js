import classnames from 'classnames';
import { detect } from 'detect-browser';
import { FORM_MESSAGE_TYPES } from '../utils/constants';
import FormMessage from '../Forms/_FormMessage';
import keycode from 'keycode';
import List from '../List/List';
import Popover from '../Popover/Popover';
import PropTypes from 'prop-types';
import tryFocus from '../utils/tryFocus';
import React, { useEffect, useRef, useState } from 'react';
import 'fundamental-styles/dist/icon.css';
import 'fundamental-styles/dist/button.css';
import 'fundamental-styles/dist/select.css';


/** A **Select** component lets the user select one of the different options.
It is more flexible than the normal Select. Use with the **List** component. */
const Select = React.forwardRef(({
    className,
    compact,
    disabled,
    emptyAriaLabel,
    id,
    includeEmptyOption,
    options,
    onClick,
    onSelect,
    placeholder,
    readOnly,
    selectedKey,
    validationState,
    ...props
}, ref) => {

    const internalDivRef = useRef(null);
    const divRef = ref || internalDivRef;

    const ulRef = useRef(null);

    let [isExpanded, setIsExpanded] = useState(false);
    let [focusedElement, setFocusedElement] = useState();
    let [selectedOptionKey, setSelectedOptionKey] = useState(selectedKey);

    const handleClick = (e) => {
        if (!disabled && !readOnly) {
            setIsExpanded(!isExpanded);
            onClick(e);
        }
    };

    const handleSelect = (e, option) => {
        setIsExpanded(false);
        setSelectedOptionKey(option.key);
        onSelect(e, option);
    };

    const isKeyboardEvent = (e) => {
        // we are able to use e.details for modern browsers, but IE11 doesn't work the same way (big surprise)
        // for IE11, we can make use of e.screenX and e.screenY
        // the screenX and screenY properties can't be used as a global replacement
        // because Safari doesn't work the same way for those (of course)
        const browser = detect();

        if (browser && browser.name === 'ie') {
            return !e.screenX && !e.screenY;
        }

        return e.detail === 0;
    };


    const getFocusableMenuItems = () => [...ulRef.current.children];

    const getItemsAndActiveIndex = () => {
        const items = getFocusableMenuItems();
        const activeIndex = items.indexOf(document.activeElement);

        return { items, activeIndex };
    };

    const focusFirst = () => {
        const { items } = getItemsAndActiveIndex();
        if (items.length === 0) {
            return;
        }
        if (isKeyboardEvent) {
            let selectedItem = items.filter(listItem => listItem.className === 'fd-list__item is-selected');
            selectedItem.length ? setFocusedElement(tryFocus(selectedItem[0])) :
                setFocusedElement(tryFocus(items[0]));
        }
    };

    useEffect(() => {
        if (isExpanded) focusFirst();
    }, [isExpanded]);

    useEffect(() => {
        focusedElement && focusedElement.focus();
    }, [focusedElement]);

    const focusNext = () => {
        const { items, activeIndex } = getItemsAndActiveIndex();
        if (items.length === 0) return;

        if (activeIndex !== items.length - 1) {
            setFocusedElement(tryFocus(items[activeIndex + 1]));
        } else {
            setFocusedElement(tryFocus(items[0]));
        }
    };

    const focusPrevious = () => {
        const { items, activeIndex } = getItemsAndActiveIndex();
        if (items.length === 0) return;

        if (activeIndex <= 0) {
            setFocusedElement(tryFocus(items[items.length - 1]));
        } else {
            setFocusedElement(tryFocus(items[activeIndex - 1]));
        }
    };

    const handleKeyDown = (e, option) => {
        switch (keycode(e)) {
            case 'esc':
            case 'tab':
                e.stopPropagation();
                setIsExpanded(false);
                setFocusedElement(tryFocus(divRef.current));
                break;
            case 'enter':
            case 'space':
                e.preventDefault();
                handleSelect(e, option);
                setFocusedElement(tryFocus(divRef.current));
                break;
            case 'up':
                e.preventDefault();
                focusPrevious();
                break;
            case 'down':
                e.preventDefault();
                focusNext();
                break;
            default:
        }
    };

    const selectClasses = classnames(
        'fd-select',
        {
            'fd-select--compact': compact
        },
        className
    );

    const selectControlClasses = classnames(
        'fd-select__control',
        {
            'is-disabled': disabled,
            'is-readonly': readOnly,
            [`is-${validationState?.state}`]: validationState?.state
        }
    );

    const displayOptions = includeEmptyOption ? [{ text: '', key: 'emptyOption', ariaLabel: emptyAriaLabel }, ...options] : options;

    const selected = displayOptions
        .find(option => typeof selectedOptionKey !== 'undefined' && option.key === selectedOptionKey);

    const textContent = selected ? selected.text : placeholder;

    const selectAriaLabel = (includeEmptyOption && !textContent) ? emptyAriaLabel : null;

    const selectControl = (
        <div
            {...props}
            className={selectClasses}
            id={id}
            onClick={handleClick}
            ref={divRef}>
            <div aria-disabled={disabled} className={selectControlClasses}>
                <span aria-label={selectAriaLabel} className='fd-select__text-content'>{textContent}</span>
                {!readOnly && <span className='fd-button fd-button--transparent sap-icon--slim-arrow-down fd-select__button' />}
            </div>
        </div>
    );

    const listClassName = classnames(
        'fd-list--dropdown',
        {
            'fd-list--has-message': validationState?.state
        }
    );

    return (
        <Popover
            aria-disabled={disabled}
            body={
                (<>
                    {validationState &&
                    <FormMessage
                        type={validationState.state}>
                        {validationState.text}
                    </FormMessage>
                    }
                    <List
                        className={listClassName}
                        compact={compact}
                        ref={ulRef}
                        role='listbox'
                        tabIndex='-1'>
                        {displayOptions.map(option => (
                            <List.Item
                                aria-label={option.ariaLabel}
                                aria-selected={selected?.key === option.key}
                                key={option.key}
                                onClick={(e) => handleSelect(e, option)}
                                onKeyDown={(e) => handleKeyDown(e, option)}
                                role='option'
                                selected={selected?.key === option.key}
                                tabIndex={selected?.key === option.key ? '0' : '-1'}>
                                <List.Text>{option.text}</List.Text>
                            </List.Item>
                        ))}
                    </List>
                </>)}
            control={selectControl}
            noArrow
            onClickOutside={() => setIsExpanded(false)}
            placement='bottom-start'
            popperProps={{ id }}
            show={isExpanded}
            widthSizingType='minTarget' />
    );
});

Select.displayName = 'Select';

Select.propTypes = {
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** Set to **true** to enable compact mode */
    compact: PropTypes.bool,
    /** Set to **true** to mark component as disabled and make it non-interactive */
    disabled: PropTypes.bool,
    /** Localized screen reader label for an empty option if included, or if no placeholder is included */
    emptyAriaLabel: PropTypes.string,
    /** Value for the `id` attribute on the element */
    id: PropTypes.string,
    /** Set to **true** to include an empty option. If true, also provide an `emptyAriaLabel` */
    includeEmptyOption: PropTypes.bool,
    /** An array of objects with a key and text to render the selectable options */
    options: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    })),
    /** Localized placeholder text of the input */
    placeholder: PropTypes.string,
    /** Set to **true** to enable readonly mode */
    readOnly: PropTypes.bool,
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
    /** Callback function when user clicks on an option */
    onSelect: PropTypes.func
};

Select.defaultProps = {
    options: [],
    onClick: () => {},
    onSelect: () => {}
};

export default Select;
