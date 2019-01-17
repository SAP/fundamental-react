import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import { TabComponent, Tabs } from './Tabs';

describe('<Tabs />', () => {
    const defaultIds = [
        {
            id: '1',
            url: '#',
            name: 'Tab 1',
            content: 'Hello world',
            disabled: false
        },
        {
            id: '2',
            url: '#',
            name: 'Tab 2',
            content: 'Hello world 2',
            disabled: false
        },
        {
            id: '3',
            url: '#',
            name: 'Tab 3',
            content: 'Hello world 3',
            disabled: true
        }
    ];

    const tabComponent = (
        <TabComponent
            ids={defaultIds} />
    );

    const tabComponentWithClass = (
        <TabComponent
            className='blue'
            ids={defaultIds} />
    );

    const defaultTabs = <Tabs>{tabComponent}</Tabs>;
    const defaultTabsWithClass = <Tabs className='blue'>{tabComponent}</Tabs>;

    test('create tabs component', () => {
        let component = renderer.create(defaultTabs);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        component = renderer.create(defaultTabsWithClass);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        component = renderer.create(tabComponent);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        component = renderer.create(tabComponentWithClass);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('tab selection', () => {
        const wrapper = mount(tabComponent);

        // check selected tab
        expect(wrapper.state(['selectedTab'])).toEqual('1');

        wrapper
            .find('ul.fd-tabs li.fd-tabs__item a.fd-tabs__link')
            .at(1)
            .simulate('click');

        // check selected tab changed
        expect(wrapper.state(['selectedTab'])).toEqual('2');
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the Tabs component', () => {
            const element = mount(<Tabs data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the TabComponent component', () => {
            const element = mount(<TabComponent data-sample='Sample' ids={defaultIds} />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        xtest('should allow props to be spread to the TabComponent component\'s li elements', () => {
            // TODO: placeholder for this test description once that functionality is built
        });

        xtest('should allow props to be spread to the TabComponent component\'s Link component', () => {
            // TODO: placeholder for this test description once that functionality is built
        });
    });
});
