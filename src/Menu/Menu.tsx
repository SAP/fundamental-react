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
    const { url, link, isLink, separator, addon, children, onclick } = props;
    return (
        <React.Fragment>
            <li>
                {addon ? (
                    <div className="fd-menu__addon-before">{<span className={'sap-icon--' + addon} />}</div>
                ) : null}
                {link ? (
                    <Link to={link} className={`fd-menu__item${isLink ? ' fd-menu__link' : ''}`}>
                        {children}
                    </Link>
                ) : null}
                {url ? (
                    <a href={url} className={`fd-menu__item${isLink ? ' fd-menu__link' : ''}`}>
                        {children}
                    </a>
                ) : null}
                {!url && !link ? <a className="fd-menu__item" onClick={onclick}>{children}</a> : null}
            </li>
            {separator ? <hr /> : null}
        </React.Fragment>
    );
};

MenuItem.propTypes = {
    url: PropTypes.string,
    separator: PropTypes.bool,
    addon: PropTypes.string,
    isLink: PropTypes.bool
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
