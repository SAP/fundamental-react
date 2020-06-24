import { mount } from 'enzyme';
import React from 'react';
import { StepInput } from '../';

describe('<StepInput />', () => {
    let setup = (props) => {
        return mount( <StepInput {...props} />);
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
    });

    describe('Rendering with Props', () => {
        it('should allow data attribute to be passed to the element', () => {
            const element = setup({
                'data-sample': 'Sample'
            });
            expect(
                element.find('.fd-step-input').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
