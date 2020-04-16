import Button from '../Button/Button';
import classnames from 'classnames';
import { FORM_MESSAGE_TYPES } from '../utils/constants';
import FormMessage from '../Forms/_FormMessage';
import List from '../List/List';
import Popover from '../Popover/Popover';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

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
            disableStyles={disableStyles}
            disabled={disabled}
            noArrow
            placement='bottom-start'
            popperProps={{ id }}
            show={isExpanded}
            widthSizingType='matchTarget' />
    );
});

Select.displayName = 'Select';

Select.propTypes = {
    className: PropTypes.string,
    compact: PropTypes.bool,
    disabled: PropTypes.bool,
    disableStyles: PropTypes.bool,
    id: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    })),
    placeholder: PropTypes.string,
    selectedKey: PropTypes.string,
    validationState: PropTypes.shape({
        state: PropTypes.oneOf(FORM_MESSAGE_TYPES),
        text: PropTypes.string
    }),
    onClick: PropTypes.func,
    onSelect: PropTypes.func
};

Select.defaultProps = {
    options: [],
    onClick: () => {},
    onSelect: () => {}
};

export default Select;
