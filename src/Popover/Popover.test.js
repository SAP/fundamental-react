import Icon from '../Icon/Icon';
import Menu from '../Menu/Menu';
import { mount } from 'enzyme';
import Popover from './Popover';
import React from 'react';
import renderer from 'react-test-renderer';

describe('<Popover />', () => {
    const popOver = (
        <Popover
            body={
                <Menu>
                    <Menu.List>
                        <Menu.Item url='/'>Option 1</Menu.Item>
                        <Menu.Item url='/'>Option 2</Menu.Item>
                        <Menu.Item url='/'>Option 3</Menu.Item>
                        <Menu.Item url='/'>Option 4</Menu.Item>
                    </Menu.List>
                </Menu>
            }
            control={<Icon glyph='cart' size='xl' />} />
    );

    const popOverDisabled = (
        <Popover
            body={
                <Menu>
                    <Menu.List>
                        <Menu.Item url='/'>Option 1</Menu.Item>
                        <Menu.Item url='/'>Option 2</Menu.Item>
                        <Menu.Item url='/'>Option 3</Menu.Item>
                        <Menu.Item url='/'>Option 4</Menu.Item>
                    </Menu.List>
                </Menu>
            }
            className='blue'
            control={<Icon glyph='cart' size='xl' />}
            disabled />
    );

    const popOverWithAlignment = (
        <Popover
            body={
                <Menu>
                    <Menu.List>
                        <Menu.Item url='/'>Option 1</Menu.Item>
                        <Menu.Item url='/'>Option 2</Menu.Item>
                        <Menu.Item url='/'>Option 3</Menu.Item>
                        <Menu.Item url='/'>Option 4</Menu.Item>
                    </Menu.List>
                </Menu>
            }
            control={<Icon glyph='cart' size='xl' />}
            placement='right' />
    );

    const popOverNoArrow = (
        <Popover
            body={
                <Menu>
                    <Menu.List>
                        <Menu.Item url='/'>Option 1</Menu.Item>
                        <Menu.Item url='/'>Option 2</Menu.Item>
                        <Menu.Item url='/'>Option 3</Menu.Item>
                        <Menu.Item url='/'>Option 4</Menu.Item>
                    </Menu.List>
                </Menu>
            }
            control={<Icon glyph='cart' size='xl' />}
            noArrow />
    );

    const getPopover = () => {
        return document.body.querySelector('body > span > div.fd-popper__body');
    };

    afterEach(() => {
        document.body.innerHTML = '';
    });

    afterAll(() => {
        document.body.innerHTML = '';
    });

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
        wrapper.find('div.fd-popper__control .sap-icon--cart').simulate('click');
        expect(wrapper.state('isExpanded')).toBeTruthy();

        // click on popover to hide
        wrapper.find('div.fd-popper__control .sap-icon--cart').simulate('click');
        expect(wrapper.state('isExpanded')).toBeFalsy();

        // wrapper.instance().componentWillUnmount();
    });

    test('handle esc key to close popover', () => {
        const wrapper = mount(popOver);

        // click on popover to show
        wrapper.find('div.fd-popper__control .sap-icon--cart').simulate('click');
        expect(wrapper.state('isExpanded')).toBeTruthy();

        // handle esc key
        let event = new KeyboardEvent('keydown', { keyCode: 27 });
        document.dispatchEvent(event);
        expect(wrapper.state('isExpanded')).toBeFalsy();
    });

    test('handle document click to close popover', () => {
        const wrapper = mount(popOver);

        // click on popover to show
        wrapper.find('div.fd-popper__control .sap-icon--cart').simulate('click');
        expect(wrapper.state('isExpanded')).toBeTruthy();

        // handle click on document
        let event = new MouseEvent('mousedown', {});
        document.dispatchEvent(event);
        expect(wrapper.state('isExpanded')).toBeFalsy();
    });

    test('handle document click to close popover', () => {
        const wrapper = mount(popOverDisabled);

        // click on popover to show
        wrapper.find('div.fd-popper__control .sap-icon--cart').simulate('click');
        expect(wrapper.state('isExpanded')).toBeFalsy();
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the Popover component', () => {
            const wrapper = mount(
                <Popover
                    body={<div />}
                    control={<Icon glyph='cart' size='xl' />}
                    data-sample='Sample' />
            );

            wrapper.find('div.fd-popper__control .sap-icon--cart').simulate('click');

            const popper = getPopover();

            expect(
                popper.attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
