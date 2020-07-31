import Button from '../Button/Button';
import classnames from 'classnames';
import CustomPropTypes from '../utils/CustomPropTypes/CustomPropTypes';
import PropTypes from 'prop-types';
import React from 'react';
import requiredIf from 'react-required-if';
import 'fundamental-styles/dist/action-bar.css';

/**
 * The **Action Bar** is located at the top of the page and is used for page title
 * and main actions for the page.
 */

const ActionBar = React.forwardRef(({
    actions,
    actionClassName,
    actionProps,
    className,
    backButtonLabel,
    buttonContainerClassName,
    buttonProps,
    description,
    descriptionProps,
    headingLevel,
    title,
    titleProps,
    onBackClick,
    ...props
}, ref) => {

    const actionBarClasses = classnames(
        'fd-action-bar',
        className
    );

    const actionBarHeaderClasses = classnames(
        'fd-action-bar__header',
        className
    );

    const actionBarBackClasses = classnames(
        'fd-action-bar__back',
        buttonContainerClassName
    );

    const actionBarDescriptionClasses = classnames(
        'fd-action-bar__description',
        {
            'fd-action-bar__description--back': onBackClick
        }
    );

    const actionBarActionsClasses = classnames(
        'fd-action-bar__actions',
        actionClassName
    );

    const HeadingTag = `h${headingLevel}`;

    if (!buttonProps) {
        buttonProps = {};
    }

    if (!buttonProps['aria-label']) {
        buttonProps['aria-label'] = backButtonLabel;
    }

    return (
        <div {...props}
            className={actionBarClasses}
            ref={ref}>
            <div {...props} className={actionBarHeaderClasses}>
                {onBackClick && (<div className={actionBarBackClasses}>
                    <Button
                        {...buttonProps}
                        compact
                        glyph='navigation-left-arrow'
                        onClick={onBackClick}
                        option='transparent' />
                </div>)}
                <HeadingTag {...titleProps} className='fd-action-bar__title'>{title}</HeadingTag>
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
    /**Additional props to be spread to the title\'s heading element */
    titleProps: PropTypes.object,
    /** Callback to pass to the back Button */
    onBackClick: PropTypes.func
};

ActionBar.defaultProps = {
    headingLevel: 3
};

export default ActionBar;
