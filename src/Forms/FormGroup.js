import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

const FormGroup = React.forwardRef(({ children, disableStyles, ...props }, ref) => {

    useEffect(() => {
        if (!disableStyles) {
            require('fundamental-styles/dist/form-group.css');
        }
    }, []);

    return (<div {...props} className='fd-form-group'
        ref={ref}>{children}</div>);
});

FormGroup.displayName = 'FormGroup';

FormGroup.propTypes = {
    children: PropTypes.node,
    disableStyles: PropTypes.bool
};

export default FormGroup;
