import PropTypes from 'prop-types';
import React from 'react';

export const Header = (props) => {
    const headerStyle = {
        marginTop: '2rem',
        fontSize: '2.2rem'
    };
    const { children } = props;

    return (
        <h1 className='header' style={headerStyle}>
            {children}
        </h1>
    );
};

Header.propTypes = {
    children: PropTypes.node
};
