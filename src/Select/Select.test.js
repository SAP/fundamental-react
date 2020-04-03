import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import Select from './Select';

describe('<Select />', () => {
    const options = [
        { key: '1', text: 'List Item 1' },
        { key: '2', text: 'List Item 2' },
        { key: '3', text: 'List Item 3' },
        { key: '4', text: 'List Item 4' }
    ];

    const defaultSelect = (
        <Select id='1' options={options} />
    );

    const compactSelect = (
        <Select
            compact
            id='2'
            options={options} />
    );

    const disabledSelect = (
        <Select
            disabled
            id='3'
            options={options} />
    );

    const errorSelect = (
        <Select
            id='4'
            options={options}
            placeholder='Default'
            validationState={{ state: 'error', text: 'Test validation state' }} />
    );

    const warningSelect = (
        <Select
            id='5'
            options={options}
            placeholder='Default'
            validationState={{ state: 'warning', text: 'Test validation state' }} />
    );

    const informationSelect = (
        <Select
            id='6'
            options={options}
            placeholder='Default'
            validationState={{ state: 'information', text: 'Test validation state' }} />
    );

    const successSelect = (
        <Select
            id='7'
            options={options}
            placeholder='Default'
            validationState={{ state: 'success', text: 'Test validation state' }} />
    );

    test('create Select component', () => {
        let component = renderer.create(defaultSelect);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        component = renderer.create(compactSelect);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        component = renderer.create(disabledSelect);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        component = renderer.create(warningSelect);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        component = renderer.create(errorSelect);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        component = renderer.create(informationSelect);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        component = renderer.create(successSelect);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

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
