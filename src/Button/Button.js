import classnames from 'classnames';
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
}) => {
    const buttonClasses = classnames(
        {
            'fd-button': !!option === false,
            'fd-button--emphasized': option === 'emphasized',
            'fd-button--light': option === 'light',
            'fd-button--shell': option === 'shell',
            'fd-button--standard': type === 'standard',
            'fd-button--positive': type === 'positive',
            'fd-button--negative': type === 'negative',
            'fd-button--medium': type === 'medium',
            'fd-dropdown__control': dropdown,
            'fd-button--compact': compact,
            [`sap-icon--${glyph}`]: glyph,
            'fd-global-nav__btn': navbar,
            'is-selected': selected,
            'is-disabled': disabled
        },
        className
    );

    return (<button className={buttonClasses} {...props}
        disabled={disabled ? disabled : false} onClick={onClick}
        selected={selected ? selected : false} type={typeAttr}>
        {children}
    </button>);
};

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

export const ButtonGroup = ({children, ...props}) => {
    return (
        <div
            {...props}
            aria-label='Group label'
            className='fd-button-group'
            role='group'>
            {children}
        </div>
    );
};

ButtonGroup.propTypes = {
    children: PropTypes.node
};
