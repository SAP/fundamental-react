import { act } from 'react-dom/test-utils';
import FormValidationOverlay from './_FormValidationOverlay';
import { mount } from 'enzyme';
import React from 'react';

describe('<FormValidationOverlay />', () => {

    const setup = (props = {}) => mount(
        <FormValidationOverlay control={(<input onChange={() => {}} value='Test' />)} {...props} />);

    const getPopover = () => {
        return document.body.querySelector('.fd-popover__popper');
    };

    afterEach(() => {
        document.body.innerHTML = '';
    });

    describe('default rendering', () => {
        test('should render', () => {
            let element = setup();

            expect(element).toBeDefined();
        });

        test('should not render a FormMessage by default', () => {
            let element = setup();

            expect(element.find('FormMessage').length).toBe(0);
        });
    });

    describe('Props', () => {
        test('should allow props to be spread to the wrapping div component', () => {
            let element = setup({ wrapperProps: { 'data-sample': 'Sample' } });

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

        test('should set className on the popper component', async() => {
            await act(async() => {
                setup({
                    popperClassName: 'wonderful-styles',
                    show: true,
                    validationState: { state: 'error', text: 'test message' }
                });
            });
            const popoverNode = getPopover();
            expect(
                popoverNode.className
            ).toContain('wonderful-styles');
        });

        test('should allow props to be spread to the FormMessage component', async() => {
            let element;
            await act(async() => {
                element = setup({
                    formMessageProps: { 'data-sample': 'Sample' },
                    show: true,
                    validationState: { state: 'error', text: 'test message' }
                });
            });

            expect(
                element.find('FormMessage').at(1).getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });

    describe('Interactions', () => {
        test('Should show popover when trigger receives focus & hide popover when trigger loses focus (i.e. blurs)', async() => {
            let element = setup({
                formMessageProps: { 'data-sample': 'Sample' },
                validationState: { state: 'error', text: 'test message' }
            });
            await act(async() => {
                element.find('input').simulate('focus');
            });
            let popover = getPopover();
            expect(
                popover
            ).not.toBe(true);

            await act(async() => {
                element.find('input').simulate('blur');
            });

            popover = getPopover();
            expect(
                popover
            ).toBe(null);
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
