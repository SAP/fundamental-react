import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

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
    children: PropTypes.node,
    className: PropTypes.string,
    disableStyles: PropTypes.bool
};

export default FormLegend;
