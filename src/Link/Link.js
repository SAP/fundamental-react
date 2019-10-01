import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import withStyles from '../utils/WithStyles/WithStyles';

const Link = React.forwardRef(({ className, children, disabled, disableStyles, ...props }, ref) => {
    const imageClasses = classnames(
        'fd-link',
        { 'is-disabled': !!disabled },
        className
    );
    return (
        <a
            {...props}
            aria-disabled={disabled}
            className={imageClasses}
            ref={ref}>
            {children}
        </a>
    );
});

Link.displayName = 'Link';

Link.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    customStyles: PropTypes.object,
    disabled: PropTypes.bool,
    disableStyles: PropTypes.bool
};

export { Link as __Link };

export default withStyles(Link, { cssFile: 'link', fonts: true });
