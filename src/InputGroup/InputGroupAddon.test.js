import { Button } from '../';
import InputGroupAddon from './_InputGroupAddon';
import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';


describe('<InputGroupAddon />', () => {
    const inputGroupAddonText = (
        <InputGroupAddon>$</InputGroupAddon>
    );
    const inputGroupAddonButton = (
        <InputGroupAddon isButton>
            <Button>
                Text Here
            </Button>
        </InputGroupAddon>
    );
    const inputGroupAddonCompact = (
        <InputGroupAddon compact>$</InputGroupAddon>
    );

    test('create input group add-on items', () => {
        // add-on with text
        let component = renderer.create(inputGroupAddonText);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // add-on with button
        component = renderer.create(inputGroupAddonButton);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // add-on with compact prop
        component = renderer.create(inputGroupAddonCompact);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the InputGroupAddon component', () => {
            const element = mount(<InputGroupAddon data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
