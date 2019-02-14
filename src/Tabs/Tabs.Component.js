import path from 'path';
import React from 'react';
import { Description, DocsText, DocsTile, Header, Import, Properties, Separator } from '../_playground';
import { Link, MemoryRouter } from 'react-router-dom';
import { Tab, TabGroup } from '../';

export const TabsComponent = () => {
    const tabGroupCode = `
    <TabGroup
        selected='1'>
        <Tab
            content='Hello world'
            id='1'
            url='#'>
            Tab 1
        </Tab>
        <Tab
            content='Hello world 2'
            id='2'
            url='#'>
            Tab 2
        </Tab>
        <Tab
            content='Hello world 3'
            disabled
            id='3'
            url='#'>
            Tab 3
        </Tab>
    </TabGroup>`;

    const tabsGroupWithAnchorCode = `
    <TabGroup
        selected='1'>
        <Tab
            content='Hello world'
            id='1'>
            <a
                href='#'>
                Tab 1
            </a>
        </Tab>
        <Tab
            content='Hello world 2'
            id='2'>
            <a
                href='#'>
                Tab 2
            </a>
        </Tab>
        <Tab
            content='Hello world 3'
            disabled
            id='3'>
            <a
                href='#'>
                Tab 2
            </a>
        </Tab>
    </TabGroup>`;

    const tabsGroupWithLinkCode = `
    <MemoryRouter>
        <TabGroup>
            <Tab
                content='Hello world'
                id='1'>
                <Link
                    to='/'>
                    Tab 1
                </Link>
            </Tab>
            <Tab
                content='Hello world 2'
                id='2'>
                <Link
                    to='/'>
                    Tab 2
                </Link>
            </Tab>
            <Tab
                content='Hello world 3'
                disabled
                id='3'>
                <Link
                    to='/'>
                    Tab 2
                </Link>
            </Tab>
        </TabGroup>
    </MemoryRouter>`;

    return (
        <div>
            <Header>Tab Group</Header>
            <Description>
                A **Tab Group** is a collection of **Tab** components.  Each **Tab** is based on a folder
                metaphor and is used to separate content into different sections.
                They should be ordered to create a visual hierarchy based on priority.
            </Description>
            <Import sourceModulePath={path.join(__dirname, './Tabs')} />

            <Separator />

            <Properties sourceModulePath={path.join(__dirname, './Tabs')} />

            <Separator />

            <h2>Tab Group with URL</h2>

            <DocsTile>
                <TabGroup
                    selectedId='1'>
                    <Tab
                        content='Hello world'
                        id='1'
                        url='#'>
                        Tab 1
                    </Tab>
                    <Tab
                        content='Hello world 2'
                        id='2'
                        url='#'>
                        Tab 2
                    </Tab>
                    <Tab
                        content='Hello world 3'
                        disabled
                        id='3'
                        url='#'>
                        Tab 3
                    </Tab>
                </TabGroup>
            </DocsTile>
            <DocsText>{tabGroupCode}</DocsText>

            <Separator />

            <h2>Tab Group with Anchor</h2>

            <DocsTile>
                <TabGroup
                    selectedId='1'>
                    <Tab
                        content='Hello world'
                        id='1'>
                        <a
                            href='#'>
                            Tab 1
                        </a>
                    </Tab>
                    <Tab
                        content='Hello world 2'
                        id='2'>
                        <a
                            href='#'>
                            Tab 2
                        </a>
                    </Tab>
                    <Tab
                        content='Hello world 3'
                        disabled
                        id='3'>
                        <a
                            href='#'>
                            Tab 2
                        </a>
                    </Tab>
                </TabGroup>
            </DocsTile>
            <DocsText>{tabsGroupWithAnchorCode}</DocsText>

            <Separator />

            <h2>Tab Group with Link</h2>

            <DocsTile>
                <MemoryRouter>
                    <TabGroup
                        selectedId='1'>
                        <Tab
                            content='Hello world'
                            id='1'>
                            <Link
                                to='/'>
                                Tab 1
                            </Link>
                        </Tab>
                        <Tab
                            content='Hello world 2'
                            id='2'>
                            <Link
                                to='/'>
                                Tab 2
                            </Link>
                        </Tab>
                        <Tab
                            content='Hello world 3'
                            disabled
                            id='3'>
                            <Link
                                to='/'>
                                Tab 2
                            </Link>
                        </Tab>
                    </TabGroup>
                </MemoryRouter>
            </DocsTile>
            <DocsText>{tabsGroupWithLinkCode}</DocsText>
        </div>
    );
};
