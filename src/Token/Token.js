import React from 'react';

export const Token = (props) => {
    const { children, clickHandler, className, ...rest } = props;
    return (
        <span className={`fd-token${className ? ' ' + className : ''}`} onClick={clickHandler}
            role='button' {...rest}>
            {children}
        </span>
    );
};
