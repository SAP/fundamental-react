import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

// ------------------------------------------- Menu ------------------------------------------
export const Menu = ({ addonBefore, children, className, ...props }) => {
    return (
        <nav className={`fd-menu${addonBefore ? ' fd-menu--addon-before' : ''}${className ? ' ' + className : ''}`} {...props}>
            {children}
        </nav>
    );
};

Menu.propTypes = {
    addonBefore: PropTypes.bool,
    className: PropTypes.string
};

// ---------------------------------------- Menu List ----------------------------------------
export const MenuList = ({ children, className, ...props }) => {
    return <ul className={`fd-menu__list${className ? ' ' + className : ''}`} {...props}>{children}</ul>;
};

// ---------------------------------------- Menu Item ----------------------------------------
export const MenuItem = ({ url, link, isLink, separator, addon, children, onclick, className, ...props }) => {
    return (
        <React.Fragment>
            <li className={className} {...props}>
                {addon &&
                    <div className='fd-menu__addon-before'>{<span className={'sap-icon--' + addon} />}</div>
                }
                {link &&
                    <Link className={`fd-menu__item${isLink ? ' fd-menu__link' : ''}`} to={link}>
                        {children}
                    </Link>
                }
                {url &&
                    <a className={`fd-menu__item${isLink ? ' fd-menu__link' : ''}`} href={url}>
                        {children}
                    </a>
                }
                {(!url && !link) && <a className='fd-menu__item' onClick={onclick}>{children}</a>}
            </li>
            {separator && <hr />}
        </React.Fragment>
    );
};

MenuItem.propTypes = {
    addon: PropTypes.string,
    className: PropTypes.string,
    isLink: PropTypes.bool,
    separator: PropTypes.bool,
    url: PropTypes.string
};

// ---------------------------------------- Menu Group ----------------------------------------
export const MenuGroup = ({ title, children, className, ...props }) => {
    return (
        <div className={`fd-menu__group${className ? ' ' + className : ''}`} {...props}>
            <h1 className='fd-menu__title'>{title}</h1>
            {children}
        </div>
    );
};

MenuGroup.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string
};
