import classnames from 'classnames';
import MenuGroup from './_MenuGroup';
import MenuItem from './_MenuItem';
import MenuList from './_MenuList';
import PropTypes from 'prop-types';
import React from 'react';

const Menu = ({ addonBefore, children, className, ...props }) => {
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

Menu.displayName = 'Menu';

Menu.propTypes = {
    addonBefore: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string
};

Menu.propDescriptions = {
    addonBefore: 'Set to **true** enables menu items with add-on before.'
};

Menu.Group = MenuGroup;
Menu.Item = MenuItem;
Menu.List = MenuList;

export default Menu;
