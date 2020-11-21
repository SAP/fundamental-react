import Button from '../Button/Button';
import classnamesBind from 'classnames/bind';
import CustomPropTypes from '../utils/CustomPropTypes/CustomPropTypes';
import PropTypes from 'prop-types';
import React from 'react';
import requiredIf from 'react-required-if';
import Title from '../Title/Title';
import withStyles from '../utils/withStyles';
import styles from 'fundamental-styles/dist/action-bar.css';

const classnames = classnamesBind.bind(styles);
/**
 * The **Action Bar** is located at the top of the page and is used for page title
 * and main actions for the page.
 */

const ActionBar = React.forwardRef(({
    actions,
    actionClassName,
    actionProps,
    className,
    cssNamespace,
    backButtonLabel,
    buttonContainerClassName,
    buttonProps,
    description,
    descriptionProps,
    headingLevel,
    headingStyle,
    title,
    titleProps,
    onBackClick,
    ...props
}, ref) => {

    const actionBarClasses = classnames(
        `${cssNamespace}-action-bar`,
        className
    );

    const actionBarHeaderClasses = classnames(
        `${cssNamespace}-action-bar__header`,
        className
    );

    const actionBarBackClasses = classnames(
        `${cssNamespace}-action-bar__back`,
        buttonContainerClassName
    );

    const actionBarDescriptionClasses = classnames(
        `${cssNamespace}-action-bar__description`,
        {
            [`${cssNamespace}-action-bar__description--back`]: onBackClick
        }
    );

    const actionBarActionsClasses = classnames(
        `${cssNamespace}-action-bar__actions`,
        actionClassName
    );

    return (
        <div {...props}
            className={actionBarClasses}
            ref={ref}>
            <div {...props} className={actionBarHeaderClasses}>
                {typeof onBackClick === 'function' && (<div className={actionBarBackClasses}>
                    <Button
                        aria-label={backButtonLabel}
                        {...buttonProps}
                        compact
                        glyph='navigation-left-arrow'
                        onClick={onBackClick}
                        option='transparent' />
                </div>)}
                <div className={classnames(`${cssNamespace}-action-bar__title`)}>
                    <Title
                        {...titleProps}
                        level={headingLevel}
                        levelStyle={headingStyle}>
                        {title}
                    </Title>
                </div>
                {actions && (
                    <div {...actionProps} className={actionBarActionsClasses}>{actions}</div>
                )}
            </div>
            {description &&
                <p
                    {...descriptionProps}
                    className={actionBarDescriptionClasses}>{description}</p>
            }
        </div>
    );
});

ActionBar.displayName = 'ActionBar';

ActionBar.propTypes = {
    /** Localized text for the heading */
    title: PropTypes.string.isRequired,
    /** Classnames to spread to the action Button container */
    actionClassName: PropTypes.string,
    /** Props to spread to the action Button container */
    actionProps: PropTypes.object,
    /** Button components to add to the ActionBar */
    actions: PropTypes.node,
    /** Localized string for 'Back' button's aria-label. This is required if the button is enabled and `buttonProps` doesn't have a valid `aria-label` */
    backButtonLabel: requiredIf(PropTypes.string, props => {
        return typeof props?.onBackClick === 'function' && (!props?.buttonProps || !props.buttonProps['aria-label']?.trim());
    }),
    /** Classnames to spread to the back Button container */
    buttonContainerClassName: PropTypes.string,
    /** Additional props to be spread to the `<button>` element */
    buttonProps: PropTypes.object,
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** Localized text for the description */
    description: PropTypes.string,
    /** Additional props to be spread to the description\'s `<p>` element */
    descriptionProps: PropTypes.object,
    /** Heading level. `<h1>` is reserved for the page title */
    headingLevel: CustomPropTypes.range(2, 6),
    /** Heading style, if it should be different from the default style for the heading level. */
    headingStyle: CustomPropTypes.range(2, 6),
    /**Additional props to be spread to the title\'s heading element */
    titleProps: PropTypes.object,
    /**
     * Callback function; triggered when the back button is clicked.
     * If this is not set to a function, the back button won't be rendered.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent. See https://reactjs.org/docs/events.html.
     * @returns {void}
    */
    onBackClick: PropTypes.func
};

ActionBar.defaultProps = {
    headingLevel: 3
};

export default withStyles(ActionBar);
