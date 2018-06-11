import React from 'react'
import { Identifier } from '../'
import { DocsTile, DocsText, Separator, Header, Description, Import, Properties } from '../'

export const IdentifierComponent = () => {
    const iconsCode = `<Identifier size="s" glyph="washing-machine" />
<Identifier size="m" glyph="washing-machine" />
<Identifier size="l" glyph="washing-machine" />`
    const initialsCode = `<Identifier size="s" label="Wendy Wallace">WW</Identifier>
<Identifier size="m" label="Wendy Wallace">WW</Identifier>
<Identifier size="l" label="Wendy Wallace">WW</Identifier>`
    const circleCode = `<Identifier size="s" glyph="washing-machine" modifier="circle" />
<Identifier size="m" glyph="washing-machine" modifier="circle" />
<Identifier size="l" glyph="washing-machine" modifier="circle" />`
    const transparentCode = `<Identifier size="m" label="Wendy Wallace" modifier="transparent">WW</Identifier>
<Identifier size="l" glyph="washing-machine" modifier="transparent"></Identifier>`
    const accentColorsCode = `<Identifier size="m" glyph="money-bills" color="1"></Identifier>
<Identifier size="m" glyph="money-bills" color="2"></Identifier>
<Identifier size="m" glyph="money-bills" color="3"></Identifier>
<Identifier size="m" glyph="money-bills" color="4"></Identifier>
<Identifier size="m" glyph="money-bills" color="5"></Identifier>
<Identifier size="m" glyph="money-bills" color="6"></Identifier>
<Identifier size="m" glyph="money-bills" color="7"></Identifier>
<Identifier size="m" glyph="money-bills" color="8"></Identifier>
<Identifier size="m" glyph="money-bills" color="9"></Identifier>`

    return (
        <div>
            <Header>Identifier</Header>
            <Description>A visual presentation option around using an icon or user initials .</Description>
            <Import module="Identifier" path="/react-fundamental/src/" />
           
            <Separator />

            <Properties type="Inputs" properties=
            {[
                {name: 'size', description: 'String - Three sizes are available: s (small) - 24px, m (medium) - 36px, and l  (large) - 48px.'}, 
                {name: 'glyph', description: 'String - The name of the icon to include. See the icon page for the list of icons.'},
                {name: 'label', description: 'String - Label text'},
                {name: 'modifier', description: 'String - Can be \'circle\' or \'transparent\'.'},
                {name: 'color', description: 'Number - Applies a background color. Options include numbers from 1 to 9'}
                
            ]}/>
            
            <Separator />

            <h2>Icon</h2>
            <DocsTile>
                <Identifier size="s" glyph="washing-machine" />
                <Identifier size="m" glyph="washing-machine" />
                <Identifier size="l" glyph="washing-machine" />
            </DocsTile>
            <DocsText>{iconsCode}</DocsText>

            <Separator />

            <h2>Initials</h2>
            <DocsTile>
                <Identifier size="s" label="Wendy Wallace">WW</Identifier>
                <Identifier size="m" label="Wendy Wallace">WW</Identifier>
                <Identifier size="l" label="Wendy Wallace">WW</Identifier>
            </DocsTile>
            <DocsText>{initialsCode}</DocsText>

            <Separator />

            <h2>Circle</h2>
            <DocsTile>
                <Identifier size="s" glyph="washing-machine" modifier="circle" />
                <Identifier size="m" glyph="washing-machine" modifier="circle" />
                <Identifier size="l" glyph="washing-machine" modifier="circle" />
            </DocsTile>
            <DocsText>{circleCode}</DocsText>

            <Separator />

            <h2>Transparent</h2>
            <DocsTile>
                <Identifier size="m" label="Wendy Wallace" modifier="transparent">WW</Identifier>
                <Identifier size="l" glyph="washing-machine" modifier="transparent"></Identifier>
            </DocsTile>
            <DocsText>{transparentCode}</DocsText>

            <Separator />

            <h2>Accent Colors</h2>
            <DocsTile>
                <Identifier size="m" glyph="money-bills" color={1}></Identifier>
                <Identifier size="m" glyph="money-bills" color={2}></Identifier>
                <Identifier size="m" glyph="money-bills" color={3}></Identifier>
                <Identifier size="m" glyph="money-bills" color={4}></Identifier>
                <Identifier size="m" glyph="money-bills" color={5}></Identifier>
                <Identifier size="m" glyph="money-bills" color={6}></Identifier>
                <Identifier size="m" glyph="money-bills" color={7}></Identifier>
                <Identifier size="m" glyph="money-bills" color={8}></Identifier>
                <Identifier size="m" glyph="money-bills" color={9}></Identifier>
            </DocsTile>
            <DocsText>{accentColorsCode}</DocsText>

            <Separator />
        </div>
    );
}