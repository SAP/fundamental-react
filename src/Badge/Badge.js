import classnames from 'classnames';
import PropTypes from 'prop-types';
import { BADGE_MODIFIERS, BADGE_TYPES } from '../utils/constants';
import React, { useEffect } from 'react';

const Badge = React.forwardRef(({ type, modifier, children, className, disableStyles, ...props }, ref) => {

    useEffect(() => {
        if (!disableStyles) {
            require('fundamental-styles/dist/fonts.css');
            require('fundamental-styles/dist/badge.css');
        }
    }, []);

    const badgeClasses = classnames(
        'fd-badge',
        {
            [`fd-badge--${type}`]: !!type,
            [`fd-badge--${modifier}`]: !!modifier
        },
        className
    );

    return (
        <span {...props} className={badgeClasses}
            ref={ref}>
            {children}
        </span>
    );
});
Badge.displayName = 'Badge';

Badge.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    disableStyles: PropTypes.bool,
    modifier: PropTypes.oneOf(BADGE_MODIFIERS),
    type: PropTypes.oneOf(BADGE_TYPES)
};

export { Badge as __Badge };

export default Badge;
