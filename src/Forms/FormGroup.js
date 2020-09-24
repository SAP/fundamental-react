import classnamesBind from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
// eslint-disable-next-line sort-imports
import styles from 'fundamental-styles/dist/form-group.css';

const classnames = classnamesBind.bind(styles);

/** A **FormGroup** encapsulates components related to a single form input.
 * At a minimum, it should contain **FormLabel** and input child components. */
const FormGroup = React.forwardRef(({ children, ...props }, ref) => {

    // Note that we don't want to include the fd-form-group--inline
    // class here because it is only for FormRadioGroup

    return (<div {...props} className={classnames('fd-form-group')}
        ref={ref}>{children}</div>);
});

FormGroup.displayName = 'FormGroup';

FormGroup.propTypes = {
    /** Node(s) to render within the component */
    children: PropTypes.node
};

export default FormGroup;
