import classnames from 'classnames';
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

    const tileClasses = classnames(
        'fd-tile',
        {
            'is-disabled': disabled,
            [`fd-has-grid-row-span-${rowSpan}`]: rowSpan,
            [`fd-has-grid-column-span-${columnSpan}`]: columnSpan,
            [`fd-has-background-color-accent-${colorAccent}`]: colorAccent,
            [`fd-has-background-color-background-${backgroundColor}`]: backgroundColor
        },
        className
    );

    return (
        <div
            className={tileClasses}
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
    const { title, children, className, titleProps, ...rest } = props;

    const tileContentClasses = classnames(
        'fd-tile__content',
        className
    );

    return (
        <div className={tileContentClasses} {...rest}>
            <h2 {...titleProps} className='fd-tile__title'>{title}</h2>
            {children}
        </div>
    );
};

TileContent.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    titleProps: PropTypes.object
};

export const TileMedia = props => {
    const { children, className, ...rest } = props;

    const tileMediaClasses = classnames(
        'fd-tile__media',
        className
    );

    return <div className={tileMediaClasses} {...rest}>{children}</div>;
};

export const TileActions = props => {
    const { children, className, ...rest } = props;

    const tileActionsClasses = classnames(
        'fd-tile__actions',
        className
    );

    return <div className={tileActionsClasses} {...rest}>{children}</div>;
};

export const ProductTile = props => {
    const { disabled, children, className, ...rest } = props;

    const tileProductClasses = classnames(
        'fd-product-tile',
        {
            'is-disabled': disabled
        },
        className
    );

    return (
        <div
            className={tileProductClasses}
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
    const { title, children, className, titleProps, ...rest } = props;

    const tileProductContentClasses = classnames(
        'fd-product-tile__content',
        className
    );

    return (
        <div className={tileProductContentClasses} {...rest}>
            <h2 {...titleProps} className='fd-product-tile__title'>{title}</h2>
            {children}
        </div>
    );
};

ProductTileContent.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    titleProps: PropTypes.object
};

export const ProductTileMedia = props => {
    const { image, className, ...rest } = props;

    const tileProductMediaClasses = classnames(
        'fd-product-tile__media',
        className
    );

    return (
        <div
            className={tileProductMediaClasses} {...rest}
            style={{ backgroundImage: 'url(' + image + ')' }} />
    );
};

ProductTileMedia.propTypes = {
    image: PropTypes.string.isRequired,
    className: PropTypes.string
};

export const TileGrid = props => {
    const { col, children, className, ...rest } = props;

    const tileGridClasses = classnames(
        'fd-tile-grid',
        {
            [`fd-tile-grid--${col}col`]: col,
            'fd-tile-grid--3col': !col
        },
        className
    );

    return (
        <div
            className={tileGridClasses} {...rest}>
            {children}
        </div>
    );
};

TileGrid.propTypes = {
    className: PropTypes.string,
    col: PropTypes.number
};
