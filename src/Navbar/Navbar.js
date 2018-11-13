import React from 'react';
import PropTypes from 'prop-types';

// ------------------------------------------- Navbar ------------------------------------------
export const Navbar = props => {
    const { children } = props;
    return (
        <nav className="fd-global-nav">
            {children}
        </nav>
    );
};


// ------------------------------------------- Navbar Group------------------------------------------
export const NavbarGroup = props => {
    const { alignment, launchpad, children } = props;
    return (
        <div className={`fd-global-nav__group${alignment ? ' fd-global-nav__group--' + alignment : ''}${launchpad ? ' fd-global-nav__launchpad' : ''}`}>
            {children}
        </div>
    );
};

NavbarGroup.propTypes = {
    alignment: PropTypes.oneOf(['','left', 'right']),
    launchpad: PropTypes.bool
};

NavbarGroup.defaultProps = {
    alignment: '',
    launchpad: false
};


// ------------------------------------------- Navbar Actions------------------------------------------
export const NavbarActions = props => {
    const { children } = props;
    return (
        <div className='fd-global-nav__actions'>
            {children}
        </div>
    );
};

// ------------------------------------------- Navbar Element------------------------------------------
export const NavbarElement = props => {
    const { noMargin, type, children } = props;
    return (
        <div className={`fd-global-nav__${type}${noMargin ? ' fd-has-margin-' + noMargin + '-none' : ''}`}>
            {children}
        </div>
    );
};
NavbarElement.propTypes = {
    type: PropTypes.oneOf(['search', 'context-menu', 'product-name', 'logo', 'side-menu']).isRequired,
    noMargin: PropTypes.oneOf(['','left', 'right'])
};