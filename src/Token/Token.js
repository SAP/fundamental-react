import React from 'react';


export const Token = (props) => {
    const { children, clickHandler, className, ...rest } = props;
    return (
        <span className={`fd-token${className ? ' ' + className : ''}`} role='button'
            onClick={clickHandler} {...rest}>
            {children}
        </span>
    );
};
