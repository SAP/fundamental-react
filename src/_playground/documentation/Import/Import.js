import arraySort from 'array-sort';
import packageJson from '../../../../package.json';
import PropTypes from 'prop-types';
import React from 'react';

export const Import = ({ sourceModule }) => {

    return (
        <code>
            import &#123; { arraySort(Object.keys(sourceModule)).join(', ') } &#125; from '{packageJson.name}';
        </code>
    );
};

Import.propTypes = {
    sourceModule: PropTypes.object.isRequired
};
