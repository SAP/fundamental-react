import classnames from 'classnames';
import PropTypes from 'prop-types';
import shortId from '../utils/shortId';
import React, { useEffect } from 'react';

const FormRadioGroup = ({
    children,
    className,
    compact,
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
                    compact: child.props.compact || compact,
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
    /** Node(s) to render within the component */
    children: PropTypes.node,
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** Set to **true** to enable compact mode */
    compact: PropTypes.bool,
    /** Set to **true** to mark component as disabled and make it non-interactive */
    disabled: PropTypes.bool,
    /** Internal use only */
    disableStyles: PropTypes.bool,
    inline: PropTypes.bool,
    /** Callback function when the change event fires on the component */
    onChange: PropTypes.func
};

FormRadioGroup.defaultProps = {
    onChange: () => {}
};

FormRadioGroup.propDescriptions = {
    inline: 'Set to **true** to display radio buttons in a row.'
};

export default FormRadioGroup;
