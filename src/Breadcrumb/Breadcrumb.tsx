import React, { ReactNode } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { ICommonProps } from '../common/common';

interface IBreadCrumbProps extends ICommonProps {}

// export const Breadcrumb: React.SFC<IProps> = props => {
//   const { children } = props;
//   return <ul className="fd-breadcrumb">{children}</ul>;
// };

export function Breadcrumb(props: IBreadCrumbProps): JSX.Element {
  const { id, children } = props;
  return (
    <ul id={id} className="fd-breadcrumb">
      {children}
    </ul>
  );
}

interface IBreadCrumbItemProps extends ICommonProps {
  url?: string;
  link?: string;
  name: string;
}

// export const BreadcrumbItem: React.SFC<IBreadCrumbItemProps> = props => {
//   const { url, link, name } = props;
//   return (
//     <React.Fragment>
//       {link ? (
//         <BrowserRouter>
//           <li className="fd-breadcrumb__item">
//             <Link className="fd-breadcrumb__link" to={{ pathname: link }}>
//               {name}
//             </Link>
//           </li>
//         </BrowserRouter>
//       ) : null}

//       {url ? (
//         <BrowserRouter>
//           <li className="fd-breadcrumb__item">
//             <a className="fd-breadcrumb__link" href={url}>
//               {name}
//             </a>
//           </li>
//         </BrowserRouter>
//       ) : null}
//     </React.Fragment>
//   );
// };

export function BreadcrumbItem(props: IBreadCrumbItemProps): JSX.Element {
  const { id, url, link, name } = props;
  return (
    <React.Fragment>
      {link ? (
        <BrowserRouter>
          <li id={id} className="fd-breadcrumb__item">
            <Link className="fd-breadcrumb__link" to={{ pathname: link }}>
              {name}
            </Link>
          </li>
        </BrowserRouter>
      ) : null}

      {url ? (
        <BrowserRouter>
          <li id={id} className="fd-breadcrumb__item">
            <a className="fd-breadcrumb__link" href={url}>
              {name}
            </a>
          </li>
        </BrowserRouter>
      ) : null}
    </React.Fragment>
  );
}
