import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// ------------------------------------------- Menu ------------------------------------------
export const Menu = props => {
    const { id, addonBefore, children } = props;
    return (
        <nav className={`fd-menu${addonBefore ? ' fd-menu--addon-before' : ''}`} id={id}>
            {children}
        </nav>
    );
};

Menu.propTypes = {
    id: PropTypes.string,
    addonBefore: PropTypes.bool
};

// ---------------------------------------- Menu List ----------------------------------------
export const MenuList = props => {
    const { children } = props;
    return <ul className="fd-menu__list">{children}</ul>;
};

// ---------------------------------------- Menu Item ----------------------------------------
export const MenuItem = props => {
    const { url, link, separator, addon, children } = props;
    return (
        <React.Fragment>
            <li>
                {addon ? (
                    <div class="fd-menu__addon-before">{addon ? <span className={'sap-icon--' + addon} /> : null}</div>
                ) : null}
                {link ? (<Link to={link} class="fd-menu__item">
                    {children}
                </Link>):null}
                {url ? (<a href={url} className="fd-menu__item">{children}</a>):null}
            </li>
            {separator ? <hr /> : null}
        </React.Fragment>
    );
};

MenuItem.propTypes = {
    url: PropTypes.string,
    separator: PropTypes.bool,
    addon: PropTypes.string
};

// ---------------------------------------- Menu Group ----------------------------------------
export const MenuGroup = props => {
    const { title, children } = props;
    return (
        <div className="fd-menu__group">
            <h1 className="fd-menu__title">{title}</h1>
            {children}
        </div>
    );
};

MenuGroup.propTypes = {
    title: PropTypes.string
};