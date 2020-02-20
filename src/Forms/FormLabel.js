import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

const FormLabel = React.forwardRef(({
    required,
    children,
    className,
    disabled,
    disableStyles,
    isToggle,
    isCheckbox,
    isInlineHelp,
    isRadio,
    ...props
}, ref) => {

    useEffect(() => {
        if (!disableStyles) {
            require('fundamental-styles/dist/fonts.css');
            require('fundamental-styles/dist/form-label.css');
        }
    }, []);

    const formLabelClasses = classnames(
        'fd-form-label',
        {
            'is-disabled': disabled,
            'fd-form-label--toggle': isToggle,
            'fd-form-label--checkbox': isCheckbox,
            'fd-form-label--radio': isRadio,
            'fd-form-label--inline-help': isInlineHelp,
            'fd-form-label--required': required
        },
        className
    );

    return (
        <label
            {...props}
            aria-required={required}
            className={formLabelClasses}
            ref={ref}>
            {children}
        </label>
    );
});

FormLabel.displayName = 'FormLabel';

FormLabel.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    disableStyles: PropTypes.bool,
    isCheckbox: PropTypes.bool,
    isInlineHelp: PropTypes.bool,
    isRadio: PropTypes.bool,
    isToggle: PropTypes.bool,
    required: PropTypes.bool
};

FormLabel.propDescriptions = {
    isCheckbox: '_INTERNAL USE ONLY._',
    isInlineHelp: 'Set to **true** if child is InlineHelp component',
    isRadio: '_INTERNAL USE ONLY._',
    isToggle: '_INTERNAL USE ONLY._',
    required: 'Set to **true** for required input fields.'
};


export default FormLabel;
