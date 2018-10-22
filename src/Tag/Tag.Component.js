import React from 'react'
import { Tag } from './Tag'
import { DocsTile, DocsText, Separator, Header, Description, Import } from '../'

export const TagComponent = () => {
    const tagCode = `<Tag>Bibendum</Tag>
<Tag>Lorem</Tag>
<Tag>Dolor</Tag>
<Tag>Filter</Tag>`;

    const closeAction = (name, event) => alert(`close ${name}! You can work with the event itself using the callback.`);
    const tagsNames = ['Bibendum', 'Lorem', 'Dolor', 'Filter'];

    return (
        <div>

            <Header>Tag</Header>
            <Description>Tags are used to represent contextualizing information. They can be useful to show applied filters, selected values for form field or object metadata.
            </Description>
            <Import module="Tag" path="/fundamental-react/src/" />

            <Separator />

            <DocsTile>
                {
                    tagsNames.map((name) => {
                        return <Tag clickHandler={(e) => closeAction(name, e)}>{name}</Tag>
                    })
                }
            </DocsTile>
            <DocsText>{tagCode}</DocsText>
        </div>
    );
}