import React from 'react';
import { Link } from 'react-router-dom';

// ------------------------------------------- Menu ------------------------------------------
interface IMenuProps {
  id?: string;
  addonBefore?: string;
}

export const Menu: React.SFC<IMenuProps> = props => {
  const { children, id, addonBefore } = props;
  return (
    <nav
      className={`fd-menu${addonBefore ? ' fd-menu--addon-before' : ''}`}
      id={id}
    >
      {children}
    </nav>
  );
};

// ---------------------------------------- Menu List ----------------------------------------
interface IMenuListProps {}

export const MenuList: React.SFC<IMenuListProps> = props => {
  const { children } = props;
  return <ul className="fd-menu__list">{children}</ul>;
};

// ---------------------------------------- Menu Item ----------------------------------------
interface IMenuItemProps {
  url?: string;
  separator?: boolean;
  addon?: string;
  isLink?: boolean;
  link?: string;
}

export const MenuItem: React.SFC<IMenuItemProps> = props => {
  const { children, url, link, isLink, separator, addon } = props;
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
};

// ---------------------------------------- Menu Group ----------------------------------------
interface IMenuGroupProps {
  title?: string;
}

export const MenuGroup: React.SFC<IMenuGroupProps> = props => {
  const { children, title } = props;
  return (
    <div className="fd-menu__group">
      <h1 className="fd-menu__title">{title}</h1>
      {children}
    </div>
  );
};
