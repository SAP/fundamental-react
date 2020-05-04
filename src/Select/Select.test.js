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

    describe('Prop spreading', () => {
        test('should allow props to be spread to the Select component', () => {
            const element = mount(
                <Select data-sample='Sample' options={options} />
            );

            expect(element.find('.fd-select').getDOMNode().attributes['data-sample'].value).toBe('Sample');
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
            element.find('button').simulate('click');
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

    test('forwards the ref to the button', () => {
        let ref;
        class Test extends React.Component {
            constructor(props) {
                super(props);
                ref = React.createRef();
            }
            render = () => <Select options={options} ref={ref} />;
        }
        mount(<Test />);
        expect(ref.current.tagName).toEqual('BUTTON');
        expect(ref.current.className).toContain('fd-select__button');
    });
});
