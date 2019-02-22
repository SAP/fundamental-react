import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const FormItem = ({ isCheck, isInline, children, className, ...props }) => {
    const formItemClasses = classnames(
        'fd-form__item',
        {
            'fd-form__item--inline': isInline,
            'fd-form__item--check': isCheck
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
    isCheck: 'Set to **true** to render an `<input>` with `type` of **checkbox**.',
    isInline: 'Set to **true** to display radio buttons and checkboxes in a row.'
};

export default FormItem;
