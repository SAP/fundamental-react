import React from 'react'
import { Icon } from '../'
import { DocsTile, DocsText, Separator, Header, Description, Import, Properties } from '../'

export const IconComponent = () => {
    const iconsCode = `<Icon glyph="cart" size="s" />
<Icon glyph="cart" />
<Icon glyph="cart" size="m" />
<Icon glyph="cart" size="l" />
<Icon glyph="cart" size="xl" />`
    return (
        <div>
            <Header>Icon</Header>
            <Description>Icons are used throughout the UI to save space, allow for visual clarity and focus, and for fun. Icons can be used adaptively if desired, but at this point they are used more as visual elements within other components.</Description>
            <Import module="Icon" path="/react-fundamental/src/" />
            
            <Separator />

            <Properties type="Inputs" properties=
            {[
                {name: 'glyph', description: 'String (required) - Icon name.'}, 
                {name: 'size', description: 'String - Size of the icon. Options include \'xs\', \'s\', \'compact\', and \'l\'. If no size is provided, default (normal) will be used.'}
                
            ]}/>
            
            <Separator />
            
            <DocsTile>
                <Icon glyph="cart" size="s" />
                <Icon glyph="cart" />
                <Icon glyph="cart" size="m" />
                <Icon glyph="cart" size="l" />
                <Icon glyph="cart" size="xl" />
            </DocsTile>
            <DocsText>{iconsCode}</DocsText>

        </div>
    );
}