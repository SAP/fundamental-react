import PropTypes from 'prop-types';
import React from 'react';

export const Header = (props) => {
    const { children } = props;

    return (
        <h1 className='frDocs-Content__header'>
            {children}
        </h1>
    );
};

Header.propTypes = {
    children: PropTypes.node
};
