import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import withStyles from '../utils/WithStyles';

const FormFieldSet = React.forwardRef(({ children, className, customStyles, disableStyles, ...props }, ref) => {
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

FormFieldSet.displayName = 'FormFieldset';

FormFieldSet.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    customStyles: PropTypes.object,
    disableStyles: PropTypes.bool
};

export default withStyles(FormFieldSet, { cssFile: 'fieldset' });
