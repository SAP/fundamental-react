import React from 'react';
import PropTypes from 'prop-types';

export const Image = props => {
  const { size, type, photo } = props;
  return (
    <span
      className={`${size ? 'fd-image--' + size : 'm'}${
        type ? ' fd-image--' + type : ''
      }`}
      style={{ backgroundImage: 'url(' + photo + ')' }}
    />
  );
};

Image.propTypes = {
  size: PropTypes.string,
  type: PropTypes.string,
  photo: PropTypes.string.isRequired
};
