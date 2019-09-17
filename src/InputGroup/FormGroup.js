import 'fundamental-styles/dist/form-group.css';
import PropTypes from 'prop-types';
import React from 'react';

const FormGroup = ({ children, ...props }) => {
    return <div {...props} className='fd-form-group'>{children}</div>;
};

FormGroup.displayName = 'FormGroup';

FormGroup.propTypes = {
    children: PropTypes.node
};

export default FormGroup;
