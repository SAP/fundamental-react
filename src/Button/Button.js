import React from 'react';
import PropTypes from 'prop-types';

export const Button = props => {
    const { type, semantic, size, glyph, dropdown, toolbar, state, typeAttr, onclick, children } = props;
    return (
        <button
            className={`${dropdown ? 'fd-dropdown__control' : ''}
            ${type ? ' fd-button--' + type : ' fd-button'}
            ${toolbar ? 'fd-button--toolbar' : ''}
            ${semantic ? ' fd-button--' + semantic : ''}
            ${size ? ' fd-button--' + size : ''}
            ${glyph ? ' sap-icon--' + glyph : ''}
            ${state ? ' is-' + state : ''}`}
            type={typeAttr}
            onClick={onclick}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    dropdown: PropTypes.bool,
    toolbar: PropTypes.bool,
    type: PropTypes.string,
    semantic: PropTypes.string,
    size: PropTypes.string,
    glyph: PropTypes.string,
    state: PropTypes.string,
    typeAttr: PropTypes.string,
    onclick: PropTypes.func
};

export const ButtonGroup = props => {
    const { children } = props;
    return (
        <div className="fd-button-group" role="group" aria-label="Group label">
            {children}
        </div>
    );
};

export const ButtonGrouped = props => {
    const { size, glyph, state, children } = props;
    return (
        <button
            className={`fd-button--grouped${size ? ' fd-button--' + size : ''}${glyph ? ' sap-icon--' + glyph : ''}${
                state ? ' is-' + state : ''
            }`}
        >
            {children}
        </button>
    );
};

ButtonGrouped.propTypes = {
    size: PropTypes.string,
    glyph: PropTypes.string,
    state: PropTypes.string
};
