import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

export const InlineHelp = ({ text, placement, className, ...props }) => {
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


InlineHelp.propTypes = {
    placement: PropTypes.oneOf([
        'bottom-right', 'bottom-left', 'right', 'left', 'bottom-center'
    ]).isRequired,
    text: PropTypes.string.isRequired,
    className: PropTypes.string
};
