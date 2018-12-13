import React from 'react';
import { ICommonProps } from '../common/common';

// ------------------------------------------- Navbar ------------------------------------------
interface INavbarProps extends ICommonProps {}

export function Navbar(props: INavbarProps): JSX.Element {
  const { children } = props;
  return <nav className="fd-global-nav">{children}</nav>;
}

// ------------------------------------------- Navbar Group------------------------------------------
interface INavbarGroupProps extends ICommonProps {
  alignment?: '' | 'left' | 'right';
  launchpad?: boolean;
}

export function NavbarGroup(props: INavbarGroupProps): JSX.Element {
  const { alignment = '', launchpad = false, children } = props;
  return (
    <div
      className={`fd-global-nav__group${
        alignment ? ' fd-global-nav__group--' + alignment : ''
      }${launchpad ? ' fd-global-nav__launchpad' : ''}`}
    >
      {children}
    </div>
  );
}

// ------------------------------------------- Navbar Actions------------------------------------------
interface INavbarActionsProps extends ICommonProps {}

export function NavbarActions(props: INavbarActionsProps): JSX.Element {
  const { children } = props;
  return <div className="fd-global-nav__actions">{children}</div>;
}

// ------------------------------------------- Navbar Element------------------------------------------
interface INavbarElementProps extends ICommonProps {
  type: 'search' | 'context-menu' | 'product-name' | 'logo' | 'side-menu';
  noMargin?: '' | 'left' | 'right';
}

export function NavbarElement(props: INavbarElementProps): JSX.Element {
  const { noMargin, type, children } = props;
  return (
    <div
      className={`fd-global-nav__${type}${
        noMargin ? ' fd-has-margin-' + noMargin + '-none' : ''
      }`}
    >
      {children}
    </div>
  );
}
