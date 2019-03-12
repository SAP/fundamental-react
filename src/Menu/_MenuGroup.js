import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const MenuGroup = ({ title, children, className, titleProps, ...props }) => {
    const menuGroupClasses = classnames(
        'fd-menu__group',
        className
    );

    return (
        <div {...props} className={menuGroupClasses}>
            <h1 {...titleProps} className='fd-menu__title'>{title}</h1>
            {children}
        </div>
    );
};

MenuGroup.displayName = 'Menu.Group';

MenuGroup.propTypes = {
    title: PropTypes.string.isRequired,
    className: PropTypes.string,
    titleProps: PropTypes.object
};

export default MenuGroup;
