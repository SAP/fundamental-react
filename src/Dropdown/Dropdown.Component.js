import React from 'react'
import { Dropdown, DropdownItem, DropdownGroup } from '../'
import { DocsTile, DocsText, Separator, Header, Description, Import, Properties } from '../'

export const DropdownComponent = () => {
    const defaultDropdownCode = `<Dropdown buttonText="Select" size="m">
    <DropdownItem link="#" text="Option 1"></DropdownItem>
    <DropdownItem link="#" text="Option 2"></DropdownItem>
    <DropdownItem link="#" text="Option 3"></DropdownItem>
    <DropdownItem link="#" text="Option 4"></DropdownItem>
</Dropdown>`

    const iconDropdownCode = `<Dropdown buttonText="Select" buttonIcon="filter" size="m">
    <DropdownItem link="#" text="Option 1"></DropdownItem>
    <DropdownItem link="#" text="Option 2"></DropdownItem>
    <DropdownItem link="#" text="Option 3"></DropdownItem>
    <DropdownItem link="#" text="Option 4"></DropdownItem>
</Dropdown>`

    const disabledDropdownCode = `<Dropdown buttonText="Select" buttonIcon="filter" size="m" state="disabled">
    <DropdownItem link="#" text="Option 1"></DropdownItem>
    <DropdownItem link="#" text="Option 2"></DropdownItem>
    <DropdownItem link="#" text="Option 3"></DropdownItem>
    <DropdownItem link="#" text="Option 4"></DropdownItem>
</Dropdown>`

    const sizesDropdownCode = `<Dropdown buttonText="Select" size="xs">
    <DropdownItem link="#" text="Option 1"></DropdownItem>
    <DropdownItem link="#" text="Option 2"></DropdownItem>
    <DropdownItem link="#" text="Option 3"></DropdownItem>
    <DropdownItem link="#" text="Option 4"></DropdownItem>
</Dropdown>
<Dropdown buttonText="Select" size="s">
    <DropdownItem link="#" text="Option 1"></DropdownItem>
    <DropdownItem link="#" text="Option 2"></DropdownItem>
    <DropdownItem link="#" text="Option 3"></DropdownItem>
    <DropdownItem link="#" text="Option 4"></DropdownItem>
</Dropdown>
<Dropdown buttonText="Select" size="compact">
    <DropdownItem link="#" text="Option 1"></DropdownItem>
    <DropdownItem link="#" text="Option 2"></DropdownItem>
    <DropdownItem link="#" text="Option 3"></DropdownItem>
    <DropdownItem link="#" text="Option 4"></DropdownItem>
</Dropdown>
<Dropdown buttonText="Select">
    <DropdownItem link="#" text="Option 1"></DropdownItem>
    <DropdownItem link="#" text="Option 2"></DropdownItem>
    <DropdownItem link="#" text="Option 3"></DropdownItem>
    <DropdownItem link="#" text="Option 4"></DropdownItem>
</Dropdown>
<Dropdown buttonText="Select" size="l">
    <DropdownItem link="#" text="Option 1"></DropdownItem>
    <DropdownItem link="#" text="Option 2"></DropdownItem>
    <DropdownItem link="#" text="Option 3"></DropdownItem>
    <DropdownItem link="#" text="Option 4"></DropdownItem>
</Dropdown>`

    const contextualDropdownCode = `<Dropdown buttonText="More" size="m" isContextual={true}>
    <DropdownItem link="#" text="Option 1"></DropdownItem>
    <DropdownItem link="#" text="Option 2"></DropdownItem>
    <DropdownItem link="#" text="Option 3"></DropdownItem>
    <DropdownGroup headerTitle="Group Header">
        <DropdownItem link="#" text="Option 4"></DropdownItem>
        <DropdownItem link="#" text="Option 5"></DropdownItem>
        <DropdownItem link="#" text="Option 6"></DropdownItem>
    </DropdownGroup>
</Dropdown>
<Dropdown size="m" isContextual={true}>
    <DropdownItem link="#" text="Option 1"></DropdownItem>
    <DropdownItem link="#" text="Option 2"></DropdownItem>
    <DropdownItem link="#" text="Option 3"></DropdownItem>
    <DropdownGroup headerTitle="Group Header">
        <DropdownItem link="#" text="Option 4"></DropdownItem>
        <DropdownItem link="#" text="Option 5"></DropdownItem>
        <DropdownItem link="#" text="Option 6"></DropdownItem>
    </DropdownGroup>
</Dropdown>
<Dropdown buttonText="More" size="m" isContextual={true} state="disabled">
    <DropdownItem link="#" text="Option 1"></DropdownItem>
    <DropdownItem link="#" text="Option 2"></DropdownItem>
    <DropdownItem link="#" text="Option 3"></DropdownItem>
</Dropdown>
<Dropdown size="m" isContextual={true} state="disabled">
    <DropdownItem link="#" text="Option 1"></DropdownItem>
    <DropdownItem link="#" text="Option 2"></DropdownItem>
    <DropdownItem link="#" text="Option 3"></DropdownItem>
</Dropdown>`

    return (
        <div>
            <Header>Dropdown</Header>
            <Description>The dropdown component let the user select one of different options. It is more flexible than the normal Select.</Description>
            <Import module="Dropdown, DropdownItem, DropdownGroup" path="/react-fundamental/src/" />
           
            <Separator />

            <Properties type="Inputs" properties=
            {[
                {name: 'buttonText', description: 'String - The text of the dropdown button.'}, 
                {name: 'size', description: 'String - Size of the dropdown. Options include \'xs\', \'s\', \'compact\', and \'l\'. If no size is provided, default (normal) will be used.'}, 
                {name: 'buttonIcon', description: 'String - The dropdown icon element.'}, 
                {name: 'state', description: 'String - Options include \'normal\', \'selected\', and \'disabled\'. Leave empty for normal.'}, 
                {name: 'isContextual', description: 'Bool - If set to \'true\' renders a contextual menu.'}, 
                {name: 'link', description: 'String (required) - Url'}, 
                {name: 'text', description: 'String (required) - Dropdown item text'}

            ]}/>
            
            <Separator />

            <h2>Default Dropdown</h2>
            <Description>The dropdown is designed to look like the rest of input components. The options can be divided in groups, which are visually separated and can have a small Group header text.</Description>
            <DocsTile>
                <Dropdown buttonText="Select" size="m">
                    <DropdownItem link="#" text="Option 1"></DropdownItem>
                    <DropdownItem link="#" text="Option 2"></DropdownItem>
                    <DropdownItem link="#" text="Option 3"></DropdownItem>
                    <DropdownItem link="#" text="Option 4"></DropdownItem>
                </Dropdown>
            </DocsTile>
            <DocsText>{defaultDropdownCode}</DocsText>

            <Separator />

            <h2>Dropdown with Icon</h2>
            <Description>It can also include complementary information like an icon.</Description>
            <DocsTile>
                <Dropdown buttonText="Select" buttonIcon="filter" size="m">
                    <DropdownItem link="#" text="Option 1"></DropdownItem>
                    <DropdownItem link="#" text="Option 2"></DropdownItem>
                    <DropdownItem link="#" text="Option 3"></DropdownItem>
                    <DropdownItem link="#" text="Option 4"></DropdownItem>
                </Dropdown>
            </DocsTile>
            <DocsText>{iconDropdownCode}</DocsText>

            <Separator />

            <h2>Disabled State</h2>
            <Description>Disabled state can be rendered with <code>state="disabled"</code> class.</Description>
            <DocsTile>
                <Dropdown buttonText="Select" buttonIcon="filter" size="m" state="disabled">
                    <DropdownItem link="#" text="Option 1"></DropdownItem>
                    <DropdownItem link="#" text="Option 2"></DropdownItem>
                    <DropdownItem link="#" text="Option 3"></DropdownItem>
                    <DropdownItem link="#" text="Option 4"></DropdownItem>
                </Dropdown>
            </DocsTile>
            <DocsText>{disabledDropdownCode}</DocsText>

            <Separator />

            <h2>Sizes</h2>
            <DocsTile>
                <Dropdown buttonText="Select" size="xs">
                    <DropdownItem link="#" text="Option 1"></DropdownItem>
                    <DropdownItem link="#" text="Option 2"></DropdownItem>
                    <DropdownItem link="#" text="Option 3"></DropdownItem>
                    <DropdownItem link="#" text="Option 4"></DropdownItem>
                </Dropdown>
                <Dropdown buttonText="Select" size="s">
                    <DropdownItem link="#" text="Option 1"></DropdownItem>
                    <DropdownItem link="#" text="Option 2"></DropdownItem>
                    <DropdownItem link="#" text="Option 3"></DropdownItem>
                    <DropdownItem link="#" text="Option 4"></DropdownItem>
                </Dropdown>
                <Dropdown buttonText="Select" size="compact">
                    <DropdownItem link="#" text="Option 1"></DropdownItem>
                    <DropdownItem link="#" text="Option 2"></DropdownItem>
                    <DropdownItem link="#" text="Option 3"></DropdownItem>
                    <DropdownItem link="#" text="Option 4"></DropdownItem>
                </Dropdown>
                <Dropdown buttonText="Select">
                    <DropdownItem link="#" text="Option 1"></DropdownItem>
                    <DropdownItem link="#" text="Option 2"></DropdownItem>
                    <DropdownItem link="#" text="Option 3"></DropdownItem>
                    <DropdownItem link="#" text="Option 4"></DropdownItem>
                </Dropdown>
                <Dropdown buttonText="Select" size="l">
                    <DropdownItem link="#" text="Option 1"></DropdownItem>
                    <DropdownItem link="#" text="Option 2"></DropdownItem>
                    <DropdownItem link="#" text="Option 3"></DropdownItem>
                    <DropdownItem link="#" text="Option 4"></DropdownItem>
                </Dropdown>
            </DocsTile>
            <DocsText>{sizesDropdownCode}</DocsText>

            <Separator />

            <h2>Contextual Menu</h2>
            <Description>A More Options icon or the word "More" is used to indicate when there are more options than there is room to display them. On click or tap, the user access a contextual menu.</Description>
            <DocsTile>
                <Dropdown buttonText="More" size="m" isContextual={true}>
                    <DropdownItem link="#" text="Option 1"></DropdownItem>
                    <DropdownItem link="#" text="Option 2"></DropdownItem>
                    <DropdownItem link="#" text="Option 3"></DropdownItem>
                    <DropdownGroup headerTitle="Group Header">
                        <DropdownItem link="#" text="Option 4"></DropdownItem>
                        <DropdownItem link="#" text="Option 5"></DropdownItem>
                        <DropdownItem link="#" text="Option 6"></DropdownItem>
                    </DropdownGroup>
                </Dropdown>
                <Dropdown size="m" isContextual={true}>
                    <DropdownItem link="#" text="Option 1"></DropdownItem>
                    <DropdownItem link="#" text="Option 2"></DropdownItem>
                    <DropdownItem link="#" text="Option 3"></DropdownItem>
                    <DropdownGroup headerTitle="Group Header">
                        <DropdownItem link="#" text="Option 4"></DropdownItem>
                        <DropdownItem link="#" text="Option 5"></DropdownItem>
                        <DropdownItem link="#" text="Option 6"></DropdownItem>
                    </DropdownGroup>
                </Dropdown>
                <Dropdown buttonText="More" size="m" isContextual={true} state="disabled">
                    <DropdownItem link="#" text="Option 1"></DropdownItem>
                    <DropdownItem link="#" text="Option 2"></DropdownItem>
                    <DropdownItem link="#" text="Option 3"></DropdownItem>
                </Dropdown>
                <Dropdown size="m" isContextual={true} state="disabled">
                    <DropdownItem link="#" text="Option 1"></DropdownItem>
                    <DropdownItem link="#" text="Option 2"></DropdownItem>
                    <DropdownItem link="#" text="Option 3"></DropdownItem>
                </Dropdown>
            </DocsTile>
            <DocsText>{contextualDropdownCode}</DocsText>

            <Separator />
        </div>
    );
}