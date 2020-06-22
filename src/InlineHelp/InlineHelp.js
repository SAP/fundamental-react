import classnames from 'classnames';
import Popover from '../Popover/Popover';
import { POPPER_PLACEMENTS } from '../utils/constants';
import PropTypes from 'prop-types';
import React from 'react';
import 'fundamental-styles/dist/inline-help.css';


/** **InlineHelp** is used to display help text in a **Popover**, often inline with headers,
body text and form labels. */
const InlineHelp = React.forwardRef(({ text, placement, className, contentClassName, buttonLabel, ...props }, ref) => {

    const inlineHelpClasses = classnames(
        'fd-inline-help',
        className
    );

    const inlineHelpContentClasses = classnames(
        'fd-inline-help__content',
        'fd-no-border',
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
        <div
            {...props}
            className={inlineHelpContentClasses}>
            {text}
        </div>
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
    /** Location to display the inline help pop-up relative to the image:
    'bottom-start',
    'bottom',
    'bottom-end',
    'left-start',
    'left',
    'left-end',
    'right-start',
    'right',
    'right-end',
    'top-start',
    'top',
    'top-end' */
    placement: PropTypes.oneOf(POPPER_PLACEMENTS)
};

InlineHelp.defaultProps = {
    placement: 'bottom'
};

export default InlineHelp;
