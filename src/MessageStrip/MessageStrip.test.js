import MessageStrip from './MessageStrip';
import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

describe('<MessageStrip />', () => {
    const basicMessageStrip = (
        <MessageStrip dismissible link='#'
            linkText='link'>
            Default MessageStrip with a
        </MessageStrip>
    );

    const basicErrorMessageStrip = (
        <MessageStrip dismissible linkText='link'
            type='error'>
            Error message with a
        </MessageStrip>
    );

    const nonDismissibleMessageStrip = (
        <MessageStrip className='blue' link='#'
            linkText='link'>
            Default MessageStrip that cannot be dismissed
        </MessageStrip>
    );

    test('create basic MessageStrip', () => {
        let component = renderer.create(basicMessageStrip);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        component = renderer.create(basicErrorMessageStrip);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        let wrapper = mount(basicMessageStrip);

        expect(wrapper.exists('.fd-message-strip')).toBe(true);
        wrapper.find('button.fd-message-strip__close').simulate('click');

        expect(wrapper.exists('.fd-message-strip')).toBe(false);
    });

    test('create non-dismissible MessageStrip', () => {
        const component = renderer.create(nonDismissibleMessageStrip);
        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();

        // const wrapper = shallow(basicMessageStrip);
        // expect(wrapper.state(['isActive'])).toBeTruthy();

        // wrapper.find('button.fd-message-strip__close').simulate('click');
        // expect(wrapper.state(['isActive'])).toBeFalsy();
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the MessageStrip component', () => {
            const element = mount(<MessageStrip data-sample='Sample' />);

            expect(
                element.getDOMNode().querySelector('div').attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the MessageStrip component\'s button element when dismissible', () => {
            const element = mount(<MessageStrip buttonProps={{ 'data-sample': 'Sample' }} dismissible />);

            expect(
                element.find('button').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the MessageStrip component\'s a element when link provided', () => {
            const element = mount(<MessageStrip link='#' linkProps={{ 'data-sample': 'Sample' }} />);

            expect(
                element.find('a').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });

    describe('onClick handler', () => {
        test('should dispatch the onClick callback with the event', () => {
            let f = jest.fn();
            const element = mount(<MessageStrip data-sample='Sample' dismissible
                onCloseClicked={f} />);

            element.find('button').simulate('click');

            expect(f).toHaveBeenCalledTimes(1);
        });
    });
});
