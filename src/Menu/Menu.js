import classnames from 'classnames';
import MenuItem from './_MenuItem';
import MenuList from './_MenuList';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

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
    disableStyles: PropTypes.bool
};

Menu.Item = MenuItem;
Menu.List = MenuList;

export default Menu;
