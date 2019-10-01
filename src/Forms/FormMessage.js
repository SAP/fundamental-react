import classnames from 'classnames';
import { FORM_MESSAGE_TYPES } from '../utils/constants';
import PropTypes from 'prop-types';
import React from 'react';
import withStyles from '../utils/WithStyles/WithStyles';

const FormMessage = React.forwardRef(({ type, children, className, disableStyles, ...props }, ref) => {
    const formMessageClasses = classnames(
        'fd-form-message',
        {
            [`fd-form-message--${type}`]: !!type
        },
        className
    );
    return (
        <span
            {...props}
            className={formMessageClasses}
            ref={ref}>
            {children}
        </span>
    );
});

FormMessage.displayName = 'FormMessage';

FormMessage.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    customStyles: PropTypes.object,
    disableStyles: PropTypes.bool,
    type: PropTypes.oneOf(FORM_MESSAGE_TYPES)
};

export { FormMessage as __FormMessage };

export default withStyles(FormMessage, { cssFile: 'form-message', fonts: true, icons: true });
