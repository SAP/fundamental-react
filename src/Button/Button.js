import PropTypes from 'prop-types';
import React from 'react';

export const Button = ({
    option,
    type,
    compact,
    glyph,
    dropdown,
    navbar,
    selected,
    disabled,
    typeAttr,
    onClick,
    children,
    className,
    ...props
}) => (<button className={`${option ? 'fd-button--' + option : ' fd-button'}${type ? ' fd-button--' + type : ''}${dropdown ? ' fd-dropdown__control' : ''}${compact ? ' fd-button--compact' : ''}${glyph ? ' sap-icon--' + glyph : ''}${navbar ? ' fd-global-nav__btn' : ''}${selected ? ' is-selected' : ''}${disabled ? ' is-disabled' : ''}${className ? ' ' + className : ''}`} {...props}
    disabled={disabled ? disabled : false} onClick={onClick}
    selected={selected ? selected : false} type={typeAttr}>
    {children}
</button>);

Button.propTypes = {
    compact: PropTypes.bool,
    disabled: PropTypes.bool,
    dropdown: PropTypes.bool,
    glyph: PropTypes.string,
    navbar: PropTypes.bool,
    option: PropTypes.oneOf(['', 'emphasized', 'light', 'shell']),
    selected: PropTypes.bool,
    type: PropTypes.oneOf(['', 'standard', 'positive', 'negative', 'medium']),
    typeAttr: PropTypes.string,
    onClick: PropTypes.func
};

export const ButtonGroup = props => {
    const { children } = props;
    return (
        <div aria-label='Group label' className='fd-button-group'
            role='group'>
            {children}
        </div>
    );
};

ButtonGroup.propTypes = {
    children: PropTypes.node
};
