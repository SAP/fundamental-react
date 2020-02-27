import Button from '../Button/Button';
import classnames from 'classnames';
import Popover from '../Popover/Popover';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

const Select = React.forwardRef(({
    children,
    className,
    compact,
    disabled,
    disableStyles,
    inline,
    placeholder,
    ...props
}, ref) => {

    useEffect(() => {
        if (!disableStyles) {
            require('fundamental-styles/dist/select.css');
            require('fundamental-styles/dist/list.css');
        }
    }, []);

    const SelectClasses = classnames(
        'fd-select',
        {
            'fd-select--compact': compact,
            'fd-select--inline': inline
        },
        className
    );

    const SelectControl = (<div {...props} className={SelectClasses}
        ref={ref}>
        <div className='fd-select__control'>
            {placeholder}
            <Button
                className='fd-select__button'
                disabled={disabled}
                glyph='slim-arrow-down'
                option='light'
                ref={ref} />
        </div>
    </div>);

    const popoverBody = () => {
        return React.cloneElement(children, {
            className: 'fd-list--dropdown'
        });
    };

    return (
        <Popover
            body={popoverBody()}
            control={SelectControl}
            noArrow
            placement='bottom-end' />
    );
});

Select.displayName = 'Select';

Select.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    compact: PropTypes.bool,
    disabled: PropTypes.bool,
    disableStyles: PropTypes.bool,
    inline: PropTypes.bool,
    placeholder: PropTypes.string
};


export default Select;
