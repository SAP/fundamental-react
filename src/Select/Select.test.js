import { Button } from '..';
import Select from './Select';
import Menu from '../Menu/Menu';
import { mount } from 'enzyme';
import Popover from '../Popover/Popover';
import React from 'react';
import renderer from 'react-test-renderer';

describe('<Select />', () => {
    const defaultMenu = (
        <Menu>
            <Menu.List>
                <Menu.Item url='/'>Option 1</Menu.Item>
                <Menu.Item url='/'>Option 2</Menu.Item>
                <Menu.Item url='/'>Option 3</Menu.Item>
                <Menu.Item url='/'>Option 4</Menu.Item>
            </Menu.List>
        </Menu>
    );

    const defaultSelect = (
        <Select>
            <Popover
                body={defaultMenu}
                control={<Button className='fd-Select__control'>Select</Button>}
                noArrow popperProps={{ id: 'fd-default-Select-popover' }} />
        </Select>
    );

    const compactSelect = (
        <Select className='blue'>
            <Popover
                body={defaultMenu}
                control={
                    <Button className='fd-Select__control' compact>
                        Select
                    </Button>
                }
                noArrow popperProps={{ id: 'fd-compact-Select-popover' }} />
        </Select>
    );

    const toolbarSelect = (
        <Select standard>
            <Popover
                body={defaultMenu}
                control={
                    <Button className='fd-Select__control'>
                        Select
                    </Button>
                }
                noArrow popperProps={{ id: 'fd-toolbar-Select-popover' }} />
        </Select>
    );

    const iconSelect = (
        <Select>
            <Popover
                body={defaultMenu}
                control={
                    <Button className='fd-Select__control' glyph='filter'>
                        Select
                    </Button>
                }
                id='jhqD0557'
                noArrow popperProps={{ id: 'fd-icon-Select-popover' }} />
        </Select>
    );

    const disabledSelect = (
        <Select>
            <Popover
                body={defaultMenu}
                control={
                    <Button className='fd-Select__control'
                        disabled
                        glyph='filter'>
                        Select
                    </Button>
                }
                disabled
                id='jhqD0561'
                noArrow popperProps={{ id: 'fd-disable-Select-popover' }} />
        </Select>
    );

    test('create Select component', () => {
        // default Select
        let component = renderer.create(defaultSelect);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // compact Select
        component = renderer.create(compactSelect);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // toolbar Select
        component = renderer.create(toolbarSelect);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // icon Select
        component = renderer.create(iconSelect);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // disabled Select
        component = renderer.create(disabledSelect);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the Select component', () => {
            const element = mount(
                <Select data-sample='Sample'>
                    <Popover
                        body={defaultMenu}
                        control={<Button className='fd-Select__control'>Select</Button>}
                        noArrow />
                </Select>
            );

            expect(element.getDOMNode().attributes['data-sample'].value).toBe('Sample');
        });
    });

    test('forwards the ref', () => {
        let ref;
        class Test extends React.Component {
            constructor(props) {
                super(props);
                ref = React.createRef();
            }
            render = () => <Select ref={ref} />;
        }
        mount(<Test />);
        expect(ref.current.tagName).toEqual('DIV');
        expect(ref.current.className).toEqual('fd-Select');
    });
});
