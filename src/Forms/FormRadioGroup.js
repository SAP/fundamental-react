import classnamesBind from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import useUniqueId from '../utils/useUniqueId';
import withStyles from '../utils/withStyles';
import styles from 'fundamental-styles/dist/form-group.css';

const classnames = classnamesBind.bind(styles);

/** A **FormRadioGroup** is a type of FormGroup that groups a collection of radio buttons or checkboxes into a single input value.
 * **FormRadioItem** is a specialized form control that emits an `<input>` with a type of radio.
 * Radios allow the user to see all options and select one. Generally, this is used when there are
between 2-3 options. This component can also be disabled and displayed in a row. */

const FormRadioGroup = ({
    children,
    className,
    cssNamespace,
    compact,
    disabled,
    inline,
    onChange
}) => {

    const groupId = useUniqueId();

    const formGroupClasses = classnames(
        `${cssNamespace}-form-group`,
        {
            [`${cssNamespace}-form-group--inline`]: inline
        },
        className
    );

    return (
        <div className={formGroupClasses}>
            {React.Children.toArray(children).map(child => {
                return React.cloneElement(child, {
                    compact: child.props.compact || compact,
                    disabled: child.props.disabled || disabled,
                    inline: child.props.inline || inline,
                    name: child.props.name || groupId,
                    onChange: e => {
                        child.props.onChange?.(e, child.props.data) || onChange(e, child.props.data);
                    }
                });
            })}
        </div>
    );
};

FormRadioGroup.displayName = 'FormRadioGroup';

FormRadioGroup.propTypes = {
    /** Node(s) to render within the component */
    children: PropTypes.node,
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** Set to **true** to enable compact mode */
    compact: PropTypes.bool,
    /** Set to **true** to mark component as disabled and make it non-interactive */
    disabled: PropTypes.bool,
    /** Set to **true** to display radio buttons in a row */
    inline: PropTypes.bool,
    /**
     * Callback function; triggered when the selected `FormRadioItem` in the `FormRadioGroup` changes.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent. See https://reactjs.org/docs/events.html.
     * @param {*} radioItemData - anything set on the data property of the last selected FormRadioItem within this group.
     * @returns {void}
    */
    onChange: PropTypes.func
};

FormRadioGroup.defaultProps = {
    onChange: () => {}
};

export default withStyles(FormRadioGroup);
