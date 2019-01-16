import { Icon } from '../Icon/Icon';
import { mount } from 'enzyme';
import { Popover } from './Popover';
import React from 'react';
import renderer from 'react-test-renderer';
import { Menu, MenuItem, MenuList } from '../Menu/Menu';

describe('<Popover />', () => {
    const popOver = (
        <Popover
            body={
                <Menu>
                    <MenuList>
                        <MenuItem url='/'>Option 1</MenuItem>
                        <MenuItem url='/'>Option 2</MenuItem>
                        <MenuItem url='/'>Option 3</MenuItem>
                        <MenuItem url='/'>Option 4</MenuItem>
                    </MenuList>
                </Menu>
            }
            control={<Icon glyph='cart' size='xl' />} />
    );

    const popOverDisabled = (
        <Popover
            body={
                <Menu>
                    <MenuList>
                        <MenuItem url='/'>Option 1</MenuItem>
                        <MenuItem url='/'>Option 2</MenuItem>
                        <MenuItem url='/'>Option 3</MenuItem>
                        <MenuItem url='/'>Option 4</MenuItem>
                    </MenuList>
                </Menu>
            }
            className='blue'
            control={<Icon glyph='cart' size='xl' />}
            disabled />
    );

    const popOverWithAlignment = (
        <Popover
            alignment='right'
            body={
                <Menu>
                    <MenuList>
                        <MenuItem url='/'>Option 1</MenuItem>
                        <MenuItem url='/'>Option 2</MenuItem>
                        <MenuItem url='/'>Option 3</MenuItem>
                        <MenuItem url='/'>Option 4</MenuItem>
                    </MenuList>
                </Menu>
            }
            control={<Icon glyph='cart' size='xl' />} />
    );

    const popOverNoArrow = (
        <Popover
            body={
                <Menu>
                    <MenuList>
                        <MenuItem url='/'>Option 1</MenuItem>
                        <MenuItem url='/'>Option 2</MenuItem>
                        <MenuItem url='/'>Option 3</MenuItem>
                        <MenuItem url='/'>Option 4</MenuItem>
                    </MenuList>
                </Menu>
            }
            control={<Icon glyph='cart' size='xl' />}
            noArrow />
    );

    test('create Popover', () => {
        // popover
        let component = renderer.create(popOver);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // popover disabled
        component = renderer.create(popOverDisabled);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // popover with alignement
        component = renderer.create(popOverWithAlignment);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // popover with no arrow
        component = renderer.create(popOverNoArrow);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('handle document click to close popover', () => {
        const wrapper = mount(popOver);

        // click on popover to show
        wrapper.find('div.fd-popover__control').simulate('click');
        expect(wrapper.state('isExpanded')).toBeTruthy();

        // click on popover to hide
        wrapper.find('div.fd-popover__control').simulate('click');
        expect(wrapper.state('isExpanded')).toBeFalsy();

        wrapper.instance().componentWillUnmount();
    });

    test('handle esc key to close popover', () => {
        const wrapper = mount(popOver);

        // click on popover to show
        wrapper.find('div.fd-popover__control').simulate('click');
        expect(wrapper.state('isExpanded')).toBeTruthy();

        // handle esc key
        let event = new KeyboardEvent('keydown', { keyCode: 27 });
        document.dispatchEvent(event);
        expect(wrapper.state('isExpanded')).toBeFalsy();
    });

    //   test('handle document click to close popover', () => {
    //     const wrapper = mount(popOver);

    //     // click on popover to show
    //     wrapper.find('div.fd-popover__control').simulate('click');
    //     expect(wrapper.state('isExpanded')).toBeTruthy();

    //     // handle click on document
    //     let event = new MouseEvent('click', {
    //       target: document.querySelector('body')
    //     });
    //     document.dispatchEvent(event);
    //     expect(wrapper.state('isExpanded')).toBeFalsy();
    //   });

    test('handle document click to close popover', () => {
        const wrapper = mount(popOverDisabled);

        // click on popover to show
        wrapper.find('div.fd-popover__control').simulate('click');
        expect(wrapper.state('isExpanded')).toBeFalsy();
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the Popover component', () => {
            const element = mount(<Popover data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
