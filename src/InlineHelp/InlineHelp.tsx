import React from 'react';

interface IProps {
  placement:
    | 'bottom-right'
    | 'bottom-left'
    | 'right'
    | 'left'
    | 'bottom-center';
  text: string;
}

export const InlineHelp: React.SFC<IProps> = props => {
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
