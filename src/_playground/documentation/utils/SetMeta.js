import Helmet from 'react-helmet-async';
import PropTypes from 'prop-types';
import React from 'react';

const SetMeta = ({ title, description }) => {
    return (
        <Helmet
            defaultTitle='Fundamental React'
            titleTemplate='Fundamental React - %s'>
            <title>{title}</title>
            <meta content={description} name='description' />
        </Helmet>
    );
};

SetMeta.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string
};

export default SetMeta;
