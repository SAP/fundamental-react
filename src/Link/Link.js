import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

/** Use an **Link** component to display a link. */
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
    /** Node(s) to render within the component */
    children: PropTypes.node,
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** Set to **true** to mark component as disabled and make it non-interactive */
    disabled: PropTypes.bool,
    disableStyles: PropTypes.bool
};

export default Link;
