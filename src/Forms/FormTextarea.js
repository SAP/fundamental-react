import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const FormTextarea = React.forwardRef(({ children, className, ...props }, ref) => {
    const formTextAreaClasses = classnames(
        'fd-form__control',
        className
    );

    return (
        <textarea
            {...props}
            className={formTextAreaClasses}
            ref={ref}>
            {children}
        </textarea>
    );
});

FormTextarea.displayName = 'FormTextarea';

FormTextarea.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

export default FormTextarea;
