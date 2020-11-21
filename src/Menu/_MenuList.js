import classnamesBind from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import withStyles from '../utils/withStyles';
import styles from 'fundamental-styles/dist/menu.css';

const classnames = classnamesBind.bind(styles);

const MenuList = ({ children, className, cssNamespace, ...props }) => {
    const menuListClasses = classnames(
        `${cssNamespace}-menu__list`,
        className
    );

    return (
        <ul
            {...props}
            className={menuListClasses}
            role='menu'>
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

export default withStyles(MenuList);
