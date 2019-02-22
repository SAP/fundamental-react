import classnames from 'classnames';
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
    className: PropTypes.string
};

Menu.propDescriptions = {
    addonBefore: 'Set to **true** enables menu items with add-on before.'
};

export default Menu;
