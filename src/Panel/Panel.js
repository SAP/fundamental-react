import PropTypes from 'prop-types';
import React from 'react';

// ------------------------------------------- Panel ------------------------------------------
export const Panel = props => {
    const { colSpan, children, className, ...rest } = props;
    return <div className={`fd-panel${colSpan ? ' fd-has-grid-column-span-' + colSpan : ''}${className ? ' ' + className : ''}`} {...rest}>{children}</div>;
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
    return (
        <div
            className={`fd-panel-grid${nogap ? ' fd-panel-grid--nogap' : ''}${
                cols ? ' fd-panel-grid--' + cols + 'col' : ''
            }${className ? ' ' + className : ''}`} {...rest}>
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
    return <div className={`fd-panel__body${className ? ' ' + className : ''}`} {...rest}>{children}</div>;
};

PanelBody.propTypes = {
    className: PropTypes.string
};

// ------------------------------------------- Panel Header ------------------------------------------
export const PanelHeader = props => {
    const { children, className, ...rest } = props;
    return <div className={`fd-panel__header${className ? ' ' + className : ''}`} {...rest}>{children}</div>;
};

PanelHeader.propTypes = {
    className: PropTypes.string
};

// ------------------------------------------- Panel Head ------------------------------------------
export const PanelHead = props => {
    const { title, description, className, ...rest } = props;
    return (
        <div className={`fd-panel__head${className ? ' ' + className : ''}`} {...rest}>
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
    return <div className={`fd-panel__actions${className ? ' ' + className : ''}`} {...rest}>{children}</div>;
};

PanelActions.propTypes = {
    className: PropTypes.string
};

// ------------------------------------------- Panel Filters ------------------------------------------
export const PanelFilters = props => {
    const { children, className, ...rest } = props;
    return (
        <div className={`fd-panel__filters${className ? ' ' + className : ''}`} {...rest}>
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
    return <div className={`fd-panel__content${className ? ' ' + className : ''}`} {...rest}>{children}</div>;
};

PanelContent.propTypes = {
    className: PropTypes.string
};

// ------------------------------------------- Panel Footer ------------------------------------------
export const PanelFooter = props => {
    const { children, className, ...rest } = props;
    return <div className={`fd-panel__footer${className ? ' ' + className : ''}`} {...rest}>{children}</div>;
};

PanelFooter.propTypes = {
    className: PropTypes.string
};
