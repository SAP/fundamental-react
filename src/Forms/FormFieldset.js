import classnamesBind from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import withStyles from '../utils/withStyles';
import styles from 'fundamental-styles/dist/fieldset.css';

const classnames = classnamesBind.bind(styles);
/** A **FormFieldset** is used to give semantic meaning to a group of elements inside a form (e.g. Billing or Shipping Address).
 * Grouping fields together into a fieldset also provides styling and accessibility benefits. */
const FormFieldset = React.forwardRef(({ children, className, cssNamespace, ...props }, ref) => {

    const formFieldsetClasses = classnames(
        `${cssNamespace}-fieldset`,
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
    className: PropTypes.string
};

export default withStyles(FormFieldset);
