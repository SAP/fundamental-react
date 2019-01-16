import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import { Menu, MenuGroup, MenuItem, MenuList } from './Menu';

describe('<Menu />', () => {
    const basicMenuCode = (
        <Menu>
            <MenuList>
                <MenuItem url='/'>Option 1</MenuItem>
                <MenuItem isLink url='/'>
                    Option 2
                </MenuItem>
                <MenuItem url='/'>Option 3</MenuItem>
                <MenuItem url='/'>Option 4</MenuItem>
                <MenuItem>Option 5</MenuItem>
            </MenuList>
        </Menu>
    );

    const menuGroupCode = (
        <MemoryRouter>
            <Menu className='blue'>
                <MenuList className='blue'>
                    <MenuItem link='/'>Option 1</MenuItem>
                    <MenuItem className='blue' isLink
                        link='/'>
                        Option 2
                    </MenuItem>
                    <MenuItem link='/'>Option 3</MenuItem>
                </MenuList>
                <MenuGroup className='blue' title='Group Header'>
                    <MenuList>
                        <MenuItem link='/'>Option 4</MenuItem>
                        <MenuItem link='/'>Option 5</MenuItem>
                        <MenuItem link='/'>Option 6</MenuItem>
                    </MenuList>
                </MenuGroup>
                <MenuGroup title='Group Header 2'>
                    <MenuList>
                        <MenuItem link='/'>Option 7</MenuItem>
                        <MenuItem link='/'>Option 8</MenuItem>
                        <MenuItem link='/'>Option 9</MenuItem>
                    </MenuList>
                </MenuGroup>
            </Menu>
        </MemoryRouter>
    );

    const menuSeparatorCode = (
        <MemoryRouter>
            <Menu>
                <MenuList>
                    <MenuItem link='/' separator>
                        Option 1
                    </MenuItem>
                    <MenuItem link='/' separator>
                        Option 2
                    </MenuItem>
                    <MenuItem link='/' separator>
                        Option 3
                    </MenuItem>
                    <MenuItem link='/'>Option 4</MenuItem>
                </MenuList>
            </Menu>
        </MemoryRouter>
    );

    const menuAddonBeforeCode = (
        <MemoryRouter>
            <Menu addonBefore>
                <MenuList>
                    <MenuItem link='/'>Option 1</MenuItem>
                    <MenuItem addon='accept' link='/'>
                        Option 2
                    </MenuItem>
                    <MenuItem link='/'>Option 3</MenuItem>
                    <MenuItem link='/'>Option 4</MenuItem>
                </MenuList>
            </Menu>
        </MemoryRouter>
    );

    test('create basic menu component', () => {
        const component = renderer.create(basicMenuCode);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('create menu group component', () => {
        const component = renderer.create(menuGroupCode);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('create menu with separator component', () => {
        const component = renderer.create(menuSeparatorCode);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('create menu add-on component', () => {
        const component = renderer.create(menuAddonBeforeCode);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the Menu component', () => {
            const element = mount(<Menu data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the MenuList component', () => {
            const element = mount(<MenuList data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the MenuItem component', () => {
            const element = mount(<MenuItem data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        xtest('should allow props to be spread to the MenuItem component\'s addon div element', () => {
            // TODO: placeholder for this test description once that functionality is built
        });

        xtest('should allow props to be spread to the MenuItem component\'s Link component', () => {
            // TODO: placeholder for this test description once that functionality is built
        });

        xtest('should allow props to be spread to the MenuItem component\'s a element', () => {
            // TODO: placeholder for this test description once that functionality is built
        });

        test('should allow props to be spread to the MenuGroup component', () => {
            const element = mount(<MenuGroup data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
