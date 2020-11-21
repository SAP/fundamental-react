import classnamesBind from 'classnames/bind';
import MenuItem from './_MenuItem';
import MenuList from './_MenuList';
import PropTypes from 'prop-types';
import React from 'react';
import withStyles from '../utils/withStyles';
import styles from 'fundamental-styles/dist/menu.css';

const classnames = classnamesBind.bind(styles);

/** A **Menu** is the listing structure with optional headers to create menus. Commonly used as the
contents when composing “dropdowns”, “contextual menus”,  etc, when paired with the **Popover**
component. */
const Menu = React.forwardRef(({ children, className, cssNamespace, ...props }, ref) => {

    const menuClasses = classnames(
        `${cssNamespace}-menu`,
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
    className: PropTypes.string
};

Menu.Item = MenuItem;
Menu.List = MenuList;

export default withStyles(Menu);
