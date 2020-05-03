import './custom.css';
import { DocsContext } from '@storybook/addon-docs/blocks';
import { googlecode } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import SyntaxHighlighter from 'react-syntax-highlighter';
import React, { useContext } from 'react';

const Import = () => {
    const context = useContext(DocsContext);
    console.log(context)
    let groups = context.kind.split('/');
    console.log(groups)
    return (
    <SyntaxHighlighter
        customStyle={{ padding: 10, whiteSpace: 'pre-wrap', fontSize: 14 }}
        language='javascript'
        style={googlecode}>
        {`import { ${groups[1]} } from 'fundamental-react/${groups[1]}';`}
    </SyntaxHighlighter>)
}

Import.displayName = 'Import';

export default Import;
