import React from 'react';
import PropTypes from 'prop-types';

export const Icon = props => {
  const { glyph, size, clickHandler, children } = props;
  return (
      <span
          className={`${'sap-icon--' + glyph}${size ? ' sap-icon--' + size : ''}`}
          onClick={clickHandler}>{children}</span>
  );
};

Icon.defaultProps = {
  clickHandler: () => {}
};

Icon.propTypes = {
  glyph: PropTypes.string.isRequired,
  clickHandler: PropTypes.func,
  size: PropTypes.string
};
