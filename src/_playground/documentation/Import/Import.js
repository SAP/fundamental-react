import getSourceModule from '../utils/getSourceModule';
import { googlecode } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import packageJson from '../../../../package.json';
import PropTypes from 'prop-types';
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';

const Import = ({ sourceModulePath }) => {
    if (!sourceModulePath) {
        return null;
    }

    // remove everything up until the last forward slash and the file extension.
    const importPath = sourceModulePath.replace(/^(.*[\\\/])/, '').replace('.js', '');

    return (
        <SyntaxHighlighter
            customStyle={{ padding: 0, whiteSpace: 'pre-wrap' }}
            language='javascript'
            style={googlecode}>
            {`import { ${Object.keys(getSourceModule(sourceModulePath)).filter(comp => !comp.match(/^\_\_/)).sort().join(', ')} } from '${packageJson.name}/${importPath}';`}
        </SyntaxHighlighter>
    );
};

Import.propTypes = {
    sourceModulePath: PropTypes.string
};

export default Import;
