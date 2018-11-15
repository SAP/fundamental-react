import React from 'react';
import PropTypes from 'prop-types';

export const Icon = props => {
  const { glyph, size, clickHandler } = props;
  return (
    <span
      className={`${'sap-icon--' + glyph}${size ? ' sap-icon--' + size : ''}`}
      onClick={clickHandler}
    />
  );
};

Icon.defaultProps = {
  clickHandler: () => {}
};

Icon.propTypes = {
  size: PropTypes.string,
  clickHandler: PropTypes.func,
  glyph: PropTypes.string.isRequired
};
