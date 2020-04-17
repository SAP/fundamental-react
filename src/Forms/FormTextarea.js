import classnames from 'classnames';
import CustomPropTypes from '../utils/CustomPropTypes/CustomPropTypes';
import { FORM_MESSAGE_TYPES } from '../utils/constants';
import FormValidationOverlay from './_FormValidationOverlay';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

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
    validationState,
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
            [`is-${validationState?.state}`]: validationState?.state
        },
        className
    );

    const counterClasses = classnames(
        'fd-textarea-counter',
        counterProps?.className
    );

    const textArea = (
        <div>
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
        </div>
    );

    return (
        validationState ? (
            <FormValidationOverlay
                control={textArea}
                validationState={validationState} />
        ) :
            textArea
    );
});

FormTextarea.displayName = 'FormTextarea';

FormTextarea.propTypes = {
    className: PropTypes.string,
    compact: PropTypes.bool,
    counterProps: PropTypes.object,
    defaultValue: PropTypes.string,
    disabled: PropTypes.bool,
    disableStyles: PropTypes.bool,
    localizedText: CustomPropTypes.i18n({
        charactersLeftPlural: PropTypes.string,
        charactersLeftSingular: PropTypes.string
    }),
    maxLength: PropTypes.number,
    readOnly: PropTypes.bool,
    validationState: PropTypes.shape({
        state: PropTypes.oneOf(FORM_MESSAGE_TYPES),
        text: PropTypes.string
    }),
    value: PropTypes.string,
    onChange: PropTypes.func
};

FormTextarea.defaultProps = {
    localizedText: {
        charactersLeftPlural: 'characters left',
        charactersLeftSingular: 'character left'
    }
};

FormTextarea.propDescriptions = {
    counterProps: 'Props to pass to the counter div.',
    maxLength: 'Set the max length of the text area.'
};

export default FormTextarea;
