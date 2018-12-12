import React, { ReactNode } from 'react';
import { ICommonProps } from '../common/common';

interface IBadgeProps extends ICommonProps {
  type?: '' | 'success' | 'warning' | 'error';
  modifier?: '' | 'pill' | 'filled';
}

// export const Badge: React.SFC<IBadgeProps> = props => {
//   const { children, type, modifier } = props;
//   return (
//     <span
//       className={`fd-badge${type ? ' fd-badge--' + type : ''}${
//         modifier ? ' fd-badge--' + modifier : ''
//       }`}
//     >
//       {children}
//     </span>
//   );
// };

export function Badge(props: IBadgeProps): JSX.Element {
  const { id, children, type, modifier } = props;
  return (
    <span
      id={id}
      className={`fd-badge${type ? ' fd-badge--' + type : ''}${
        modifier ? ' fd-badge--' + modifier : ''
      }`}
    >
      {children}
    </span>
  );
}

interface ILabelProps extends ICommonProps {
  type?: '' | 'success' | 'warning' | 'error';
}

// export const Label: React.SFC<ILabelProps> = props => {
//   const { children, type } = props;
//   return (
//     <span className={`fd-label${type ? ' fd-label--' + type : ''}`}>
//       {children}
//     </span>
//   );
// };

export function Label(props: ILabelProps): JSX.Element {
  const { id, children, type } = props;
  return (
    <span id={id} className={`fd-label${type ? ' fd-label--' + type : ''}`}>
      {children}
    </span>
  );
}

interface IStatusProps extends ICommonProps {
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

// export const Status: React.SFC<IStatusProps> = props => {
//   const { children, type, glyph } = props;
//   return (
//     <span
//       className={`fd-status-label${type ? ' fd-status-label--' + type : ''}${
//         glyph ? ' sap-icon--' + glyph : ''
//       }`}
//     >
//       {children}
//     </span>
//   );
// };
export function Status(props: IStatusProps): JSX.Element {
  const { id, children, type, glyph } = props;
  return (
    <span
      id={id}
      className={`fd-status-label${type ? ' fd-status-label--' + type : ''}${
        glyph ? ' sap-icon--' + glyph : ''
      }`}
    >
      {children}
    </span>
  );
}
