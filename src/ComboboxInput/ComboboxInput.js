import React from 'react';
import PropTypes from 'prop-types';
import { Popover } from '../Popover/Popover';

// ------------------------------------------- Combobox Input ------------------------------------------
export const ComboboxInput = ({ placeholder, menu, compact, className, ...props }) => {
  return (
      <div className={`fd-combobox-input${className ? ' ' + className : ''}`} {...props}>
          <Popover
              noArrow
              control={
                  <div className='fd-combobox-control'>
                      <div
                          className={`fd-input-group fd-input-group--after${
                compact ? ' fd-input-group--compact' : ''
              }`}>
                          <input
                              type='text'
                              className={`fd-input${compact ? ' fd-input--compact' : ''}`}
                              id=''
                              placeholder={placeholder} />
                          <span className='fd-input-group__addon fd-input-group__addon--after fd-input-group__addon--button'>
                              <button className=' fd-button--light sap-icon--navigation-down-arrow' />
                          </span>
                      </div>
                  </div>
        }
              body={menu} />
      </div>
  );
};

ComboboxInput.propTypes = {
  menu: PropTypes.object.isRequired,
  className: PropTypes.string,
  compact: PropTypes.bool,
  placeholder: PropTypes.string
};

ComboboxInput.defaultTypes = {
  compact: false,
  placeholder: ''
};
