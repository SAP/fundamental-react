import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

const FormSet = React.forwardRef(({ children, className, disableStyles, ...props }, ref) => {

    useEffect(() => {
        if (!disableStyles) {
            require('fundamental-styles/dist/form-group.css');
        }
    }, []);

    const formSetClasses = classnames(
        'fd-form-group',
        className
    );

    return (
        <div {...props} className={formSetClasses}
            ref={ref}>
            {children}
        </div>
    );
});

FormSet.displayName = 'FormSet';

FormSet.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,

    disableStyles: PropTypes.bool
};

export { FormSet as __FormSet };

export default FormSet;
