import classnames from 'classnames';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

// ------------------------------------------- Menu ------------------------------------------
export const Menu = ({ addonBefore, children, className, ...props }) => {
    const menuClasses = classnames(
        'fd-menu',
        {
            'fd-menu--addon-before': addonBefore
        },
        className
    );

    return (
        <nav {...props} className={menuClasses}>
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
    const menuListClasses = classnames(
        'fd-menu__list',
        className
    );

    return <ul {...props} className={menuListClasses}>{children}</ul>;
};

// ---------------------------------------- Menu Item ----------------------------------------
export const MenuItem = ({ url, link, isLink, separator, addon, children, onclick, className, addonProps, linkProps, urlProps, ...props }) => {
    const menuItemLinkClasses = classnames(
        'fd-menu__item',
        {
            'fd-menu__link': isLink
        }
    );
    return (
        <React.Fragment>
            <li {...props} className={className}>
                {addon &&
                    <div {...addonProps} className='fd-menu__addon-before'>{<span className={'sap-icon--' + addon} />}</div>
                }
                {link &&
                    <Link {...linkProps} className={menuItemLinkClasses}
                        to={link}>
                        {children}
                    </Link>
                }
                {url &&
                    <a {...urlProps} className={menuItemLinkClasses}
                        href={url}>
                        {children}
                    </a>
                }
                {(!url && !link) && <a {...linkProps}
                    className='fd-menu__item'
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
    const menuGroupClasses = classnames(
        'fd-menu__group',
        className
    );

    return (
        <div {...props} className={menuGroupClasses}>
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
