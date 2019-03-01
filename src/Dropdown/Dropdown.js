import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const Dropdown = props => {
    const { standard, children, className, ...rest } = props;

    const dropdownClasses = classnames(
        'fd-dropdown',
        {
            'fd-dropdown--standard': standard
        },
        className
    );

    return (
        <div {...rest} className={dropdownClasses}>
            {children}
        </div>
    );
};

Dropdown.displayName = 'Dropdown';

Dropdown.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    standard: PropTypes.bool
};

Dropdown.propDescriptions = {
    standard: 'Set to **true** to enable a dropdown for toolbar.'
};

export default Dropdown;
