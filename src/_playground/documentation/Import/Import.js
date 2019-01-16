import PropTypes from 'prop-types';
import React from 'react';

export const Import = (props) => {

    const { module, path } = props;

    return (
        <code>import &#123; { module } &#125; from '{ path }';</code>
    );
};

Import.propTypes = {
    module: PropTypes.string,
    path: PropTypes.string
};
