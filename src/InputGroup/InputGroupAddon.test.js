import InputGroupAddon from './_InputGroupAddon';
import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';


describe('<InputGroupAddon />', () => {
    const inputGroupAddon = (
        <InputGroupAddon addon='$' />
    );

    test('create list group item actions', () => {
        let component = renderer.create(inputGroupAddon);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the ListGroupItemActions component', () => {
            const element = mount(<InputGroupAddon data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });

    test('should allow props to be spread to the InputGroup component for type number\'s up button element', () => {
        const element = mount(<InputGroupAddon inputType='number' numberUpButtonProps={{ 'data-sample': 'Sample' }} />);

        expect(
            element.find('button.sap-icon--slim-arrow-up').getDOMNode().attributes['data-sample'].value
        ).toBe('Sample');
    });

    test('should allow props to be spread to the InputGroup component for type number\'s down button element', () => {
        const element = mount(<InputGroupAddon inputType='number' numberDownButtonProps={{ 'data-sample': 'Sample' }} />);

        expect(
            element.find('button.sap-icon--slim-arrow-down').getDOMNode().attributes['data-sample'].value
        ).toBe('Sample');
    });
});
