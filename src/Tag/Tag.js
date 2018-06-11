import React from 'react';
import PropTypes from 'prop-types';

export const Tag = (props) => {
    const { children } = props;
    return (
        <span class="fd-tag" role="button">{children}</span>
    );
}
