import React from 'react';
import PropTypes from 'prop-types';

export const Identifier = ({ glyph, size, modifier, color, label, backgroundImageUrl, children, className, ...props }) => {
  const styles = {
    backgroundImage: `url(${backgroundImageUrl})`
  };
  return (
      <span
          className={`${size ? 'fd-identifier--' + size : 'fd-identifier'}${
        glyph ? ' sap-icon--' + glyph : ''
      }${modifier ? ' fd-identifier--' + modifier : ''}${
        color ? ' fd-has-background-color-accent-' + color : ''
      }${backgroundImageUrl ? ' fd-identifier--thumbnail' : ''}${className ? ' ' + className : ''}`}
          style={backgroundImageUrl && styles}
          role={`${!children ? 'presentation' : ''}`}
          aria-label={label} {...props}>
          {children}
      </span>
  );
};

Identifier.propTypes = {
  backgroundImageUrl: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9]),
  glyph: PropTypes.string,
  label: PropTypes.string,
  modifier: PropTypes.oneOf(['', 'circle', 'transparent']),
  size: PropTypes.string
};
