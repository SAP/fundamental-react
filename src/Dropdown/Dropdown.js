import React from 'react';
import PropTypes from 'prop-types';

export const Dropdown = props => {
    const { children } = props;
    return (
        <div className="fd-dropdown">
            {children}
        </div>
    );
};

