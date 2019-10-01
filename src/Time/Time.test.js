import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import Time from './Time';

describe('<Time />', () => {
    const defaultTime = <Time />;
    const meridiemTime = <Time name='meridiem' />;
    const customTime = <Time name='custom' />;
    const twelveHour = <Time format12Hours />;
    const falseSpinners = <Time spinners={false} />;
    const hideSeconds = <Time showSecond={false} />;
    const disabledTime = <Time disabled />;
    const timeMeridiemSet = (
        <Time
            format12Hours={false}
            name='meridiem'
            time={{ hour: 22, minute: 34, second: 12, meridiem: 0 }} />
    );

    test('create time component', () => {
        // default time
        let component = renderer.create(defaultTime);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // meridiem time
        component = renderer.create(meridiemTime);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // meridiem time, with value set
        component = renderer.create(timeMeridiemSet);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // custom name for increase/decrease
        component = renderer.create(customTime);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // twelve hour time
        component = renderer.create(twelveHour);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // false spinners time
        component = renderer.create(falseSpinners);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // hide seconds time
        component = renderer.create(hideSeconds);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // disabled time
        component = renderer.create(disabledTime);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('time number up click', () => {
        const wrapper = mount(twelveHour).children().children();

        // hour timer click up
        expect(wrapper.state('time').hour).toEqual('12');
        wrapper
            .find(
                'button.fd-button--light.sap-icon--navigation-up-arrow'
            )
            .at(0)
            .simulate('click');
        expect(wrapper.state('time').hour).toEqual('01');

        // minute timer click up
        expect(wrapper.state('time').minute).toEqual('00');
        wrapper
            .find(
                'button.fd-button--light.sap-icon--navigation-up-arrow'
            )
            .at(1)
            .simulate('click');
        expect(wrapper.state('time').minute).toEqual('01');
    });

    test('time number up merdiem click', () => {
        const wrapper = mount(timeMeridiemSet).children().children();

        // hour timer click up
        expect(wrapper.state('time').hour).toEqual(22);
        wrapper
            .find(
                'button.fd-button--light.sap-icon--navigation-up-arrow'
            )
            .at(0)
            .simulate('click');
        expect(wrapper.state('time').hour).toEqual(23);

        // minute timer click up
        expect(wrapper.state('time').minute).toEqual(34);
        wrapper
            .find(
                'button.fd-button--light.sap-icon--navigation-up-arrow'
            )
            .at(1)
            .simulate('click');
        expect(wrapper.state('time').minute).toEqual(35);
    });
    //TO DO: what is this test even trying to test?
    xtest('time number down click on merdiem time', () => {
        const wrapper = mount(meridiemTime).children().children();
        // hour timer click down
        expect(wrapper.state('time').hour).toEqual('12');
        // 3 down clicks
        for (let i = 0; i < 3; i += 1) {
            wrapper
                .find(
                    'button.fd-button--light.sap-icon--navigation-down-arrow'
                )
                .at(0)
                .simulate('click');
        }
        expect(wrapper.state('time').hour).toEqual('09');

        // minute timer click down
        expect(wrapper.state('time').minute).toEqual('00');
        wrapper
            .find(
                'button.fd-button--light.sap-icon--navigation-down-arrow'
            )
            .at(1)
            .simulate('click');
        expect(wrapper.state('time').minute).toEqual(59);
    });

    test('time number down click', () => {
        let wrapper = mount(twelveHour).children().children();

        // hour timer click down
        expect(wrapper.state('time').hour).toEqual('12');
        wrapper
            .find(
                'button.fd-button--light.sap-icon--navigation-down-arrow'
            )
            .at(0)
            .simulate('click');
        expect(wrapper.state('time').hour).toEqual(11);

        // minute timer click down
        expect(wrapper.state('time').minute).toEqual('00');
        wrapper
            .find(
                'button.fd-button--light.sap-icon--navigation-down-arrow'
            )
            .at(1)
            .simulate('click');
        expect(wrapper.state('time').minute).toEqual(59);
    });

    // Down arrow clicks
    test('clicking down on meridiem', () => {
        let wrapper = mount(
            <Time
                format12Hours
                name='meridiem'
                time={{ hour: 0, minute: 0, second: 0, meridiem: 0 }} />
        ).children().children();
        expect(wrapper.state('time').hour).toEqual(0);
        wrapper
            .find(
                'button.fd-button--light.sap-icon--navigation-down-arrow'
            )
            .at(3)
            .simulate('click');
        expect(wrapper.state('time').hour).toEqual(0);
        expect(wrapper.state('time').minute).toEqual(0);
        expect(wrapper.state('time').second).toEqual(0);
    });

    test('clicking down on hours', () => {
        let wrapper = mount(
            <Time
                format12Hours={false}
                name='meridiem'
                time={{ hour: 0, minute: 0, second: 0, meridiem: 0 }} />
        ).children().children();
        expect(wrapper.state('time').hour).toEqual(0);
        wrapper
            .find(
                'button.fd-button--light.sap-icon--navigation-down-arrow'
            )
            .at(0)
            .simulate('click');
        expect(wrapper.state('time').hour).toEqual(23);
        expect(wrapper.state('time').minute).toEqual(0);
        expect(wrapper.state('time').second).toEqual(0);

        wrapper = mount(
            <Time
                format12Hours
                name='meridiem'
                time={{ hour: 1, minute: 0, second: 0, meridiem: 0 }} />
        ).children().children();
        expect(wrapper.state('time').hour).toEqual(1);
        wrapper
            .find(
                'button.fd-button--light.sap-icon--navigation-down-arrow'
            )
            .at(0)
            .simulate('click');
        expect(wrapper.state('time').hour).toEqual(12);
        expect(wrapper.state('time').minute).toEqual(0);
        expect(wrapper.state('time').second).toEqual(0);
        expect(wrapper.state('time').meridiem).toEqual(0);

        wrapper = mount(
            <Time
                format12Hours
                name='meridiem'
                time={{ hour: 12, minute: 0, second: 0, meridiem: 0 }} />
        ).children().children();
        expect(wrapper.state('time').hour).toEqual(12);
        wrapper
            .find(
                'button.fd-button--light.sap-icon--navigation-down-arrow'
            )
            .at(0)
            .simulate('click');
        expect(wrapper.state('time').hour).toEqual(11);
        expect(wrapper.state('time').minute).toEqual(0);
        expect(wrapper.state('time').second).toEqual(0);
        expect(wrapper.state('time').meridiem).toEqual(1);
    });

    test('clicking down on minutes', () => {
        let wrapper = mount(
            <Time
                format12Hours={false}
                name='meridiem'
                time={{ hour: 1, minute: 0, second: 0, meridiem: 0 }} />
        ).children().children();
        expect(wrapper.state('time').minute).toEqual(0);
        wrapper
            .find(
                'button.fd-button--light.sap-icon--navigation-down-arrow'
            )
            .at(1)
            .simulate('click');
        expect(wrapper.state('time').hour).toEqual('00');
        expect(wrapper.state('time').minute).toEqual(59);
        expect(wrapper.state('time').second).toEqual(0);

        wrapper = mount(
            <Time
                format12Hours
                name='meridiem'
                time={{ hour: 1, minute: 0, second: 0, meridiem: 0 }} />
        ).children().children();
        expect(wrapper.state('time').minute).toEqual(0);
        wrapper
            .find(
                'button.fd-button--light.sap-icon--navigation-down-arrow'
            )
            .at(1)
            .simulate('click');
        expect(wrapper.state('time').hour).toEqual(12);
        expect(wrapper.state('time').minute).toEqual(59);
        expect(wrapper.state('time').second).toEqual(0);
        expect(wrapper.state('time').meridiem).toEqual(0);

        wrapper = mount(
            <Time
                format12Hours
                name='meridiem'
                time={{ hour: 12, minute: 0, second: 0, meridiem: 0 }} />
        ).children().children();
        expect(wrapper.state('time').minute).toEqual(0);
        wrapper
            .find(
                'button.fd-button--light.sap-icon--navigation-down-arrow'
            )
            .at(1)
            .simulate('click');
        expect(wrapper.state('time').hour).toEqual(11);
        expect(wrapper.state('time').minute).toEqual(59);
        expect(wrapper.state('time').second).toEqual(0);
        expect(wrapper.state('time').meridiem).toEqual(1);
    });

    test('clicking down seconds', () => {
        let wrapper = mount(
            <Time
                format12Hours={false}
                name='meridiem'
                time={{ hour: 0, minute: 0, second: 0, meridiem: 0 }} />
        ).children().children();
        expect(wrapper.state('time').second).toEqual(0);
        wrapper
            .find(
                'button.fd-button--light.sap-icon--navigation-down-arrow'
            )
            .at(2)
            .simulate('click');
        expect(wrapper.state('time').hour).toEqual(23);
        expect(wrapper.state('time').minute).toEqual(59);
        expect(wrapper.state('time').second).toEqual(59);

        wrapper = mount(
            <Time
                format12Hours
                name='meridiem'
                time={{ hour: 1, minute: 0, second: 0, meridiem: 0 }} />
        ).children().children();
        expect(wrapper.state('time').second).toEqual(0);
        wrapper
            .find(
                'button.fd-button--light.sap-icon--navigation-down-arrow'
            )
            .at(2)
            .simulate('click');
        expect(wrapper.state('time').hour).toEqual(12);
        expect(wrapper.state('time').minute).toEqual(59);
        expect(wrapper.state('time').second).toEqual(59);
        expect(wrapper.state('time').meridiem).toEqual(0);

        wrapper = mount(
            <Time
                format12Hours
                name='meridiem'
                time={{ hour: 12, minute: 0, second: 0, meridiem: 0 }} />
        ).children().children();
        expect(wrapper.state('time').second).toEqual(0);
        wrapper
            .find(
                'button.fd-button--light.sap-icon--navigation-down-arrow'
            )
            .at(2)
            .simulate('click');
        expect(wrapper.state('time').hour).toEqual(11);
        expect(wrapper.state('time').minute).toEqual(59);
        expect(wrapper.state('time').second).toEqual(59);
        expect(wrapper.state('time').meridiem).toEqual(1);
    });

    // Up arrow clicks
    test('clicking up on meridiem', () => {
        let wrapper = mount(
            <Time
                format12Hours
                name='meridiem'
                time={{ hour: 0, minute: 0, second: 0, meridiem: 0 }} />
        ).children().children();
        expect(wrapper.state('time').hour).toEqual(0);
        wrapper
            .find(
                'button.fd-button--light.sap-icon--navigation-up-arrow'
            )
            .at(3)
            .simulate('click');
        expect(wrapper.state('time').hour).toEqual(0);
        expect(wrapper.state('time').minute).toEqual(0);
        expect(wrapper.state('time').second).toEqual(0);
    });

    test('clicking up on hours', () => {
        let wrapper = mount(
            <Time
                format12Hours={false}
                name='meridiem'
                time={{ hour: 0, minute: 0, second: 0, meridiem: 0 }} />
        ).children().children();
        expect(wrapper.state('time').hour).toEqual(0);
        wrapper
            .find(
                'button.fd-button--light.sap-icon--navigation-up-arrow'
            )
            .at(0)
            .simulate('click');
        expect(wrapper.state('time').hour).toEqual('01');
        expect(wrapper.state('time').minute).toEqual(0);
        expect(wrapper.state('time').second).toEqual(0);

        wrapper = mount(
            <Time
                format12Hours={false}
                name='meridiem'
                time={{ hour: 23, minute: 0, second: 0, meridiem: 0 }} />
        ).children().children();
        expect(wrapper.state('time').hour).toEqual(23);
        wrapper
            .find(
                'button.fd-button--light.sap-icon--navigation-up-arrow'
            )
            .at(0)
            .simulate('click');
        expect(wrapper.state('time').hour).toEqual('00');

        wrapper = mount(
            <Time
                format12Hours
                name='meridiem'
                time={{ hour: 1, minute: 0, second: 0, meridiem: 0 }} />
        ).children().children();
        expect(wrapper.state('time').hour).toEqual(1);
        wrapper
            .find(
                'button.fd-button--light.sap-icon--navigation-up-arrow'
            )
            .at(0)
            .simulate('click');
        expect(wrapper.state('time').hour).toEqual('02');
        expect(wrapper.state('time').minute).toEqual(0);
        expect(wrapper.state('time').second).toEqual(0);
        expect(wrapper.state('time').meridiem).toEqual(0);

        wrapper = mount(
            <Time
                format12Hours
                name='meridiem'
                time={{ hour: 12, minute: 0, second: 0, meridiem: 0 }} />
        ).children().children();
        expect(wrapper.state('time').hour).toEqual(12);
        wrapper
            .find(
                'button.fd-button--light.sap-icon--navigation-up-arrow'
            )
            .at(0)
            .simulate('click');
        expect(wrapper.state('time').hour).toEqual('01');
        expect(wrapper.state('time').minute).toEqual(0);
        expect(wrapper.state('time').second).toEqual(0);
        expect(wrapper.state('time').meridiem).toEqual(0);

        wrapper = mount(
            <Time
                format12Hours
                name='meridiem'
                time={{ hour: 11, minute: 0, second: 0, meridiem: 0 }} />
        ).children().children();
        expect(wrapper.state('time').hour).toEqual(11);
        wrapper
            .find(
                'button.fd-button--light.sap-icon--navigation-up-arrow'
            )
            .at(0)
            .simulate('click');
        expect(wrapper.state('time').hour).toEqual(12);
        expect(wrapper.state('time').meridiem).toEqual(1);
    });

    test('clicking up on minutes', () => {
        let wrapper = mount(
            <Time
                format12Hours={false}
                name='meridiem'
                time={{ hour: 1, minute: 0, second: 0, meridiem: 0 }} />
        ).children().children();
        expect(wrapper.state('time').minute).toEqual(0);
        wrapper
            .find(
                'button.fd-button--light.sap-icon--navigation-up-arrow'
            )
            .at(1)
            .simulate('click');
        expect(wrapper.state('time').hour).toEqual(1);
        expect(wrapper.state('time').minute).toEqual('01');
        expect(wrapper.state('time').second).toEqual(0);

        wrapper = mount(
            <Time
                format12Hours={false}
                name='meridiem'
                time={{ hour: 24, minute: 59, second: 0, meridiem: 0 }} />
        ).children().children();
        expect(wrapper.state('time').minute).toEqual(59);
        wrapper
            .find(
                'button.fd-button--light.sap-icon--navigation-up-arrow'
            )
            .at(1)
            .simulate('click');
        expect(wrapper.state('time').hour).toEqual('00');
        expect(wrapper.state('time').minute).toEqual('00');

        wrapper = mount(
            <Time
                format12Hours
                name='meridiem'
                time={{ hour: 1, minute: 0, second: 0, meridiem: 0 }} />
        ).children().children();
        expect(wrapper.state('time').minute).toEqual(0);
        wrapper
            .find(
                'button.fd-button--light.sap-icon--navigation-up-arrow'
            )
            .at(1)
            .simulate('click');
        expect(wrapper.state('time').hour).toEqual(1);
        expect(wrapper.state('time').minute).toEqual('01');
        expect(wrapper.state('time').second).toEqual(0);
        expect(wrapper.state('time').meridiem).toEqual(0);

        wrapper = mount(
            <Time
                format12Hours
                name='meridiem'
                time={{ hour: 1, minute: 59, second: 0, meridiem: 0 }} />
        ).children().children();
        expect(wrapper.state('time').hour).toEqual(1);
        expect(wrapper.state('time').minute).toEqual(59);

        wrapper
            .find(
                'button.fd-button--light.sap-icon--navigation-up-arrow'
            )
            .at(1)
            .simulate('click');
        expect(wrapper.state('time').hour).toEqual('01');
        expect(wrapper.state('time').minute).toEqual('00');

        wrapper = mount(
            <Time
                format12Hours
                name='meridiem'
                time={{ hour: 11, minute: 59, second: 0, meridiem: 0 }} />
        ).children().children();
        expect(wrapper.state('time').hour).toEqual(11);
        expect(wrapper.state('time').minute).toEqual(59);

        wrapper
            .find(
                'button.fd-button--light.sap-icon--navigation-up-arrow'
            )
            .at(1)
            .simulate('click');
        expect(wrapper.state('time').hour).toEqual(12);
        expect(wrapper.state('time').minute).toEqual('00');
        expect(wrapper.state('time').meridiem).toEqual(1);

        wrapper = mount(
            <Time
                format12Hours
                name='meridiem'
                time={{ hour: 12, minute: 0, second: 0, meridiem: 0 }} />
        ).children().children();
        expect(wrapper.state('time').minute).toEqual(0);
        wrapper
            .find(
                'button.fd-button--light.sap-icon--navigation-up-arrow'
            )
            .at(1)
            .simulate('click');
        expect(wrapper.state('time').hour).toEqual(12);
        expect(wrapper.state('time').minute).toEqual('01');
        expect(wrapper.state('time').second).toEqual(0);
        expect(wrapper.state('time').meridiem).toEqual(0);

        wrapper = mount(
            <Time
                format12Hours
                name='meridiem'
                time={{ hour: 12, minute: 59, second: 0, meridiem: 0 }} />
        ).children().children();
        expect(wrapper.state('time').minute).toEqual(59);
        wrapper
            .find(
                'button.fd-button--light.sap-icon--navigation-up-arrow'
            )
            .at(1)
            .simulate('click');
        expect(wrapper.state('time').hour).toEqual(12);
        expect(wrapper.state('time').minute).toEqual('00');
        expect(wrapper.state('time').second).toEqual(0);
        expect(wrapper.state('time').meridiem).toEqual(0);
    });

    test('clicking up seconds', () => {
        let wrapper = mount(
            <Time
                format12Hours={false}
                name='meridiem'
                time={{ hour: 0, minute: 58, second: 59, meridiem: 0 }} />
        ).children().children();
        expect(wrapper.state('time').second).toEqual(59);
        wrapper
            .find(
                'button.fd-button--light.sap-icon--navigation-up-arrow'
            )
            .at(2)
            .simulate('click');
        expect(wrapper.state('time').hour).toEqual(0);
        expect(wrapper.state('time').minute).toEqual(59);
        expect(wrapper.state('time').second).toEqual('00');

        wrapper = mount(
            <Time
                format12Hours={false}
                name='meridiem'
                time={{ hour: 0, minute: 59, second: 59, meridiem: 0 }} />
        ).children().children();
        expect(wrapper.state('time').second).toEqual(59);
        wrapper
            .find(
                'button.fd-button--light.sap-icon--navigation-up-arrow'
            )
            .at(2)
            .simulate('click');
        expect(wrapper.state('time').hour).toEqual('01');
        expect(wrapper.state('time').minute).toEqual('00');
        expect(wrapper.state('time').second).toEqual('00');

        wrapper = mount(
            <Time
                format12Hours
                name='meridiem'
                time={{ hour: 1, minute: 0, second: 0, meridiem: 0 }} />
        ).children().children();
        expect(wrapper.state('time').second).toEqual(0);
        wrapper
            .find(
                'button.fd-button--light.sap-icon--navigation-up-arrow'
            )
            .at(2)
            .simulate('click');
        expect(wrapper.state('time').hour).toEqual(1);
        expect(wrapper.state('time').minute).toEqual(0);
        expect(wrapper.state('time').second).toEqual('01');
        expect(wrapper.state('time').meridiem).toEqual(0);

        wrapper = mount(
            <Time
                format12Hours
                name='meridiem'
                time={{ hour: 12, minute: 0, second: 0, meridiem: 0 }} />
        ).children().children();
        expect(wrapper.state('time').second).toEqual(0);
        wrapper
            .find(
                'button.fd-button--light.sap-icon--navigation-up-arrow'
            )
            .at(2)
            .simulate('click');
        expect(wrapper.state('time').hour).toEqual(12);
        expect(wrapper.state('time').minute).toEqual(0);
        expect(wrapper.state('time').second).toEqual('01');
        expect(wrapper.state('time').meridiem).toEqual(0);
    });

    test('enter in time value', () => {
        const wrapper = mount(defaultTime).children().children();
        wrapper
            .find('.fd-input')
            .at(0)
            .simulate('change', { target: { value: '123' } });
        expect(wrapper.state('time').hour).toEqual('123');

        wrapper
            .find('.fd-input')
            .at(0)
            .simulate('change', { target: { value: '12' } });
        expect(wrapper.state('time').hour).toEqual('12');
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the Time component', () => {
            const element = mount(<Time data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
