import classnames from 'classnames';
import PropTypes from 'prop-types';
import { BUTTON_OPTIONS, BUTTON_TYPES } from '../utils/constants';
import React, { useEffect } from 'react';

const Button = React.forwardRef(({
    option,
    type,
    compact,
    disableStyles,
    glyph,
    selected,
    disabled,
    typeAttr,
    onClick,
    children,
    className,
    ...props
}, ref) => {

    useEffect(() => {
        if (!disableStyles) {
            require('fundamental-styles/dist/icon.css');
            require('fundamental-styles/dist/button.css');
        }
    }, []);

    const buttonClasses = classnames(
        'fd-button',
        {
            [`fd-button--${option}`]: !!option,
            [`fd-button--${type}`]: !!type,
            'fd-button--compact': compact,
            [`sap-icon--${glyph}`]: !!glyph,
            'is-selected': selected,
            'is-disabled': disabled
        },
        className
    );

    return (<button {...props} className={buttonClasses}
        disabled={disabled} onClick={onClick}
        ref={ref}
        selected={selected}
        type={typeAttr}>
        {children}
    </button>);
});

Button.displayName = 'Button';

Button.propTypes = {
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
    /** The icon to include. See the icon page for the list of icons */
    glyph: PropTypes.string,
    /** Indicates the importance of the button: 'empahsized' or 'transparent' */
    option: PropTypes.oneOf(BUTTON_OPTIONS),
    /** Set to **true** to set state of the button to "selected" */
    selected: PropTypes.bool,
    /** Sets the variation of the component. Primarily used for styling: 'standard',
    'positive',
    'negative',
    'medium' */
    type: PropTypes.oneOf(BUTTON_TYPES),
    /** Value for the `type` attribute on the `<button>` element */
    typeAttr: PropTypes.string,
    /** Callback function when user clicks on the component*/
    onClick: PropTypes.func
};

Button.defaultProps = {
    typeAttr: 'button'
};

export default Button;
