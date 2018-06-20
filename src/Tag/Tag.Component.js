import React from 'react'
import { Tag } from './Tag'
import { DocsTile, DocsText, Separator, Header, Description, Import } from '../'

export const TagComponent = () => {
    const tagCode = `<Tag>Bibendum</Tag>
<Tag>Lorem</Tag>
<Tag>Dolor</Tag>
<Tag>Filter</Tag>`

    return (
        <div>

            <Header>Tag</Header>
            <Description>Tags are used to represent contextualizing information. They can be useful to show applied filters, selected values for form field or object metadata.
            </Description>
            <Import module="Tag" path="/react-fundamental/src/" />

            <Separator />

            <DocsTile>
                <Tag>Bibendum</Tag>
                <Tag>Lorem</Tag>
                <Tag>Dolor</Tag>
                <Tag>Filter</Tag>
            </DocsTile>
            <DocsText>{tagCode}</DocsText>
        </div>
    );
}