import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

const FormItem = React.forwardRef(({ isHorizontal, isInline, children, className, disableStyles, ...props }, ref) => {

    useEffect(() => {
        if (!disableStyles) {
            require('fundamental-styles/dist/form-item.css');
        }
    }, []);

    const formItemClasses = classnames(
        'fd-form-item',
        {
            'fd-form-item--inline': isInline,
            'fd-form-item--horizontal': isHorizontal
        },
        className
    );

    return (
        <div
            {...props}
            className={formItemClasses}
            ref={ref}>
            {children}
        </div>
    );
});
FormItem.displayName = 'FormItem';

FormItem.propTypes = {
    /** Node(s) to render within the component */
    children: PropTypes.node,
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** Internal use only */
    disableStyles: PropTypes.bool,
    isHorizontal: PropTypes.bool,
    isInline: PropTypes.bool
};

FormItem.propDescriptions = {
    isInline: '_INTERNAL USE ONLY._',
    isHorizontal: 'Set to **true** to display items in a row.'
};

export default FormItem;
