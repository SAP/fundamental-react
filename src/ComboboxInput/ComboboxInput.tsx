import React from 'react';
import { Popover } from '../Popover/Popover';
import { ICommonProps } from '../common/common';

interface IComboboxInputProps extends ICommonProps {
  placeholder?: string;
  menu: {};
  compact?: boolean;
}

export function ComboboxInput(props: IComboboxInputProps): JSX.Element {
  const { id, placeholder, menu, compact = false } = props;
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
}
