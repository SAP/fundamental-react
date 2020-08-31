import Markdown from 'markdown-to-jsx';
import React from 'react';

const Description = (props) => {
    return (
        <div className='docs-component-description'>
            <Markdown options={{ forceBlock: true}}>{props.desc}</Markdown>
        </div>
    )
}

Description.displayName = 'Description';

export default Description;
