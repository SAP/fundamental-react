import PropTypes from 'prop-types';
import React from 'react';

export const Tile = props => {
    const {
        disabled,
        rowSpan,
        columnSpan,
        colorAccent,
        backgroundColor,
        children,
        className,
        ...rest
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
            }${className ? ' ' + className : ''}`}
            {...rest}>
            {children}
        </div>
    );
};

Tile.propTypes = {
    backgroundColor: PropTypes.number,
    className: PropTypes.string,
    colorAccent: PropTypes.number,
    columnSpan: PropTypes.number,
    disabled: PropTypes.bool,
    rowSpan: PropTypes.number
};

export const TileContent = props => {
    const { title, children, className, ...rest } = props;
    return (
        <div className={`fd-tile__content${className ? ' ' + className : ''}`} {...rest}>
            <h2 className='fd-tile__title'>{title}</h2>
            {children}
        </div>
    );
};

TileContent.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string
};

export const TileMedia = props => {
    const { children, className, ...rest } = props;
    return <div className={`fd-tile__media${className ? ' ' + className : ''}`} {...rest}>{children}</div>;
};

export const TileActions = props => {
    const { children, className, ...rest } = props;
    return <div className={`fd-tile__actions${className ? ' ' + className : ''}`} {...rest}>{children}</div>;
};

export const ProductTile = props => {
    const { disabled, children, className, ...rest } = props;
    return (
        <div
            className={`fd-product-tile${disabled ? ' is-disabled' : ''}${className ? ' ' + className : ''}`}
            {...rest}>
            {children}
        </div>
    );
};

ProductTile.propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool
};

export const ProductTileContent = props => {
    const { title, children, className, ...rest } = props;
    return (
        <div className={`fd-product-tile__content${className ? ' ' + className : ''}`} {...rest}>
            <h2 className='fd-product-tile__title'>{title}</h2>
            {children}
        </div>
    );
};

ProductTileContent.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string
};

export const ProductTileMedia = props => {
    const { image, className, ...rest } = props;
    return (
        <div
            className={`fd-product-tile__media${className ? ' ' + className : ''}`} {...rest}
            style={{ backgroundImage: 'url(' + image + ')' }} />
    );
};

ProductTileMedia.propTypes = {
    image: PropTypes.string.isRequired,
    className: PropTypes.string
};

export const TileGrid = props => {
    const { col, children, className, ...rest } = props;
    return (
        <div
            className={`fd-tile-grid${
                col ? ' fd-tile-grid--' + col + 'col' : 'fd-tile-grid--3col"'
            }${className ? ' ' + className : ''}`} {...rest}>
            {children}
        </div>
    );
};

TileGrid.propTypes = {
    className: PropTypes.string,
    col: PropTypes.number
};
