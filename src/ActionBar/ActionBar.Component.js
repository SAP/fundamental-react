import React from 'react'
import { ActionBar } from '../'
import { Button, Dropdown, DropdownList } from '../'
import { DocsTile, DocsText, Separator, Header, Description, Import, Properties } from '../'

export const ActionBarComponent = () => {
    const titleActionBarCode = `<ActionBar title="Page Title"/>`

    const mainActionsActionBarCode = `<ActionBar title="Page Title" hasActions={true}>
    <Button type="secondary">Cancel</Button>
    <Button type="main">Save</Button>
</ActionBar>`

    const severalActionsActionBarCode = `<ActionBar title="Page Title" hasActions={true}>
    <Dropdown size="m" isContextual={true}>
        <DropdownList links=
            {[
                { id: 'item_1', url: '#', name: 'Option 1' },
                { id: 'item_2', url: '#', name: 'Option 2' },
                { id: 'item_3', url: '#', name: 'Option 3' }
            ]}>
        </DropdownList>
    </Dropdown>
</ActionBar>`


    return (
        <div>

            <Header>Action Bar</Header>
            <Description>The Action Bar is located at the top of the page and is used for Page title and Main Actions for the page.
            </Description>
            <Import module="ActionBar" path="/react-fundamental/src/" />

            <Separator />

            <Properties type="Inputs" properties=
                {[
                    { name: 'title', description: 'String (required) - Title of the action bar' },
                    { name: 'hasActions', description: 'Bool - when set to \'true\' displays actions within the Action Bar.' }
                ]} />

            <Separator />


            <h2>Title</h2>
            <Description>The page title is displayed prominently in the Action Bar. This is helpful for the user to know exactly where they are.</Description>
            <DocsTile>
                <ActionBar title="Page Title" />
            </DocsTile>
            <DocsText>{titleActionBarCode}</DocsText>

            <Separator />

            <h2>Main Actions</h2>
            <Description>Display main actions within the Action bar. This allows for users to find important page actions in a consistent area no matter what page they are on within the application.</Description>
            <DocsTile>
                <ActionBar title="Page Title" hasActions={true}>
                    <Button type="secondary">Cancel</Button>
                    <Button type="main">Save</Button>
                </ActionBar>
            </DocsTile>
            <DocsText>{mainActionsActionBarCode}</DocsText>

            <Separator />

            <h2>Several Main Actions in a Contextual Menu</h2>
            <Description>When there are several main actions for a page, consider displaying them under a contextual menu. This allows the user to look in the same position they are used to but avoids cluttering the action bar with more than 3-4 actions. This also works well for a responsive/adaptive application.</Description>
            <DocsTile>
                <ActionBar title="Page Title" hasActions={true}>
                    <Dropdown size="m" isContextual={true}>
                        <DropdownList links=
                            {[
                                { id: 'item_1', url: '#', name: 'Option 1' },
                                { id: 'item_2', url: '#', name: 'Option 2' },
                                { id: 'item_3', url: '#', name: 'Option 3' }
                            ]}>
                        </DropdownList>
                    </Dropdown>
                </ActionBar>
            </DocsTile>
            <DocsText>{severalActionsActionBarCode}</DocsText>

            <Separator />

        </div>
    );
}