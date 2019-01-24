import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import { Link, MemoryRouter } from 'react-router-dom';
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
                    <MenuItem>
                        <Link to='/'>Option 1</Link>
                    </MenuItem>
                    <MenuItem className='blue' isLink>
                        <Link to='/'>
                            Option 2
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to='/'>Option 3</Link>
                    </MenuItem>
                </MenuList>
                <MenuGroup className='blue' title='Group Header'>
                    <MenuList>
                        <MenuItem>
                            <Link to='/'>Option 4</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to='/'>Option 5</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to='/'>Option 6</Link>
                        </MenuItem>
                    </MenuList>
                </MenuGroup>
                <MenuGroup title='Group Header 2'>
                    <MenuList>
                        <MenuItem>
                            <Link to='/'>Option 7</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to='/'>Option 8</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to='/'>Option 9</Link>
                        </MenuItem>
                    </MenuList>
                </MenuGroup>
            </Menu>
        </MemoryRouter>
    );

    const menuSeparatorCode = (
        <MemoryRouter>
            <Menu>
                <MenuList>
                    <MenuItem separator>
                        <Link to='/'>Option 1</Link>
                    </MenuItem>
                    <MenuItem separator>
                        <Link to='/'>Option 2</Link>
                    </MenuItem>
                    <MenuItem separator>
                        <Link to='/'>Option 3</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to='/'>Option 4</Link>
                    </MenuItem>
                </MenuList>
            </Menu>
        </MemoryRouter>
    );

    const menuAddonBeforeCode = (
        <MemoryRouter>
            <Menu addonBefore>
                <MenuList>
                    <MenuItem>
                        <Link to='/'>Option 1</Link>
                    </MenuItem>
                    <MenuItem addon='accept'>
                        <Link to='/'>Option 2</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to='/'>Option 3</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to='/'>Option 4</Link>
                    </MenuItem>
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

        test('should allow props to be spread to the MenuItem component\'s addon div element', () => {
            const element = mount(
                <MemoryRouter>
                    <Menu addonBefore>
                        <MenuList>
                            <MenuItem>
                                <Link to='/'>Option 1</Link>
                            </MenuItem>
                            <MenuItem addon='accept' addonProps={{ 'data-sample': 'Sample' }}>
                                <Link to='/'>Option 2</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to='/'>Option 3</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to='/'>Option 4</Link>
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </MemoryRouter>);

            expect(
                element.find('div.fd-menu__addon-before').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the MenuItem component\'s Link component', () => {
            const element = mount(
                <MemoryRouter>
                    <Menu>
                        <MenuList>
                            <MenuItem urlProps={{ 'data-sample': 'Sample' }}>
                                <Link to='/' />
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </MemoryRouter>);

            expect(
                element.find('a.fd-menu__item').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the MenuItem component\'s a element', () => {
            const element = mount(
                <MemoryRouter>
                    <Menu>
                        <MenuList>
                            <MenuItem url='/' urlProps={{ 'data-sample': 'Sample' }} />
                        </MenuList>
                    </Menu>
                </MemoryRouter>
            );

            expect(
                element.find('a.fd-menu__item').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the MenuGroup component', () => {
            const element = mount(<MenuGroup data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the MenuGroup h1 component', () => {
            const element = mount(<MenuGroup titleProps={{ 'data-sample': 'Sample' }} />);

            expect(
                element.find('h1').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
