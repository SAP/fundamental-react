import React from 'react';
import { Tabs, Tab } from '.';
import { DocsTile, DocsText, Separator, Header, Description, Import, Properties, Playground } from '..';

export const TabsComponent = () => {
    const tabscomponentCode = `
    <Tabs>
        <Tab key='1' title={'Tab 1'} content={'Hello World'} />
        <Tab key='2' title={'Tab 2'} content={'Hello World 2'} />
        <Tab key='3' title={'Tab 3'} content={'Hello World 3'} disabled={true} />
    </Tabs>`;

    return (
        <div>
            <Header>Tabs</Header>
            <Description>
                Tabs are based on a folder metaphor and used to separate content into different sections. Tabs should be
                ordered to create a visual hierarchy based on priority.
            </Description>
            <Import module="Tabs, Tab" path="/fundamental-react/src/" /> <Separator />
            <Properties
                type="Inputs"
                properties={[
                    { name: 'key', description: 'id of the tab' },
                    { name: 'title', description: 'name of the tab' },
                    { name: 'disabled', description: 'disable the tab based on true or false' },
                    { name: 'children', description: 'the content to display when the tab is active' }
                ]}
            />
            <DocsTile>
                <Tabs>
                    <Tab key='1' title={'Tab 1'}>Hello World</Tab>
                    <Tab key='2' title={'Tab 2'}>Hello World 2</Tab>
                    <Tab key='3' title={'Tab 3'} disabled={true}>Hello World 3</Tab>
                </Tabs>
            </DocsTile>
            <DocsText>{tabscomponentCode}</DocsText>
            <Separator />
        </div>
    );
};
