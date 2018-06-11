import React from 'react';
import PropTypes from 'prop-types';

export const Image = (props) => {
  const { size, type, photo } = props;
  return (
    <span className={`${size ? 'fd-image--' + size : 'm'}${type ? ' fd-image--' + type : ''}`} style={{ backgroundImage: "url(" + photo + ")" }}>
    </span>
  );
}

Image.propTypes = {
  size: PropTypes.string.isRequired,
  type: PropTypes.string,
  photo: PropTypes.string.isRequired
}