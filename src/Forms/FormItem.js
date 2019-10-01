import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import withStyles from '../utils/WithStyles/WithStyles';

const FormItem = React.forwardRef(({ isInline, children, className, disableStyles, ...props }, ref) => {
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
    customStyles: PropTypes.object,
    disableStyles: PropTypes.bool,
    isInline: PropTypes.bool
};

FormItem.propDescriptions = {
    isInline: 'Set to **true** to display radio buttons and checkboxes in a row.'
};

export { FormItem as __FormItem };

export default withStyles(FormItem, { cssFile: 'form-item' });
