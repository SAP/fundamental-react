import React from 'react';

export const Tag = (props) => {
    const { children, clickHandler } = props;
    return (
        <span className="fd-tag" role="button" onClick={clickHandler}>
            {children}
        </span>
    );
}
