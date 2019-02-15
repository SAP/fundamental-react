import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import { Tab } from './Tab';
import { TabGroup } from './TabGroup';

describe('<Tabs />', () => {
    const defaultTabs = (
        <TabGroup
            selectedId='1'>
            <Tab
                id='1'
                title='Tab 1'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore et ducimus veritatis officiis amet? Vitae officia optio dolor exercitationem incidunt magnam non, suscipit, illo quisquam numquam fugiat? Debitis, delectus sequi?
            </Tab>
            <Tab id='2' title='Tab 2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam libero id corporis odit animi voluptat, Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quia tempore eligendi tempora repellat officia rerum laudantium, veritatis officiis asperiores ipsum nam, distinctio, dolor provident culpa voluptatibus esse deserunt animi?
            </Tab>
            <Tab
                disabled
                id='3'
                title='Tab 3'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Tab>
            <Tab glyph='cart' id='4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A quibusdam ipsa cumque soluta debitis accusantium iste alias quas vel perferendis voluptatibus quod asperiores praesentium quaerat, iusto repellendus nulla, maiores eius.
            </Tab>
        </TabGroup>
    );
    const defaultTabsWithClass = (
        <TabGroup
            className='blue'
            selectedId='1'>
            <Tab
                id='1'
                title='Tab 1'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore et ducimus veritatis officiis amet? Vitae officia optio dolor exercitationem incidunt magnam non, suscipit, illo quisquam numquam fugiat? Debitis, delectus sequi?
            </Tab>
            <Tab id='2' title='Tab 2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam libero id corporis odit animi voluptat, Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quia tempore eligendi tempora repellat officia rerum laudantium, veritatis officiis asperiores ipsum nam, distinctio, dolor provident culpa voluptatibus esse deserunt animi?
            </Tab>
            <Tab
                disabled
                id='3'
                title='Tab 3'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Tab>
            <Tab glyph='cart' id='4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A quibusdam ipsa cumque soluta debitis accusantium iste alias quas vel perferendis voluptatibus quod asperiores praesentium quaerat, iusto repellendus nulla, maiores eius.
            </Tab>
        </TabGroup>
    );

    test('create tabs component', () => {
        let component = renderer.create(defaultTabs);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        component = renderer.create(defaultTabsWithClass);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('tab selection', () => {
        const wrapper = mount(defaultTabsWithClass);

        // check selected tab
        expect(wrapper.state(['selectedId'])).toEqual('1');

        wrapper
            .find('ul.fd-tabs li.fd-tabs__item a.fd-tabs__link')
            .at(1)
            .simulate('click');

        wrapper
            .find('ul.fd-tabs li.fd-tabs__item a.fd-tabs__link')
            .at(3)
            .simulate('click');

        // check selected tab changed
        expect(wrapper.state(['selectedId'])).toEqual('4');
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the Tabs component', () => {
            const element = mount(<Tab data-sample='Sample' id='testId' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the TabGroup component', () => {
            const element = mount(<TabGroup data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the TabGroup component\'s li elements', () => {
            const element = mount(<TabGroup tabLinkProps={{ 'data-sample': 'Sample' }}>
                <Tab id='1' />
            </TabGroup>);

            expect(
                element.find('ul li').at(0).getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the Tab component\'s a elements', () => {
            const element = mount(<Tab id='testId' {...{ 'data-sample': 'Sample' }} />);

            expect(
                element.find('a').at(0).getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the Tab component\'s content component', () => {
            const element = mount(<TabGroup selectedId='1' tabContentProps={{ 'data-sample': 'Sample' }}>
                <Tab id='1' />
            </TabGroup>
            );

            expect(
                element.find('div.fd-tabs__panel').at(0).getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
