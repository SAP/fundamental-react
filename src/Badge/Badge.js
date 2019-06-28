import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { BADGE_MODIFIERS, BADGE_TYPES } from '../utils/constants';


const Badge = ({ type, modifier, children, className, ...props }) => {
    const badgeClasses = classnames(
        'fd-badge',
        {
            [`fd-badge--${type}`]: !!type,
            [`fd-badge--${modifier}`]: !!modifier
        },
        className
    );

    return (
        <span {...props} className={badgeClasses}>
            {children}
        </span>
    );
};
Badge.displayName = 'Badge';

Badge.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    modifier: PropTypes.oneOf(BADGE_MODIFIERS),
    type: PropTypes.oneOf(BADGE_TYPES)
};

export default Badge;

