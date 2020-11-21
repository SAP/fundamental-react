import classnamesBind from 'classnames/bind';
import CustomPropTypes from '../utils/CustomPropTypes/CustomPropTypes';
import { FORM_MESSAGE_TYPES } from '../utils/constants';
import FormValidationOverlay from './_FormValidationOverlay';
import PropTypes from 'prop-types';
import withStyles from '../utils/withStyles';
import React, { useState } from 'react';
import styles from 'fundamental-styles/dist/textarea.css';

const classnames = classnamesBind.bind(styles);

/** A **FormTextarea** is used to gather potentially lengthy input from a user.
 * Best practice is to use this component as a child of FormGroup. */
const FormTextarea = React.forwardRef(({
    className,
    compact,
    counterProps,
    cssNamespace,
    defaultValue,
    disabled,
    localizedText,
    maxLength,
    onChange,
    readOnly,
    validationOverlayProps,
    validationState,
    value,
    ...props }, ref) => {

    const getInitialCharCount = () => {
        if (typeof value === 'boolean' || value) {
            return Math.min(value.toString().length, maxLength);
        }
        if (defaultValue) {
            return Math.min(defaultValue.toString().length, maxLength);
        }
        return 0;
    };

    const hasMaxLength = maxLength >= 0;

    const [charCount, setCharCount] = useState(hasMaxLength ? getInitialCharCount() : 0);

    const getMaxLengthText = () => {
        const { charactersLeftPlural, charactersLeftSingular } = localizedText;
        let charsLeft = Math.max(maxLength - charCount, 0);
        if (charsLeft !== 1) {
            return `${charsLeft} ${charactersLeftPlural}`;
        }
        return `${charsLeft} ${charactersLeftSingular}`;
    };

    const handleOnChange = (e) => {
        if (hasMaxLength)
            setCharCount(e.target.value.length);
        if (onChange)
            onChange(e);
    };

    const formTextAreaClasses = classnames(
        `${cssNamespace}-textarea`,
        {
            [`${cssNamespace}-textarea--compact`]: compact,
            [`is-${validationState?.state}`]: validationState?.state
        },
        className
    );

    const counterClasses = classnames(
        `${cssNamespace}-textarea-counter`,
        counterProps?.className
    );

    const formTextarea = (
        <textarea
            {...props}
            className={formTextAreaClasses}
            defaultValue={defaultValue}
            disabled={disabled}
            maxLength={maxLength}
            onChange={handleOnChange}
            readOnly={readOnly}
            ref={ref}
            value={value} />
    );

    return (
        <>
            {validationState?.state ? <FormValidationOverlay
                {...validationOverlayProps}
                control={formTextarea}
                validationState={validationState} />
                : formTextarea}
            {hasMaxLength &&
                <div
                    {...counterProps}
                    className={counterClasses}>
                    {getMaxLengthText()}
                </div>
            }
        </>
    );
});

FormTextarea.displayName = 'FormTextarea';

FormTextarea.propTypes = {
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** Set to **true** to enable compact mode */
    compact: PropTypes.bool,
    /** Props to pass to the counter div */
    counterProps: PropTypes.object,
    /** Default placeholder value for the textarea */
    defaultValue: PropTypes.string,
    /** Set to **true** to mark component as disabled and make it non-interactive */
    disabled: PropTypes.bool,
    /** Value for the `id` attribute on the element */
    id: PropTypes.string,
    /** Localized text to be updated based on location/language */
    localizedText: CustomPropTypes.i18n({
        charactersLeftPlural: PropTypes.string,
        charactersLeftSingular: PropTypes.string
    }),
    /** Set the max length of the textarea */
    maxLength: PropTypes.number,
    /** Set to **true** to mark component as readonly */
    readOnly: PropTypes.bool,
    /** Additional props to be spread to the ValidationOverlay */
    validationOverlayProps: PropTypes.shape({
        /** Additional classes to apply to validation popover's outermost `<div>` element  */
        className: PropTypes.string,
        /** Additional props to be spread to the ValdiationOverlay's FormMessage component */
        formMessageProps: PropTypes.object,
        /** Additional classes to apply to validation popover's popper child `<div>` wrapping the provided children  */
        innerRefClassName: PropTypes.string,
        /** Additional classes to apply to validation popover's popper `<div>` element  */
        popperClassName: PropTypes.string,
        /** CSS class(es) to add to the ValidationOverlay's reference `<div>` element */
        referenceClassName: PropTypes.string,
        /** Additional props to be spread to the popover's outermost `<div>` element */
        wrapperProps: PropTypes.object
    }),
    /** An object identifying a validation message.  The object will include properties for `state` and `text`; _e.g._, \`{ state: \'warning\', text: \'This is your last warning\' }\` */
    validationState: PropTypes.shape({
        /** State of validation: 'error', 'warning', 'information', 'success' */
        state: PropTypes.oneOf(FORM_MESSAGE_TYPES),
        /** Text of the validation message */
        text: PropTypes.string
    }),
    /** Value for the textarea */
    value: PropTypes.string,
    /** Callback function when the change event fires on the component */
    /**
     * Callback function; triggered when the change event fires on the HTML `<textarea>`.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent. See https://reactjs.org/docs/events.html.
     * @returns {void}
    */
    onChange: PropTypes.func
};

FormTextarea.defaultProps = {
    localizedText: {
        charactersLeftPlural: 'characters left',
        charactersLeftSingular: 'character left'
    }
};

export default withStyles(FormTextarea);
