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

        test('should allow spreading className to inner text', () => {
            const element = mount(<Button textClassName='wonderful-styles'>Button</Button>);

            expect(
                element.find('.fd-button__text').getDOMNode().classList
            ).toContain('wonderful-styles');
        });

        test('should allow spreading props to icon', () => {
            const element = mount(<Button glyph='bell'iconProps={{ 'data-sample': 'Sample' }}>Button</Button>);

            expect(
                element.find('i.sap-icon--bell').getDOMNode().attributes['data-sample'].value
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

    test('should render the icon before the text when `iconBeforeText` is true', () => {
        const element = mount(<Button glyph='bell' iconBeforeText>Button</Button>);

        expect(
            element.find('.fd-button').childAt(0).getDOMNode().classList
        ).toContain('sap-icon--bell');
    });

    test('should render the icon after the text when `iconBeforeText` is not defined', () => {
        const element = mount(<Button glyph='bell'>Button</Button>);

        expect(
            element.find('.fd-button').childAt(1).getDOMNode().classList
        ).toContain('sap-icon--bell');
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
