import React from 'react';
import PropTypes from 'prop-types';

export const Button = props => {
  const {
    option,
    type,
    compact,
    glyph,
    dropdown,
    navbar,
    selected,
    disabled,
    typeAttr,
    onclick,
    children
  } = props;
  return (
    <button
      className={`${option ? 'fd-button--' + option : ' fd-button'}${
        type ? ' fd-button--' + type : ''
      }${dropdown ? ' fd-dropdown__control' : ''}${
        compact ? ' fd-button--compact' : ''
      }${glyph ? ' sap-icon--' + glyph : ''}${
        navbar ? ' fd-global-nav__btn' : ''
      }${selected ? ' is-selected' : ''}${disabled ? ' is-disabled' : ''}`}
      selected={selected ? selected : false}
      disabled={disabled ? disabled : false}
      type={typeAttr}
      onClick={onclick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  option: PropTypes.oneOf(['', 'emphasized', 'light', 'shell']),
  type: PropTypes.oneOf(['', 'standard', 'positive', 'negative', 'medium']),
  compact: PropTypes.bool,
  glyph: PropTypes.string,
  navbar: PropTypes.bool,
  dropdown: PropTypes.bool,
  selected: PropTypes.bool,
  disabled: PropTypes.bool,
  typeAttr: PropTypes.string,
  onclick: PropTypes.func
};

export const ButtonGroup = props => {
  const { children } = props;
  return (
    <div className="fd-button-group" role="group" aria-label="Group label">
      {children}
    </div>
  );
};
