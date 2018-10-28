import React from 'react';
import PropTypes from 'prop-types';

export const Dropdown = props => {
    const { size, toolbar, children } = props;
    return (
        <div className={`fd-dropdown${size ? ' fd-dropdown--' + size : ''}${toolbar ? ' fd-dropdown--toolbar' : ''}`}>
            {children}
        </div>
    );
};

Dropdown.propTypes = {
    size: PropTypes.string,
    toolbar: PropTypes.bool
};
