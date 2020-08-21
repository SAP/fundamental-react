import React, { useState } from 'react';
import Button from '../../../src/Button/Button';

const CopyButton = ({ copyText }) => {
    const [copyState, setCopyState] = useState('Copy');
    const inputId = `offscreen-text-for-${copyText}`
    const copyImportStatement = () => {
        const inputField = document?.getElementById(inputId);
        if(inputField) {
            inputField?.select();
            inputField?.setSelectionRange(0, 99999);
            document?.execCommand("copy");
            setCopyState('Copied')
            setTimeout(() => {
                setCopyState('Copy')
            }, 5000);
        }
    }
    return (
        <div className="docs-import-statement">
            <Button
                className='copy-import-statement-btn'
                compact
                glyph='copy'
                onClick={copyImportStatement}>
                    {copyState}
            </Button>
            <input 
                aria-hidden
                className='docs-offscreen'
                id={inputId}
                readOnly
                tabIndex='-1'
                type="text"
                value={copyText}
            />
        </div>
    );
};

CopyButton.displayName = 'CopyButton';

export default CopyButton;
