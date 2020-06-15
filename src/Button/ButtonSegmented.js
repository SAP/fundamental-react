import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

/** Group a series of buttons together on a single line with the segmented button.
 * Only one of the options can be active at a time, the others remain or become inactive.
 * The option can be activated by clicking on it.
 * This type of button is comparable to a radio button group. */
const ButtonSegmented = React.forwardRef(({ children, disableStyles, ...props }, ref) => {

    useEffect(() => {
        if (!disableStyles) {
            require('fundamental-styles/dist/segmented-button.css');
        }
    }, []);

    return (
        <div
            {...props}
            aria-label='Group label'
            className='fd-segmented-button'
            ref={ref}
            role='group'>
            {children}
        </div>
    );
});

ButtonSegmented.displayName = 'ButtonSegmented';

ButtonSegmented.propTypes = {
    /** Node(s) to render within the component */
    children: PropTypes.node,
    /** Internal use only */
    disableStyles: PropTypes.bool
};

export default ButtonSegmented;
