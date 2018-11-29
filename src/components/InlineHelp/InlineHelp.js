import React from 'react';
import PropTypes from 'prop-types';

export const InlineHelp = props => {
  const { text, placement } = props;
  return (
    <span className="fd-inline-help">
      <span
        className={`fd-inline-help__content fd-inline-help__content--${placement}`}
      >
        {text}
      </span>
    </span>
  );
};


InlineHelp.propTypes = {
  placement: PropTypes.oneOf([
    'bottom-right', 'bottom-left', 'right', 'left', 'bottom-center'
  ]).isRequired,
  text: PropTypes.string.isRequired
}