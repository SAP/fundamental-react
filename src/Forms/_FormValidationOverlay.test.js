import { act } from 'react-dom/test-utils';
import FormValidationOverlay from './_FormValidationOverlay';
import { mount } from 'enzyme';
import React from 'react';
import { unmountComponentAtNode } from 'react-dom';

// Ensure the popper is accessible with enzyme
jest.mock('react-dom', () => {
    const original = jest.requireActual('react-dom');
    return {
        ...original,
        createPortal: (node) => node
    };
});

describe('<FormValidationOverlay />', () => {
    let container = null;

    const setup = (props = {}, domContainer) => mount(
        <FormValidationOverlay control={(<input onChange={() => {}} value='Test' />)} {...props} />
        ,
        {
            attachTo: domContainer
        });

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    });

    afterEach(() => {
        unmountComponentAtNode(container);
        container.remove();
        container = null;
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

        test('should allow props to be spread to the FormMessage component', async() => {
            let element;
            await act(async() => {
                element = setup({
                    formMessageProps: { 'data-sample': 'Sample' },
                    validationState: { state: 'error', message: 'test message' },
                    show: true
                });
            });

            expect(
                element.find('FormMessage').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
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
