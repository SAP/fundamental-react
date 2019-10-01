import PropTypes from 'prop-types';
import React from 'react';
import withStyles from '../utils/WithStyles/WithStyles';

const ButtonGroup = React.forwardRef(({ children, disableStyles, ...props }, ref) => {
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
    customStyles: PropTypes.object,
    disableStyles: PropTypes.bool
};

ButtonGroup.propDescriptions = {
    children: '`Button` nodes to group together.'
};

export { ButtonGroup as __ButtonGroup };

export default withStyles(ButtonGroup, { cssFile: 'button-group' });
