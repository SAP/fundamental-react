import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

interface IProps {}

export const Breadcrumb: React.SFC<IProps> = props => {
  const { children } = props;
  return <ul className="fd-breadcrumb">{children}</ul>;
};

interface IBreadCrumbItemProps {
  url?: string;
  link?: string;
  name: string;
}

export const BreadcrumbItem: React.SFC<IBreadCrumbItemProps> = props => {
  const { url, link, name } = props;
  return (
    <React.Fragment>
      {link ? (
        <BrowserRouter>
          <li className="fd-breadcrumb__item">
            <Link className="fd-breadcrumb__link" to={{ pathname: link }}>
              {name}
            </Link>
          </li>
        </BrowserRouter>
      ) : null}

      {url ? (
        <BrowserRouter>
          <li className="fd-breadcrumb__item">
            <a className="fd-breadcrumb__link" href={url}>
              {name}
            </a>
          </li>
        </BrowserRouter>
      ) : null}
    </React.Fragment>
  );
};
