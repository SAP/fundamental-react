import React from 'react';
import { ICommonProps } from '../common/common';

interface IActionBarProps extends ICommonProps {
  mobile?: boolean;
  width?: string;
}

// export const ActionBar: React.SFC<IActionBarProps> = props => {
//   const { mobile, width, children } = props;

//   return (
//     <React.Fragment>
//       {mobile ? (
//         <div style={{ width: width ? width : '319px' }}>
//           <div className="fd-action-bar">{children}</div>
//         </div>
//       ) : (
//         <div className="fd-action-bar">{children}</div>
//       )}
//     </React.Fragment>
//   );
// };

export function ActionBar(props: IActionBarProps): JSX.Element {
  const { id, mobile, width, children } = props;

  return (
    <React.Fragment>
      {mobile ? (
        <div id={id} style={{ width: width ? width : '319px' }}>
          <div className="fd-action-bar">{children}</div>
        </div>
      ) : (
        <div id={id} className="fd-action-bar">
          {children}
        </div>
      )}
    </React.Fragment>
  );
}

interface IActionBarBackProps extends ICommonProps {
  onclick?: () => void;
}

// export const ActionBarBack: React.SFC<IActionBarBackProps> = props => {
//   const { onclick } = props;
//   return (
//     <div className="fd-action-bar__back">
//       <button
//         className="fd-button--light fd-button--compact sap-icon--nav-back"
//         onClick={onclick}
//       />
//     </div>
//   );
// };

export function ActionBarBack(props: IActionBarBackProps): JSX.Element {
  const { id, onclick } = props;
  return (
    <div id={id} className="fd-action-bar__back">
      <button
        className="fd-button--light fd-button--compact sap-icon--nav-back"
        onClick={onclick}
      />
    </div>
  );
}

interface IActionBarHeaderProps extends ICommonProps {
  title?: string;
  description?: string;
}

// export const ActionBarHeader: React.SFC<IActionBarHeaderProps> = props => {
//   const { title, description } = props;
//   return (
//     <div className="fd-action-bar__header">
//       <h1 className="fd-action-bar__title">{title}</h1>
//       <p className="fd-action-bar__description">{description} </p>
//     </div>
//   );
// };

export function ActionBarHeader(props: IActionBarHeaderProps): JSX.Element {
  const { id, title, description } = props;
  return (
    <div id={id} className="fd-action-bar__header">
      <h1 className="fd-action-bar__title">{title}</h1>
      <p className="fd-action-bar__description">{description} </p>
    </div>
  );
}

interface IActionBarActionsProps extends ICommonProps {}

// export const ActionBarActions: React.SFC<IActionBarActionsProps> = props => {
//   const { children } = props;
//   return <div className="fd-action-bar__actions">{children}</div>;
// };

export function ActionBarActions(props: IActionBarActionsProps): JSX.Element {
  const { id, children } = props;
  return (
    <div id={id} className="fd-action-bar__actions">
      {children}
    </div>
  );
}
