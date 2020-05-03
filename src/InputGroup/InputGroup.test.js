import FormInput from '../Forms/FormInput';
import InputGroup from './InputGroup';
import { mount } from 'enzyme';
import React from 'react';

describe('<InputGroup />', () => {
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
