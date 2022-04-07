import classnamesBind from 'classnames/bind';
import Icon from '../Icon/Icon';
import PropTypes from 'prop-types';
import React from 'react';
import useUniqueId from '../utils/useUniqueId';
import withStyles from '../utils/withStyles';
import { BUTTON_OPTIONS, BUTTON_TYPES } from '../utils/constants';
import styles from 'fundamental-styles/dist/button.css';

const classnames = classnamesBind.bind(styles);

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
    iconProps,
    selected,
    disabled,
    typeAttr,
    onClick,
    children,
    className,
    cssNamespace,
    textClassName,
    badge,
    badgeClassName,
    ...props
}, ref) => {

    const buttonClasses = classnames(
        `${cssNamespace}-button`,
        {
            [`${cssNamespace}-button--${option}`]: !!option,
            [`${cssNamespace}-button--${type}`]: !!type,
            [`${cssNamespace}-button--compact`]: compact,
            'is-selected': selected,
            'is-disabled': disabled
        },
        className
    );

    const buttonTextClasses = classnames(
        `${cssNamespace}-button__text`,
        textClassName
    );

    const badgeClasses = classnames(
        `${cssNamespace}-button__badge`,
        badgeClassName
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
                    className={classnames(`${cssNamespace}-button__instructions`)}
                    id={ariaLiveId}>
                    {liveMessageForScreenReaders}
                </p>)
            ;
        }
        return content;
    };

    const renderIcon = () => {
        const content = glyph ? (
            <Icon
                {...iconProps}
                ariaHidden
                glyph={glyph} />
        ) : null;

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
                type={typeAttr}>
                {iconBeforeText && renderIcon()}
                {children && <span className={buttonTextClasses}>{children}</span>}
                {!iconBeforeText && renderIcon()}
                {badge && <span className={badgeClasses}>{badge}</span>}
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

const badgePropValidation = (props, propName) => {
    if (props[propName]?.length < 1 || props[propName]?.length > 4) {
        return new Error(`${propName} must be between 1-4 characters.`);
    }
};

Button.propTypes = {
    /** Set to **true** to enable button focus through keyboard on a disabled button */
    allowFocusOnDisable: PropTypes.bool,
    /** Automatically set when disabled prop is passed into button */
    'aria-disabled': PropTypes.bool,
    /** Content to display in a badge. Must be between 1-4 characters */
    badge: badgePropValidation,
    /** CSS class(es) to add to the badge element */
    badgeClassName: PropTypes.string,
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
    /** Additional props to be spread to the Icon component */
    iconProps: PropTypes.object,
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
    /**
     * Callback function; triggered when the button is clicked.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent. See https://reactjs.org/docs/events.html.
     * @returns {void}
    */
    onClick: PropTypes.func
};

Button.defaultProps = {
    typeAttr: 'button'
};

export default withStyles(Button);
