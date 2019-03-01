import classnames from 'classnames';
import { INLINE_HELP_PLACEMENTS } from '../utils/constants';
import PropTypes from 'prop-types';
import React from 'react';

const InlineHelp = ({ text, placement, className, ...props }) => {
    const inlineHelpClasses = classnames(
        'fd-inline-help__content',
        {
            [`fd-inline-help__content--${placement}`]: !!placement
        },
        className
    );

    return (
        <span className='fd-inline-help'>
            <span
                {...props}
                className={inlineHelpClasses}>
                {text}
            </span>
        </span>
    );
};

InlineHelp.displayName = 'InlineHelp';

InlineHelp.propTypes = {
    placement: PropTypes.oneOf(INLINE_HELP_PLACEMENTS).isRequired,
    text: PropTypes.string.isRequired,
    className: PropTypes.string
};

InlineHelp.propDescriptions = {
    placement: 'Location to display the inline help pop-up relative to the image.',
    text: 'Localized text to display in the inline help pop-up.'
};

export default InlineHelp;
