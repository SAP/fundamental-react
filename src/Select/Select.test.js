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

        test('should set class on the Popper', async() => {
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
        let onSelect;
        let element;
        beforeEach(async() => {
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
