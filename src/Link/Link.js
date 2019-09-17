import 'fundamental-styles/dist/link.css';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const Link = ({ className, children, disabled, ...props }) => {
    const imageClasses = classnames(
        'fd-link',
        { 'is-disabled': !!disabled },
        className
    );
    return (
        <a
            {...props}
            aria-disabled={disabled}
            className={imageClasses}>{children}</a>
    );
};

Link.displayName = 'Link';

Link.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool
};


export default Link;
