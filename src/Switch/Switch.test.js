import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import Switch from './Switch';

describe('<Switch />', () => {
    const defaultSwitch = <Switch>Normal Switch</Switch>;
    const checkedSwitch = (
        <Switch checked className='blue'
            compact>
            Compact Switch
        </Switch>
    );
    const disabledSwitch = <Switch disabled>Normal Switch</Switch>;
    const disabledCheckedSwitch = (
        <Switch checked disabled>
            Normal Switch
        </Switch>
    );

    test('create Switch component', () => {
        // Default Switch
        let component = renderer.create(defaultSwitch);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // checked Switch
        component = renderer.create(checkedSwitch);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // disabled Switch
        component = renderer.create(disabledSwitch);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // checked disabled Switch
        component = renderer.create(disabledCheckedSwitch);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('Switch state change', () => {
        const wrapper = mount(defaultSwitch);
        // check that Switch is not checked
        expect(wrapper.find('input').props().checked).toBe(false);
        expect(wrapper.find('input').props()['aria-checked']).toBe(false);

        // simulate changing Switch
        wrapper.find('input[type="checkbox"]').simulate('change');

        // check that Switch is checked
        expect(wrapper.find('input').props().checked).toBe(true);
        expect(wrapper.find('input').props()['aria-checked']).toBe(true);
    });

    describe('Switch default rendering', () => {
        test('should default to a not checked state', () => {
            const element = mount(<Switch />);

            expect(element.find('input').props().checked).toBe(false);
            expect(element.find('input').props()['aria-checked']).toBe(false);
        });
        test('should have truthy checked state when passed checked prop', () => {
            const element = mount(<Switch checked />);

            expect(element.find('input').props().checked).toBe(true);
            expect(element.find('input').props()['aria-checked']).toBe(true);
        });
    });

    describe('onChange handler', () => {
        test('should dispatch the onChange callback with the event', () => {
            let f = jest.fn();
            const element = mount(<Switch data-sample='Sample' onChange={f} />);

            element.find('input[type="checkbox"]').simulate('change');

            expect(f).toHaveBeenCalledTimes(1);
        });
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the Switch component', () => {
            const element = mount(<Switch data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the Switch component\'s input element', () => {
            const element = mount(<Switch inputProps={{ 'data-sample': 'Sample' }} />);

            expect(
                element.find('input').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
