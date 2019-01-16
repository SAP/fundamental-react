import { Alert } from './Alert';
import React from 'react';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';

describe('<Alert />', () => {
    const basicAlert = (
        <Alert dismissable link='#'
            linkText='link'>
            Default alert with a
        </Alert>
    );

    const basicErrorAlert = (
        <Alert dismissable linkText='link'
            type='error'>
            Error message with a
        </Alert>
    );

    const nonDismissableAlert = (
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

        let wrapper = shallow(basicAlert);
        expect(wrapper.state(['isActive'])).toBeTruthy();
        wrapper.find('button.fd-alert__close').simulate('click');
        expect(wrapper.state(['isActive'])).toBeFalsy();
    });

    test('create non-dismissable alert', () => {
        const component = renderer.create(nonDismissableAlert);
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

        xtest('should allow props to be spread to the Alert component\'s button element when dismissable', () => {
            // TODO: placeholder for this test description once that functionality is built
        });

        xtest('should allow props to be spread to the Alert component\'s a element when link provided', () => {
            // TODO: placeholder for this test description once that functionality is built
        });
    });
});
