import classnames from 'classnames';
import CustomPropTypes from '../utils/CustomPropTypes/CustomPropTypes';
import { FORM_MESSAGE_TYPES } from '../utils/constants';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

/** A **FormTextarea** is used to gather potentially lengthy input from a user.
 * Best practice is to use this component as a child of FormGroup. */
const FormTextarea = React.forwardRef(({
    className,
    compact,
    counterProps,
    defaultValue,
    disabled,
    disableStyles,
    localizedText,
    maxLength,
    onChange,
    readOnly,
    state,
    value,
    ...props }, ref) => {

    useEffect(() => {
        if (!disableStyles) {
            require('fundamental-styles/dist/textarea.css');
        }
    }, []);

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
        'fd-textarea',
        {
            'fd-textarea--compact': compact,
            [`is-${state}`]: state
        },
        className
    );

    const counterClasses = classnames(
        'fd-textarea-counter',
        counterProps?.className
    );

    return (
        <>
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
    /** Internal use only */
    disableStyles: PropTypes.bool,
    /** Localized text to be updated based on location/language */
    localizedText: CustomPropTypes.i18n({
        charactersLeftPlural: PropTypes.string,
        charactersLeftSingular: PropTypes.string
    }),
    /** Set the max length of the textarea */
    maxLength: PropTypes.number,
    /** Set to **true** to mark component as readonly */
    readOnly: PropTypes.bool,
    /** State of validation: 'error', 'warning', 'information', 'success' */
    state: PropTypes.oneOf(FORM_MESSAGE_TYPES),
    /** Value for the textarea */
    value: PropTypes.string,
    /** Callback function when the change event fires on the component */
    onChange: PropTypes.func
};

FormTextarea.defaultProps = {
    localizedText: {
        charactersLeftPlural: 'characters left',
        charactersLeftSingular: 'character left'
    }
};

export default FormTextarea;
