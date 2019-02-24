import ActionBar from './ActionBar';
import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

describe('<ActionBar />', () => {
    const basicActionBar = (
        <ActionBar className='blue'>
            <ActionBar.Back className='blue' />
            <ActionBar.Header
                className='blue'
                description={'Action Bar Description'}
                title={'Page Title'} />
            <ActionBar.Actions className='blue'>
                <button>Button</button>
            </ActionBar.Actions>
        </ActionBar>
    );

    const basicActionBarNoClass = (
        <ActionBar>
            <ActionBar.Back className='blue' />
            <ActionBar.Header
                className='blue'
                description={'Action Bar Description'}
                title={'Page Title'} />
            <ActionBar.Actions className='blue'>
                <button>Button</button>
            </ActionBar.Actions>
        </ActionBar>
    );

    const mobileActionBar = (
        <ActionBar className='blue' mobile>
            <ActionBar.Back />
            <ActionBar.Header
                description={'Action Bar Description'}
                title={'Page Title'} />
            <ActionBar.Actions>
                <button>Button</button>
            </ActionBar.Actions>
        </ActionBar>
    );

    const mobileActionBarWidthSet = (
        <ActionBar mobile width='500px'>
            <ActionBar.Back />
            <ActionBar.Header
                description={'Action Bar Description'}
                title={'Page Title'} />
            <ActionBar.Actions>
                <button>Button</button>
            </ActionBar.Actions>
        </ActionBar>
    );

    test('create basic Action Bar', () => {
        let component = renderer.create(basicActionBar);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        component = renderer.create(basicActionBarNoClass);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('create basic mobile Action Bar', () => {
        let component = renderer.create(mobileActionBar);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        component = renderer.create(mobileActionBarWidthSet);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the ActionBar component', () => {
            const element = mount(<ActionBar data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the ActionBar component for mobile', () => {
            const element = mount(<ActionBar data-sample='Sample' mobile />);

            expect(
                element.getDOMNode().querySelector('div').attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the ActionBarBack component', () => {
            const element = mount(<ActionBar.Back data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the ActionBarBack component\'s button element', () => {

            const element = mount(<ActionBar.Back buttonProps={{ 'data-sample': 'Sample' }} />);

            expect(
                element.find('button').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the ActionBarHeader component', () => {
            const element = mount(
                <ActionBar.Header
                    data-sample='Sample'
                    description=''
                    title='' />
            );

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the ActionBarHeader component\'s h1 element', () => {
            const element = mount(
                <ActionBar.Header
                    description=''
                    title=''
                    titleProps={{ 'data-sample': 'Sample' }} />
            );

            expect(
                element.find('h1').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the ActionBarHeader component\'s p element', () => {
            const element = mount(
                <ActionBar.Header
                    description='Sample Description'
                    descriptionProps={{ 'data-sample': 'Sample' }}
                    title='' />
            );

            expect(
                element.find('p').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the ActionBarActions component', () => {
            const element = mount(<ActionBar.Actions data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
