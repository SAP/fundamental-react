import PropTypes from 'prop-types';
import React from 'react';
import withStyles from '../utils/WithStyles/WithStyles';

const FormGroup = React.forwardRef(({ children, disableStyles, ...props }, ref) => {
    return (<div {...props} className='fd-form-group'
        ref={ref}>{children}</div>);
});

FormGroup.displayName = 'FormGroup';

FormGroup.propTypes = {
    children: PropTypes.node,
    customStyles: PropTypes.object,
    disableStyles: PropTypes.bool
};

export { FormGroup as __FormGroup };

export default withStyles(FormGroup, { cssFile: 'form-group' });
