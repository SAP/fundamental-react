import PropTypes from 'prop-types';
import React from 'react';
import withStyles from '../utils/StyleProvider';

const ButtonGroup = ({ children, customStyles, disableStyles, ...props }) => {
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
    children: PropTypes.node,
    customStyles: PropTypes.object,
    disableStyles: PropTypes.bool
};

ButtonGroup.propDescriptions = {
    children: '`Button` nodes to group together.'
};

export default withStyles(ButtonGroup);
