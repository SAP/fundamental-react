import Helmet from 'react-helmet-async';
import PropTypes from 'prop-types';
import React from 'react';

const SetMeta = ({ title, description }) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta content={description} name='description' />
        </Helmet>
    );
};

SetMeta.propTypes = {
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default SetMeta;
