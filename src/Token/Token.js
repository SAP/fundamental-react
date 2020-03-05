import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

const Token = React.forwardRef(({
    children,
    className,
    compact,
    disableStyles,
    onClick,
    readOnly,
    ...props
}, ref) => {

    useEffect(() => {
        if (!disableStyles) {
            require('fundamental-styles/dist/icon.css');
            require('fundamental-styles/dist/token.css');
        }
    }, []);

    const tokenClasses = classnames(
        'fd-token',
        {
            'fd-token--readonly': readOnly,
            'fd-token--compact': compact
        },
        className
    );

    return (
        <span
            {...props}
            className={tokenClasses}
            ref={ref}
            role='button'
            tabIndex='0'>
            <span className='fd-token__text'>{children}</span>
            <button
                className='fd-token__close'
                onClick={onClick}
                tabIndex='-1' />
        </span>
    );
});

Token.displayName = 'Token';

Token.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    compact: PropTypes.bool,
    disableStyles: PropTypes.bool,
    readOnly: PropTypes.bool,
    onClick: PropTypes.func
};

Token.defaultProps = {
    onClick: () => {}
};

export default Token;

