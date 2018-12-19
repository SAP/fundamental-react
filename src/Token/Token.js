import React from 'react';


export const Token = (props) => {
    const { children, clickHandler } = props;
    return (
        <span className='fd-token' role='button'
            onClick={clickHandler}>
            {children}
        </span>
    );
};
