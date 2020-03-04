import classnames from 'classnames';
import MenuGroup from './_MenuGroup';
import MenuItem from './_MenuItem';
import MenuList from './_MenuList';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

const Menu = React.forwardRef(({ addonBefore, children, className, disableStyles, ...props }, ref) => {

    useEffect(() => {
        if (!disableStyles) {
            require('fundamental-styles/dist/menu.css');
        }
    }, []);

    const menuClasses = classnames(
        'fd-menu',
        {
            'fd-menu--addon-before': addonBefore
        },
        className
    );

    return (
        <nav {...props} className={menuClasses}
            ref={ref}>
            {React.Children.toArray(children).map(child => {
                return React.cloneElement(child, {
                    addonBefore: addonBefore
                });
            })}
        </nav>
    );
});

Menu.displayName = 'Menu';

Menu.propTypes = {
    addonBefore: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    disableStyles: PropTypes.bool
};

Menu.propDescriptions = {
    addonBefore: 'Set to **true** enables menu items with add-on before.'
};

Menu.Group = MenuGroup;
Menu.Item = MenuItem;
Menu.List = MenuList;

export default Menu;
