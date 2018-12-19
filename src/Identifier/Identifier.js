import React from 'react';
import PropTypes from 'prop-types';

export const Identifier = props => {
  const { glyph, size, modifier, color, label, backgroundImageUrl, children } = props;
  const styles = {
    backgroundImage: `url(${backgroundImageUrl})`
  };
  return (
    <span
      className={`${size ? 'fd-identifier--' + size : 'fd-identifier'}${
        glyph ? ' sap-icon--' + glyph : ''
      }${modifier ? ' fd-identifier--' + modifier : ''}${
        color ? ' fd-has-background-color-accent-' + color : ''
      }${backgroundImageUrl ? ' fd-identifier--thumbnail' : ''}`}
      style={backgroundImageUrl && styles}
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
  modifier: PropTypes.oneOf(['', 'circle', 'transparent']),
  color: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9]),
  label: PropTypes.string,
  backgroundImageUrl: PropTypes.string
};
