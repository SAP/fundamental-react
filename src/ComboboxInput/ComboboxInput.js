import classnames from 'classnames';
import { Popover } from '../Popover/Popover';
import PropTypes from 'prop-types';
import React from 'react';

// ------------------------------------------- Combobox Input ------------------------------------------
export const ComboboxInput = ({ placeholder, menu, compact, className, popoverProps, inputProps, buttonProps, ...props }) => {
    const comboboxInputClasses = classnames(
        'fd-combobox-input',
        className
    );

    const comboboxPopoverClasses = classnames(
        'fd-input-group',
        'fd-input-group--after',
        {
            'fd-input-group--compact': compact
        }
    );

    const comboboxPopoverInputClasses = classnames(
        'fd-input',
        {
            'fd-input--compact': compact
        }
    );

    return (
        <div {...props} className={comboboxInputClasses}>
            <Popover
                {...popoverProps}
                body={menu}
                control={
                    <div className='fd-combobox-control'>
                        <div
                            className={comboboxPopoverClasses}>
                            <input
                                {...inputProps}
                                className={comboboxPopoverInputClasses}
                                placeholder={placeholder}
                                type='text' />
                            <span className='fd-input-group__addon fd-input-group__addon--after fd-input-group__addon--button'>
                                <button {...buttonProps} className=' fd-button--light sap-icon--navigation-down-arrow' />
                            </span>
                        </div>
                    </div>
                }
                noArrow />
        </div>
    );
};

ComboboxInput.propTypes = {
    menu: PropTypes.object.isRequired,
    buttonProps: PropTypes.object,
    className: PropTypes.string,
    compact: PropTypes.bool,
    inputProps: PropTypes.object,
    placeholder: PropTypes.string,
    popoverProps: PropTypes.object
};

ComboboxInput.propDescriptions = {
    menu: 'An object containing a `Menu` component.'
};
