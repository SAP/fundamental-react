import React from 'react';
import PropTypes from 'prop-types';
import { Popover } from '../Popover/Popover';

// ------------------------------------------- Combobox Input ------------------------------------------
export const ComboboxInput = props => {
  const { id, placeholder, menu, compact } = props;
  return (
    <div className="fd-combobox-input">
      <Popover
        id={id}
        noArrow
        control={
          <div className="fd-combobox-control">
            <div
              className={`fd-input-group fd-input-group--after${
                compact ? ' fd-input-group--compact' : ''
              }`}
            >
              <input
                type="text"
                className={`fd-input${compact ? ' fd-input--compact' : ''}`}
                id=""
                placeholder={placeholder}
              />
              <span className="fd-input-group__addon fd-input-group__addon--after fd-input-group__addon--button">
                <button className=" fd-button--light sap-icon--navigation-down-arrow" />
              </span>
            </div>
          </div>
        }
        body={menu}
      />
    </div>
  );
};

ComboboxInput.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string,
  menu: PropTypes.object.isRequired,
  compact: PropTypes.bool
};

ComboboxInput.defaultTypes = {
  compact: false,
  id: '',
  placeholder: ''
};
