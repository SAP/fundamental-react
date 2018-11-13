import React from 'react';
import PropTypes from 'prop-types';

// ------------------------------------------- Panel ------------------------------------------
export const Panel = props => {
    const { colSpan, children } = props;
    return <div className={`fd-panel${colSpan ? ' fd-has-grid-column-span-' + colSpan : ''}`}>{children}</div>;
};

Panel.propTypes = {
    colSpan: PropTypes.number
};

Panel.defaultProps = {
    colSpan: null
};

// ------------------------------------------- Panel Grid ------------------------------------------
export const PanelGrid = props => {
    const { nogap, cols, children } = props;
    return (
        <div
            className={`fd-panel-grid${nogap ? ' fd-panel-grid--nogap' : ''}${
                cols ? ' fd-panel-grid--' + cols + 'col' : ''
            }`}
        >
            {children}
        </div>
    );
};

PanelGrid.propTypes = {
    nogap: PropTypes.bool,
    cols: PropTypes.number
};

PanelGrid.defaultProps = {
    nogap: false,
    cols: null
};

// ------------------------------------------- Panel Body ------------------------------------------
export const PanelBody = props => {
    const { children } = props;
    return <div class="fd-panel__body">{children}</div>;
};

// ------------------------------------------- Panel Header ------------------------------------------
export const PanelHeader = props => {
    const { children } = props;
    return <div class="fd-panel__header">{children}</div>;
};

// ------------------------------------------- Panel Head ------------------------------------------
export const PanelHead = props => {
    const { title, description } = props;
    return (
        <div class="fd-panel__head">
            {title ? <h1 class="fd-panel__title">{title}</h1> : null}
            {description ? <p class="fd-panel__description">{description}</p> : null}
        </div>
    );
};

// ------------------------------------------- Panel Actions ------------------------------------------
export const PanelActions = props => {
    const { children } = props;
    return <div class="fd-panel__actions">{children}</div>;
};

// ------------------------------------------- Panel Filters ------------------------------------------
export const PanelFilters = props => {
    const { id, children } = props;
    return (
        <div class="fd-panel__filters" id={id}>
            {children}
        </div>
    );
};

PanelFilters.propTypes = {
    id: PropTypes.string
};

PanelFilters.defaultProps = {
    id: ''
};

// ------------------------------------------- Panel Content ------------------------------------------
export const PanelContent = props => {
    const { children } = props;
    return <div class="fd-panel__content">{children}</div>;
};

// ------------------------------------------- Panel Footer ------------------------------------------
export const PanelFooter = props => {
    const { children } = props;
    return <div class="fd-panel__footer">{children}</div>;
};
