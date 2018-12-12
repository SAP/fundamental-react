import React from 'react';

interface IBadgeProps {
  type?: '' | 'success' | 'warning' | 'error';
  modifier?: '' | 'pill' | 'filled';
}

export const Badge: React.SFC<IBadgeProps> = props => {
  const { children, type, modifier } = props;
  return (
    <span
      className={`fd-badge${type ? ' fd-badge--' + type : ''}${
        modifier ? ' fd-badge--' + modifier : ''
      }`}
    >
      {children}
    </span>
  );
};

interface ILabelProps {
  type?: '' | 'success' | 'warning' | 'error';
}

export const Label: React.SFC<ILabelProps> = props => {
  const { children, type } = props;
  return (
    <span className={`fd-label${type ? ' fd-label--' + type : ''}`}>
      {children}
    </span>
  );
};

interface IStatusProps {
  type?:
    | ''
    | 'success'
    | 'warning'
    | 'error'
    | 'available'
    | 'away'
    | 'busy'
    | 'offline';
  glyph?: string;
}

export const Status: React.SFC<IStatusProps> = props => {
  const { children, type, glyph } = props;
  return (
    <span
      className={`fd-status-label${type ? ' fd-status-label--' + type : ''}${
        glyph ? ' sap-icon--' + glyph : ''
      }`}
    >
      {children}
    </span>
  );
};
