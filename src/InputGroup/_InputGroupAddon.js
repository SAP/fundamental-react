import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const InputGroupAddon = ({
    addonClassNames,
    children,
    className,
    compact,
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
            {React.Children.toArray(children).map(child => {
                if (!isButton) {
                    return child;
                }

                return React.cloneElement(child, {
                    className: 'fd-input-group__button'
                });
            })}
        </span>
    );
};

InputGroupAddon.displayName = 'InputGroup.Addon';

InputGroupAddon.propTypes = {
    addonClassNames: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    compact: PropTypes.bool,
    isButton: PropTypes.bool
};

InputGroupAddon.propDescriptions = {
    addonClassNames: 'CSS class(es) to add to the addon element.',
    isButton: 'Set to **true** if add on is button.'
};

export { InputGroupAddon as __InputGroupAddon };

export default InputGroupAddon;
