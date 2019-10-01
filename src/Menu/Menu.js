import classnames from 'classnames';
import MenuGroup from './_MenuGroup';
import MenuItem from './_MenuItem';
import MenuList from './_MenuList';
import PropTypes from 'prop-types';
import React from 'react';
import withStyles from '../utils/WithStyles/WithStyles';

const Menu = React.forwardRef(({ addonBefore, children, className, disableStyles, ...props }, ref) => {
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
            {children}
        </nav>
    );
});

Menu.displayName = 'Menu';

Menu.propTypes = {
    addonBefore: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    customStyles: PropTypes.object,
    disableStyles: PropTypes.bool
};

Menu.propDescriptions = {
    addonBefore: 'Set to **true** enables menu items with add-on before.'
};

Menu.Group = MenuGroup;
Menu.Item = MenuItem;
Menu.List = MenuList;

export { Menu as __Menu };

export default withStyles(Menu, { cssFile: 'menu', fonts: true });
