import classnames from 'classnames';
import { POPPER_PLACEMENTS } from '../utils/constants';
import Popover from '../Popover/Popover';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';


/** **Inline Help** is used to display help text in a **Popover**, often inline with headers,
body text and form labels. */
const InlineHelp = React.forwardRef(({ text, placement, className, contentClassName, disableStyles, ...props }, ref) => {

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

    return (
        <Popover
            body={
                <div {...props}
                    className='fd-inline-help__content fd-no-border' >
                    {text}
                </div>
            }
            control={<span
                className={inlineHelpClasses}
                ref={ref} />}
            placement={placement} />
    );
});

InlineHelp.displayName = 'InlineHelp';

InlineHelp.propTypes = {
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
    'bottom' */
    placement: PropTypes.oneOf(POPPER_PLACEMENTS)
};

InlineHelp.defaultProps = {
    placement: 'bottom-start'
};

export default InlineHelp;
