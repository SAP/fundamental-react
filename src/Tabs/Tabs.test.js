import { Link } from 'react-router-dom';
import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import { Tabs, TabComponent } from './Tabs';



describe('<Tabs />', () => {
    const tabComponent = (
        <TabComponent
            className={classNames}>
            <TabComponent
                id='1'
                url='#'
                name='Tab 1'>
                Hello World
            </TabComponent>
            <TabComponent
                id='2'
                url='#'
                name='Tab 2'>
                Hello World 2
            </TabComponent>
            <TabComponent
                id='3'
                name='Tab 3'
                content='Hello world'
                disabled>
                <Link to='#'>
                    Hello World 3
                </Link>
            </TabComponent>
        </TabComponent>
    )

    const tabComponentWithClass = (
        <TabComponent
            className='blue'>
            <TabComponent
                id='1'
                url='#'
                name='Tab 1'>
                Hello World
            </TabComponent>
            <TabComponent
                id='2'
                url='#'
                name='Tab 2'>
                Hello World 2
            </TabComponent>
            <TabComponent
                id='3'
                name='Tab 3'
                content='Hello world'
                disabled>
                <Link to='#'>
                    Hello World 3
                </Link>
            </TabComponent>
        </TabComponent>
    )

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

        test('should allow props to be spread to the TabComponent component\'s li elements', () => {
            const element = mount(<TabComponent ids={defaultIds} tabProps={{ 'data-sample': 'Sample' }} />);

            expect(
                element.find('li').at(0).getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the TabComponent component\'s content component', () => {
            const element = mount(<TabComponent ids={defaultIds} tabContentProps={{ 'data-sample': 'Sample' }} />);

            expect(
                element.find('li p').at(0).getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the TabComponent component\'s Link component', () => {
            const element = mount(<TabComponent ids={defaultIds} tabLinkProps={{ 'data-sample': 'Sample' }} />);

            expect(
                element.find('li a').at(0).getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
