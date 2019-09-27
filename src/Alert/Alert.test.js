import Alert from './Alert';
import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

describe('<Alert />', () => {
    const basicAlert = (
        <Alert dismissible link='#'
            linkText='link'>
            Default alert with a
        </Alert>
    );

    const basicErrorAlert = (
        <Alert dismissible linkText='link'
            type='error'>
            Error message with a
        </Alert>
    );

    const nonDismissibleAlert = (
        <Alert className='blue' link='#'
            linkText='link'>
            Default alert that cannot be dismissed
        </Alert>
    );

    test('create basic alert', () => {
        let component = renderer.create(basicAlert);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        component = renderer.create(basicErrorAlert);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        let wrapper = mount(basicAlert).children().children();

        expect(wrapper.state(['isActive'])).toBeTruthy();
        wrapper.find('button.fd-alert__close').simulate('click');
        expect(wrapper.state(['isActive'])).toBeFalsy();
    });

    test('create non-dismissible alert', () => {
        const component = renderer.create(nonDismissibleAlert);
        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();

        // const wrapper = shallow(basicAlert);
        // expect(wrapper.state(['isActive'])).toBeTruthy();

        // wrapper.find('button.fd-alert__close').simulate('click');
        // expect(wrapper.state(['isActive'])).toBeFalsy();
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the Alert component', () => {
            const element = mount(<Alert data-sample='Sample' />);

            expect(
                element.getDOMNode().querySelector('div').attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the Alert component\'s button element when dismissible', () => {
            const element = mount(<Alert buttonProps={{ 'data-sample': 'Sample' }} dismissible />);

            expect(
                element.find('button').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the Alert component\'s a element when link provided', () => {
            const element = mount(<Alert link='#' linkProps={{ 'data-sample': 'Sample' }} />);

            expect(
                element.find('a').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });

    describe('onClick handler', () => {
        test('should dispatch the onClick callback with the event', () => {
            let f = jest.fn();
            const element = mount(<Alert data-sample='Sample' dismissible
                onCloseClicked={f} />);

            element.find('button').simulate('click');

            expect(f).toHaveBeenCalledTimes(1);
        });
    });
});
