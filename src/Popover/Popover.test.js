/* eslint-disable compat/compat */
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
            control={<Icon glyph='cart' size='xl' />} popperProps={{ id: 'fd-default-popover' }} />
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
            disabled popperProps={{ id: 'fd-disabled-popover' }} />
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
            placement='right' popperProps={{ id: 'fd-aligned-popover' }} />
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
            noArrow popperProps={{ id: 'fd-arrowless-popover' }} />
    );

    const popOverDisableEdgeDetection = (
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
            disableEdgeDetection popperProps={{ id: 'fd-edge-undetected-popover' }} />
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

    test('popper is receiving disableEdgeDetection from popover', () => {
        // disableEdgeDetection is defaulted to false
        const popoverWithDetection = mount(popOver);
        expect(popoverWithDetection.props().disableEdgeDetection).toBeFalsy();

        // prop is correctly changed when set to true
        const popoverWithoutDetection = mount(popOverDisableEdgeDetection);
        expect(popoverWithoutDetection.props().disableEdgeDetection).toBeTruthy();
    });

    test('handle document click to close popover', () => {
        const wrapper = mount(popOver);

        // click on popover to show
        wrapper.find('div.fd-popover__control .sap-icon--cart').simulate('click');
        expect(wrapper.state('isExpanded')).toBeTruthy();

        // click on popover to hide
        wrapper.find('div.fd-popover__control .sap-icon--cart').simulate('click');
        expect(wrapper.state('isExpanded')).toBeFalsy();

        // wrapper.instance().componentWillUnmount();
    });

    test('handle esc key to close popover', () => {
        const wrapper = mount(popOver);

        // click on popover to show
        wrapper.find('div.fd-popover__control .sap-icon--cart').simulate('click');
        expect(wrapper.state('isExpanded')).toBeTruthy();

        // handle esc key
        let event = new KeyboardEvent('keydown', { keyCode: 27 });
        document.dispatchEvent(event);
        expect(wrapper.state('isExpanded')).toBeFalsy();
    });

    test('handle document click to close popover', () => {
        const wrapper = mount(popOver);

        // click on popover to show
        wrapper.find('div.fd-popover__control .sap-icon--cart').simulate('click');
        expect(wrapper.state('isExpanded')).toBeTruthy();

        // handle click on document
        let event = new MouseEvent('mousedown', {});
        document.dispatchEvent(event);
        expect(wrapper.state('isExpanded')).toBeFalsy();
    });

    test('handle document click to close popover', () => {
        const wrapper = mount(popOverDisabled);

        // click on popover to show
        wrapper.find('div.fd-popover__control .sap-icon--cart').simulate('click');
        expect(wrapper.state('isExpanded')).toBeFalsy();
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the Popover component', () => {
            const element = mount(
                <Popover
                    body={<div />}
                    control={<Icon glyph='cart' size='xl' />}
                    data-sample='Sample' />
            );

            expect(
                element.find('.fd-popover').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });

    describe('control accessibility', () => {
        test('adds a tabindex of 0 to the control', () => {
            const wrapper = mount(popOver);
            const button = wrapper.find('Icon').at(0);

            expect(button.props().tabIndex).toEqual(0);
        });

        test('adds appropriate aria-haspopup to the control', () => {
            //check unset type
            let wrapper = mount(popOver);
            let button = wrapper.find('Icon').at(0);
            expect(button.props()['aria-haspopup']).toEqual(true);

            //check valid string type
            const dialogPopover = React.cloneElement(popOver, { type: 'dialog' });
            wrapper = mount(dialogPopover);
            button = wrapper.find('Icon').at(0);
            expect(button.props()['aria-haspopup']).toEqual('dialog');
        });

        test('adds appropriate aria-expanded to the control, and updates it on state change', () => {
            const wrapper = mount(popOver);
            let button = wrapper.find('Icon').at(0);
            expect(button.props()['aria-expanded']).toEqual(false);
            wrapper.setState({ isExpanded: true }, () => {
                button = wrapper.find('Icon').at(0);
                expect(button.getDOMNode().getAttribute('aria-expanded')).toEqual('true');
            });
            wrapper.setState({ isExpanded: false }, () => {
                button = wrapper.find('Icon').at(0);
                expect(button.getDOMNode().getAttribute('aria-expanded')).toEqual('false');
            });
        });

        test('adds appropriate aria-controls to the control', () => {
            let wrapper = mount(popOver);
            let button = wrapper.find('Icon').at(0);
            expect(button.props()['aria-controls']).toEqual('fd-default-popover');

            //check undefined popperProps
            // eslint-disable-next-line no-undefined
            const propLessPopover = React.cloneElement(popOver, { popperProps: undefined } );
            wrapper = mount(propLessPopover);
            wrapper.setState({ isExpanded: true }, () => {
                const popoverContentId = document.querySelector('div.fd-popover__popper').id;
                button = wrapper.find('Icon').at(0);
                expect(button.props()['aria-controls']).toEqual(popoverContentId);
            });
        });

        test('adds a role of button to the control', () => {
            const wrapper = mount(popOver);
            const button = wrapper.find('Icon').at(0);

            expect(button.props().role).toEqual('button');
        });

        test('handle space key to open popover', () => {
            const syntheticEvent = {
                keyCode: 32,
                preventDefault: () => {}
            };
            const wrapper = mount(popOver);
            const button = wrapper.find('Icon').at(0);
            button.prop('onKeyPress')(syntheticEvent, 'Icon', wrapper.triggerBody);

            expect(wrapper.state('isExpanded')).toBeTruthy();
        });

        test('handle enter key to open popover', () => {
            const syntheticEvent = {
                keyCode: 13,
                preventDefault: () => {}
            };
            const wrapper = mount(popOver);
            const button = wrapper.find('Icon').at(0);
            button.prop('onKeyPress')(syntheticEvent, 'Icon', wrapper.triggerBody);

            expect(wrapper.state('isExpanded')).toBeTruthy();
        });
    });

    describe('widthSizingType', () => {
        const targetBoundaries = { left: 123, right: 456 };
        beforeAll(()=>{
            Object.defineProperty(window.HTMLElement.prototype, 'getBoundingClientRectTest', {
                // because of getBoundingClientRectTest cannot be redefined
                value: () => targetBoundaries,
                writable: true
            });
        });

        test('matchTarget', () => {
            const popoverWithParent = mount(popOver).setProps({ widthSizingType: 'matchTarget' });
            popoverWithParent.find('div.fd-popover__control .sap-icon--cart').simulate('click');
            const popoverStyle = popoverWithParent.find('.fd-popover__popper').prop('style');

            expect(popoverStyle).toHaveProperty('left', targetBoundaries.left);
            expect(popoverStyle).toHaveProperty('width', targetBoundaries.right - targetBoundaries.left);
        });

        test('minTarget', () => {
            const popoverWithParent = mount(popOver).setProps({ widthSizingType: 'minTarget' });
            popoverWithParent.find('div.fd-popover__control .sap-icon--cart').simulate('click');
            const popoverStyle = popoverWithParent.find('.fd-popover__popper').prop('style');

            expect(popoverStyle).toHaveProperty('left');
            const { left } = popoverStyle;
            expect(popoverStyle).toHaveProperty('minWidth', targetBoundaries.right - left);
        });

        test('maxTarget', () => {
            const popoverWithParent = mount(popOver).setProps({ widthSizingType: 'maxTarget' });
            popoverWithParent.find('div.fd-popover__control .sap-icon--cart').simulate('click');
            const popoverStyle = popoverWithParent.find('.fd-popover__popper').prop('style');

            expect(popoverStyle).toHaveProperty('left');
            const { left } = popoverStyle;
            expect(popoverStyle).toHaveProperty('maxWidth', targetBoundaries.right - left);
        });

        afterAll(()=>{
            delete window.HTMLElement.prototype.getBoundingClientRectTest;
        });
    });

    describe('Callback handler', () => {
        test('should dispatch the onClickOutside callback with the event', () => {
            let f = jest.fn();
            const element = mount(
                <Popover
                    body={<div />}
                    control={<button id='test' />}
                    onClickOutside={f} />

            );

            element.find('#test').simulate('click');

            let event = new MouseEvent('mousedown', {});
            document.dispatchEvent(event);

            expect(f).toHaveBeenCalledTimes(1);
        });
        test('should dispatch the onEscapeKey callback with the event', () => {
            let f = jest.fn();
            const element = mount(
                <Popover
                    body={<div />}
                    control={<button id='test' />}
                    onEscapeKey={f} />

            );

            element.find('#test').simulate('click');

            let event = new KeyboardEvent('keydown', { keyCode: 27 });
            document.dispatchEvent(event);

            expect(f).toHaveBeenCalledTimes(1);
        });
    });
});
