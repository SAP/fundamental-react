import React from 'react';
import PropTypes from 'prop-types';

export const Identifier = props => {
  const { glyph, size, modifier, color, label, children } = props;
  return (
    <span
      className={`${size ? ' fd-identifier--' + size : ''}${
        glyph ? ' sap-icon--' + glyph : ''
      }${modifier ? ' fd-identifier--' + modifier : ''}${
        color ? ' fd-has-background-color-accent-' + color : ''
      }`}
      role={`${!children ? 'presentation' : ''}`}
      aria-label={label}
    >
      {children}
    </span>
  );
};

Identifier.propTypes = {
  glyph: PropTypes.string,
  size: PropTypes.string,
  modifier: PropTypes.string,
  color: PropTypes.number,
  label: PropTypes.string
};
