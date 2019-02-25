import PropTypes from 'prop-types';
import React from 'react';

const ButtonGroup = ({ children, ...props }) => {
    return (
        <div
            {...props}
            aria-label='Group label'
            className='fd-button-group'
            role='group'>
            {children}
        </div>
    );
};

ButtonGroup.displayName = 'ButtonGroup';

ButtonGroup.propTypes = {
    children: PropTypes.node
};

ButtonGroup.propDescriptions = {
    children: '`Button` nodes to group together.'
};

export default ButtonGroup;
