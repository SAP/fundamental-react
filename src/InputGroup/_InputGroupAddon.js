import classnamesBind from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import withStyles from '../utils/withStyles';
import styles from 'fundamental-styles/dist/input-group.css';

const classnames = classnamesBind.bind(styles);

const InputGroupAddon = ({
    children,
    className,
    compact,
    cssNamespace,
    isButton,
    ...otherProps
}) => {

    const addonClasses = classnames(
        className,
        `${cssNamespace}-input-group__addon`,
        {
            [`${cssNamespace}-input-group__addon--button`]: isButton,
            [`${cssNamespace}-input-group__addon--compact`]: compact
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
                        `${cssNamespace}-input-group__button`,
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

export default withStyles(InputGroupAddon);
