import React from 'react';
import { Description, DocsText, DocsTile, Header, Import, Playground, Properties, Separator } from '../_playground';
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
            <Header>Tabs</Header>
            <Description>
                **Tabs** are based on a folder metaphor and used to separate content into different sections.
                They should be ordered to create a visual hierarchy based on priority.
            </Description>
            <Import sourceModule={require('./Tabs')} />

            <Separator />

            <Properties sourceModule={require('./Tabs')} />

            <Separator />

            <h2>Tab Component</h2>
            <p>Menu Component utilizing URL props.</p>

            <DocsTile>
                <TabGroup>
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

            <h2>Tab Component w/Anchor</h2>
            <p>Menu Component utilizing React Router Link components.</p>

            <DocsTile>
                <TabGroup>
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

            <h2>Tab Component w/Link</h2>
            <p>Menu Component utilizing React Router Link components.</p>

            <DocsTile>
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
                </MemoryRouter>
            </DocsTile>
            <DocsText>{tabsGroupWithLinkCode}</DocsText>

            <Separator />

            <h2>Playground</h2>
            <Playground
                component='tab'
                schema={[
                    {
                        attribute: 'children',
                        typeOfAttribute: 'content'
                    }
                ]}>

                <TabGroup>
                    <Tab
                        content='Hello world'
                        id='Tab 1'
                        url='#'>
                        Tab 1
                    </Tab>
                </TabGroup>
            </Playground>
        </div>
    );
};
