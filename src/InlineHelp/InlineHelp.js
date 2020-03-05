import classnames from 'classnames';
import { INLINE_HELP_PLACEMENTS } from '../utils/constants';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

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

    const inlineHelpContentClasses = classnames(
        'fd-inline-help__content',
        {
            [`fd-inline-help__content--${placement}`]: !!placement
        },
        contentClassName
    );

    return (
        <span className={inlineHelpClasses} ref={ref}>
            <span
                {...props}
                className={inlineHelpContentClasses}>
                {text}
            </span>
        </span>
    );
});

InlineHelp.displayName = 'InlineHelp';

InlineHelp.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string,
    contentClassName: PropTypes.string,
    disableStyles: PropTypes.bool,
    placement: PropTypes.oneOf(INLINE_HELP_PLACEMENTS)
};

InlineHelp.defaultProps = {
    placement: 'bottom-right'
};

InlineHelp.propDescriptions = {
    contentClassName: 'Class names to be added to the `<span>` element.',
    placement: 'Location to display the inline help pop-up relative to the image.',
    text: 'Localized text to display in the inline help pop-up.'
};

export default InlineHelp;
