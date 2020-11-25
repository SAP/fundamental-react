import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { googlecode } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import CopyButton from './CopyButton';

const Import = ({ componentName }) => {
    const importStatement = `import { ${componentName} } from 'fundamental-react/lib/${componentName}';`
    return (
        <div className="docs-import-statement">
            <SyntaxHighlighter
                customStyle={{ padding: 10, whiteSpace: 'pre-wrap', fontSize: 14 }}
                language='javascript'
                showLineNumbers
                showInlineLineNumbers
                style={googlecode}
                wrapLongLines>
                {importStatement}
            </SyntaxHighlighter>
            <CopyButton copyText={importStatement} />
        </div>
    );
};

Import.displayName = 'Import';

export default Import;
