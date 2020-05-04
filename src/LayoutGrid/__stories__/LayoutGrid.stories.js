/* eslint-disable react/no-multi-comp */
import LayoutGrid from '../LayoutGrid';
import Panel from '../../Panel/Panel';
import React from 'react';

export default {
    title: 'Component API/LayoutGrid',
    component: LayoutGrid
};

export const primary = () => (
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
);

export const noGap = () => (
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
);

export const twoColumns = () => (
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
);

export const fourColumns = () => (
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
);

export const colSpan = () => (
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
);


