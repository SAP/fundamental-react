import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Alert } from './Alert';

Enzyme.configure({ adapter: new Adapter() });

describe('<Alert />', () => {
    const basicAlert = (
        <Alert dismissable link="#" linkText="link">
            Default alert with a
        </Alert>
    );

    const basicErrorAlert = (
        <Alert dismissable type="error" linkText="link">
            Error message with a
        </Alert>
    );

    const basicRTLAlert = (
        <Alert dismissable rtl link="#" linkText="link">
            Error message with a
        </Alert>
    );

    const nonDismissableAlert = (
        <Alert link="#" linkText="link">
            Default alert that cannot be dismissed
        </Alert>
    );

    const nonDismissableRTLAlert = (
        <Alert rtl type="warning" linkText="link">
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

        component = renderer.create(basicRTLAlert);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        component = renderer.create(nonDismissableRTLAlert);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        let wrapper = shallow(basicAlert);
        expect(wrapper.state(['isActive'])).toBeTruthy();
        wrapper.find('button.fd-alert__close').simulate('click');
        expect(wrapper.state(['isActive'])).toBeFalsy();

        wrapper = shallow(basicRTLAlert);
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
});
