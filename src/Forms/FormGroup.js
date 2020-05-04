import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

/** Form groups encapsulate components related to a single form input.
 * At a minimum, it should contain FormLabel and FormInput child components. */
const FormGroup = React.forwardRef(({ children, disableStyles, ...props }, ref) => {

    useEffect(() => {
        if (!disableStyles) {
            require('fundamental-styles/dist/form-group.css');
        }
    }, []);

    // Note that we don't want to include the fd-form-group--inline
    // class here because it is only for FormRadioGroup

    return (<div {...props} className='fd-form-group'
        ref={ref}>{children}</div>);
});

FormGroup.displayName = 'FormGroup';

FormGroup.propTypes = {
    /** Node(s) to render within the component */
    children: PropTypes.node,
    /** Internal use only */
    disableStyles: PropTypes.bool
};

export default FormGroup;
