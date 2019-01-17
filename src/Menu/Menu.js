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
export const MenuItem = ({ url, link, isLink, separator, addon, children, onclick, className, addonProps, linkProps, urlProps, ...props }) => {
    return (
        <React.Fragment>
            <li {...props} className={className}>
                {addon &&
                    <div {...addonProps} className='fd-menu__addon-before'>{<span className={'sap-icon--' + addon} />}</div>
                }
                {link &&
                    <Link {...linkProps} className={`fd-menu__item${isLink ? ' fd-menu__link' : ''}`}
                        to={link}>
                        {children}
                    </Link>
                }
                {url &&
                    <a {...urlProps} className={`fd-menu__item${isLink ? ' fd-menu__link' : ''}`}
                        href={url}>
                        {children}
                    </a>
                }
                {(!url && !link) && <a className='fd-menu__item' {...linkProps}
                    onClick={onclick}>{children}</a>}
            </li>
            {separator && <hr />}
        </React.Fragment>
    );
};

MenuItem.propTypes = {
    addon: PropTypes.string,
    addonProps: PropTypes.object,
    className: PropTypes.string,
    isLink: PropTypes.bool,
    linkProps: PropTypes.object,
    separator: PropTypes.bool,
    url: PropTypes.string,
    urlProps: PropTypes.object
};

// ---------------------------------------- Menu Group ----------------------------------------
export const MenuGroup = ({ title, children, className, titleProps, ...props }) => {
    return (
        <div {...props} className={`fd-menu__group${className ? ' ' + className : ''}`}>
            <h1 {...titleProps} className='fd-menu__title'>{title}</h1>
            {children}
        </div>
    );
};

MenuGroup.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    titleProps: PropTypes.object
};
