import React from 'react';
import PropTypes from 'prop-types';

export const Identifier = props => {
  const { glyph, size, modifier, color, label, children } = props;
  return (
    <span
      className={`${'fd-identifier--' + size}${
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
  size: PropTypes.oneOf(['s', 'm', 'l']).isRequired,
  modifier: PropTypes.oneOf(['', 'circle', 'transparent']),
  color: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9]),
  label: PropTypes.string
};
