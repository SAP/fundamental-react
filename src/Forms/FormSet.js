import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import withStyles from '../utils/WithStyles/WithStyles';

const FormSet = React.forwardRef(({ children, className, disableStyles, ...props }, ref) => {
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
    customStyles: PropTypes.object,
    disableStyles: PropTypes.bool
};

export { FormSet as __FormSet };

export default withStyles(FormSet, { cssFile: 'form-group' });
