import { Button } from '../Button/Button';
import path from 'path';

import { Tab } from './Tab';
import { TabGroup } from './TabGroup';
import { Description, DocsText, DocsTile, Header, Import, Properties, Separator } from '../_playground';
import React, { useState } from 'react';



export const TabsComponent = () => {
    const [selectedId, setSelected] = useState('3');
    const tabGroupCode = `
    <TabGroup>
        <Tab id='1' title='Tab 1'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Tab>
        <Tab id='2' title='Tab 2'>
            Numquam libero id corporis odit animi voluptat, Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quia tempore eligendi tempora repellat officia rerum laudantium, veritatis officiis asperiores ipsum nam, distinctio, dolor provident culpa voluptatibus esse deserunt animi?
        </Tab>
        <Tab disabled id='3' title='Tab 3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Tab>
        <Tab glyph='cart' id='4'>
            Please review your shopping chart.
        </Tab>
    </TabGroup>`;

    const getNumber = () => {
        setSelected(String(Math.floor(Math.random() * 3) + 1));
    };

    return (
        <div>
            <Header>Tab Group</Header>
            <Description>
                A **Tab Group** is a collection of **Tab** components.  Each **Tab** is based on a folder
                metaphor and is used to separate content into different sections.
                They should be ordered to create a visual hierarchy based on priority.
            </Description>
            <Import sourceModulePath={path.join(__dirname, '../Tabs/TabGroup')} />
            <Import sourceModulePath={path.join(__dirname, '../Tabs/Tab')} />

            <Separator />

            <Properties sourceModulePath={path.join(__dirname, '../Tabs/TabGroup')} />
            <Properties sourceModulePath={path.join(__dirname, '../Tabs/Tab')} />

            <Separator />

            <h2>Tab Group</h2>

            <DocsTile>
                <Button onClick={getNumber}>Click me</Button>
                <TabGroup selectedId={selectedId}>
                    <Tab id='1' title='Tab 1'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </Tab>
                    <Tab id='2' title='Tab 2'>
                        Numquam libero id corporis odit animi voluptat, Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quia tempore eligendi tempora repellat officia rerum laudantium, veritatis officiis asperiores ipsum nam, distinctio, dolor provident culpa voluptatibus esse deserunt animi?
                    </Tab>
                    <Tab disabled id='3'
                        title='Tab 3'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </Tab>
                    <Tab glyph='cart' id='4'>
                        Please review your shopping chart.
                    </Tab>
                </TabGroup>
            </DocsTile>
            <DocsText>{tabGroupCode}</DocsText>
        </div>
    );
};
