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

    describe('interactions', () => {
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
