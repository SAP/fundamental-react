import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import useUniqueId from '../utils/useUniqueId';
import { BUTTON_OPTIONS, BUTTON_TYPES } from '../utils/constants';
import 'fundamental-styles/dist/icon.css';
import 'fundamental-styles/dist/button.css';

/** A **Button** allows users to perform an action. The priority of buttons within a page should be considered.
For instance, only use the main button once within a page or dialog. Color is also important. For
instance, the most important button has a blue background where as a red button should only be used if
the action it performs is potentially destructive. */

const Button = React.forwardRef(({
    allowFocusOnDisable,
    option,
    type,
    compact,
    disabledMessage,
    enabledMessage,
    glyph,
    iconBeforeText,
    iconClassName,
    selected,
    disabled,
    typeAttr,
    onClick,
    children,
    className,
    textClassName,
    ...props
}, ref) => {

    const buttonClasses = classnames(
        'fd-button',
        {
            [`fd-button--${option}`]: !!option,
            [`fd-button--${type}`]: !!type,
            'fd-button--compact': compact,
            'is-selected': selected,
            'is-disabled': disabled
        },
        className
    );

    const buttonTextClasses = classnames(
        'fd-button__text',
        textClassName
    );

    const iconClasses = classnames(
        {
            [`sap-icon--${glyph}`]: !!glyph
        },
        iconClassName
    );

    const ariaDisabled = props['aria-disabled'];
    let disabledInAnyWay = disabled || ariaDisabled;

    //if button is disabled and focusable, remove onClick handler
    let onClickHandler = allowFocusOnDisable && disabledInAnyWay ? () => {} : onClick;

    const ariaLiveId = useUniqueId();

    const getDisabledProps = () => {
        let disabledProps = {};
        if (allowFocusOnDisable) {
            disabledProps['aria-disabled'] = disabledInAnyWay;
            disabledProps['aria-describedby'] = ariaLiveId;
        } else {
            disabledProps.disabled = disabledInAnyWay;
        }
        return disabledProps;
    };

    const liveMessageForScreenReaders = disabledInAnyWay ? disabledMessage : enabledMessage;

    const renderButtonStateMessage = () => {
        let content = null;
        if (allowFocusOnDisable && disabledInAnyWay !== null) {
            content = (
                <p
                    aria-live='assertive'
                    className={'fd-button__instructions'}
                    id={ariaLiveId}>
                    {liveMessageForScreenReaders}
                </p>)
            ;
        }
        return content;
    };

    return (
        <>
            <button
                {...props}
                {...getDisabledProps()}
                className={buttonClasses}
                onClick={onClickHandler}
                ref={ref}
                selected={selected}
                type={typeAttr}>
                {iconBeforeText && glyph && <i aria-hidden='true' className={iconClasses} />}
                {children && <span className={buttonTextClasses}>{children}</span>}
                {!iconBeforeText && glyph && <i aria-hidden='true' className={iconClasses} />}
            </button>
            {renderButtonStateMessage()}
        </>
    );
});

Button.displayName = 'Button';

const validateStateTransitionMessage = (props, propName) => {
    if (props.allowFocusOnDisable && (props.disabled !== null || props['aria-disabled']) && !props[propName]) {
        return new Error(`
        Missing or invalid value for ${propName}.
        If this button can receive focus when disabled (i.e. allowFocusOnDisable prop is true),
        you need to provide localized string values for the enabled and disabled states.
        These strings are used to announce the state change by assistive technologies.
        Hence, these should be specified for a better, accessible experience.
        For e.g. 
        <Button
            disabled={someLogic()}
            allowFocusOnDisable
            disabledMessage="Please complete required form fields to enable form submission."
            enabledMessage="Please press the submit button to proceed.">
            Submit
        </Button>
        `);
    }
};

Button.propTypes = {
    /** Set to **true** to enable button focus through keyboard on a disabled button */
    allowFocusOnDisable: PropTypes.bool,
    /** Automatically set when disabled prop is passed into button */
    'aria-disabled': PropTypes.bool,
    /** Node(s) to render within the component */
    children: PropTypes.node,
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** Set to **true** to enable compact mode */
    compact: PropTypes.bool,
    /** Set to **true** to mark component as disabled and make it non-interactive */
    disabled: PropTypes.bool,
    /** Message for screen reader to inform user the button is disabled */
    disabledMessage: validateStateTransitionMessage,
    /** Message for screen reader to inform user the button is enabled */
    enabledMessage: validateStateTransitionMessage,
    /** The icon to include. See the icon page for the list of icons */
    glyph: PropTypes.string,
    /** Determines whether the icon should be placed before the text */
    iconBeforeText: PropTypes.bool,
    /** CSS class(es) to add to the icon element */
    iconClassName: PropTypes.string,
    /** Indicates the importance of the button: 'emphasized' or 'transparent' */
    option: PropTypes.oneOf(BUTTON_OPTIONS),
    /** Set to **true** to set state of the button to "selected" */
    selected: PropTypes.bool,
    /** CSS class(es) to add to the text element */
    textClassName: PropTypes.string,
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
