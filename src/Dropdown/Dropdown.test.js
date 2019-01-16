import { Button } from '../Button/Button';
import { Dropdown } from './Dropdown';
import { Popover } from '../Popover/Popover';
import React from 'react';
import renderer from 'react-test-renderer';
import { Menu, MenuItem, MenuList } from '../Menu/Menu';

describe('<Dropdown />', () => {
    const defaultMenu = (
        <Menu>
            <MenuList>
                <MenuItem url='/'>Option 1</MenuItem>
                <MenuItem url='/'>Option 2</MenuItem>
                <MenuItem url='/'>Option 3</MenuItem>
                <MenuItem url='/'>Option 4</MenuItem>
            </MenuList>
        </Menu>
    );

    const defaultDropdown = (
        <Dropdown>
            <Popover
                body={defaultMenu}
                control={<Button dropdown>Select</Button>}
                noArrow />
        </Dropdown>
    );

    const compactDropdown = (
        <Dropdown className='blue'>
            <Popover
                body={defaultMenu}
                control={
                    <Button compact dropdown>
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
                    <Button dropdown type='standard'>
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
                    <Button dropdown glyph='filter'>
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
                    <Button disabled dropdown
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
        xtest('should allow props to be spread to the Dropdown component', () => {
            // TODO: placeholder for this test description once that functionality is built
        });
    });
});
