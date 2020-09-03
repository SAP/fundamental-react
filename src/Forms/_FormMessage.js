import classnames from 'classnames';
import { FORM_MESSAGE_TYPES } from '../utils/constants';
import PropTypes from 'prop-types';
import React from 'react';
import 'fundamental-styles/dist/form-message.css';

const FormMessage = React.forwardRef(({ children, className, inPopoverList, type, ...props }, ref) => {

    const formMessageClasses = classnames(
        {
            'fd-form-message': !inPopoverList,
            'fd-list__message': inPopoverList,
            [`fd-form-message--${type}`]: !inPopoverList && !!type,
            [`fd-list__message--${type}`]: inPopoverList && !!type
        },
        className
    );
    return (
        <div
            {...props}
            aria-live='polite'
            className={formMessageClasses}
            ref={ref}
            role='alert'>
            {children}
        </div>
    );
});

FormMessage.displayName = 'FormMessage';

FormMessage.propTypes = {
    /** Node(s) to render within the component */
    children: PropTypes.node,
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** Set to **true** if FormMessage is inside a popover*/
    inPopoverList: PropTypes.bool,
    /** Sets the variation of the component. Primarily used for styling */
    type: PropTypes.oneOf(FORM_MESSAGE_TYPES)
};

export default FormMessage;
