import PropTypes from 'prop-types';
import React from 'react';
import ReactMarkdown from 'react-markdown';

const PropertyDescription = ({ description }) => (
    <React.Fragment>
        <div>
            <ReactMarkdown source={description} />
        </div>
    </React.Fragment>
);

PropertyDescription.displayName = 'PropertyDescription';

PropertyDescription.propTypes = {
    description: PropTypes.string
};

export default PropertyDescription;
