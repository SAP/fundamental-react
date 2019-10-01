import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import withStyles from '../utils/WithStyles/WithStyles';

const Dropdown = React.forwardRef(({ children, className, disableStyles, standard, ...props }, ref) => {

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
    customStyles: PropTypes.object,
    disableStyles: PropTypes.bool,
    standard: PropTypes.bool
};

Dropdown.propDescriptions = {
    standard: 'Set to **true** to enable a dropdown for toolbar.'
};

export { Dropdown as __Dropdown };

export default withStyles(Dropdown);
