import PropTypes from 'prop-types';
import React from 'react';
import ReactMarkdown from 'react-markdown/with-html';

const PropertyDescription = ({ description }) => (
    <ReactMarkdown escapeHtml={false} source={description} />
);

PropertyDescription.displayName = 'PropertyDescription';

PropertyDescription.propTypes = {
    description: PropTypes.string
};

export default PropertyDescription;
