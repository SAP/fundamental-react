import Button from '../Button/Button';
import classnames from 'classnames';
import Popover from '../Popover/Popover';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

const Dropdown = React.forwardRef(({
    children,
    className,
    disableStyles,
    placeholder,
    ...props
}, ref) => {

    useEffect(() => {
        if (!disableStyles) {
            require('fundamental-styles/dist/select.css');
            require('fundamental-styles/dist/list.css');
        }
    }, []);

    const dropdownClasses = classnames(
        'fd-select',
        className
    );

    const dropdownControl = (<div {...props} className={dropdownClasses}
        ref={ref}>
        <div className='fd-select__control'>
            {placeholder}
            <Button
                className='fd-select__button'
                glyph='slim-arrow-down'
                option='light'
                ref={ref} />
        </div>
    </div>);

    // // TO DO: replace this with List component
    // const dropdownBody = (
    //     <ul className='fd-list fd-list--dropdown' role='listbox'>
    //         <li
    //             aria-selected
    //             className='fd-list__item is-selected'
    //             role='option'
    //             tabIndex='0'>
    //             <span className='fd-list__title'>List item 1</span>
    //         </li>
    //     </ul>
    // );

    return (
        <Popover
            body={children}
            control={dropdownControl}
            noArrow
            placement='bottom-end' />
    );
});

Dropdown.displayName = 'Dropdown';

Dropdown.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    disableStyles: PropTypes.bool,
    placeholder: PropTypes.string
};


export default Dropdown;
