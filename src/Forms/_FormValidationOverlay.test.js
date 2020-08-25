import { act } from 'react-dom/test-utils';
import FormValidationOverlay from './_FormValidationOverlay';
import { mount } from 'enzyme';
import React from 'react';

describe('<FormValidationOverlay />', () => {
    const setup = (props = {}) => mount(
        <FormValidationOverlay control={(<input onChange={() => {}} value='Test' />)} {...props} />
    );

    afterEach(() => {
        document.body.innerHTML = '';
    });

    const getFormMessage = () => document.body.querySelector('.fd-popover__popper > div > .fd-form-message');

    describe('default rendering', () => {
        test('should render', () => {
            let element = setup();
            expect(element).toBeDefined();
        });

        test('should not render a FormMessage by default', () => {
            setup();

            const messageNode = getFormMessage();

            expect(messageNode).toBeNull();
        });
    });

    describe('Props', () => {
        test('should allow props to be spread to the wrapping div component', () => {
            let element = setup({ 'data-sample': 'Sample' });

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should set className on the outer div', () => {
            const wrapper = setup({
                className: 'wonderful-styles'
            });

            expect(
                wrapper.find('.fd-popover').getDOMNode().classList
            ).toContain('wonderful-styles');
        });

        test('should set className on the reference component', () => {
            const wrapper = setup({
                referenceClassName: 'wonderful-styles'
            });

            expect(
                wrapper.find('.fd-popover__control').getDOMNode().classList
            ).toContain('wonderful-styles');
        });

        test('should allow props to be spread to the FormMessage component', async() => {
            await act(async() => {
                setup({
                    formMessageProps: { 'data-sample': 'Sample' },
                    validationState: { state: 'error', message: 'test message' },
                    show: true
                });
            });

            const messageNode = getFormMessage();

            expect(
                messageNode.attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should not show the FormMessage if there is no text', async() => {
            const element = setup({
                validationState: { state: 'error', message: 'test message' }
            });

            await act(async() => {
                element.find('.fd-popover').simulate('click');
            });

            const messageNode = getFormMessage();

            expect(messageNode).toBeNull();
        });

    });

    describe('interaction', () => {
        test('should show the FormMessage onFocus', async() => {
            let element = setup({ validationState: { state: 'error', message: 'test message' } });

            await act(async() => {
                element.find('.fd-popover').simulate('focus');
            });

            const messageNode = getFormMessage();

            expect(messageNode).toBeDefined();
        });

        test('should show hide the FormMessage onBlur', async() => {
            let element = setup({ validationState: { state: 'error', message: 'test message' } });
            const messageNode = getFormMessage();

            await act(async() => {
                element.find('.fd-popover').simulate('focus');
            });

            expect(messageNode).toBeDefined();

            await act(async() => {
                element.find('.fd-popover').simulate('blur');
            });

            expect(messageNode).toBeNull();
        });
    });

    test('forwards the ref', () => {
        let ref;
        class Test extends React.Component {
            constructor(props) {
                super(props);
                ref = React.createRef();
            }
            render = () => <FormValidationOverlay control={<input onChange={() => {}} value='Test' />} ref={ref} />;
        }
        mount(<Test />);
        expect(ref.current.tagName).toEqual('DIV');
        expect(ref.current.className).toEqual('fd-popover');
    });
});
