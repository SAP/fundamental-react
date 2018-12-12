import React from 'react';

interface IProps {
  standard?: boolean;
}

export const Dropdown: React.SFC<IProps> = props => {
  const { children, standard } = props;
  return (
    <div className={`fd-dropdown${standard ? ' fd-dropdown--standard' : ''}`}>
      {children}
    </div>
  );
};
