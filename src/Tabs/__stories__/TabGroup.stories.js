import React from 'react';
import { storiesOf } from '@storybook/react';
import Tab from '../Tab';
import TabGroup from '../TabGroup';
import {
    withKnobs
} from '@storybook/addon-knobs';

storiesOf('Components|TabGroup', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
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
    ))
    .add('disable styles', () => (
        <TabGroup disableStyles>
            <Tab disableStyles title='Tab 1'>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Tab>
            <Tab disableStyles title='Tab 2'>
                Numquam libero id corporis odit animi voluptat, Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quia tempore eligendi tempora repellat officia rerum laudantium, veritatis officiis asperiores ipsum nam, distinctio, dolor provident culpa voluptatibus esse deserunt animi?
            </Tab>
            <Tab disableStyles disabled
                title='Tab 3'>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Tab>
            <Tab disableStyles glyph='cart'>
                   Please review your shopping chart.
            </Tab>
        </TabGroup>
    ))
    .add('custom styles', () => (
        <TabGroup customStyles={require('../../utils/WithStyles/customStylesTest.css')}>
            <Tab disableStyles title='Tab 1'>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Tab>
            <Tab disableStyles title='Tab 2'>
                Numquam libero id corporis odit animi voluptat, Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quia tempore eligendi tempora repellat officia rerum laudantium, veritatis officiis asperiores ipsum nam, distinctio, dolor provident culpa voluptatibus esse deserunt animi?
            </Tab>
            <Tab disableStyles disabled
                title='Tab 3'>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Tab>
            <Tab disableStyles glyph='cart'>
                   Please review your shopping chart.
            </Tab>
        </TabGroup>
    ));
