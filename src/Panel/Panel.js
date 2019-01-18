import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

// ------------------------------------------- Panel ------------------------------------------
export const Panel = props => {
    const { colSpan, children, className, ...rest } = props;

    const panelClasses = classnames(
        'fd-panel',
        {
            [`fd-has-grid-column-span-${colSpan}`]: colSpan
        },
        className
    );

    return <div {...rest} className={panelClasses}>{children}</div>;
};

Panel.propTypes = {
    className: PropTypes.string,
    colSpan: PropTypes.number
};

Panel.defaultProps = {
    colSpan: null
};

// ------------------------------------------- Panel Grid ------------------------------------------
export const PanelGrid = props => {
    const { nogap, cols, children, className, ...rest } = props;

    const panelGridClasses = classnames(
        'fd-panel-grid',
        {
            'fd-panel-grid--nogap': nogap,
            [`fd-panel-grid--${cols}col`]: cols
        },
        className
    );

    return (
        <div
            {...rest}
            className={panelGridClasses}>
            {children}
        </div>
    );
};

PanelGrid.propTypes = {
    className: PropTypes.string,
    cols: PropTypes.number,
    nogap: PropTypes.bool
};

PanelGrid.defaultProps = {
    nogap: false,
    cols: null
};

// ------------------------------------------- Panel Body ------------------------------------------
export const PanelBody = props => {
    const { children, className, ...rest } = props;

    const panelBodyClasses = classnames(
        'fd-panel__body',
        className
    );

    return <div {...rest} className={panelBodyClasses}>{children}</div>;
};

PanelBody.propTypes = {
    className: PropTypes.string
};

// ------------------------------------------- Panel Header ------------------------------------------
export const PanelHeader = props => {
    const { children, className, ...rest } = props;

    const panelHeaderClasses = classnames(
        'fd-panel__header',
        className
    );

    return <div {...rest} className={panelHeaderClasses}>{children}</div>;
};

PanelHeader.propTypes = {
    className: PropTypes.string
};

// ------------------------------------------- Panel Head ------------------------------------------
export const PanelHead = props => {
    const { title, description, className, ...rest } = props;

    const panelHeadClasses = classnames(
        'fd-panel__head',
        className
    );

    return (
        <div {...rest} className={panelHeadClasses}>
            {title ? <h1 className='fd-panel__title'>{title}</h1> : null}
            {description ? <p className='fd-panel__description'>{description}</p> : null}
        </div>
    );
};

PanelHead.propTypes = {
    className: PropTypes.string
};

// ------------------------------------------- Panel Actions ------------------------------------------
export const PanelActions = props => {
    const { children, className, ...rest } = props;

    const panelActionsClasses = classnames(
        'fd-panel__actions',
        className
    );

    return <div {...rest} className={panelActionsClasses}>{children}</div>;
};

PanelActions.propTypes = {
    className: PropTypes.string
};

// ------------------------------------------- Panel Filters ------------------------------------------
export const PanelFilters = props => {
    const { children, className, ...rest } = props;

    const panelFiltersClasses = classnames(
        'fd-panel__filters',
        className
    );

    return (
        <div {...rest} className={panelFiltersClasses}>
            {children}
        </div>
    );
};

PanelFilters.propTypes = {
    className: PropTypes.string
};


// ------------------------------------------- Panel Content ------------------------------------------
export const PanelContent = props => {
    const { children, className, ...rest } = props;

    const panelContentClasses = classnames(
        'fd-panel__content',
        className
    );

    return <div {...rest} className={panelContentClasses}>{children}</div>;
};

PanelContent.propTypes = {
    className: PropTypes.string
};

// ------------------------------------------- Panel Footer ------------------------------------------
export const PanelFooter = props => {
    const { children, className, ...rest } = props;

    const panelFooterClasses = classnames(
        'fd-panel__footer',
        className
    );

    return <div {...rest} className={panelFooterClasses}>{children}</div>;
};

PanelFooter.propTypes = {
    className: PropTypes.string
};
