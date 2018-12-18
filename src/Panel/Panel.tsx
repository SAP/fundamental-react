import React from 'react';
import { ICommonProps } from '../common/common';

// ------------------------------------------- Panel ------------------------------------------
interface IPanelProps extends ICommonProps {
  colSpan?: number;
}

export function Panel(props: IPanelProps): JSX.Element {
  const { colSpan = null, children } = props;
  return (
    <div
      className={`fd-panel${
        colSpan ? ' fd-has-grid-column-span-' + colSpan : ''
      }`}
    >
      {children}
    </div>
  );
}

// ------------------------------------------- Panel Grid ------------------------------------------
interface IPanelGridProps extends ICommonProps {
  nogap?: boolean;
  cols?: number;
}

export function PanelGrid(props: IPanelGridProps): JSX.Element {
  const { nogap = false, cols = null, children } = props;
  return (
    <div
      className={`fd-panel-grid${nogap ? ' fd-panel-grid--nogap' : ''}${
        cols ? ' fd-panel-grid--' + cols + 'col' : ''
      }`}
    >
      {children}
    </div>
  );
}

// ------------------------------------------- Panel Body ------------------------------------------
interface IPanelBodyProps extends ICommonProps {}

export function PanelBody(props: IPanelBodyProps): JSX.Element {
  const { children } = props;
  return <div className="fd-panel__body">{children}</div>;
}

// ------------------------------------------- Panel Header ------------------------------------------
interface IPanelHeaderProps extends ICommonProps {}

export function PanelHeader(props: IPanelHeaderProps): JSX.Element {
  const { children } = props;
  return <div className="fd-panel__header">{children}</div>;
}

// ------------------------------------------- Panel Head ------------------------------------------
interface IPanelHeadProps extends ICommonProps {
  title?: string;
  description?: string;
}

export function PanelHead(props: IPanelHeadProps): JSX.Element {
  const { title, description } = props;
  return (
    <div className="fd-panel__head">
      {title ? <h1 className="fd-panel__title">{title}</h1> : null}
      {description ? (
        <p className="fd-panel__description">{description}</p>
      ) : null}
    </div>
  );
}

// ------------------------------------------- Panel Actions ------------------------------------------
interface IPanelActionsProps extends ICommonProps {}

export function PanelActions(props: IPanelActionsProps): JSX.Element {
  const { children } = props;
  return <div className="fd-panel__actions">{children}</div>;
}

// ------------------------------------------- Panel Filters ------------------------------------------
interface IPanelFiltersProps extends ICommonProps {}

export function PanelFilters(props: IPanelFiltersProps): JSX.Element {
  const { id, children } = props;
  return (
    <div className="fd-panel__filters" id={id}>
      {children}
    </div>
  );
}

// ------------------------------------------- Panel Content ------------------------------------------
interface IPanelContentProps extends ICommonProps {}

export function PanelContent(props: IPanelContentProps): JSX.Element {
  const { children } = props;
  return <div className="fd-panel__content">{children}</div>;
}

// ------------------------------------------- Panel Footer ------------------------------------------
interface IPanelFooterProps extends ICommonProps {}

export function PanelFooter(props: IPanelFooterProps): JSX.Element {
  const { children } = props;
  return <div className="fd-panel__footer">{children}</div>;
}
