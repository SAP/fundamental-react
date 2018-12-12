import React from 'react';
import { ICommonProps } from '../common/common';

interface IInlineHelpProps extends ICommonProps {
  placement:
    | 'bottom-right'
    | 'bottom-left'
    | 'right'
    | 'left'
    | 'bottom-center';
  text: string;
}

export function InlineHelp(props: IInlineHelpProps): JSX.Element {
  const { id, text, placement } = props;
  return (
    <span id={id} className="fd-inline-help">
      <span
        className={`fd-inline-help__content fd-inline-help__content--${placement}`}
      >
        {text}
      </span>
    </span>
  );
}
