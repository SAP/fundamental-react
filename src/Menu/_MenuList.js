import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const MenuList = ({ children, className, separator, ...props }) => {
    const menuListClasses = classnames(
        'fd-menu__list',
        { 'fd-menu__list--separated': separator },
        className
    );

    return <ul {...props} className={menuListClasses}>{children}</ul>;
};

MenuList.displayName = 'Menu.List';

MenuList.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    separator: PropTypes.bool
};

MenuList.propDescriptions = {
    separator: 'Set to **true** to add a horizontal line (separator).'
};

export default MenuList;
