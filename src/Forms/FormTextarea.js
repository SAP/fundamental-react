import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

const FormTextarea = React.forwardRef(({ children, className, disableStyles, ...props }, ref) => {

    useEffect(() => {
        if (!disableStyles) {
            require('fundamental-styles/dist/fonts.css');
            require('fundamental-styles/dist/textarea.css');
        }
    }, []);

    const formTextAreaClasses = classnames(
        'fd-textarea',
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
    className: PropTypes.string,
    disableStyles: PropTypes.bool
};

export default FormTextarea;
