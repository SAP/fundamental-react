import { Popover } from '../Popover/Popover';
import PropTypes from 'prop-types';
import React from 'react';

// ------------------------------------------- Combobox Input ------------------------------------------
export const ComboboxInput = ({ placeholder, menu, compact, className, popoverProps, inputProps, buttonProps, ...props }) => {
    return (
        <div {...props} className={`fd-combobox-input${className ? ' ' + className : ''}`}>
            <Popover
                {...popoverProps}
                body={menu}
                control={
                    <div className='fd-combobox-control'>
                        <div
                            className={`fd-input-group fd-input-group--after${
                                compact ? ' fd-input-group--compact' : ''
                            }`}>
                            <input
                                {...inputProps}
                                className={`fd-input${compact ? ' fd-input--compact' : ''}`}
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

ComboboxInput.defaultTypes = {
    compact: false,
    placeholder: ''
};
