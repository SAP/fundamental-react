import path from 'path';
import React from 'react';
import { ComponentPage, Example } from '../_playground';
import { LayoutGrid, Panel } from '..';

export const LayoutGridComponent = () => {
    return (
        <ComponentPage
            sourceModulePath={path.join(__dirname, './LayoutGrid')}
            title='Layout Grid'>
            <Example
                title='Default Layout Grid (3 columns)'>
                <LayoutGrid>
                    <Panel>
                        <Panel.Body>Panel</Panel.Body>
                    </Panel>
                    <Panel>
                        <Panel.Body>Panel</Panel.Body>
                    </Panel>
                    <Panel>
                        <Panel.Body>Panel</Panel.Body>
                    </Panel>
                    <Panel>
                        <Panel.Body>Panel</Panel.Body>
                    </Panel>
                    <Panel>
                        <Panel.Body>Panel</Panel.Body>
                    </Panel>
                </LayoutGrid>
            </Example>

            <Example
                title='Layout Grid with no margins between the panels'>
                <LayoutGrid nogap>
                    <Panel>
                        <Panel.Body>Panel</Panel.Body>
                    </Panel>
                    <Panel>
                        <Panel.Body>Panel</Panel.Body>
                    </Panel>
                    <Panel>
                        <Panel.Body>Panel</Panel.Body>
                    </Panel>
                    <Panel>
                        <Panel.Body>Panel</Panel.Body>
                    </Panel>
                    <Panel>
                        <Panel.Body>Panel</Panel.Body>
                    </Panel>
                </LayoutGrid>
            </Example>

            <Example
                title='Layout Grid with 2 columns'>
                <LayoutGrid cols={2}>
                    <Panel>
                        <Panel.Body>Panel</Panel.Body>
                    </Panel>
                    <Panel>
                        <Panel.Body>Panel</Panel.Body>
                    </Panel>
                    <Panel>
                        <Panel.Body>Panel</Panel.Body>
                    </Panel>
                    <Panel>
                        <Panel.Body>Panel</Panel.Body>
                    </Panel>
                </LayoutGrid>
            </Example>

            <Example
                title='Layout Grid with 4 columns'>
                <LayoutGrid cols={4}>
                    <Panel>
                        <Panel.Body>Panel</Panel.Body>
                    </Panel>
                    <Panel>
                        <Panel.Body>Panel</Panel.Body>
                    </Panel>
                    <Panel>
                        <Panel.Body>Panel</Panel.Body>
                    </Panel>
                    <Panel>
                        <Panel.Body>Panel</Panel.Body>
                    </Panel>
                    <Panel>
                        <Panel.Body>Panel</Panel.Body>
                    </Panel>
                    <Panel>
                        <Panel.Body>Panel</Panel.Body>
                    </Panel>
                    <Panel>
                        <Panel.Body>Panel</Panel.Body>
                    </Panel>
                    <Panel>
                        <Panel.Body>Panel</Panel.Body>
                    </Panel>
                </LayoutGrid>
            </Example>

            <Example
                title='Layout Grid with column span'>
                <LayoutGrid cols={6}>
                    <Panel colSpan={2}>
                        <Panel.Body>Panel with colSpan=2</Panel.Body>
                    </Panel>
                    <Panel>
                        <Panel.Body>Panel</Panel.Body>
                    </Panel>
                    <Panel>
                        <Panel.Body>Panel</Panel.Body>
                    </Panel>
                    <Panel>
                        <Panel.Body>Panel</Panel.Body>
                    </Panel>
                    <Panel>
                        <Panel.Body>Panel</Panel.Body>
                    </Panel>

                    <Panel colSpan={3}>
                        <Panel.Body>Panel with colSpan=3</Panel.Body>
                    </Panel>
                    <Panel>
                        <Panel.Body>Panel</Panel.Body>
                    </Panel>
                    <Panel>
                        <Panel.Body>Panel</Panel.Body>
                    </Panel>
                    <Panel>
                        <Panel.Body>Panel</Panel.Body>
                    </Panel>

                    <Panel colSpan={4}>
                        <Panel.Body>Panel with colSpan=4</Panel.Body>
                    </Panel>
                    <Panel>
                        <Panel.Body>Panel</Panel.Body>
                    </Panel>
                    <Panel>
                        <Panel.Body>Panel</Panel.Body>
                    </Panel>

                    <Panel colSpan={5}>
                        <Panel.Body>Panel with colSpan=5</Panel.Body>
                    </Panel>
                    <Panel>
                        <Panel.Body>Panel</Panel.Body>
                    </Panel>

                    <Panel colSpan={6}>
                        <Panel.Body>Panel with colSpan=6</Panel.Body>
                    </Panel>
                </LayoutGrid>
            </Example>

        </ComponentPage>
    );
};
