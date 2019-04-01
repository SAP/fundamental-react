import classnames from 'classnames';
import CustomPropTypes from '../utils/CustomPropTypes/CustomPropTypes';
import PropTypes from 'prop-types';
import React from 'react';

const MenuGroup = ({ title, children, className, level, titleProps, ...props }) => {
    const menuGroupClasses = classnames(
        'fd-menu__group',
        className
    );

    const HeadingTag = `h${level}`;

    return (
        <div {...props} className={menuGroupClasses}>
            <HeadingTag {...titleProps} className='fd-menu__title'>{title}</HeadingTag>
            {children}
        </div>
    );
};

MenuGroup.displayName = 'Menu.Group';

MenuGroup.propTypes = {
    title: PropTypes.string.isRequired,
    className: PropTypes.string,
    level: CustomPropTypes.range(2, 6),
    titleProps: PropTypes.object
};

MenuGroup.defaultProps = {
    level: 3
};

export default MenuGroup;
