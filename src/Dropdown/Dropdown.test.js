import { Button } from '../';
import Dropdown from './Dropdown';
import Menu from '../Menu/Menu';
import { mount } from 'enzyme';
import Popover from '../Popover/Popover';
import React from 'react';
import renderer from 'react-test-renderer';

describe('<Dropdown />', () => {
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

    const defaultDropdown = (
        <Dropdown>
            <Popover
                body={defaultMenu}
                control={<Button className='fd-dropdown__control'>Select</Button>}
                noArrow />
        </Dropdown>
    );

    const compactDropdown = (
        <Dropdown className='blue'>
            <Popover
                body={defaultMenu}
                control={
                    <Button className='fd-dropdown__control' compact>
                        Select
                    </Button>
                }
                noArrow />
        </Dropdown>
    );

    const toolbarDropdown = (
        <Dropdown standard>
            <Popover
                body={defaultMenu}
                control={
                    <Button className='fd-dropdown__control'>
                        Select
                    </Button>
                }
                noArrow />
        </Dropdown>
    );

    const iconDropdown = (
        <Dropdown>
            <Popover
                body={defaultMenu}
                control={
                    <Button className='fd-dropdown__control' glyph='filter'>
                        Select
                    </Button>
                }
                id='jhqD0557'
                noArrow />
        </Dropdown>
    );

    const disabledDropdown = (
        <Dropdown>
            <Popover
                body={defaultMenu}
                control={
                    <Button className='fd-dropdown__control'
                        disabled
                        glyph='filter'>
                        Select
                    </Button>
                }
                disabled
                id='jhqD0561'
                noArrow />
        </Dropdown>
    );

    test('create dropdown component', () => {
        // default dropdown
        let component = renderer.create(defaultDropdown);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // compact dropdown
        component = renderer.create(compactDropdown);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // toolbar dropdown
        component = renderer.create(toolbarDropdown);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // icon dropdown
        component = renderer.create(iconDropdown);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // disabled dropdown
        component = renderer.create(disabledDropdown);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the Dropdown component', () => {
            const element = mount(
                <Dropdown data-sample='Sample'>
                    <Popover
                        body={defaultMenu}
                        control={<Button className='fd-dropdown__control'>Select</Button>}
                        noArrow />
                </Dropdown>
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
            render = () => <Dropdown ref={ref} />;
        }
        mount(<Test />);
        expect(ref.current.tagName).toEqual('DIV');
        expect(ref.current.className).toEqual('fd-dropdown');
    });
});
