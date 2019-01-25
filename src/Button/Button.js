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
            'fd-button': !option,
            [`fd-button--${option}`]: !!option,
            [`fd-button--${type}`]: !!type,
            'fd-dropdown__control': dropdown,
            'fd-button--compact': compact,
            [`sap-icon--${glyph}`]: !!glyph,
            'fd-global-nav__btn': navbar,
            'is-selected': selected,
            'is-disabled': disabled
        },
        className
    );

    return (<button {...props} className={buttonClasses}
        disabled={disabled} onClick={onClick}
        selected={selected} type={typeAttr}>
        {children}
    </button>);
};

Button.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    compact: PropTypes.bool,
    disabled: PropTypes.bool,
    dropdown: PropTypes.bool,
    glyph: PropTypes.string,
    navbar: PropTypes.bool,
    option: PropTypes.oneOf(['emphasized', 'light', 'shell']),
    selected: PropTypes.bool,
    type: PropTypes.oneOf(['standard', 'positive', 'negative', 'medium']),
    typeAttr: PropTypes.string,
    onClick: PropTypes.func
};

Button.defaultProps = {
    compact: false,
    disabled: false,
    dropdown: false,
    navbar: false,
    selected: false
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
