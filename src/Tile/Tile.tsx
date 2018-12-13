import React from 'react';
import { ICommonProps } from '../common/common';

interface ITileProps extends ICommonProps {
  isButton?: boolean;
  disabled?: boolean;
  rowSpan?: number;
  columnSpan?: number;
  colorAccent?: number;
  backgroundColor?: number;
}

export function Tile(props: ITileProps): JSX.Element {
  const {
    id,
    isButton,
    disabled,
    rowSpan,
    columnSpan,
    colorAccent,
    backgroundColor,
    children
  } = props;
  return (
    <div
      id={id}
      className={`fd-tile${disabled ? ' is-disabled' : ''}${
        rowSpan ? ' fd-has-grid-row-span-' + rowSpan : ''
      }${columnSpan ? ' fd-has-grid-column-span-' + columnSpan : ''}${
        colorAccent ? ' fd-has-background-color-accent-' + colorAccent : ''
      }${
        backgroundColor
          ? '  fd-has-background-color-background-' + backgroundColor
          : ''
      }`}
      role={`${isButton ? 'button' : ''}`}
    >
      {children}
    </div>
  );
}

interface ITileContentProps extends ICommonProps {
  title?: string;
}

export function TileContent(props: ITileContentProps): JSX.Element {
  const { id, title, children } = props;
  return (
    <div id={id} className="fd-tile__content">
      <h2 className="fd-tile__title">{title}</h2>
      {children}
    </div>
  );
}

interface ITileMediaProps extends ICommonProps {}

export function TileMedia(props: ITileMediaProps): JSX.Element {
  const { id, children } = props;
  return (
    <div id={id} className="fd-tile__media">
      {children}
    </div>
  );
}

interface ITileActionsProps extends ICommonProps {}

export function TileActions(props: ITileActionsProps): JSX.Element {
  const { id, children } = props;
  return (
    <div id={id} className="fd-tile__actions">
      {children}
    </div>
  );
}

interface IProductTileProps extends ICommonProps {
  isButton?: boolean;
  disabled?: boolean;
}

export function ProductTile(props: IProductTileProps): JSX.Element {
  const { id, isButton, disabled, children } = props;
  return (
    <div
      id={id}
      className={`fd-product-tile${disabled ? ' is-disabled' : ''}`}
      role={`${isButton ? 'button' : ''}`}
    >
      {children}
    </div>
  );
}

interface IProductTileContentProps extends ICommonProps {
  title?: string;
}

export function ProductTileContent(
  props: IProductTileContentProps
): JSX.Element {
  const { id, title, children } = props;
  return (
    <div id={id} className="fd-product-tile__content">
      <h2 className="fd-product-tile__title">{title}</h2>
      {children}
    </div>
  );
}

interface IProductTileMediaProps extends ICommonProps {
  image: string;
}

export function ProductTileMedia(props: IProductTileMediaProps): JSX.Element {
  const { id, image } = props;
  return (
    <div
      id={id}
      className="fd-product-tile__media"
      style={{ backgroundImage: 'url(' + image + ')' }}
    />
  );
}

interface ITileGridProps extends ICommonProps {
  col?: number;
}

export function TileGrid(props: ITileGridProps): JSX.Element {
  const { id, col, children } = props;
  return (
    <div
      id={id}
      className={`fd-tile-grid${
        col ? ' fd-tile-grid--' + col + 'col' : 'fd-tile-grid--3col"'
      }`}
    >
      {children}
    </div>
  );
}
