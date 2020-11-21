import classnamesBind from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import withStyles from '../utils/withStyles';
import styles from 'fundamental-styles/dist/link.css';

const classnames = classnamesBind.bind(styles);

/** Use an **Link** component to display a link. */
const Link = React.forwardRef(({ className, cssNamespace, children, disabled, subtle, ...props }, ref) => {

    const imageClasses = classnames(
        `${cssNamespace}-link`,
        {
            'is-disabled': !!disabled,
            [`${cssNamespace}-link--subtle`]: subtle
        },
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
    /** Set to **true** to apply subtle styling */
    subtle: PropTypes.bool
};

export default withStyles(Link);
