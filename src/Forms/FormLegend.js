import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import withStyles from '../utils/WithStyles';

const FormLegend = React.forwardRef(({ children, className, customStyles, disableStyles, ...props }, ref) => {
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
    customStyles: PropTypes.object,
    disableStyles: PropTypes.bool
};

export default withStyles(FormLegend, { cssFile: 'fieldset' });
