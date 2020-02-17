import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import withStyles from '../utils/WithStyles/WithStyles';

const FormTextarea = React.forwardRef(({ children, className, compact, disableStyles, ...props }, ref) => {
    const formTextAreaClasses = classnames(
        'fd-textarea',
        { 'fd-textarea--compact': compact },
        className
    );

    return (
        <textarea
            {...props}
            className={formTextAreaClasses}
            ref={ref}>
            {children}
        </textarea>
    );
});

FormTextarea.displayName = 'FormTextarea';

FormTextarea.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    compact: PropTypes.bool,
    customStyles: PropTypes.object,
    disableStyles: PropTypes.bool
};

export { FormTextarea as __FormTextarea };

export default withStyles(FormTextarea, { cssFile: 'textarea', fonts: true });
