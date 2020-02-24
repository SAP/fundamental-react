import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

const Dropdown = React.forwardRef(({ children, className, disableStyles, standard, ...props }, ref) => {

    useEffect(() => {
        if (!disableStyles) {
            require('fundamental-styles/dist/dropdown.css');
        }
    }, []);

    const dropdownClasses = classnames(
        'fd-dropdown',
        {
            'fd-dropdown--standard': standard
        },
        className
    );

    return (
        <div {...props} className={dropdownClasses}
            ref={ref}>
            {children}
        </div>
    );
});

Dropdown.displayName = 'Dropdown';

Dropdown.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,

    disableStyles: PropTypes.bool,
    standard: PropTypes.bool
};

Dropdown.propDescriptions = {
    standard: 'Set to **true** to enable a dropdown for toolbar.'
};

export default Dropdown;
