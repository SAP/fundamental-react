import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import withStyles from '../utils/WithStyles/WithStyles';

const FormFieldset = React.forwardRef(({ children, className, disableStyles, ...props }, ref) => {
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
    children: PropTypes.node,
    className: PropTypes.string,
    customStyles: PropTypes.object,
    disableStyles: PropTypes.bool
};

export { FormFieldset as __FormFieldset };

export default withStyles(FormFieldset, { cssFile: 'fieldset' });
