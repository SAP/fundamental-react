import { mount } from 'enzyme';
import React from 'react';
import { StepInput } from '../';

describe('<InputGroup />', () => {
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
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
    describe('onChange handler', () => {
        test('should dispatch the onChange callback with the event on change of input field', () => {
            let f = jest.fn();
            const element = mount(<StepInput onChange={f} />);
            element.find('input[type="text"]').simulate('change', { target: { value: 4 } });
            expect(f).toHaveBeenCalledTimes(1);
        });
        test('should dispatch the onChange callback on click of step up button', () => {
            let f = jest.fn();
            const element = mount(<StepInput onChange={f} />);
            element.find('button[aria-label="Step Up"]').simulate('click');
            expect(f).toHaveBeenCalledTimes(1);
        });
        test('should dispatch the onChange callback on click of step down button', () => {
            let f = jest.fn();
            const element = mount(<StepInput onChange={f} />);
            element.find('button[aria-label="Step Down"]').simulate('click');
            expect(f).toHaveBeenCalledTimes(1);
        });
    });
});
