import 'fundamental-styles/dist/form-item.css';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const FormItem = ({ isInline, children, className, ...props }) => {
    const formItemClasses = classnames(
        'fd-form-item',
        {
            'fd-form-item--inline': isInline
        },
        className
    );

    return (
        <div
            {...props}
            className={formItemClasses}>
            {children}
        </div>
    );
};
FormItem.displayName = 'FormItem';

FormItem.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    isCheck: PropTypes.bool,
    isInline: PropTypes.bool
};

FormItem.propDescriptions = {
    isInline: 'Set to **true** to display radio buttons and checkboxes in a row.'
};

export default FormItem;
