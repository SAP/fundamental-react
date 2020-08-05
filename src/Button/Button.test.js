import Button from './Button';
import { mount } from 'enzyme';
import React from 'react';

describe('<Button />', () => {
    describe('Prop spreading', () => {
        test('should allow props to be spread to the Button component', () => {
            const element = mount(<Button data-sample='Sample' />);

            expect(
                element.find('.fd-button').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
    test('forwards the ref', () => {
        let ref;
        class Test extends React.Component {
            constructor(props) {
                super(props);
                ref = React.createRef();
            }
            render = () => <Button ref={ref}>Button</Button>;
        }
        mount(<Test />);
        expect(ref.current.tagName).toEqual('BUTTON');
        expect(ref.current.className).toEqual('fd-button');
    });

    describe('a11y', () => {
        const element = mount(
            <Button allowFocusOnDisable disabled
                disabledMessage='To enable this button use the knob in the dev story'
                enabledMessage='This button is now enabled'>Disabled Focusable</Button>
        );
        test('should have an aria-describedby attribute on the dialog', () => {
            expect(
                element.find('.fd-button').getDOMNode().attributes['aria-describedby'].value
            ).toBeDefined();
        });
        test('should have an id in the instructions body', () => {
            expect(
                element.find('.fd-button__instructions').getDOMNode().attributes.id.value
            ).toBeDefined();
        });
        test('should have an id on the instructions body that matches the button\'s aria-describedby', () => {
            expect(
                element.find('.fd-button').getDOMNode().attributes['aria-describedby'].value
            ).toMatch(element.find('.fd-button__instructions').getDOMNode().attributes.id.value);
        });
    });
});
