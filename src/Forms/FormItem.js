import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

const FormItem = React.forwardRef(({ isInline, children, className, disableStyles, ...props }, ref) => {

    useEffect(() => {
        if (!disableStyles) {
            require('fundamental-styles/dist/form-item.css');
        }
    }, []);

    const formItemClasses = classnames(
        'fd-form-item',
        {
            'fd-form-item--horizontal': isInline
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
    children: PropTypes.node,
    className: PropTypes.string,
    disableStyles: PropTypes.bool,
    isInline: PropTypes.bool
};

FormItem.propDescriptions = {
    isInline: 'Set to **true** to display radio buttons and checkboxes in a row.'
};

export default FormItem;
