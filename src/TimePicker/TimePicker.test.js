import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import { TimePicker } from './TimePicker';

describe('<TimePicker />', () => {
    const defaultTimePicker = <TimePicker id='myTime' />;
    const twelveHourTime = <TimePicker format12Hours />;
    const showHour = <TimePicker format12Hours showHour />;
    const showMinute = <TimePicker format12Hours showMinute />;
    const showSecond = <TimePicker format12Hours showSecond />;
    const showHourMinute = (
        <TimePicker format12Hours={false} showHour={false}
            showMinute />
    );
    const showMinuteSecond = (
        <TimePicker
            format12Hours
            showHour={false}
            showMinute
            showSecond />
    );
    const showHourSecond = (
        <TimePicker
            format12Hours
            showHour
            showMinute={false}
            showSecond />
    );
    const noSecondTime = <TimePicker showSecond={false} />;
    const disabledTime = <TimePicker disabled />;
    test('create time picker', () => {
        // default time picker
        let component = renderer.create(defaultTimePicker);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // twelve hour time picker
        component = renderer.create(twelveHourTime);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // no seconds time picker
        component = renderer.create(noSecondTime);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // disabled time picker
        component = renderer.create(disabledTime);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        component = renderer.create(showHour);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        component = renderer.create(showSecond);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        component = renderer.create(showMinute);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        component = renderer.create(showHourMinute);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        component = renderer.create(showMinuteSecond);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        component = renderer.create(showHourSecond);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('changing a value', () => {
        let wrapper = mount(defaultTimePicker);
        wrapper
            .find('input[type="text"]')
            .at(0)
            .simulate('change', { target: { value: '12:34:56' } });

        expect(wrapper.state('value')).toEqual('12:34:56');

        wrapper = mount(
            <TimePicker
                format12Hours={false}
                showHour
                showMinute
                showSecond />
        );
        wrapper
            .find('input[type="text"]')
            .at(0)
            .simulate('change', { target: { value: '12:34 am' } });

        expect(wrapper.state('value')).toEqual('12:34 am');

        wrapper = mount(
            <TimePicker
                format12Hours
                showHour={false}
                showMinute
                showSecond />
        );
        wrapper
            .find('input[type="text"]')
            .at(0)
            .simulate('change', { target: { value: '12:34 am' } });

        expect(wrapper.state('value')).toEqual('12:34 am');

        wrapper = mount(
            <TimePicker
                format12Hours
                showHour={false}
                showMinute
                showSecond={false} />
        );
        wrapper
            .find('input[type="text"]')
            .at(0)
            .simulate('change', { target: { value: '4:12:00 am' } });

        expect(wrapper.state('value')).toEqual('4:12:00 am');

        wrapper = mount(twelveHourTime);
        wrapper
            .find('input[type="text"]')
            .at(0)
            .simulate('change', { target: { value: '12:24:34 pm' } });

        expect(wrapper.state('value')).toEqual('12:24:34 pm');

        // just hour and minute,  12 hr format
        wrapper = mount(
            <TimePicker
                format12Hours
                showHour
                showMinute
                showSecond={false} />
        );
        wrapper
            .find('input[type="text"]')
            .at(0)
            .simulate('change', { target: { value: '12:34 am' } });

        expect(wrapper.state('value')).toEqual('12:34 am');

        // just minute, 12 hr format
        wrapper = mount(
            <TimePicker
                format12Hours
                showHour={false}
                showMinute
                showSecond={false} />
        );
        wrapper
            .find('input[type="text"]')
            .at(0)
            .simulate('change', { target: { value: '00:24:00 am' } });

        expect(wrapper.state('value')).toEqual('00:24:00 am');

        // just hour and minute, no 12 hr format
        wrapper = mount(
            <TimePicker
                format12Hours={false}
                showHour
                showMinute
                showSecond={false} />
        );
        wrapper
            .find('input[type="text"]')
            .at(0)
            .simulate('change', { target: { value: '12:34' } });

        expect(wrapper.state('value')).toEqual('12:34');

        // just minute and second, no 12 hr format
        wrapper = mount(
            <TimePicker
                format12Hours={false}
                showHour={false}
                showMinute
                showSecond />
        );

        wrapper
            .find('input[type="text"]')
            .at(0)
            .simulate('change', { target: { value: '24:34' } });

        expect(wrapper.state('value')).toEqual('24:34');
    });

    test('check value change', () => {
        const fullTime = {
            hour: '12',
            minute: '29',
            second: '34',
            meridiem: 'pm'
        };
        // just minute and second, no 12 hr format
        let wrapper = mount(
            <TimePicker
                format12Hours
                showHour
                showMinute
                showSecond />
        );

        wrapper
            .find('input[type="text"]')
            .at(1)
            .simulate('change', { target: { value: fullTime.hour } });
        expect(wrapper.state('time').hour).toEqual(fullTime.hour);

        wrapper
            .find('input[type="text"]')
            .at(2)
            .simulate('change', { target: { value: fullTime.minute } });
        expect(wrapper.state('time').minute).toEqual(fullTime.minute);

        wrapper
            .find('input[type="text"]')
            .at(3)
            .simulate('change', { target: { value: fullTime.second } });
        expect(wrapper.state('time').second).toEqual(fullTime.second);

        expect(wrapper.state('value')).toEqual('12:29:34 am');
    });

    test('check for onBlur of text input', () => {
        let wrapper = mount(<TimePicker format12Hours />);

        // check valid input
        wrapper
            .find('input[type="text"]')
            .at(0)
            .simulate('change', { target: { value: '12:34:56 am' } });

        expect(wrapper.state('value')).toEqual('12:34:56 am');

        wrapper
            .find('input[type="text"]')
            .at(0)
            .simulate('blur');

        // check incorrect input, blur
        wrapper
            .find('input[type="text"]')
            .at(0)
            .simulate('change', { target: { value: '123456 am' } });

        wrapper
            .find('input[type="text"]')
            .at(0)
            .simulate('blur');

        expect(wrapper.state('value')).toEqual('');
    });

    describe('Prop spreading', () => {
        xtest('should allow props to be spread to the TimePicker component', () => {
            // TODO: placeholder for this test description once that functionality is built

            // NOTE: there are numerous other elements and components contained within TimePicker
            // so there should be tests added for each once the functionality is present.

            const element = mount(<TimePicker data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
