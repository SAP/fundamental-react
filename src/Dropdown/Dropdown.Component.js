import React from 'react'
import { Dropdown, DropdownList, DropdownGroup } from '../'
import { DocsTile, DocsText, Separator, Header, Description, Import, Properties } from '../'

export const DropdownComponent = () => {
    const defaultDropdownCode = `<Dropdown buttonText="Select" size="m">
    <DropdownList links=
        {[
            { id: 'item_1', url: '#', name: 'Option 1' },
            { id: 'item_2', url: '#', name: 'Option 2' },
            { id: 'item_3', url: '#', name: 'Option 3' }
        ]}>
    </DropdownList>
</Dropdown>`

    const iconDropdownCode = `<Dropdown buttonText="Select" buttonIcon="filter" size="m">
    <DropdownList links=
        {[
            { id: 'item_1', url: '#', name: 'Option 1' },
            { id: 'item_2', url: '#', name: 'Option 2' },
            { id: 'item_3', url: '#', name: 'Option 3' }
        ]}>
    </DropdownList>
</Dropdown>`

    const disabledDropdownCode = `<Dropdown buttonText="Select" buttonIcon="filter" size="m" state="disabled">
    <DropdownList links=
        {[
            { id: 'item_1', url: '#', name: 'Option 1' },
            { id: 'item_2', url: '#', name: 'Option 2' },
            { id: 'item_3', url: '#', name: 'Option 3' }
        ]}>
    </DropdownList>
</Dropdown>`

    const sizesDropdownCode = `<Dropdown buttonText="Select" size="xs">
    <DropdownList links=
        {[
            { id: 'item_1', url: '#', name: 'Option 1' },
            { id: 'item_2', url: '#', name: 'Option 2' },
            { id: 'item_3', url: '#', name: 'Option 3' }
        ]}>
    </DropdownList>
</Dropdown>
<Dropdown buttonText="Select" size="s">
    <DropdownList links=
        {[
            { id: 'item_1', url: '#', name: 'Option 1' },
            { id: 'item_2', url: '#', name: 'Option 2' },
            { id: 'item_3', url: '#', name: 'Option 3' }
        ]}>
    </DropdownList>
</Dropdown>
<Dropdown buttonText="Select" size="compact">
    <DropdownList links=
        {[
            { id: 'item_1', url: '#', name: 'Option 1' },
            { id: 'item_2', url: '#', name: 'Option 2' },
            { id: 'item_3', url: '#', name: 'Option 3' }
        ]}>
    </DropdownList>
</Dropdown>
<Dropdown buttonText="Select">
    <DropdownList links=
        {[
            { id: 'item_1', url: '#', name: 'Option 1' },
            { id: 'item_2', url: '#', name: 'Option 2' },
            { id: 'item_3', url: '#', name: 'Option 3' }
        ]}>
    </DropdownList>
</Dropdown>
<Dropdown buttonText="Select" size="l">
    <DropdownList links=
        {[
            { id: 'item_1', url: '#', name: 'Option 1' },
            { id: 'item_2', url: '#', name: 'Option 2' },
            { id: 'item_3', url: '#', name: 'Option 3' }
        ]}>
    </DropdownList>
</Dropdown>`

    const contextualDropdownCode = `<Dropdown buttonText="More" isContextual={true}>
    <DropdownList links=
        {[
            { id: 'item_1', url: '#', name: 'Option 1' },
            { id: 'item_2', url: '#', name: 'Option 2' },
            { id: 'item_3', url: '#', name: 'Option 3' }
        ]}>
    </DropdownList>
</Dropdown>
<Dropdown isContextual={true}>
    <DropdownList links=
        {[
            { id: 'item_1', url: '#', name: 'Option 1' },
            { id: 'item_2', url: '#', name: 'Option 2' },
            { id: 'item_3', url: '#', name: 'Option 3' }
        ]}>
    </DropdownList>
</Dropdown>
<Dropdown buttonText="More" isContextual={true} state="disabled">
    <DropdownList links=
        {[
            { id: 'item_1', url: '#', name: 'Option 1' },
            { id: 'item_2', url: '#', name: 'Option 2' },
            { id: 'item_3', url: '#', name: 'Option 3' }
        ]}>
    </DropdownList>
</Dropdown>
<Dropdown isContextual={true} state="disabled">
    <DropdownList links=
        {[
            { id: 'item_1', url: '#', name: 'Option 1' },
            { id: 'item_2', url: '#', name: 'Option 2' },
            { id: 'item_3', url: '#', name: 'Option 3' }
        ]}>
    </DropdownList>
</Dropdown>`

    return (
        <div>
            <Header>Dropdown</Header>
            <Description>The dropdown component let the user select one of different options. It is more flexible than the normal Select.</Description>
            <Import module="Dropdown, DropdownItem, DropdownGroup" path="/react-fundamental/src/" />

            <Separator />

            <Properties type="Inputs" properties=
                {[
                    { name: 'buttonText', description: 'String - The text of the dropdown button.' },
                    { name: 'size', description: 'String - Size of the dropdown. Options include \'xs\', \'s\', \'compact\', and \'l\'. If no size is provided, default (normal) will be used.' },
                    { name: 'buttonIcon', description: 'String - The dropdown icon element.' },
                    { name: 'state', description: 'String - Options include \'normal\', \'selected\', and \'disabled\'. Leave empty for normal.' },
                    { name: 'isContextual', description: 'Bool - If set to \'true\' renders a contextual menu.' },
                    { name: 'link', description: 'String (required) - Url' },
                    { name: 'text', description: 'String (required) - Dropdown item text' }

                ]} />

            <Separator />

            <h2>Default Dropdown</h2>
            <Description>The dropdown is designed to look like the rest of input components. The options can be divided in groups, which are visually separated and can have a small Group header text.</Description>
            <DocsTile>
                <Dropdown buttonText="Select" size="m">
                    <DropdownList links=
                        {[
                            { id: 'item_1', url: '#', name: 'Option 1' },
                            { id: 'item_2', url: '#', name: 'Option 2' },
                            { id: 'item_3', url: '#', name: 'Option 3' }
                        ]}>
                    </DropdownList>
                </Dropdown>
            </DocsTile>
            <DocsText>{defaultDropdownCode}</DocsText>

            <Separator />

            <h2>Dropdown with Icon</h2>
            <Description>It can also include complementary information like an icon.</Description>
            <DocsTile>
                <Dropdown buttonText="Select" buttonIcon="filter" size="m">
                    <DropdownList links=
                        {[
                            { id: 'item_1', url: '#', name: 'Option 1' },
                            { id: 'item_2', url: '#', name: 'Option 2' },
                            { id: 'item_3', url: '#', name: 'Option 3' }
                        ]}>
                    </DropdownList>
                </Dropdown>
            </DocsTile>
            <DocsText>{iconDropdownCode}</DocsText>

            <Separator />

            <h2>Disabled State</h2>
            <Description>Disabled state can be rendered with <code>state="disabled"</code> class.</Description>
            <DocsTile>
                <Dropdown buttonText="Select" buttonIcon="filter" size="m" state="disabled">
                    <DropdownList links=
                        {[
                            { id: 'item_1', url: '#', name: 'Option 1' },
                            { id: 'item_2', url: '#', name: 'Option 2' },
                            { id: 'item_3', url: '#', name: 'Option 3' }
                        ]}>
                    </DropdownList>
                </Dropdown>
            </DocsTile>
            <DocsText>{disabledDropdownCode}</DocsText>

            <Separator />

            <h2>Sizes</h2>
            <DocsTile>
                <Dropdown buttonText="Select" size="xs">
                    <DropdownList links=
                        {[
                            { id: 'item_1', url: '#', name: 'Option 1' },
                            { id: 'item_2', url: '#', name: 'Option 2' },
                            { id: 'item_3', url: '#', name: 'Option 3' }
                        ]}>
                    </DropdownList>
                </Dropdown>
                <Dropdown buttonText="Select" size="s">
                    <DropdownList links=
                        {[
                            { id: 'item_1', url: '#', name: 'Option 1' },
                            { id: 'item_2', url: '#', name: 'Option 2' },
                            { id: 'item_3', url: '#', name: 'Option 3' }
                        ]}>
                    </DropdownList>
                </Dropdown>
                <Dropdown buttonText="Select" size="compact">
                    <DropdownList links=
                        {[
                            { id: 'item_1', url: '#', name: 'Option 1' },
                            { id: 'item_2', url: '#', name: 'Option 2' },
                            { id: 'item_3', url: '#', name: 'Option 3' }
                        ]}>
                    </DropdownList>
                </Dropdown>
                <Dropdown buttonText="Select">
                    <DropdownList links=
                        {[
                            { id: 'item_1', url: '#', name: 'Option 1' },
                            { id: 'item_2', url: '#', name: 'Option 2' },
                            { id: 'item_3', url: '#', name: 'Option 3' }
                        ]}>
                    </DropdownList>
                </Dropdown>
                <Dropdown buttonText="Select" size="l">
                    <DropdownList links=
                        {[
                            { id: 'item_1', url: '#', name: 'Option 1' },
                            { id: 'item_2', url: '#', name: 'Option 2' },
                            { id: 'item_3', url: '#', name: 'Option 3' }
                        ]}>
                    </DropdownList>
                </Dropdown>
            </DocsTile>
            <DocsText>{sizesDropdownCode}</DocsText>

            <Separator />

            <h2>Contextual Menu</h2>
            <Description>A More Options icon or the word "More" is used to indicate when there are more options than there is room to display them. On click or tap, the user access a contextual menu.</Description>
            <DocsTile>
                <Dropdown buttonText="More" isContextual={true}>
                    <DropdownList links=
                        {[
                            { id: 'item_1', url: '#', name: 'Option 1' },
                            { id: 'item_2', url: '#', name: 'Option 2' },
                            { id: 'item_3', url: '#', name: 'Option 3' }
                        ]}>
                    </DropdownList>
                </Dropdown>
                <Dropdown isContextual={true}>
                    <DropdownList links=
                        {[
                            { id: 'item_1', url: '#', name: 'Option 1' },
                            { id: 'item_2', url: '#', name: 'Option 2' },
                            { id: 'item_3', url: '#', name: 'Option 3' }
                        ]}>
                    </DropdownList>
                </Dropdown>
                <Dropdown buttonText="More" isContextual={true} state="disabled">
                    <DropdownList links=
                        {[
                            { id: 'item_1', url: '#', name: 'Option 1' },
                            { id: 'item_2', url: '#', name: 'Option 2' },
                            { id: 'item_3', url: '#', name: 'Option 3' }
                        ]}>
                    </DropdownList>
                </Dropdown>
                <Dropdown isContextual={true} state="disabled">
                    <DropdownList links=
                        {[
                            { id: 'item_1', url: '#', name: 'Option 1' },
                            { id: 'item_2', url: '#', name: 'Option 2' },
                            { id: 'item_3', url: '#', name: 'Option 3' }
                        ]}>
                    </DropdownList>
                </Dropdown>
            </DocsTile>
            <DocsText>{contextualDropdownCode}</DocsText>

            <Separator />
        </div>
    );
}