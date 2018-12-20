import React from 'react';
import PropTypes from 'prop-types';

export const Dropdown = props => {
    const { standard, children } = props;
    return (
        <div className={`fd-dropdown${standard ? ' fd-dropdown--standard' : ''}`}>
            {children}
        </div>
    );
};

Dropdown.propTypes = {
    standard: PropTypes.bool
};
