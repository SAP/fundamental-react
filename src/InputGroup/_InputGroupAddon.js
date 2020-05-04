import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const InputGroupAddon = ({
    children,
    className,
    compact,
    isButton,
    ...otherProps
}) => {

    const addonClasses = classnames(
        className,
        'fd-input-group__addon',
        { 'fd-input-group__addon--button': isButton,
            'fd-input-group__addon--compact': compact
        }
    );

    return (
        <span className={addonClasses} {...otherProps} >
            {React.Children.toArray(children).map(child => {
                if (!isButton) {
                    return child;
                }

                return React.cloneElement(child, {
                    compact,
                    className: classnames(
                        child.props.className,
                        'fd-input-group__button',
                    )
                });
            })}
        </span>
    );
};

InputGroupAddon.displayName = 'InputGroup.Addon';

InputGroupAddon.propTypes = {
    /** Node(s) to render within the component */
    children: PropTypes.node,
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** Internal use only */
    compact: PropTypes.bool,
    /** Set to **true** if add-on is a button */
    isButton: PropTypes.bool
};

export default InputGroupAddon;
