import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const MenuList = ({ addonBefore, children, className, separated, ...props }) => {
    const menuListClasses = classnames(
        'fd-menu__list',
        {
            'fd-menu__list--separated': separated
        },
        className
    );

    return (
        <ul {...props} className={menuListClasses}>
            {React.Children.toArray(children).map(child => {
                return React.cloneElement(child, {
                    addonBefore: addonBefore
                });
            })}
        </ul>
    );
};

MenuList.displayName = 'Menu.List';

MenuList.propTypes = {
    addonBefore: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    separated: PropTypes.bool
};

MenuList.propDescriptions = {
    addonBefore: 'Set to **true** enables menu items with add-on before. Passed down from the Menu component.',
    separated: 'Set to **true** enables separators between each menu item.'
};

export default MenuList;
