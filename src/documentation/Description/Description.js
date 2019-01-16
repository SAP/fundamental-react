import PropTypes from 'prop-types';
import React from 'react';

export const Description = (props) => {
    const descriptionStyle = {
        marginBottom: '1.5rem',
        fontSize: '1rem',
        fontWeight: '300'
    };
    const { children } = props;

    return (
        <p className='description' style={descriptionStyle}>
            {children}
        </p>
    );
};

Description.propTypes = {
    children: PropTypes.node
};
