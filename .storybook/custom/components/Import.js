import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import React from 'react';
import ReactSyntaxHighlighter from 'react-syntax-highlighter/dist/cjs/prism-light';
import { prism } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import CopyButton from './CopyButton';

ReactSyntaxHighlighter.registerLanguage('javascript', js);

const Import = ({ componentName }) => {
    const importStatement = `import { ${componentName} } from 'fundamental-react/lib/${componentName}';`
    return (
        <div className="docs-import-statement">
            <ReactSyntaxHighlighter
                customStyle={{ padding: 10, margin: 0, whiteSpace: 'pre-wrap', fontSize: 14, background: 'white' }}
                language='javascript'
                showLineNumbers={false}
                showInlineLineNumbers={false}
                style={prism}
                wrapLongLines>
                {importStatement}
            </ReactSyntaxHighlighter>
            <CopyButton copyText={importStatement} />
        </div>
    );
};

Import.displayName = 'Import';

export default Import;
