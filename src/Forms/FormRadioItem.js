import classnamesBind from 'classnames/bind';
import { FORM_MESSAGE_TYPES } from '../utils/constants';
import FormItem from './FormItem';
import FormLabel from './FormLabel';
import PropTypes from 'prop-types';
import React from 'react';
import useUniqueId from '../utils/useUniqueId';
import withStyles from '../utils/withStyles';
import styles from 'fundamental-styles/dist/radio.css';

const classnames = classnamesBind.bind(styles);

const FormRadioItem = React.forwardRef(({
    checked,
    children,
    compact,
    cssNamespace,
    data,
    defaultChecked,
    disabled,
    id,
    inline,
    inputProps,
    labelProps,
    name,
    state,
    value,
    ...props }, ref) => {

    const inputClassName = classnames(
        `${cssNamespace}-radio`,
        {
            [`${cssNamespace}-radio--compact`]: compact,
            [`is-${state}`]: state
        }
    );

    const generatedRadioId = useUniqueId();
    const radioId = id || generatedRadioId;

    return (
        <FormItem
            {...props}
            isInline={inline}
            key={id}>
            <input
                {...inputProps}
                checked={checked}
                className={inputClassName}
                disabled={disabled}
                id={radioId}
                name={name}
                ref={ref}
                type='radio'
                value={value} />
            <FormLabel
                {...labelProps}
                className={classnames(`${cssNamespace}-radio__label`)}
                disabled={disabled}
                htmlFor={radioId}>
                {children}
            </FormLabel>
        </FormItem>
    );
});

FormRadioItem.displayName = 'FormRadioItem';

FormRadioItem.propTypes = {
    /** Node(s) to render within the component */
    children: PropTypes.node.isRequired,
    /** Set to **true** when radio input is checked and a controlled component */
    checked: PropTypes.bool,
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** Set to **true** to enable compact mode */
    compact: PropTypes.bool,
    /** Payload to be used for onChange callback when this `FormRadioItem` is selected in a `FormRadioGroup`.*/
    data: PropTypes.any,
    /** Set to **true** when the radio input is checked and an uncontrolled component */
    defaultChecked: PropTypes.bool,
    /** Set to **true** to mark component as disabled and make it non-interactive */
    disabled: PropTypes.bool,
    /** Value for the `id` attribute on the element */
    id: PropTypes.string,
    /** Internal use only */
    inline: PropTypes.bool,
    /** Additional props to be spread to the `<input>` element */
    inputProps: PropTypes.object,
    /** Additional props to be spread to the `<label>` element */
    labelProps: PropTypes.object,
    /** Sets the `name` for the radio input */
    name: PropTypes.string,
    /** State of validation: 'error', 'warning', 'information', 'success' */
    state: PropTypes.oneOf(FORM_MESSAGE_TYPES),
    /** Sets the `value` for the radio input */
    value: PropTypes.string
};

export default withStyles(FormRadioItem);
