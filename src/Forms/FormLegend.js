import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

/** See the **FormFieldset** component for detailed usage information. */
const FormLegend = React.forwardRef(({ children, className, disableStyles, ...props }, ref) => {

    useEffect(() => {
        if (!disableStyles) {
            require('fundamental-styles/dist/fieldset.css');
        }
    }, []);

    const formLegendClasses = classnames(
        'fd-fieldset__legend',
        className
    );

    return (
        <legend
            {...props}
            className={formLegendClasses}
            ref={ref}>
            {children}
        </legend>
    );
});

FormLegend.displayName = 'FormLegend';

FormLegend.propTypes = {
    /** Node(s) to render within the component */
    children: PropTypes.node,
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** Internal use only */
    disableStyles: PropTypes.bool
};

export default FormLegend;
