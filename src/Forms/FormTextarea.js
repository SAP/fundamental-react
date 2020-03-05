import classnames from 'classnames';
import { FORM_STATES } from '../utils/constants';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

const FormTextarea = React.forwardRef(({ children, className, compact, disabled, disableStyles, readOnly, state, ...props }, ref) => {

    useEffect(() => {
        if (!disableStyles) {
            require('fundamental-styles/dist/textarea.css');
        }
    }, []);

    const formTextAreaClasses = classnames(
        'fd-textarea',
        { 'fd-textarea--compact': compact,
            [`is-${state}`]: state
        },
        className
    );

    return (
        <textarea
            {...props}
            className={formTextAreaClasses}
            disabled={disabled}
            readOnly={readOnly}
            ref={ref}>
            {children}
        </textarea>
    );
});

FormTextarea.displayName = 'FormTextarea';

FormTextarea.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    compact: PropTypes.bool,
    disabled: PropTypes.bool,
    disableStyles: PropTypes.bool,
    readOnly: PropTypes.bool,
    state: PropTypes.oneOf(FORM_STATES)
};

export default FormTextarea;
