import React from 'react';
import PropTypes from 'prop-types';

export const Icon = (props) => {
  const { glyph, size , clickHandler } = props;
  return (
    <span className={`${glyph ? 'sap-icon--' + glyph : ''}${size ? ' sap-icon--' + size : ''}`}
          onClick={clickHandler}>
    </span>
  );
}

Icon.defaultProps = {
    clickHandler: () => {}
}

Icon.propTypes = {
  size: PropTypes.string,
  clickHandler: PropTypes.func,
  glyph: PropTypes.string.isRequired
}
