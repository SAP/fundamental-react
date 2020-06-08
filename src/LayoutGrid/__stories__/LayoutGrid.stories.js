/* eslint-disable react/no-multi-comp */
import LayoutGrid from '../LayoutGrid';
import LayoutPanel from '../../LayoutPanel/LayoutPanel';
import React from 'react';

export default {
    title: 'Component API/LayoutGrid',
    component: LayoutGrid
};

export const primary = () => (
    <LayoutGrid>
        <LayoutPanel>
            <LayoutPanel.Body>LayoutPanel</LayoutPanel.Body>
        </LayoutPanel>
        <LayoutPanel>
            <LayoutPanel.Body>LayoutPanel</LayoutPanel.Body>
        </LayoutPanel>
        <LayoutPanel>
            <LayoutPanel.Body>LayoutPanel</LayoutPanel.Body>
        </LayoutPanel>
        <LayoutPanel>
            <LayoutPanel.Body>LayoutPanel</LayoutPanel.Body>
        </LayoutPanel>
        <LayoutPanel>
            <LayoutPanel.Body>LayoutPanel</LayoutPanel.Body>
        </LayoutPanel>
    </LayoutGrid>
);

export const noGap = () => (
    <LayoutGrid nogap>
        <LayoutPanel>
            <LayoutPanel.Body>LayoutPanel</LayoutPanel.Body>
        </LayoutPanel>
        <LayoutPanel>
            <LayoutPanel.Body>LayoutPanel</LayoutPanel.Body>
        </LayoutPanel>
        <LayoutPanel>
            <LayoutPanel.Body>LayoutPanel</LayoutPanel.Body>
        </LayoutPanel>
        <LayoutPanel>
            <LayoutPanel.Body>LayoutPanel</LayoutPanel.Body>
        </LayoutPanel>
        <LayoutPanel>
            <LayoutPanel.Body>LayoutPanel</LayoutPanel.Body>
        </LayoutPanel>
    </LayoutGrid>
);

export const twoColumns = () => (
    <LayoutGrid cols={2}>
        <LayoutPanel>
            <LayoutPanel.Body>LayoutPanel</LayoutPanel.Body>
        </LayoutPanel>
        <LayoutPanel>
            <LayoutPanel.Body>LayoutPanel</LayoutPanel.Body>
        </LayoutPanel>
        <LayoutPanel>
            <LayoutPanel.Body>LayoutPanel</LayoutPanel.Body>
        </LayoutPanel>
        <LayoutPanel>
            <LayoutPanel.Body>LayoutPanel</LayoutPanel.Body>
        </LayoutPanel>
    </LayoutGrid>
);

export const fourColumns = () => (
    <LayoutGrid cols={4}>
        <LayoutPanel>
            <LayoutPanel.Body>LayoutPanel</LayoutPanel.Body>
        </LayoutPanel>
        <LayoutPanel>
            <LayoutPanel.Body>LayoutPanel</LayoutPanel.Body>
        </LayoutPanel>
        <LayoutPanel>
            <LayoutPanel.Body>LayoutPanel</LayoutPanel.Body>
        </LayoutPanel>
        <LayoutPanel>
            <LayoutPanel.Body>LayoutPanel</LayoutPanel.Body>
        </LayoutPanel>
        <LayoutPanel>
            <LayoutPanel.Body>LayoutPanel</LayoutPanel.Body>
        </LayoutPanel>
        <LayoutPanel>
            <LayoutPanel.Body>LayoutPanel</LayoutPanel.Body>
        </LayoutPanel>
        <LayoutPanel>
            <LayoutPanel.Body>LayoutPanel</LayoutPanel.Body>
        </LayoutPanel>
        <LayoutPanel>
            <LayoutPanel.Body>LayoutPanel</LayoutPanel.Body>
        </LayoutPanel>
    </LayoutGrid>
);

export const colSpan = () => (
    <LayoutGrid cols={6}>
        <LayoutPanel colSpan={2}>
            <LayoutPanel.Body>LayoutPanel with colSpan=2</LayoutPanel.Body>
        </LayoutPanel>
        <LayoutPanel>
            <LayoutPanel.Body>LayoutPanel</LayoutPanel.Body>
        </LayoutPanel>
        <LayoutPanel>
            <LayoutPanel.Body>LayoutPanel</LayoutPanel.Body>
        </LayoutPanel>
        <LayoutPanel>
            <LayoutPanel.Body>LayoutPanel</LayoutPanel.Body>
        </LayoutPanel>
        <LayoutPanel>
            <LayoutPanel.Body>LayoutPanel</LayoutPanel.Body>
        </LayoutPanel>

        <LayoutPanel colSpan={3}>
            <LayoutPanel.Body>LayoutPanel with colSpan=3</LayoutPanel.Body>
        </LayoutPanel>
        <LayoutPanel>
            <LayoutPanel.Body>LayoutPanel</LayoutPanel.Body>
        </LayoutPanel>
        <LayoutPanel>
            <LayoutPanel.Body>LayoutPanel</LayoutPanel.Body>
        </LayoutPanel>
        <LayoutPanel>
            <LayoutPanel.Body>LayoutPanel</LayoutPanel.Body>
        </LayoutPanel>

        <LayoutPanel colSpan={4}>
            <LayoutPanel.Body>LayoutPanel with colSpan=4</LayoutPanel.Body>
        </LayoutPanel>
        <LayoutPanel>
            <LayoutPanel.Body>LayoutPanel</LayoutPanel.Body>
        </LayoutPanel>
        <LayoutPanel>
            <LayoutPanel.Body>LayoutPanel</LayoutPanel.Body>
        </LayoutPanel>

        <LayoutPanel colSpan={5}>
            <LayoutPanel.Body>LayoutPanel with colSpan=5</LayoutPanel.Body>
        </LayoutPanel>
        <LayoutPanel>
            <LayoutPanel.Body>LayoutPanel</LayoutPanel.Body>
        </LayoutPanel>

        <LayoutPanel colSpan={6}>
            <LayoutPanel.Body>LayoutPanel with colSpan=6</LayoutPanel.Body>
        </LayoutPanel>
    </LayoutGrid>
);


