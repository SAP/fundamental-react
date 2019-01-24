import arraySort from 'array-sort';
import { googlecode } from 'react-syntax-highlighter/styles/hljs';
import packageJson from '../../../../package.json';
import PropTypes from 'prop-types';
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';

export const Import = ({ sourceModule }) => {

    return (
        <SyntaxHighlighter
            customStyle={{padding: 0}}
            language='javascript'
            style={googlecode}>
            {`import { ${arraySort(Object.keys(sourceModule)).join(', ')} } from '${packageJson.name}';`}
        </SyntaxHighlighter>
    );
};

Import.propTypes = {
    sourceModule: PropTypes.object.isRequired
};
