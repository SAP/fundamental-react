import classnames from 'classnames';
import { FORM_STATES } from '../utils/constants';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

const FormTextarea = React.forwardRef(({ children, className, compact, counter, disabled, disableStyles, readOnly, state, ...props }, ref) => {

    useEffect(() => {
        if (!disableStyles) {
            require('fundamental-styles/dist/textarea.css');
        }
    }, []);

    const [charCount, setCharCount] = useState(counter);

    const handleOnChange = (e) => {
        if (counter)
            setCharCount(counter - e.target.value.length);
    };

    const formTextAreaClasses = classnames(
        'fd-textarea',
        { 'fd-textarea--compact': compact,
            [`is-${state}`]: state
        },
        className
    );

    const renderChildElements = () => {
        return React.Children.toArray(children).map((child, i) => {
            return React.isValidElement(child) ?
                React.cloneElement(child, { key: i, charCount, showCounter: !readOnly && !disabled && !!counter }) :
                null;
        });
    };

    return (
        <React.Fragment>
            <textarea
                {...props}
                className={formTextAreaClasses}
                disabled={disabled}
                onChange={handleOnChange}
                readOnly={readOnly}
                ref={ref}>
                {!React.isValidElement(children) ? children : null}
            </textarea>
            {renderChildElements()}
        </React.Fragment>
    );
});

FormTextarea.displayName = 'FormTextarea';

FormTextarea.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    compact: PropTypes.bool,
    counter: PropTypes.number,
    disabled: PropTypes.bool,
    disableStyles: PropTypes.bool,
    readOnly: PropTypes.bool,
    state: PropTypes.oneOf(FORM_STATES)
};

FormTextarea.defaultProps = {
    counter: 150
};

FormTextarea.propDescriptions = {
    counter: 'Set the character count limit'
};

export default FormTextarea;
