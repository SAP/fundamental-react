import classnames from 'classnames';
import React from 'react';

export const Token = (props) => {
    const { children, clickHandler, className, ...rest } = props;

    const tokenClasses = classnames(
        'fd-token',
        className
    );

    return (
        <span {...rest} className={tokenClasses}
            onClick={clickHandler}
            role='button'>
            {children}
        </span>
    );
};
