import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import { Link, MemoryRouter } from 'react-router-dom';
import { Tab, TabGroup } from './Tabs';


describe('<Tabs />', () => {
    const tabsExample = (
        [
            <Tab
                content='Hello world'
                id='1'
                key='1'
                url='#'>
                Tab 1
            </Tab>,
            <Tab
                content='Hello world 2'
                id='2'
                key='2'
                url='#'>
                Tab 2
            </Tab>,
            <Tab
                content='Hello world 3'
                disabled
                id='3'
                key='3'>
                <a href='#'>
                    Tab 3
                </a>
            </Tab>
        ]
    );

    const tabsExampleWithLink = (
        [
            <Tab
                content='Hello world'
                id='4'
                key='4'>
                <Link to='/'>
                    Tab 1
                </Link>
            </Tab>,
            <Tab
                content='Hello world 2'
                id='5'
                key='5'>
                <Link to='/'>
                    Tab 2
                </Link>
            </Tab>,
            <Tab
                content='Hello world 3'
                disabled
                id='6'
                key='6'>
                <Link to='/'>
                    Tab 3
                </Link>
            </Tab>
        ]
    );

    const defaultTabs = (
        <TabGroup
            selectedId='1'>
            {tabsExample}
        </TabGroup>
    );
    const defaultTabsWithClass = (
        <TabGroup
            className='blue'
            selectedId='1'>
            {tabsExample}
        </TabGroup>
    );

    const routerTabs = (
        <MemoryRouter>
            <TabGroup
                selectedId='4'>
                {tabsExampleWithLink}
            </TabGroup>
        </MemoryRouter>
    );
    const routerTabsWithClass = (
        <MemoryRouter>
            <TabGroup
                className='blue'
                selectedId='4'>
                {tabsExampleWithLink}
            </TabGroup>
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
        expect(wrapper.state(['selectedId'])).toEqual('1');

        wrapper
            .find('ul.fd-tabs li.fd-tabs__item a.fd-tabs__link')
            .at(1)
            .simulate('click');

        // check selected tab changed
        expect(wrapper.state(['selectedId'])).toEqual('2');
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

        test('should allow props to be spread to the Tab component\'s li elements', () => {
            const element = mount(<Tab id='testId' {...{ 'data-sample': 'Sample' }} />);

            expect(
                element.find('li').at(0).getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the Tab component\'s content component', () => {
            const element = mount(<TabGroup selectedId='1'>
                <Tab id='1' tabContentProps={{ 'data-sample': 'Sample' }} />
            </TabGroup>
            );

            expect(
                element.find('li p').at(0).getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the TabGroup component\'s Link component', () => {
            const element = mount(<Tab id='testId' tabLinkProps={{ 'data-sample': 'Sample' }}
                url='#' />);

            expect(
                element.find('li a').at(0).getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
