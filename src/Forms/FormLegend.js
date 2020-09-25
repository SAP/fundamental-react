import classnamesBind from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import styles from 'fundamental-styles/dist/fieldset.css';

const classnames = classnamesBind.bind(styles);

/** See the **FormFieldset** component for detailed usage information. */
const FormLegend = React.forwardRef(({ children, className, ...props }, ref) => {

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
    className: PropTypes.string
};

export default FormLegend;
