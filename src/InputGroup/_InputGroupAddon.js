import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const InputGroupAddon = ({
    addonClassNames,
    children,
    className,
    compact,
    disableStyles,
    isButton,
    ...otherProps
}) => {

    const addonClasses = classnames(
        addonClassNames,
        'fd-input-group__addon',
        { 'fd-input-group__addon--button': isButton },
        { 'fd-input-group__addon--button--compact': compact && isButton }
    );

    return (
        <span className={addonClasses} {...otherProps} >
            {children}
        </span>
    );
};

InputGroupAddon.displayName = 'InputGroupAddon';

InputGroupAddon.propTypes = {
    addonClassNames: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    compact: PropTypes.bool,
    customStyles: PropTypes.object,
    disableStyles: PropTypes.bool,
    isButton: PropTypes.bool
};

InputGroupAddon.propDescriptions = {
    addonClassNames: 'CSS class(es) to add to the addon element.',
    isButton: 'Set to **true** if add on is button.'
};

export { InputGroupAddon as __InputGroupAddon };

export default InputGroupAddon;
