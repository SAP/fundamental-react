import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import withStyles from '../utils/WithStyles/WithStyles';
import { BADGE_MODIFIERS, BADGE_TYPES } from '../utils/constants';


const Badge = React.forwardRef(({ type, modifier, children, className, disableStyles, ...props }, ref) => {
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
    customStyles: PropTypes.object,
    disableStyles: PropTypes.bool,
    modifier: PropTypes.oneOf(BADGE_MODIFIERS),
    type: PropTypes.oneOf(BADGE_TYPES)
};

export { Badge as __Badge };

export default withStyles(Badge, { cssFile: 'badge', fonts: true });
