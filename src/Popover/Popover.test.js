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
            disableEdgeDetection />
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
        const wrapper = mount(popOver).children().children();

        // click on popover to show
        wrapper.find('div.fd-popover__control .sap-icon--cart').simulate('click');
        expect(wrapper.state('isExpanded')).toBeTruthy();

        // click on popover to hide
        wrapper.find('div.fd-popover__control .sap-icon--cart').simulate('click');
        expect(wrapper.state('isExpanded')).toBeFalsy();

        // wrapper.instance().componentWillUnmount();
    });

    test('handle esc key to close popover', () => {
        const wrapper = mount(popOver).children().children();

        // click on popover to show
        wrapper.find('div.fd-popover__control .sap-icon--cart').simulate('click');
        expect(wrapper.state('isExpanded')).toBeTruthy();

        // handle esc key
        let event = new KeyboardEvent('keydown', { keyCode: 27 });
        document.dispatchEvent(event);
        expect(wrapper.state('isExpanded')).toBeFalsy();
    });

    test('handle document click to close popover', () => {
        const wrapper = mount(popOver).children().children();

        // click on popover to show
        wrapper.find('div.fd-popover__control .sap-icon--cart').simulate('click');
        expect(wrapper.state('isExpanded')).toBeTruthy();

        // handle click on document
        let event = new MouseEvent('mousedown', {});
        document.dispatchEvent(event);
        expect(wrapper.state('isExpanded')).toBeFalsy();
    });

    test('handle document click to close popover', () => {
        const wrapper = mount(popOverDisabled).children().children();

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
