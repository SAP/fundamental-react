import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

const ButtonGroup = React.forwardRef(({ children, disableStyles, ...props }, ref) => {

    useEffect(() => {
        if (!disableStyles) {
            require('fundamental-styles/dist/button-group.css');
        }
    }, []);

    return (
        <div
            {...props}
            aria-label='Group label'
            className='fd-button-group'
            ref={ref}
            role='group'>
            {children}
        </div>
    );
});

ButtonGroup.displayName = 'ButtonGroup';

ButtonGroup.propTypes = {
    children: PropTypes.node,
    disableStyles: PropTypes.bool
};

ButtonGroup.propDescriptions = {
    children: '`Button` nodes to group together.'
};

export { ButtonGroup as __ButtonGroup };

export default ButtonGroup;
