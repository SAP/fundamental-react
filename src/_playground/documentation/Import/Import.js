import getSourceModules from '../utils/getSourceModules';
import { googlecode } from 'react-syntax-highlighter/styles/hljs';
import packageJson from '../../../../package.json';
import PropTypes from 'prop-types';
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';

export const Import = ({ sourceModule }) => {
    // remove everything up until the last forward slash and the file extension.
    const importPath = sourceModule.replace(/^(.*[\\\/])/, '').replace('.js', '');

    return (
        <SyntaxHighlighter
            customStyle={{ padding: 0 }}
            language='javascript'
            style={googlecode}>
            {`import { ${Object.keys(getSourceModules(sourceModule)).sort().join(', ')} } from '${packageJson.name}/lib/${importPath}';`}
        </SyntaxHighlighter>
    );
};

Import.propTypes = {
    sourceModule: PropTypes.string.isRequired
};
