import classnames from 'classnames';
import { FORM_STATES } from '../utils/constants';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

const FormTextarea = React.forwardRef(({
    children,
    className,
    compact,
    counterProps,
    defaultValue,
    disabled,
    disableStyles,
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
        if (typeof children === 'string') {
            return Math.min(children.length, maxLength);
        }
        if (defaultValue) {
            return Math.min(defaultValue.toString().length, maxLength);
        }
        return 0;
    };

    const hasMaxLength = maxLength >= 0;

    const [charCount, setCharCount] = useState(hasMaxLength ? getInitialCharCount() : 0);

    const getMaxLengthText = () => {
        let charsLeft = Math.max(maxLength - charCount, 0);
        return `${charsLeft} character${charsLeft !== 1 ? 's' : ''} left`;
    };

    const handleOnChange = (e) => {
        if (hasMaxLength)
            setCharCount(e.target.value.length);
        if (onChange)
            onChange(e);
    };

    const formTextAreaClasses = classnames(
        'fd-textarea',
        { 'fd-textarea--compact': compact,
            [`is-${state}`]: state
        },
        className
    );

    const counterClasses = classnames(
        'fd-textarea-counter',
        counterProps?.className
    );

    return (
        <React.Fragment>
            <textarea
                {...props}
                children={children}
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
        </React.Fragment>
    );
});

FormTextarea.displayName = 'FormTextarea';

FormTextarea.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    compact: PropTypes.bool,
    counterProps: PropTypes.object,
    defaultValue: PropTypes.string,
    disabled: PropTypes.bool,
    disableStyles: PropTypes.bool,
    maxLength: PropTypes.number,
    readOnly: PropTypes.bool,
    state: PropTypes.oneOf(FORM_STATES),
    value: PropTypes.string,
    onChange: PropTypes.func
};

FormTextarea.propDescriptions = {
    counterProps: 'Props to pass to the counter div.',
    maxLength: 'Set the max length of the text area.'
};

export default FormTextarea;
