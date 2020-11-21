import { mount } from 'enzyme';
import React from 'react';
import Tab from './Tab';
import TabGroup from './TabGroup';

describe('<Tabs />', () => {
    const defaultTabsWithClass = (
        <TabGroup
            className='blue'
            selectedIndex={1}>
            <Tab
                id='1'
                title='Tab 1'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore et ducimus veritatis officiis amet? Vitae officia optio dolor exercitationem incidunt magnam non, suscipit, illo quisquam numquam fugiat? Debitis, delectus sequi?
            </Tab>
            <Tab id='2' title='Tab 2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam libero id corporis odit animi voluptat, Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quia tempore eligendi tempora repellat officia rerum laudantium, veritatis officiis asperiores ipsum nam, distinctio, dolor provident culpa voluptatibus esse deserunt animi?
            </Tab>
            <Tab
                id='3'
                title='Tab 3'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Tab>
            <Tab glyph='cart' id='4'
                title='Tab 4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A quibusdam ipsa cumque soluta debitis accusantium iste alias quas vel perferendis voluptatibus quod asperiores praesentium quaerat, iusto repellendus nulla, maiores eius.
            </Tab>
        </TabGroup>
    );

    test('tab selection', () => {
        const wrapper = mount(defaultTabsWithClass);

        // check selected tab
        expect(wrapper.children().state(['selectedIndex'])).toEqual(1);

        wrapper
            .find('ul.fd-tabs li.fd-tabs__item a.fd-tabs__link')
            .at(1)
            .simulate('click');

        wrapper
            .find('ul.fd-tabs li.fd-tabs__item a.fd-tabs__link')
            .at(3)
            .simulate('click');

        // check selected tab changed
        expect(wrapper.children().state(['selectedIndex'])).toEqual(3);
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the TabGroup component', () => {
            const element = mount(<TabGroup data-sample='Sample' />);

            expect(
                element.find('ul').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
