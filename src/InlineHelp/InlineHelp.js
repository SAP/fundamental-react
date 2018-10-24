import React from 'react';

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
