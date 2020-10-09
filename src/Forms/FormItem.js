import classnamesBind from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import withStyles from '../utils/withStyles';
import styles from 'fundamental-styles/dist/form-item.css';

const classnames = classnamesBind.bind(styles);

const FormItem = React.forwardRef(({ isHorizontal, isInline, children, className, cssNamespace, ...props }, ref) => {

    const formItemClasses = classnames(
        `${cssNamespace}-form-item`,
        {
            [`${cssNamespace}-form-item--inline`]: isInline,
            [`${cssNamespace}-form-item--horizontal`]: isHorizontal
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
    /** Set to **true** to display items in a row */
    isHorizontal: PropTypes.bool,
    /** Internal use only */
    isInline: PropTypes.bool
};

export default withStyles(FormItem);
