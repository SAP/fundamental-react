import React from 'react';
import { Link } from 'react-router-dom';
import { ICommonProps } from '../common/common';

// ------------------------------------------- Menu ------------------------------------------
interface IMenuProps extends ICommonProps {
  addonBefore?: string;
}

export function Menu(props: IMenuProps): JSX.Element {
  const { children, id, addonBefore } = props;
  return (
    <nav
      className={`fd-menu${addonBefore ? ' fd-menu--addon-before' : ''}`}
      id={id}
    >
      {children}
    </nav>
  );
}

// ---------------------------------------- Menu List ----------------------------------------
interface IMenuListProps extends ICommonProps {}

export function MenuList(props: IMenuListProps): JSX.Element {
  const { id, children } = props;
  return <ul className="fd-menu__list">{children}</ul>;
}

// ---------------------------------------- Menu Item ----------------------------------------
interface IMenuItemProps extends ICommonProps {
  url?: string;
  separator?: boolean;
  addon?: string;
  isLink?: boolean;
  link?: string;
}

export function MenuItem(props: IMenuItemProps): JSX.Element {
  const { id, children, url, link, isLink, separator, addon } = props;
  return (
    <React.Fragment>
      <li>
        {addon ? (
          <div className="fd-menu__addon-before">
            {<span className={'sap-icon--' + addon} />}
          </div>
        ) : null}
        {link ? (
          <Link
            to={link}
            className={`fd-menu__item${isLink ? ' fd-menu__link' : ''}`}
          >
            {children}
          </Link>
        ) : null}
        {url ? (
          <a
            href={url}
            className={`fd-menu__item${isLink ? ' fd-menu__link' : ''}`}
          >
            {children}
          </a>
        ) : null}
      </li>
      {separator ? <hr /> : null}
    </React.Fragment>
  );
}

// ---------------------------------------- Menu Group ----------------------------------------
interface IMenuGroupProps extends ICommonProps {
  title?: string;
}

export function MenuGroup(props: IMenuGroupProps): JSX.Element {
  const { id, children, title } = props;
  return (
    <div className="fd-menu__group">
      <h1 className="fd-menu__title">{title}</h1>
      {children}
    </div>
  );
}
