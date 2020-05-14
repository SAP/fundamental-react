import Button from '../Button/Button';
import classnames from 'classnames';
import { FORM_MESSAGE_TYPES } from '../utils/constants';
import FormMessage from '../Forms/_FormMessage';
import List from '../List/List';
import Popover from '../Popover/Popover';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

/** A **Select** component lets the user select one of the different options.
It is more flexible than the normal Select. Use with the **List** component. */
const Select = React.forwardRef(({
    className,
    compact,
    disabled,
    disableStyles,
    id,
    options,
    onClick,
    onSelect,
    placeholder,
    selectedKey,
    validationState,
    ...props
}, ref) => {

    useEffect(() => {
        if (!disableStyles) {
            require('fundamental-styles/dist/select.css');
        }
    }, []);

    let [isExpanded, setIsExpanded] = useState(false);
    let [selectedOptionKey, setSelectedOptionKey] = useState(selectedKey);

    const handleClick = (e) => {
        setIsExpanded(!isExpanded);
        onClick(e);
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
            [`is-${validationState?.state}`]: validationState?.state
        }
    );

    const selected = options
        .find(option => typeof selectedOptionKey !== 'undefined' && option.key === selectedOptionKey);

    const selectControl = (
        <div
            {...props}
            className={selectClasses}
            id={id}
            onClick={handleClick}
            ref={ref}>
            <div className={selectControlClasses}>
                {selected ? selected.text : placeholder}
                <Button
                    className='fd-select__button'
                    disabled={disabled}
                    glyph='slim-arrow-down'
                    option='transparent'
                    ref={ref} />
            </div>
            {!isExpanded && validationState && (<FormMessage
                disableStyles={disableStyles}
                type={validationState.state}>
                {validationState.text}
            </FormMessage>)}
        </div>
    );

    const listClassName = classnames(
        'fd-list--dropdown',
        {
            'fd-list--has-message': validationState?.state
        }
    );

    const handleSelect = (e, option) => {
        setIsExpanded(false);
        setSelectedOptionKey(option.key);
        onSelect(e, option);
    };

    return (
        <Popover
            body={
                (<>
                    {validationState &&
                    <FormMessage
                        disableStyles={disableStyles}
                        type={validationState.state}>
                        {validationState.text}
                    </FormMessage>
                    }
                    <List
                        className={listClassName}
                        compact={compact}
                        role='listbox'>
                        {options.map(option => (
                            <List.Item
                                key={option.key}
                                onClick={(e) => handleSelect(e, option)}>
                                <List.Text>{option.text}</List.Text>
                            </List.Item>
                        ))}
                    </List>
                </>)}
            control={selectControl}
            disabled={disabled}
            disableStyles={disableStyles}
            noArrow
            placement='bottom-start'
            popperProps={{ id }}
            show={isExpanded}
            widthSizingType='matchTarget' />
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
    /** Internal use only */
    disableStyles: PropTypes.bool,
    /** Value for the `id` attribute on the element */
    id: PropTypes.string,
    /** An array of objects with a key and text to render the selectable options */
    options: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    })),
    /** Localized placeholder text of the input */
    placeholder: PropTypes.string,
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
