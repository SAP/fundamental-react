import React from 'react';
import PropTypes from 'prop-types';

export const Dropdown = props => {
    const { standard, children, className } = props;
    return (
        <div className={`fd-dropdown${standard ? ' fd-dropdown--standard' : ''}${className ? ' ' + className : ''}`}>
            {children}
        </div>
    );
};

Dropdown.propTypes = {
    standard: PropTypes.bool
};
