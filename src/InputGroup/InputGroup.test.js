import { act } from 'react-dom/test-utils';
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
                element.find('.fd-popover__control').childAt(0).getDOMNode().className
            ).toContain('fd-input-group');
        });
    });

    describe('Rendering with Props', () => {
        it('should allow data attribute to be passed to the element', () => {
            const element = setup({
                'data-sample': 'Sample'
            });

            expect(
                element.find('.fd-popover__control').childAt(0).getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        it('should pass correct classnames if child.type is an input', () => {
            let element = setup();

            expect(
                element.find('.fd-input').getDOMNode().className
            ).toContain('fd-input-group__input');
            expect(
                element.getDOMNode().children[0].className
            ).not.toContain('fd-input-group__input');
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

            test('should allow spreading className to ValidationOverlay innerRef div', () => {
                const wrapper = setup({
                    validationState: { state: 'error', text: 'Test validation state' },
                    validationOverlayProps: { innerRefClassName: 'wonderful-styles', show: true }
                });

                expect(
                    wrapper.find('.fd-popover__innerRef').getDOMNode().classList
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
        });
    });
});
