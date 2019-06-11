import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';
import React from 'react';

const SetMeta = ({ title }) => {
    return (
        <Helmet
            defaultTitle='Fundamental React'
            titleTemplate='Fundamental React - %s'>
            <title>{title}</title> />
        </Helmet>
    );
};

SetMeta.propTypes = {
    title: PropTypes.string.isRequired
};

export default SetMeta;
