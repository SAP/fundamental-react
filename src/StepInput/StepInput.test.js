import { act } from 'react-dom/test-utils';
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

        describe('validationOverlayProps', () => {
            afterEach(() => {
                document.body.innerHTML = '';
            });

            const getFormMessage = () => document.body.querySelector('.fd-popover__popper > div > .fd-form-message');


            test('should allow spreading className to ValidationOverlay popover', () => {
                const wrapper = setup({
                    validationState: { state: 'error', text: 'Test validation state' },
                    validationOverlayProps: { className: 'wonderful-styles' }
                });

                expect(
                    wrapper.find('.fd-popover').getDOMNode().classList
                ).toContain('wonderful-styles');
            });

            test('should allow spreading className to ValidationOverlay reference div', () => {
                const wrapper = setup({
                    validationState: { state: 'error', text: 'Test validation state' },
                    validationOverlayProps: { referenceClassName: 'wonderful-styles' }
                });

                expect(
                    wrapper.find('.fd-popover__control').getDOMNode().classList
                ).toContain('wonderful-styles');
            });

            test('should spread formMessageProps to ValidationOverlay\'s FormMessage', async() => {
                await act(async() => {
                    setup({
                        validationState: {
                            state: 'error',
                            text: 'Test validation state'
                        },
                        validationOverlayProps: {
                            formMessageProps: { 'data-sample': 'Sample', className: 'wonderful-styles' },
                            show: true
                        }
                    });
                });

                const messageNode = getFormMessage();

                expect(
                    messageNode.attributes['data-sample'].value
                ).toBe('Sample');

                expect(
                    messageNode.classList
                ).toContain('wonderful-styles');
            });

            test('should spread props to Validation overlay wrapper div', async() => {
                const wrapper = setup({
                    validationState: { state: 'error', text: 'Test validation state' },
                    validationOverlayProps: { wrapperProps: { 'data-sample': 'Sample' }, show: true }
                });

                expect(
                    wrapper.find('.fd-popover').getDOMNode().attributes['data-sample'].value
                ).toBe('Sample');
            });

            test('should set class on the Validation Overlay Popper', async() => {
                await act(async() => {
                    setup({
                        validationState: { state: 'error', text: 'Test validation state' },
                        validationOverlayProps: { popperClassName: 'wonderful-styles', show: true }
                    });
                });

                expect(
                    document.body.querySelector('.fd-popover__popper').classList
                ).toContain('wonderful-styles');
            });
            test('should allow spreading className to ValidationOverlay innerRef div', async() => {
                await act(async() => {
                    setup({
                        validationState: { state: 'error', text: 'Test validation state' },
                        validationOverlayProps: { innerRefClassName: 'Sample', show: true }
                    });
                });

                expect(
                    document.body.querySelector('.fd-popover__innerRef').className
                ).toContain('Sample');
            });
        });
    });
    describe('onChange handler', () => {
        test('should dispatch the onChange callback with the event on change of input field for numeric value', () => {
            let f = jest.fn();
            const element = mount(<StepInput onChange={f} />);
            element.find('input[type="text"]').simulate('change', { target: { value: 4 } });
            expect(f).toHaveBeenCalledTimes(1);
        });
        test('should not dispatch the onChange callback with the event on change of input field for non-numeric value', () => {
            let f = jest.fn();
            const element = mount(<StepInput onChange={f} />);
            element.find('input[type="text"]').simulate('change', { target: { value: 'abc' } });
            expect(f).toHaveBeenCalledTimes(0);
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
