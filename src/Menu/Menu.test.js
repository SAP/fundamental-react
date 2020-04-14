import Menu from './Menu';
import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import { Link, MemoryRouter } from 'react-router-dom';

describe('<Menu />', () => {
    const basicMenuCode = (
        <Menu>
            <Menu.List>
                <Menu.Item url='/'>Option 1</Menu.Item>
                <Menu.Item isLink url='/'>
                    Option 2
                </Menu.Item>
                <Menu.Item url='/'>Option 3</Menu.Item>
                <Menu.Item url='/'>Option 4</Menu.Item>
                <Menu.Item>Option 5</Menu.Item>
            </Menu.List>
        </Menu>
    );

    const menuSeparatorCode = (
        <MemoryRouter>
            <Menu>
                <Menu.List>
                    <Menu.Item separator>
                        <Link to='/'>Option 1</Link>
                    </Menu.Item>
                    <Menu.Item separator>
                        <Link to='/'>Option 2</Link>
                    </Menu.Item>
                    <Menu.Item separator>
                        <Link to='/'>Option 3</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to='/'>Option 4</Link>
                    </Menu.Item>
                </Menu.List>
            </Menu>
        </MemoryRouter>
    );

    const menuAddonBeforeCode = (
        <MemoryRouter>
            <Menu>
                <Menu.List>
                    <Menu.Item>
                        <Link to='/'>Option 1</Link>
                    </Menu.Item>
                    <Menu.Item addonBefore='accept'>
                        <Link to='/'>Option 2</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to='/'>Option 3</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to='/'>Option 4</Link>
                    </Menu.Item>
                </Menu.List>
            </Menu>
        </MemoryRouter>
    );

    test('create basic menu component', () => {
        const component = renderer.create(basicMenuCode);
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
            const element = mount(<Menu.List data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the MenuItem component', () => {
            const element = mount(<Menu.Item data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the MenuItem component\'s addon div element', () => {
            const element = mount(
                <MemoryRouter>
                    <Menu>
                        <Menu.List>
                            <Menu.Item>
                                <Link to='/'>Option 1</Link>
                            </Menu.Item>
                            <Menu.Item addonBefore='accept' addonProps={{ 'data-sample': 'Sample' }}>
                                <Link to='/'>Option 2</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to='/'>Option 3</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to='/'>Option 4</Link>
                            </Menu.Item>
                        </Menu.List>
                    </Menu>
                </MemoryRouter>);

            expect(
                element.find('span.sap-icon--accept').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the MenuItem component\'s Link component', () => {
            const element = mount(
                <MemoryRouter>
                    <Menu>
                        <Menu.List>
                            <Menu.Item urlProps={{ 'data-sample': 'Sample' }}>
                                <Link to='/' />
                            </Menu.Item>
                        </Menu.List>
                    </Menu>
                </MemoryRouter>);

            expect(
                element.find('a.fd-menu__link').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the MenuItem component\'s a element', () => {
            const element = mount(
                <Menu>
                    <Menu.List>
                        <Menu.Item url='/' urlProps={{ 'data-sample': 'Sample' }} />
                    </Menu.List>
                </Menu>
            );

            expect(
                element.find('a.fd-menu__link').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });

    test('forwards the ref', () => {
        let ref;
        class Test extends React.Component {
            constructor(props) {
                super(props);
                ref = React.createRef();
            }
            render = () => <Menu ref={ref} />;
        }
        mount(<Test />);
        expect(ref.current.tagName).toEqual('NAV');
        expect(ref.current.className).toEqual('fd-menu');
    });
});
