import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import Tab from './Tab';
import { TabContent } from './_TabContent';
import TabGroup from './TabGroup';

describe('<Tabs />', () => {
    const shownTabContent = (
        <TabContent id='4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.Dolore et ducimus veritatis officiis amet ? Vitae officia optio dolor exercitationem incidunt magnam non, suscipit, illo quisquam numquam fugiat ? Debitis, delectus sequi ?
        </TabContent>);

    const hiddenTabContent = (
        <TabContent id='5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.Dolore et ducimus veritatis officiis amet ? Vitae officia optio dolor exercitationem incidunt magnam non, suscipit, illo quisquam numquam fugiat ? Debitis, delectus sequi ?
        </TabContent>);

    test('create TabContent component', () => {
        let component = renderer.create(shownTabContent);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        component = renderer.create(hiddenTabContent);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('check if tab content is shown', () => {
        const wrapper = mount(shownTabContent);
        wrapper.setProps({ 'selected': true });

        const isExpanded = wrapper.getDOMNode().getAttribute('aria-expanded');
        expect(isExpanded).toEqual('true');
    });

    test('check if tab content is hidden', () => {
        const wrapper = mount(hiddenTabContent);
        wrapper.setProps({ 'selected': false });

        const isExpanded = wrapper.getDOMNode().getAttribute('aria-expanded');
        expect(isExpanded).toEqual('false');
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the Tab component\'s content component', () => {
            const element = mount(<TabGroup selectedIndex={1}>
                <Tab id='1' tabContentProps={{ 'data-sample': 'Sample' }} />
            </TabGroup>
            );

            expect(
                element.find('div.fd-tabs__panel').at(0).getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
