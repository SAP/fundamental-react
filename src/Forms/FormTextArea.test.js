import { act } from 'react-dom/test-utils';
import FormTextarea from './FormTextarea';
import { mount } from 'enzyme';
import React from 'react';

describe('<FormTextArea />', () => {
    let setup = (props) => mount(<FormTextarea {...props} />);

    describe('Prop spreading', () => {
        test('should allow props to be spread to the FormTextarea component', () => {
            const element = mount(<FormTextarea data-sample='Sample' />);

            expect(
                element.find('.fd-textarea').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
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

    test('forwards the ref', () => {
        let ref;
        class Test extends React.Component {
            constructor(props) {
                super(props);
                ref = React.createRef();
            }
            render = () => <FormTextarea ref={ref} />;
        }
        mount(<Test />);
        expect(ref.current.tagName).toEqual('TEXTAREA');
        expect(ref.current.className).toEqual('fd-textarea');
    });

    describe('FormTextArea counter', () => {
        const counterClass = '.fd-textarea-counter';

        test('should allow counterprops to be spread', () => {
            const maxLength = 1;
            const counterProps = { 'data-sample': 'Sample' };
            const element = setup({ maxLength, counterProps });
            expect(element.find(counterClass).getDOMNode().attributes['data-sample'].value).toBe('Sample');
        });

        test('should get initial value from value prop', () => {
            const text = 'Hello world';
            const maxLength = 150;
            const expected = `${maxLength - text.length} characters left`;
            const element = setup({ maxLength, value: text });
            expect(element.find(counterClass).text()).toEqual(expected);
        });

        test('should get initial value from default value prop', () => {
            const text = 'Hello world';
            const maxLength = 150;
            const expected = `${maxLength - text.length} characters left`;
            const element = setup({ maxLength, defaultValue: text });
            expect(element.find(counterClass).text()).toEqual(expected);
        });

        test('should not display counter when maxLength < 0', () => {
            const maxLength = -1;
            const element = setup({ maxLength }, 'Some text');
            expect(element.find(counterClass).exists()).toBeFalsy();
        });

        test('should trigger onChange Textarea', () => {
            const mockCallback = jest.fn();
            const element = setup({
                maxLength: 150,
                onChange: mockCallback
            });
            element.find('.fd-textarea').simulate('change', { currentTarget: { value: 'a' } });
            expect(mockCallback.mock.calls.length).toBe(1);
        });

        test('should update counter upon typing', () => {
            const text = 'aaa';
            const maxLength = 10;
            const expected = `${maxLength - text.length} characters left`;
            const element = setup({ maxLength });
            element.find('.fd-textarea').simulate('change', { target: { value: text } });
            expect(element.find(counterClass).text()).toEqual(expected);
        });

        test('should maintain counter 0 when count < 0', () => {
            const text = '012345';
            const maxLength = 5;
            const expected = '0 characters left';
            const element = setup({ maxLength });
            element.find('.fd-textarea').simulate('change', { target: { value: text } });
            expect(element.find(counterClass).text()).toEqual(expected);
        });

        test('should account for singular character left case', () => {
            const text = '1234';
            const maxLength = 5;
            const expected = '1 character left';
            const element = setup({ maxLength });
            element.find('.fd-textarea').simulate('change', { target: { value: text } });
            expect(element.find(counterClass).text()).toEqual(expected);
        });

        test('should use a custom plural localized text', () => {
            const text = 'Hello world';
            const maxLength = 150;
            const localizedText = {
                charactersLeftPlural: 'chars remaining',
                charactersLeftSingular: 'char remaining'
            };
            const expected = `${maxLength - text.length} chars remaining`;
            const element = setup({
                defaultValue: text,
                localizedText,
                maxLength });
            expect(element.find(counterClass).text()).toEqual(expected);
        });

        test('should use a custom plural localized text', () => {
            const text = 'H';
            const maxLength = 2;
            const localizedText = {
                charactersLeftPlural: 'chars remaining',
                charactersLeftSingular: 'char remaining'
            };
            const expected = `${maxLength - text.length} char remaining`;
            const element = setup({
                defaultValue: text,
                localizedText,
                maxLength });
            expect(element.find(counterClass).text()).toEqual(expected);
        });
    });
});
