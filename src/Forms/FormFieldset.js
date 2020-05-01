import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

const FormFieldset = React.forwardRef(({ children, className, disableStyles, ...props }, ref) => {

    useEffect(() => {
        if (!disableStyles) {
            require('fundamental-styles/dist/fieldset.css');
        }
    }, []);

    const formFieldsetClasses = classnames(
        'fd-fieldset',
        className
    );

    return (
        <fieldset
            {...props}
            className={formFieldsetClasses}
            ref={ref}>
            {children}
        </fieldset>
    );
});

FormFieldset.displayName = 'FormFieldset';

FormFieldset.propTypes = {
    /** Node(s) to render within the component */
    children: PropTypes.node,
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    disableStyles: PropTypes.bool
};

export default FormFieldset;
