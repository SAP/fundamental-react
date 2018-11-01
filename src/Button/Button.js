import React from 'react';
import PropTypes from 'prop-types';

export const Button = props => {
    const { option, type, size, glyph, dropdown, selected, disabled, typeAttr, onclick, children } = props;
    return (
        <button
            className={`${option ? 'fd-button--' + option : ' fd-button'}${type ? ' fd-button--' + type : ''}${dropdown ? 'fd-dropdown__control' : ''}${size ? ' fd-button--' + size : ''}${glyph ? ' sap-icon--' + glyph : ''}${selected ? ' is-selected' : ''}${disabled ? ' is-disabled' : ''}`}
            aria-selected={selected ? selected : false}
            aria-disabled={disabled ? disabled : false}
            type={typeAttr}
            onClick={onclick}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    option: PropTypes.string,
    type: PropTypes.string,
    size: PropTypes.string,
    glyph: PropTypes.string,
    dropdown: PropTypes.bool,
    selected: PropTypes.bool,
    disabled: PropTypes.bool,
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
