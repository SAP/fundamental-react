import path from 'path';
import React from 'react';
import { ComponentPage, Example } from '../_playground';
import { Tab, TabGroup } from '../';

export const TabsComponent = () => {
    return (
        <ComponentPage
            description={`A **Tab Group** is a collection of **Tab** components.  Each **Tab** is based on a folder
                metaphor and is used to separate content into different sections.
                They should be ordered to create a visual hierarchy based on priority.`}
            sourceModulePath={path.join(__dirname, './Tabs')}
            title='Tab Group'>

            <Example
                title='Tab Group'>
                <TabGroup>
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
            </Example>

        </ComponentPage>
    );
};
