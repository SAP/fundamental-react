import React from 'react';
import PropTypes from 'prop-types';

// ------------------------------------------- Menu ------------------------------------------
export const Navbar = props => {
    const { children } = props;
    return (
        <nav class="fd-global-nav">
            {children}
        </nav>
    );
};

Navbar.propTypes = {
    
};