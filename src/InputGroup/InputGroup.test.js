import { Button } from '../';
import InputGroup from './InputGroup';
import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

describe('<InputGroup />', () => {
    const inputTextPosBefore = (
        <InputGroup>
            <InputGroup.Addon>$</InputGroup.Addon>
            <InputGroup.Input
                placeholder='Type text here' />
        </InputGroup>
    );
    const inputTextPosAfter = (
        <InputGroup>
            <InputGroup.Input placeholder='Type text here' />
            <InputGroup.Addon>€</InputGroup.Addon>
        </InputGroup>
    );
    const inputTextPosBeforeCompact = (
        <InputGroup compact>
            <InputGroup.Addon>$</InputGroup.Addon>
            <InputGroup.Input placeholder='Type text here' />
        </InputGroup>
    );
    const inputTextPosAfterCompact = (
        <InputGroup compact>
            <InputGroup.Input
                placeholder='Type text here' />
            <InputGroup.Addon>€</InputGroup.Addon>
        </InputGroup>
    );
    const inputWithIcon = (
        <InputGroup addon='icon'>
            <InputGroup.Addon glyph='globe' />
            <InputGroup.Input placeholder='Type text here' />
        </InputGroup>
    );
    const inputWithIconCompact = (
        <InputGroup addon='icon' compact>
            <InputGroup.Addon glyph='globe' />
            <InputGroup.Input placeholder='Type text here' />
        </InputGroup>
    );
    const inputWithIconAfter = (
        <InputGroup addon='icon'>
            <InputGroup.Input placeholder='Type text here' />
            <InputGroup.Addon glyph='hide' />
        </InputGroup>
    );
    const inputWithIconAfterCompact = (
        <InputGroup addon='icon' compact>
            <InputGroup.Input placeholder='Type text here' />
            <InputGroup.Addon glyph='hide' />
        </InputGroup>
    );
    const inputWithActions = (
        <InputGroup actions addon='button'>
            <InputGroup.Input placeholder='Type text here' />
            <InputGroup.Addon>
                <Button option='light'>Button</Button>
            </InputGroup.Addon>
        </InputGroup>
    );
    const inputWithActionsCompact = (
        <InputGroup actions addon='button'
            compact>
            <InputGroup.Input placeholder='Type text here' />
            <InputGroup.Addon>
                <Button compact option='light'>Button</Button>
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

        // create input actions
        component = renderer.create(inputWithActions);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // create input actions compact
        component = renderer.create(inputWithActionsCompact);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();


        // default input group
        component = renderer.create('<InputGroup />');
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

    });

    let setup = (props) => {
        return mount(<InputGroup {...props}>
            <InputGroup.Addon>$</InputGroup.Addon>
            <InputGroup.Input />
        </InputGroup>);
    };

    describe('Default Rendering', () => {
        let element = setup({
            children: 'foo' //prop children is required
        });

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
        it('should not throw error if child.type is undefined', () => {
            let element = setup({
                children: <div>This is a test</div>
            });

            expect(() => element).not.toThrow();
        });

        it('should allow data attribute to be passed to span element', () => {
            const element = setup({
                children: [<InputGroup.Input />, <InputGroup.Addon>@</InputGroup.Addon>],
                'data-sample': 'Sample'
            });

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
