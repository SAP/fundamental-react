import classnames from 'classnames';
import PropTypes from 'prop-types';
import shortId from '../utils/shortId';
import React, { useEffect } from 'react';

const FormRadioGroup = ({
    children,
    className,
    disabled,
    disableStyles,
    inline,
    onChange
}) => {

    useEffect(() => {
        if (!disableStyles) {
            require('fundamental-styles/dist/form-group.css');
        }
    }, []);

    const groupId = shortId.generate();

    const formGroupClasses = classnames(
        'fd-form-group',
        {
            'fd-form-group--inline': inline
        },
        className
    );

    return (
        <div className={formGroupClasses}>
            {React.Children.toArray(children).map(child => {
                return React.cloneElement(child, {
                    disabled: child.props.disabled || disabled,
                    disableStyles: child.props.disableStyles || disableStyles,
                    inline: child.props.inline || inline,
                    name: child.props.name || groupId,
                    onChange: child.props.onChange || onChange
                });
            })}
        </div>
    );
};

FormRadioGroup.displayName = 'FormRadioGroup';

FormRadioGroup.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    disableStyles: PropTypes.bool,
    inline: PropTypes.bool,
    onChange: PropTypes.func
};

FormRadioGroup.defaultProps = {
    onChange: () => {}
};

FormRadioGroup.propDescriptions = {
    inline: 'Set to **true** to display radio buttons in a row.'
};

export default FormRadioGroup;
