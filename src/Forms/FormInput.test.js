import { act } from 'react-dom/test-utils';
import FormInput from './FormInput';
import { mount } from 'enzyme';
import React from 'react';

describe('<FormInput />', () => {
    const setup = (props) => mount(<FormInput {...props} />);
    describe('rendering', () => {
        test('should add compact class when compact prop added', () => {
            const element = mount(<FormInput compact />);

            expect(
                element.find('input').hasClass('fd-input--compact')
            ).toBe(true);
        });
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the FormInput component', () => {
            const element = mount(<FormInput data-sample='Sample' />);

            expect(
                element.find('.fd-input').getDOMNode().attributes['data-sample'].value
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

        test('should allow spreading className to ValidationOverlay reference div', () => {
            const wrapper = setup({
                validationState: { state: 'error', text: 'Test validation state' },
                validationOverlayProps: { referenceClassName: 'wonderful-styles' }
            });

            expect(
                wrapper.find('.fd-popover__control').getDOMNode().classList
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
    });

    test('forwards the ref', () => {
        let ref;
        class Test extends React.Component {
            constructor(props) {
                super(props);
                ref = React.createRef();
            }
            render = () => <FormInput ref={ref} />;
        }
        mount(<Test />);
        expect(ref.current.tagName).toEqual('INPUT');
        expect(ref.current.className).toEqual('fd-input');
    });
});
