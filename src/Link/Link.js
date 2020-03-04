import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

const Link = React.forwardRef(({ className, children, disabled, disableStyles, ...props }, ref) => {

    useEffect(() => {
        if (!disableStyles) {
            require('fundamental-styles/dist/link.css');
        }
    }, []);

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
    disabled: PropTypes.bool,
    disableStyles: PropTypes.bool
};

export default Link;
