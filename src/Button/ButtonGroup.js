import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

const ButtonGroup = React.forwardRef(({ children, disableStyles, ...props }, ref) => {

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

ButtonGroup.displayName = 'ButtonGroup';

ButtonGroup.propTypes = {
    /** Node(s) to render within the component */
    children: PropTypes.node,
    disableStyles: PropTypes.bool
};

ButtonGroup.propDescriptions = {
    children: '`Button` nodes to group together.'
};

export default ButtonGroup;
