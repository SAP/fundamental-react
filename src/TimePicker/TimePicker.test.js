import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import TimePicker from './TimePicker';

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
        let wrapper = mount(defaultTimePicker).children().children();
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
        ).children().children();
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
        ).children().children();
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
        ).children().children();
        wrapper
            .find('input[type="text"]')
            .at(0)
            .simulate('change', { target: { value: '4:12:00 am' } });

        expect(wrapper.state('value')).toEqual('4:12:00 am');

        wrapper = mount(twelveHourTime).children().children();
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
        ).children().children();
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
        ).children().children();
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
        ).children().children();
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
        ).children().children();

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

        wrapper.find('button').simulate('click');

        wrapper
            .find('.fd-input')
            .at(1)
            .simulate('change', { target: { value: fullTime.hour } });
        expect(wrapper.children().children().state('time').hour).toEqual(fullTime.hour);

        wrapper
            .find('.fd-input')
            .at(2)
            .simulate('change', { target: { value: fullTime.minute } });
        expect(wrapper.children().children().state('time').minute).toEqual(fullTime.minute);

        wrapper
            .find('.fd-input')
            .at(3)
            .simulate('change', { target: { value: fullTime.second } });
        expect(wrapper.children().children().state('time').second).toEqual(fullTime.second);

        expect(wrapper.children().children().state('value')).toEqual('12:29:34 am');
    });

    test('check for onBlur of text input', () => {
        let wrapper = mount(<TimePicker format12Hours />).children().children();

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
        test('should allow props to be spread to the TimePicker component', () => {
            const element = mount(<TimePicker data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the TimePicker component\'s Time component', () => {
            const element = mount(<TimePicker id='id' timeProps={{ 'data-sample': 'Sample' }} />);

            element.find('button').simulate('click');

            expect(
                element.find('.fd-time').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the TimePicker component\'s Popover component', () => {
            const element = mount(<TimePicker id='testId' popoverProps={{ 'data-sample': 'Sample' }} />);
            element.find('button').simulate('click');
            expect(
                element.find('div.fd-popover').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
