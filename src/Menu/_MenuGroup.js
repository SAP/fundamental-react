import classnames from 'classnames';
import CustomPropTypes from '../utils/CustomPropTypes/CustomPropTypes';
import PropTypes from 'prop-types';
import React from 'react';

const MenuGroup = ({ title, children, className, headingLevel, titleProps, ...props }) => {
    const menuGroupClasses = classnames(
        'fd-menu__group',
        className
    );

    const HeadingTag = `h${headingLevel}`;

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
    children: PropTypes.node,
    className: PropTypes.string,
    headingLevel: CustomPropTypes.range(2, 6),
    titleProps: PropTypes.object
};

MenuGroup.defaultProps = {
    headingLevel: 3
};

export default MenuGroup;
