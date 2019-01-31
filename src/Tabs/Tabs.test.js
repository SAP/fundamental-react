import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import { Tab, TabComponent } from './Tabs';
import { MemoryRouter, Link } from 'react-router-dom';


describe('<Tabs />', () => {
    const tabComponent = (
        [
            <Tab
                content='Hello world'
                id='1'
                url='#'>
                Tab 1
            </Tab>,
            <Tab
                content='Hello world 2'
                id='2'
                url='#'>
                Tab 2
            </Tab>,
            <Tab
                content='Hello world 3'
                disabled
                id='3'>
                <a href='#'>
                    Tab 3
                </a>
            </Tab>
        ]
    );

    const tabComponentWithLink = (
        [
            <Tab
                content='Hello world'
                id='1'>
                <Link to='/'>
                    Tab 1
                </Link>
            </Tab>,
            <Tab
                content='Hello world 2'
                id='2'>
                <Link to='/'>
                    Tab 2
                </Link>
            </Tab>,
            <Tab
                content='Hello world 3'
                disabled
                id='3'>
                <Link to='/'>
                    Tab 3
                </Link>
            </Tab>
        ]
    );

    const defaultTabs = (
        <TabComponent>
            {tabComponent}
        </TabComponent>
    );
    const defaultTabsWithClass = (
        <TabComponent
            className='blue'>
            {tabComponent}
        </TabComponent>
    );

    const routerTabs = (
        <MemoryRouter>
            <TabComponent>
                {tabComponentWithLink}
            </TabComponent>
        </MemoryRouter>
    );
    const routerTabsWithClass = (
        <MemoryRouter>
            <TabComponent
                className='blue'>
                {tabComponentWithLink}
            </TabComponent>
        </MemoryRouter>
    );

    test('create tabs component', () => {
        let component = renderer.create(defaultTabs);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        component = renderer.create(defaultTabsWithClass);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        component = renderer.create(routerTabs);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        component = renderer.create(routerTabsWithClass);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('tab selection', () => {
        const wrapper = mount(defaultTabsWithClass);

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
            const element = mount(<Tab data-sample='Sample' id='testId' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the TabComponent component', () => {
            const element = mount(<TabComponent data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the Tab component\'s li elements', () => {
            const element = mount(<Tab id='testId' {...{ 'data-sample': 'Sample' }} />);

            expect(
                element.find('li').at(0).getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the Tab component\'s content component', () => {
            const element = mount(<TabComponent>
                <Tab id='1' tabContentProps={{ 'data-sample': 'Sample' }} />
            </TabComponent>
            );

            expect(
                element.find('li p').at(0).getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the TabComponent component\'s Link component', () => {
            const element = mount(<Tab id='testId' tabLinkProps={{ 'data-sample': 'Sample' }}
                url='#' />);

            expect(
                element.find('li a').at(0).getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
