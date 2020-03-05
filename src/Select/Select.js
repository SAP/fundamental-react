import Button from '../Button/Button';
import classnames from 'classnames';
import { FORM_MESSAGE_TYPES } from '../utils/constants';
import FormMessage from '../Forms/_FormMessage';
import Popover from '../Popover/Popover';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

const Select = React.forwardRef(({
    children,
    className,
    compact,
    disabled,
    disableStyles,
    id,
    onClick,
    placeholder,
    validationState,
    ...props
}, ref) => {

    useEffect(() => {
        if (!disableStyles) {
            require('fundamental-styles/dist/select.css');
        }
    }, []);

    let [isExpanded, setIsExpanded] = useState(false);

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

    const selectControl = (
        <div
            {...props}
            className={selectClasses}
            id={id}
            onClick={handleClick}
            ref={ref}>
            <div className={selectControlClasses}>
                {placeholder}
                <Button
                    className='fd-select__button'
                    disabled={disabled}
                    glyph='slim-arrow-down'
                    option='transparent'
                    ref={ref} />
            </div>
            {!isExpanded ? validationState && (<FormMessage
                disableStyles={disableStyles}
                type={validationState.state}>
                {validationState.text}
            </FormMessage>) : null}
        </div>
    );

    const listClassNames = classnames(
        'fd-list--dropdown',
        {
            'fd-list--has-message': validationState?.state
        }
    );

    const popoverBody = () => {
        return React.cloneElement(children, {
            compact: compact,
            className: listClassNames,
            role: 'listbox'
        });
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
                    {popoverBody()}
                </>)}
            control={selectControl}
            disableStyles={disableStyles}
            disabled={disabled}
            noArrow
            placement='bottom-start'
            popperProps={{ id }}
            widthSizingType='matchTarget' />
    );
});

Select.displayName = 'Select';

Select.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    compact: PropTypes.bool,
    disabled: PropTypes.bool,
    disableStyles: PropTypes.bool,
    id: PropTypes.string,
    placeholder: PropTypes.string,
    validationState: PropTypes.shape({
        state: PropTypes.oneOf(FORM_MESSAGE_TYPES),
        text: PropTypes.string
    }),
    onClick: PropTypes.func
};

Select.defaultProps = {
    onClick: () => {}
};

export default Select;
