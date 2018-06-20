import React from 'react';
import PropTypes from 'prop-types';

export const Button = (props) => {
  const { type, semantic, size, glyph, state, typeAttr, onclick, children } = props;
  return (
    <button className={`${type ? 'fd-button--' + type : 'fd-button'}${semantic ? ' fd-button--' + semantic : ''}${size ? ' fd-button--' + size : ''}${glyph ? ' sap-icon--' + glyph : ''}${state ? ' is-' + state : ''}`} type={typeAttr} onClick={onclick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  semantic: PropTypes.string,
  size: PropTypes.string,
  glyph: PropTypes.string,
  state: PropTypes.string,
  typeAttr: PropTypes.string,
  onclick: PropTypes.func
}

export const ButtonGroup = (props) => {
  const { children } = props;
  return (
    <div className="fd-button-group" role="group" aria-label="Group label">
      { children }
    </div>
  );
}


export const ButtonGrouped = (props) => {
  const { size, glyph, state, children } = props;
  return (
    <button className={`fd-button--grouped${size ? ' fd-button--' + size : ''}${glyph ? ' sap-icon--' + glyph : ''}${state ? ' is-' + state : ''}`}>
      {children}
    </button>
  );
}

ButtonGrouped.propTypes = {
  size: PropTypes.string,
  glyph: PropTypes.string,
  state: PropTypes.string
}