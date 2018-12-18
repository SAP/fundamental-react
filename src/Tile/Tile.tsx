import React from 'react';
import PropTypes from 'prop-types';

export const Tile = props => {
  const {
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
};

Tile.propTypes = {
  isButton: PropTypes.bool,
  disabled: PropTypes.bool,
  rowSpan: PropTypes.number,
  columnSpan: PropTypes.number,
  colorAccent: PropTypes.number,
  backgroundColor: PropTypes.number
};

export const TileContent = props => {
  const { title, children } = props;
  return (
    <div className="fd-tile__content">
      <h2 className="fd-tile__title">{title}</h2>
      {children}
    </div>
  );
};

TileContent.propTypes = {
  title: PropTypes.string
};

export const TileMedia = props => {
  const { children } = props;
  return <div className="fd-tile__media">{children}</div>;
};

export const TileActions = props => {
  const { children } = props;
  return <div className="fd-tile__actions">{children}</div>;
};

export const ProductTile = props => {
  const { isButton, disabled, children } = props;
  return (
    <div
      className={`fd-product-tile${disabled ? ' is-disabled' : ''}`}
      role={`${isButton ? 'button' : ''}`}
    >
      {children}
    </div>
  );
};

ProductTile.propTypes = {
  isButton: PropTypes.bool,
  disabled: PropTypes.bool
};

export const ProductTileContent = props => {
  const { title, children } = props;
  return (
    <div className="fd-product-tile__content">
      <h2 className="fd-product-tile__title">{title}</h2>
      {children}
    </div>
  );
};

ProductTileContent.propTypes = {
  title: PropTypes.string
};

export const ProductTileMedia = props => {
  const { image } = props;
  return (
    <div
      className="fd-product-tile__media"
      style={{ backgroundImage: 'url(' + image + ')' }}
    />
  );
};

ProductTileMedia.propTypes = {
  image: PropTypes.string.isRequired
};

export const TileGrid = props => {
  const { col, children } = props;
  return (
    <div
      className={`fd-tile-grid${
        col ? ' fd-tile-grid--' + col + 'col' : 'fd-tile-grid--3col"'
      }`}
    >
      {children}
    </div>
  );
};

TileGrid.propTypes = {
  col: PropTypes.number
};
