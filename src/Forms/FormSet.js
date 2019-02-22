import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const FormSet = ({ children, className, ...props }) => {
    const formSetClasses = classnames(
        'fd-form__set',
        className
    );

    return (
        <div {...props} className={formSetClasses}>
            {children}
        </div>
    );
};

FormSet.displayName = 'FormSet';

FormSet.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

export default FormSet;
