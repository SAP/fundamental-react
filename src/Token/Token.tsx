import React from 'react';
import { ICommonProps } from '../common/common';

interface ITokenProps extends ICommonProps {
  clickHandler?: () => void;
}

// export const Token = (props) => {
//     const { children, clickHandler } = props;
//     return (
//         <span className="fd-token" role="button" onClick={clickHandler}>
//             {children}
//         </span>
//     );
// }

export function Token(props: ITokenProps): JSX.Element {
  const { id, children, clickHandler } = props;
  return (
    <span id={id} className="fd-token" role="button" onClick={clickHandler}>
      {children}
    </span>
  );
}
