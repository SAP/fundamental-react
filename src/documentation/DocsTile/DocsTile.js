import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { googlecode } from 'react-syntax-highlighter/styles/hljs';

export const DocsTile = props => {
    const docsTileStyle = {
        borderRadius: '4px 4px 0 0',
        border: '1px solid #ccc',
        borderBottom: 'none',
        padding: '10px 0',
        backgroundColor: '#f3f4f5'
    };
    const centerStyle = {
        textAlign: 'center'
    };

    const { centered, children } = props;

    return (
        <div className="fd-tile" style={docsTileStyle}>
            {centered ? (
                <div className="fd-tile__content">
                    <div style={centerStyle}>{children}</div>
                </div>
            ) : (
                <div className="fd-tile__content">{children}</div>
            )}
        </div>
    );
};

export const DocsText = props => {
    const docsTextStyle = {
        padding: '15px',
        fontSize: '13px',
        border: '1px solid #ccc',
        borderRadius: '0 0 4px 4px',
        backgroundColor: '#fff !important',
        margin: '0'
    };
    const { children } = props;

    return (
        <pre style={docsTextStyle}>
            <SyntaxHighlighter language="html" style={googlecode}>
                {children}
            </SyntaxHighlighter>
        </pre>
    );
};
