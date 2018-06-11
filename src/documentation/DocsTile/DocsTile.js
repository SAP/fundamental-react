import React from 'react';

export const DocsTile = (props) => {
    const docsTileStyle = {
        borderRadius: "4px 4px 0 0",
        border: "1px solid #ccc",
        borderBottom: "none",
        padding: "10px 0"
    }
    const { children } = props;

    return (
        <div className="fd-tile fd-has-background-color-background-1" style={docsTileStyle}>
            <div className="fd-tile__content">
                {children}
            </div>
        </div>
    );
}

export const DocsText = (props) => {
    const docsTextStyle = {
        padding: "15px",
        fontSize: "13px",
        border: "1px solid #ccc",
        borderRadius: "0 0 4px 4px",
        backgroundColor: "#fff !important",
        margin: "0"
    }
    const { children } = props;

    return (
        <pre style={docsTextStyle}>{children}</pre>
    );
}