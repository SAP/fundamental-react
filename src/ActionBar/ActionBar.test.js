import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import {
    ActionBar,
    ActionBarActions,
    ActionBarBack,
    ActionBarHeader
} from './ActionBar';

describe('<ActionBar />', () => {
    const basicActionBar = (
        <ActionBar className='blue'>
            <ActionBarBack className='blue' />
            <ActionBarHeader
                className='blue'
                description={'Action Bar Description'}
                title={'Page Title'} />
            <ActionBarActions className='blue'>
                <button>Button</button>
            </ActionBarActions>
        </ActionBar>
    );

    const basicActionBarNoClass = (
        <ActionBar>
            <ActionBarBack className='blue' />
            <ActionBarHeader
                className='blue'
                description={'Action Bar Description'}
                title={'Page Title'} />
            <ActionBarActions className='blue'>
                <button>Button</button>
            </ActionBarActions>
        </ActionBar>
    );

    const mobileActionBar = (
        <ActionBar className='blue' mobile>
            <ActionBarBack />
            <ActionBarHeader
                description={'Action Bar Description'}
                title={'Page Title'} />
            <ActionBarActions>
                <button>Button</button>
            </ActionBarActions>
        </ActionBar>
    );

    const mobileActionBarWidthSet = (
        <ActionBar mobile width='500px'>
            <ActionBarBack />
            <ActionBarHeader
                description={'Action Bar Description'}
                title={'Page Title'} />
            <ActionBarActions>
                <button>Button</button>
            </ActionBarActions>
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
            const element = mount(<ActionBarBack data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        xtest('should allow props to be spread to the ActionBarBack component\'s button element', () => {
            // TODO: placeholder for this test description once that functionality is built
        });

        test('should allow props to be spread to the ActionBarHeader component', () => {
            const element = mount(<ActionBarHeader data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        xtest('should allow props to be spread to the ActionBarHeader component\'s h1 element', () => {
            // TODO: placeholder for this test description once that functionality is built
        });

        xtest('should allow props to be spread to the ActionBarHeader component\'s p element', () => {
            // TODO: placeholder for this test description once that functionality is built
        });

        test('should allow props to be spread to the ActionBarActions component', () => {
            const element = mount(<ActionBarActions data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
