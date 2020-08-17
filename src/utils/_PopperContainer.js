import Portal from 'react-overlays/Portal';
import PropTypes from 'prop-types';
import React from 'react';

const PopperContainer = ({ children }) => {
    return (
        <Portal>
            {children}
        </Portal>
    );
};

PopperContainer.displayName = 'PopperContainer';

PopperContainer.propTypes = {
    children: PropTypes.node
};

export default PopperContainer;
