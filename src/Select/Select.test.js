import { List } from '..';
import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import Select from './Select';

describe('<Select />', () => {
    const list = (
        <List>
            <List.Item>
                <List.Text>List Item 1</List.Text>
            </List.Item>
            <List.Item>
                <List.Text>List Item 2</List.Text>
            </List.Item>
            <List.Item>
                <List.Text>List Item 3</List.Text>
            </List.Item>
            <List.Item>
                <List.Text>List Item 4</List.Text>
            </List.Item>
        </List>
    );

    const defaultSelect = (
        <Select id='1'>
            {list}
        </Select>
    );

    const compactSelect = (
        <Select compact id='2'>
            {list}
        </Select>
    );

    const disabledSelect = (
        <Select disabled id='3'>
            {list}
        </Select>
    );

    const errorSelect = (
        <Select id='4' placeholder='Default'
            validationState={{ state: 'error', text: 'Test validation state' }}>
            {list}
        </Select>
    );

    const warningSelect = (
        <Select id='5' placeholder='Default'
            validationState={{ state: 'warning', text: 'Test validation state' }}>
            {list}
        </Select>
    );

    const informationSelect = (
        <Select id='6' placeholder='Default'
            validationState={{ state: 'information', text: 'Test validation state' }}>
            {list}
        </Select>
    );

    const successSelect = (
        <Select id='7' placeholder='Default'
            uvalidationState={{ state: 'success', text: 'Test validation state' }}>
            {list}
        </Select>
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
                <Select data-sample='Sample'>
                    {list}
                </Select>
            );

            expect(element.find('.fd-select').getDOMNode().attributes['data-sample'].value).toBe('Sample');
        });
    });

    test('forwards the ref to the button', () => {
        let ref;
        class Test extends React.Component {
            constructor(props) {
                super(props);
                ref = React.createRef();
            }
            render = () => <Select ref={ref}>{list}</Select>;
        }
        mount(<Test />);
        expect(ref.current.tagName).toEqual('BUTTON');
        expect(ref.current.className).toContain('fd-select__button');
    });
});
