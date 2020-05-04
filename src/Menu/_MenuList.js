import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const MenuList = ({ children, className, ...props }) => {
    const menuListClasses = classnames(
        'fd-menu__list',
        className
    );

    return (
        <ul {...props} className={menuListClasses}>
            {children}
        </ul>
    );
};

MenuList.displayName = 'Menu.List';

MenuList.propTypes = {
    /** Node(s) to render within the component */
    children: PropTypes.node,
    /** CSS class(es) to add to the element */
    className: PropTypes.string
};

export default MenuList;
