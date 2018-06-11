import React from 'react';
import PropTypes from 'prop-types';

export const Icon = (props) => {
  const { glyph, size } = props;
  return (
    <span className={`${glyph ? 'sap-icon--' + glyph : ''}${size ? ' sap-icon--' + size : ''}`}>
    </span>
  );
}

Icon.propTypes = {
  size: PropTypes.string,
  glyph: PropTypes.string.isRequired
}
