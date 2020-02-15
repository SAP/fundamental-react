import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

const Token = React.forwardRef(({ children, className, disableStyles, ...props }, ref) => {

    useEffect(() => {
        if (!disableStyles) {
            require('fundamental-styles/dist/fonts.css');
            require('fundamental-styles/dist/icon.css');
            require('fundamental-styles/dist/token.css');
        }
    }, []);

    const tokenClasses = classnames(
        'fd-token',
        className
    );

    return (
        <span
            {...props}
            className={tokenClasses}
            ref={ref}
            role='button'>
            {children}
        </span>
    );
});

Token.displayName = 'Token';

Token.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    disableStyles: PropTypes.bool
};

export { Token as __Token };

export default Token;

