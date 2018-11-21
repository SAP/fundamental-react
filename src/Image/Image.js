import React from 'react';
import PropTypes from 'prop-types';

export const Image = props => {
  const { size, type, photo } = props;
  return (
    <span
      className={`${'fd-image--' + size}${type ? ' fd-image--' + type : ''}`}
      style={{ backgroundImage: 'url(' + photo + ')' }}
    />
  );
};

Image.propTypes = {
  size: PropTypes.oneOf(['s', 'm', 'l']).isRequired,
  type: PropTypes.oneOf(['', 'circle']),
  photo: PropTypes.string.isRequired
};
