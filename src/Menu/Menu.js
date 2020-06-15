import classnames from 'classnames';
import MenuItem from './_MenuItem';
import MenuList from './_MenuList';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

/** A **Menu** is the listing structure with optional headers to create menus. Commonly used as the
contents when composing “dropdowns”, “contextual menus”,  etc, when paired with the **Popover**
component. */
const Menu = React.forwardRef(({ children, className, disableStyles, ...props }, ref) => {

    useEffect(() => {
        if (!disableStyles) {
            require('fundamental-styles/dist/menu.css');
        }
    }, []);

    const menuClasses = classnames(
        'fd-menu',
        className
    );

    return (
        <nav {...props} className={menuClasses}
            ref={ref}>
            {children}
        </nav>
    );
});

Menu.displayName = 'Menu';

Menu.propTypes = {
    /** Node(s) to render within the component */
    children: PropTypes.node,
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** Internal use only */
    disableStyles: PropTypes.bool
};

Menu.Item = MenuItem;
Menu.List = MenuList;

export default Menu;
