/* eslint-disable react/no-multi-comp */
import React from 'react';
import Tab from '../Tab';
import TabContent from '../_TabContent';
import TabGroup from '../TabGroup';

export default {
    title: 'Component API/TabGroup',
    component: TabGroup,
    subcomponents: { Tab, TabContent }
};


export const primary = () => (
    <TabGroup>
        <Tab id='1' title='Tab 1'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Tab>
        <Tab id='2' title='Tab 2'>
            Numquam libero id corporis odit animi voluptat, Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quia tempore eligendi tempora repellat officia rerum laudantium, veritatis officiis asperiores ipsum nam, distinctio, dolor provident culpa voluptatibus esse deserunt animi?
        </Tab>
        <Tab id='3'
            title='Tab 3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Tab>
        <Tab glyph='cart' id='4'>
            Please review your shopping chart.
        </Tab>
    </TabGroup>
);

export const selectedIndex = () => (
    <TabGroup selectedIndex={1}>
        <Tab id='1' title='Tab 1'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Tab>
        <Tab id='2' title='Tab 2'>
            Numquam libero id corporis odit animi voluptat, Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quia tempore eligendi tempora repellat officia rerum laudantium, veritatis officiis asperiores ipsum nam, distinctio, dolor provident culpa voluptatibus esse deserunt animi?
        </Tab>
        <Tab id='3'
            title='Tab 3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Tab>
        <Tab glyph='cart' id='4'>
            Please review your shopping chart.
        </Tab>
    </TabGroup>
);

export const disabled = () => (
    <TabGroup>
        <Tab disabled id='1'
            title='Tab 1'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Tab>
        <Tab disabled id='2'
            title='Tab 2'>
            Numquam libero id corporis odit animi voluptat, Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quia tempore eligendi tempora repellat officia rerum laudantium, veritatis officiis asperiores ipsum nam, distinctio, dolor provident culpa voluptatibus esse deserunt animi?
        </Tab>
        <Tab disabled id='3'
            title='Tab 3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Tab>
        <Tab disabled glyph='cart'
            id='4'>
            Please review your shopping chart.
        </Tab>
    </TabGroup>
);

export const sizes = () => (
    <>
        {['s', 'm', 'l', 'xl', 'xxl'].map((size, i) => (
            <TabGroup key={i} size={size}>
                <Tab id='1' title='Tab 1'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Tab>
                <Tab id='2' title='Tab 2'>
                    Numquam libero id corporis odit animi voluptat, Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quia tempore eligendi tempora repellat officia rerum laudantium, veritatis officiis asperiores ipsum nam, distinctio, dolor provident culpa voluptatibus esse deserunt animi?
                </Tab>
                <Tab id='3'
                    title='Tab 3'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Tab>
                <Tab glyph='cart' id='4'>
                    Please review your shopping chart.
                </Tab>
            </TabGroup>
        ))}
    </>
);

