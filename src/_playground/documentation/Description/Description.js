import PropTypes from 'prop-types';
import React from 'react';
import ReactMarkdown from 'react-markdown';

const Description = ({ children }) => (
    <ReactMarkdown
        className='frDocs-Content__description frDocs-markdown'
        source={children} />
);

Description.displayName = 'Description';

Description.propTypes = {
    children: PropTypes.string
};

export default Description;
