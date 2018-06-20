import React from 'react';

export const Tag = (props) => {
    const { children } = props;
    return (
        <span class="fd-tag" role="button">{children}</span>
    );
}
