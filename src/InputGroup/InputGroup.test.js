import FormInput from '../Forms/FormInput';
import InputGroup from './InputGroup';
import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import { Button, Icon } from '../';

describe('<InputGroup />', () => {
    const inputTextPosBefore = (
        <InputGroup>
            <InputGroup.Addon>$</InputGroup.Addon>
            <FormInput
                placeholder='Type text here' />
        </InputGroup>
    );
    const inputTextPosAfter = (
        <InputGroup>
            <FormInput placeholder='Type text here' />
            <InputGroup.Addon>€</InputGroup.Addon>
        </InputGroup>
    );
    const inputTextPosBeforeCompact = (
        <InputGroup compact>
            <InputGroup.Addon>$</InputGroup.Addon>
            <FormInput placeholder='Type text here' />
        </InputGroup>
    );
    const inputTextPosAfterCompact = (
        <InputGroup compact>
            <FormInput
                placeholder='Type text here' />
            <InputGroup.Addon>€</InputGroup.Addon>
        </InputGroup>
    );
    const inputWithIcon = (
        <InputGroup>
            <InputGroup.Addon>
                <Icon glyph='globe' />
            </InputGroup.Addon>
            <FormInput placeholder='Type text here' />
        </InputGroup>
    );
    const inputWithIconCompact = (
        <InputGroup compact>
            <InputGroup.Addon>
                <Icon glyph='globe' />
            </InputGroup.Addon>
            <FormInput placeholder='Type text here' />
        </InputGroup>
    );
    const inputWithIconAfter = (
        <InputGroup>
            <FormInput placeholder='Type text here' />
            <InputGroup.Addon>
                <Icon glyph='hide' />
            </InputGroup.Addon>
        </InputGroup>
    );
    const inputWithIconAfterCompact = (
        <InputGroup compact>
            <FormInput placeholder='Type text here' />
            <InputGroup.Addon>
                <Icon glyph='hide' />
            </InputGroup.Addon>
        </InputGroup>
    );
    const inputWithButton = (
        <InputGroup>
            <FormInput placeholder='Type text here' />
            <InputGroup.Addon isButton>
                <Button option='transparent'>Button</Button>
            </InputGroup.Addon>
        </InputGroup>
    );
    const inputWithButtonCompact = (
        <InputGroup compact>
            <FormInput placeholder='Type text here' />
            <InputGroup.Addon isButton>
                <Button compact option='transparent'>Button</Button>
            </InputGroup.Addon>
        </InputGroup>
    );

    test('create input group items', () => {
        // create input text before
        let component = renderer.create(inputTextPosBefore);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // create input text after
        component = renderer.create(inputTextPosAfter);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // create input text before compact
        component = renderer.create(inputTextPosBeforeCompact);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // create input text after compact
        component = renderer.create(inputTextPosAfterCompact);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // create input icon
        component = renderer.create(inputWithIcon);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // create input icon compact
        component = renderer.create(inputWithIconCompact);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // create input icon after
        component = renderer.create(inputWithIconAfter);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // create input icon after compact
        component = renderer.create(inputWithIconAfterCompact);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // create input with button
        component = renderer.create(inputWithButton);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // create input with button compact
        component = renderer.create(inputWithButtonCompact);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();


        // default input group
        component = renderer.create('<InputGroup />');
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

    });

    let setup = (props) => {
        return mount(
            <InputGroup {...props}>
                <InputGroup.Addon>$</InputGroup.Addon>
                <FormInput />
            </InputGroup>);
    };

    describe('Default Rendering', () => {
        let element = setup();

        it('should render', () => {
            expect(
                element
            ).toBeDefined();
        });

        it('should render a div tag by default', () => {
            expect(
                element.getDOMNode().tagName
            ).toBe('DIV');
        });

        it('should have a default class of "fd-input-group"', () => {
            expect(
                element.getDOMNode().className
            ).toContain('fd-input-group');
        });
    });

    describe('Rendering with Props', () => {
        it('should allow data attribute to be passed to the element', () => {
            const element = setup({
                'data-sample': 'Sample'
            });

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        it('should pass correct classnames if child.type is an input', () => {
            let element = setup();

            expect(
                element.getDOMNode().children[1].className
            ).toContain('fd-input-group__input');
            expect(
                element.getDOMNode().children[0].className
            ).not.toContain('fd-input-group__input');
        });
    });
});
