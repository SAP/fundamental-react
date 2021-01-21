import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import React from 'react';
import Select from './Select';

describe('<Select />', () => {
    const options = [
        { key: '1', text: 'List Item 1' },
        { key: '2', text: 'List Item 2' },
        { key: '3', text: 'List Item 3' },
        { key: '4', text: 'List Item 4' }
    ];

    const popoverProps = {
        ['data-sample']: 'Popper-sample'
    };

    let setup = (props) => {
        return mount(<Select options={options} {...props} />);
    };

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
                wrapper.find('.fd-popover').at(1).getDOMNode().classList
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
            const element = setup({
                validationOverlayProps: { wrapperProps: { 'data-sample': 'Sample' }, show: true }
            });

            expect(
                element.find('.fd-popover').at(1).getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow spreading className to ValidationOverlay innerRef div', async() => {
            setup({
                validationState: { state: 'error', text: 'Test validation state' },
                validationOverlayProps: { innerRefClassName: 'Sample', show: true }
            });

            expect(
                document.body.querySelector('.fd-popover__innerRef').className
            ).toContain('Sample');
        });
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the Select component', () => {
            const element = mount(
                <Select data-sample='Sample' options={options} />
            );

            expect(element.find('.fd-select').getDOMNode().attributes['data-sample'].value).toBe('Sample');
        });

        test('should allow props to be spread to the Popover component', () => {
            const element = mount(
                <Select options={options} popoverProps={popoverProps} />
            );

            expect(
                element.find('.fd-popover').at(0).getDOMNode().attributes['data-sample'].value
            ).toBe('Popper-sample');
        });
    });

    describe('Classnames', () => {
        test('should set class on the outermost div', () => {
            const wrapper = setup({
                popoverProps: { className: 'wonderful-styles' }
            });

            expect(
                wrapper.getDOMNode().classList
            ).toContain('wonderful-styles');
        });

        test('should set class on the dropdown Popper', async() => {
            const wrapper = setup({
                popoverProps: { popperClassName: 'wonderful-styles' }
            });

            await act(async() => {
                wrapper.find('.fd-select').simulate('click');
            });

            expect(
                document.body.querySelector('.fd-popover__popper').classList
            ).toContain('wonderful-styles');
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

        test('should set class on the select div', () => {
            const wrapper = setup({
                className: 'wonderful-styles'
            });

            expect(
                wrapper.find('.fd-select').getDOMNode().classList
            ).toContain('wonderful-styles');
        });

        test('should set class on control div', () => {
            const wrapper = setup({
                controlClassName: 'wonderful-styles'
            });

            expect(
                wrapper.find('.fd-select__control').getDOMNode().classList
            ).toContain('wonderful-styles');
        });

        test('should set class on trigger span', () => {
            const wrapper = setup({
                triggerClassName: 'wonderful-styles'
            });

            expect(
                wrapper.find('.fd-select__button').getDOMNode().classList
            ).toContain('wonderful-styles');
        });

        test('should set class on text content span', () => {
            const wrapper = setup({
                textContentClassName: 'wonderful-styles'
            });

            expect(
                wrapper.find('.fd-select__text-content').getDOMNode().classList
            ).toContain('wonderful-styles');
        });

        test('should set class on ListItems', async() => {
            const wrapper = setup({
                listItemClassName: 'wonderful-styles'
            });

            await act(async() => {
                wrapper.find('.fd-select').simulate('click');
            });


            wrapper.find('ListItem').forEach((node) => {
                expect(node.getDOMNode().classList).toContain('wonderful-styles');
            });
        });

        test('should set class on ListItem.Text spans', () => {
            const wrapper = setup({
                listItemTextClassName: 'wonderful-styles'
            });

            wrapper.find('ListItem.Text').forEach((node) => {
                expect(node.getDOMNode().classList).toContain('wonderful-styles');
            });
        });
    });

    describe('interactions', () => {
        describe('onSelect', () => {
            let onSelect;
            let element;
            beforeEach(() => {
                onSelect = jest.fn();
                element = mount(
                    <Select onSelect={onSelect} options={options} />
                );
                element.find('.fd-select__button').simulate('click');
            });

            afterEach(() => {
                let event = new MouseEvent('mousedown', {});
                document.dispatchEvent(event);
            });

            test('should call onSelect when the first checkbox option is clicked', () => {
                element.find('.fd-list__item').at(0).simulate('click');

                expect(onSelect).toHaveBeenCalledTimes(1);
                expect(onSelect).toHaveBeenCalledWith(expect.anything(), options[0]);
            });

            test('should call onSelect when the second checkbox option is clicked', () => {
                element.find('.fd-list__item').at(1).simulate('click');

                expect(onSelect).toHaveBeenCalledTimes(1);
                expect(onSelect).toHaveBeenCalledWith(expect.anything(), options[1]);
            });
        });

        test('should trigger callback, with valid event object as argument, on input onFocus event', async() => {
            const focusSpy = jest.fn();
            const wrapper = setup({
                onFocus: focusSpy
            });

            await act(async() => {
                wrapper.find('.fd-select').simulate('focus');
            });

            expect(focusSpy).toHaveBeenCalledTimes(1);

            expect(
                focusSpy
            ).toHaveBeenCalledWith(
                expect.objectContaining({
                    target: wrapper.find('.fd-select').getDOMNode()
                })
            );
        });

        test('should trigger callback, with valid event object as argument, on input onBlur event', async() => {
            const blurSpy = jest.fn();
            const wrapper = setup({
                onBlur: blurSpy
            });

            await act(async() => {
                wrapper.find('.fd-select').simulate('blur');
            });

            expect(blurSpy).toHaveBeenCalledTimes(1);

            expect(
                blurSpy
            ).toHaveBeenCalledWith(
                expect.objectContaining({
                    target: wrapper.find('.fd-select').getDOMNode()
                })
            );
        });

        test('should not trigger onBlur callback if opening dropdown', async() => {
            const blurSpy = jest.fn();
            const wrapper = setup({
                onBlur: blurSpy
            });

            await act(async() => {
                wrapper.find('.fd-select').simulate('keydown',
                    {
                        key: 'Enter',
                        keyCode: 13,
                        which: 13
                    }
                );
            });

            expect(blurSpy).toHaveBeenCalledTimes(0);
        });

        test('should not trigger onBlur callback if closing dropdown', async() => {
            const blurSpy = jest.fn();
            const focusSpy = jest.fn();
            const wrapper = setup({
                onBlur: blurSpy,
                onFocus: focusSpy
            });

            // open dropdown
            await act(async() => {
                wrapper.find('.fd-select').simulate('click');
            });

            // close dropdown
            await act(async() => {
                wrapper.find('.fd-popover').at(0).simulate('keydown',
                    {
                        key: 'Esc',
                        keyCode: 27,
                        which: 27
                    }
                );
            });

            expect(blurSpy).toHaveBeenCalledTimes(0);
        });

        test('should select the "selectedKey" when it or "options" prop change', () => {
            const wrapper = setup({
                selectedKey: '4'
            });

            wrapper.setProps({
                options: [
                    ...options,
                    { key: '5', text: 'List Item 5' }
                ],
                selectedKey: '5'
            });

            expect(wrapper.find('span.fd-select__text-content').getDOMNode().innerHTML).toBe('List Item 5');

            wrapper.setProps({
                selectedKey: '1'
            });

            expect(wrapper.find('span.fd-select__text-content').getDOMNode().innerHTML).toBe('List Item 1');
        });
    });

    test('forwards the ref to the div role="button"', () => {
        let ref;
        class Test extends React.Component {
            constructor(props) {
                super(props);
                ref = React.createRef();
            }
            render = () => <Select options={options} ref={ref} />;
        }
        mount(<Test />);

        expect(ref.current.tagName).toEqual('DIV');
        expect(ref.current.className).toContain('fd-select');
    });
});
