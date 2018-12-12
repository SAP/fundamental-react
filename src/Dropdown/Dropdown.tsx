import React from 'react';
import { ICommonProps } from '../common/common';

interface IDropdownProps extends ICommonProps {
  standard?: boolean;
}

export function Dropdown(props: IDropdownProps): JSX.Element {
  const { id, children, standard } = props;
  return (
    <div
      id={id}
      className={`fd-dropdown${standard ? ' fd-dropdown--standard' : ''}`}
    >
      {children}
    </div>
  );
}
