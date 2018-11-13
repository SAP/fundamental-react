import React from 'react';
import {} from '../';
import { DocsTile, DocsText, Separator, Header, Description, Import, Properties, Button } from '..';
import {
    Panel,
    PanelGrid,
    PanelBody,
    PanelHeader,
    PanelHead,
    PanelActions,
    PanelFilters,
    PanelContent,
    PanelFooter
} from '..';

export const PanelComponent = () => {
    const panelCode = `<Panel>
    <PanelHeader>
        <PanelHead title="Panel Title" description="Panel Description" />
        <PanelActions>Panel Actions</PanelActions>
    </PanelHeader>
    <PanelFilters>Panel Filters</PanelFilters>
    <PanelBody>Panel Body</PanelBody>
    <PanelFooter>Panel Footer</PanelFooter>
</Panel>`;

    const panelGrid3Code = `<PanelGrid>
    <Panel>
        <PanelBody>Panel</PanelBody>
    </Panel>
    <Panel>
        <PanelBody>Panel</PanelBody>
    </Panel>
    <Panel>
        <PanelBody>Panel</PanelBody>
    </Panel>
    <Panel>
        <PanelBody>Panel</PanelBody>
    </Panel>
    <Panel>
        <PanelBody>Panel</PanelBody>
    </Panel>
</PanelGrid>`;

    const panelNogapCode = `<PanelGrid nogap={true}>
    <Panel>
        <PanelBody>Panel</PanelBody>
    </Panel>
    <Panel>
        <PanelBody>Panel</PanelBody>
    </Panel>
    <Panel>
        <PanelBody>Panel</PanelBody>
    </Panel>
    <Panel>
        <PanelBody>Panel</PanelBody>
    </Panel>
    <Panel>
        <PanelBody>Panel</PanelBody>
    </Panel>
</PanelGrid>`;

    const panelGrid2ColsCode = `<PanelGrid cols={2}>
    <Panel>
        <PanelBody>Panel</PanelBody>
    </Panel>
    <Panel>
        <PanelBody>Panel</PanelBody>
    </Panel>
    <Panel>
        <PanelBody>Panel</PanelBody>
    </Panel>
    <Panel>
        <PanelBody>Panel</PanelBody>
    </Panel>
</PanelGrid>`;

    const panelGrid4ColsCode = `<PanelGrid cols={4}>
    <Panel>
        <PanelBody>Panel</PanelBody>
    </Panel>
    <Panel>
        <PanelBody>Panel</PanelBody>
    </Panel>
    <Panel>
        <PanelBody>Panel</PanelBody>
    </Panel>
    <Panel>
        <PanelBody>Panel</PanelBody>
    </Panel>
    <Panel>
        <PanelBody>Panel</PanelBody>
    </Panel>
    <Panel>
        <PanelBody>Panel</PanelBody>
    </Panel>
    <Panel>
        <PanelBody>Panel</PanelBody>
    </Panel>
    <Panel>
        <PanelBody>Panel</PanelBody>
    </Panel>
</PanelGrid>`;

    const panelGridColSpanCode = `<PanelGrid cols={6}>
    <Panel colSpan={2}>
        <PanelBody>Panel with colSpan=2</PanelBody>
    </Panel>
    <Panel>
        <PanelBody>Panel</PanelBody>
    </Panel>
    <Panel>
        <PanelBody>Panel</PanelBody>
    </Panel>
    <Panel>
        <PanelBody>Panel</PanelBody>
    </Panel>
    <Panel>
        <PanelBody>Panel</PanelBody>
    </Panel>

    <Panel colSpan={3}>
        <PanelBody>Panel with colSpan=3</PanelBody>
    </Panel>
    <Panel>
        <PanelBody>Panel</PanelBody>
    </Panel>
    <Panel>
        <PanelBody>Panel</PanelBody>
    </Panel>
    <Panel>
        <PanelBody>Panel</PanelBody>
    </Panel>

    <Panel colSpan={4}>
        <PanelBody>Panel with colSpan=4</PanelBody>
    </Panel>
    <Panel>
        <PanelBody>Panel</PanelBody>
    </Panel>
    <Panel>
        <PanelBody>Panel</PanelBody>
    </Panel>

    <Panel colSpan={5}>
        <PanelBody>Panel with colSpan=5</PanelBody>
    </Panel>
    <Panel>
        <PanelBody>Panel</PanelBody>
    </Panel>
    
    <Panel colSpan={6}>
        <PanelBody>Panel with colSpan=6</PanelBody>
    </Panel>
</PanelGrid>`;

    return (
        <div>
            <Header>Panel</Header>
            <Description />
            <Import module="Panel, PanelGrid, PanelBody, PanelHeader, PanelHead, PanelActions, PanelFilters, PanelContent, PanelFooter" path="/fundamental-react/src/" />

            <Separator />

            <Properties
                type="Inputs"
                properties={[
                    {
                        name: 'nogap',
                        description:
                            'bool - When set to true removes the margins between the panels. Used with <PanelGrid /> component.'
                    },
                    {
                        name: 'cols',
                        description: 'number - The number of column grid. Used with <PanelGrid /> component.'
                    },
                    {
                        name: 'colSpan',
                        description:
                            'number - The number of column grid. Option ranges from 2 to 6. Used with <Panel /> component.'
                    },
                    {
                        name: 'title',
                        description: 'any - Part of PanelHead component. Specifies the title of the panel.'
                    },
                    {
                        name: 'description',
                        description: 'any - Part of PanelHead component. Specifies the description of the panel.'
                    }
                ]}
            />

            <Properties
                type="Child Components"
                properties={[
                    { name: 'PanelBody', description: 'The panel body.' },
                    { name: 'PanelHeader', description: 'The panel header. Contains a panel head and panel actions.' },
                    {
                        name: 'PanelHead',
                        description: 'Part of the header. Contains the title and description of the panel.'
                    },
                    {
                        name: 'PanelActions',
                        description: 'Panel level actions such as add, remove, delete, sort, etc.'
                    },
                    {
                        name: 'PanelFilters',
                        description:
                            'Panel level filters that is specific to the data being displayed within the panel.'
                    },
                    {
                        name: 'PanelContent',
                        description:
                            'Main content of the panel can that hold lists, table, tree, text, form or any other infomation.'
                    },
                    {
                        name: 'PanelFooter',
                        description:
                            'Panel footer can be utilized for pagination, secondary actions, add more data, etc.'
                    }
                ]}
            />

            <Separator />

            <DocsTile>
                <Panel>
                    <PanelHeader>
                        <PanelHead title="Panel Title" description="Panel Description" />
                        <PanelActions>Panel Actions</PanelActions>
                    </PanelHeader>
                    <PanelFilters>Panel Filters</PanelFilters>
                    <PanelBody>Panel Body</PanelBody>
                    <PanelFooter>Panel Footer</PanelFooter>
                </Panel>
            </DocsTile>
            <DocsText>{panelCode}</DocsText>

            <Separator />

            <h2>Default Panel Grid (3 columns)</h2>
            <DocsTile>
                <PanelGrid>
                    <Panel>
                        <PanelBody>Panel</PanelBody>
                    </Panel>
                    <Panel>
                        <PanelBody>Panel</PanelBody>
                    </Panel>
                    <Panel>
                        <PanelBody>Panel</PanelBody>
                    </Panel>
                    <Panel>
                        <PanelBody>Panel</PanelBody>
                    </Panel>
                    <Panel>
                        <PanelBody>Panel</PanelBody>
                    </Panel>
                </PanelGrid>
            </DocsTile>
            <DocsText>{panelGrid3Code}</DocsText>

            <Separator />

            <h2>Panel Grid with no margins between the panels</h2>
            <DocsTile>
                <PanelGrid nogap={true}>
                    <Panel>
                        <PanelBody>Panel</PanelBody>
                    </Panel>
                    <Panel>
                        <PanelBody>Panel</PanelBody>
                    </Panel>
                    <Panel>
                        <PanelBody>Panel</PanelBody>
                    </Panel>
                    <Panel>
                        <PanelBody>Panel</PanelBody>
                    </Panel>
                    <Panel>
                        <PanelBody>Panel</PanelBody>
                    </Panel>
                </PanelGrid>
            </DocsTile>
            <DocsText>{panelNogapCode}</DocsText>

            <Separator />

            <h2>Panel Grid with 2 columns</h2>
            <DocsTile>
                <PanelGrid cols={2}>
                    <Panel>
                        <PanelBody>Panel</PanelBody>
                    </Panel>
                    <Panel>
                        <PanelBody>Panel</PanelBody>
                    </Panel>
                    <Panel>
                        <PanelBody>Panel</PanelBody>
                    </Panel>
                    <Panel>
                        <PanelBody>Panel</PanelBody>
                    </Panel>
                </PanelGrid>
            </DocsTile>
            <DocsText>{panelGrid2ColsCode}</DocsText>

            <Separator />

            <h2>Panel Grid with 4 columns</h2>
            <DocsTile>
                <PanelGrid cols={4}>
                    <Panel>
                        <PanelBody>Panel</PanelBody>
                    </Panel>
                    <Panel>
                        <PanelBody>Panel</PanelBody>
                    </Panel>
                    <Panel>
                        <PanelBody>Panel</PanelBody>
                    </Panel>
                    <Panel>
                        <PanelBody>Panel</PanelBody>
                    </Panel>
                    <Panel>
                        <PanelBody>Panel</PanelBody>
                    </Panel>
                    <Panel>
                        <PanelBody>Panel</PanelBody>
                    </Panel>
                    <Panel>
                        <PanelBody>Panel</PanelBody>
                    </Panel>
                    <Panel>
                        <PanelBody>Panel</PanelBody>
                    </Panel>
                </PanelGrid>
            </DocsTile>
            <DocsText>{panelGrid4ColsCode}</DocsText>

            <Separator />

            <h2>Panel Grid with column span</h2>
            <DocsTile>
                <PanelGrid cols={6}>
                    <Panel colSpan={2}>
                        <PanelBody>Panel with colSpan=2</PanelBody>
                    </Panel>
                    <Panel>
                        <PanelBody>Panel</PanelBody>
                    </Panel>
                    <Panel>
                        <PanelBody>Panel</PanelBody>
                    </Panel>
                    <Panel>
                        <PanelBody>Panel</PanelBody>
                    </Panel>
                    <Panel>
                        <PanelBody>Panel</PanelBody>
                    </Panel>

                    <Panel colSpan={3}>
                        <PanelBody>Panel with colSpan=3</PanelBody>
                    </Panel>
                    <Panel>
                        <PanelBody>Panel</PanelBody>
                    </Panel>
                    <Panel>
                        <PanelBody>Panel</PanelBody>
                    </Panel>
                    <Panel>
                        <PanelBody>Panel</PanelBody>
                    </Panel>

                    <Panel colSpan={4}>
                        <PanelBody>Panel with colSpan=4</PanelBody>
                    </Panel>
                    <Panel>
                        <PanelBody>Panel</PanelBody>
                    </Panel>
                    <Panel>
                        <PanelBody>Panel</PanelBody>
                    </Panel>

                    <Panel colSpan={5}>
                        <PanelBody>Panel with colSpan=5</PanelBody>
                    </Panel>
                    <Panel>
                        <PanelBody>Panel</PanelBody>
                    </Panel>
                    
                    <Panel colSpan={6}>
                        <PanelBody>Panel with colSpan=6</PanelBody>
                    </Panel>
                </PanelGrid>
            </DocsTile>
            <DocsText>{panelGridColSpanCode}</DocsText>
        </div>
    );
};
