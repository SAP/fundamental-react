import PropTypes from 'prop-types';
import React from 'react';

export const InlineHelp = ({ text, placement, className, ...props }) => {
    return (
        <span className='fd-inline-help'>
            <span
                className={`fd-inline-help__content fd-inline-help__content--${placement}${className ? ' ' + className : ''}`} {...props}>
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
