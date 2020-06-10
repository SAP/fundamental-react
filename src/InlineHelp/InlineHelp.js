import classnames from 'classnames';
import { INLINE_HELP_PLACEMENTS } from '../utils/constants';
import Popover from '../Popover/Popover';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';


/** **InlineHelp** is used to display help text in a **Popover**, often inline with headers,
body text and form labels. */
const InlineHelp = React.forwardRef(({ text, placement, className, contentClassName, disableStyles, buttonLabel, ...props }, ref) => {

    useEffect(() => {
        if (!disableStyles) {
            require('fundamental-styles/dist/icon.css');
            require('fundamental-styles/dist/inline-help.css');
        }
    }, []);

    const inlineHelpClasses = classnames(
        'fd-inline-help',
        className
    );

    const inlineHelpContentClasses = classnames(
        'fd-inline-help__content',
        contentClassName
    );

    const control = (
        <span
            aria-label={buttonLabel}
            className={inlineHelpClasses}
            ref={ref}
            role='button'
            tabIndex='0' />
    );

    const body = (
        <span
            {...props}
            className={inlineHelpContentClasses}>
            {text}
        </span>
    );

    return (
        <Popover
            body={body}
            control={control}
            placement={placement} />
    );
});

InlineHelp.displayName = 'InlineHelp';

InlineHelp.propTypes = {
    /** Localized text for aria-label on button for screen readers */
    buttonLabel: PropTypes.string.isRequired,
    /** Localized text to display in the inline help pop-up */
    text: PropTypes.string.isRequired,
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** Class names to be added to the `<span>` element */
    contentClassName: PropTypes.string,
    /** Internal use only */
    disableStyles: PropTypes.bool,
    /** Location to display the inline help pop-up relative to the image: 'bottom-right',
    'bottom-left',
    'right',
    'left',
    'bottom-center' */
    placement: PropTypes.oneOf(INLINE_HELP_PLACEMENTS)
};

InlineHelp.defaultProps = {
    placement: 'bottom-right'
};

export default InlineHelp;
