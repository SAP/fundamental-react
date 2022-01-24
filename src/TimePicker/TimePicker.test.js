import { mount } from 'enzyme';
import React from 'react';
import TimePicker from './TimePicker';

describe('<TimePicker />', () => {
    const defaultTimePicker = <TimePicker id='myTime' />;
    const twelveHourTime = <TimePicker format12Hours />;
    const timepickerWithInitialValue = <TimePicker value='10:30:34 pm' />;

    test('changing a value', () => {
        let wrapper = mount(defaultTimePicker);
        wrapper
            .find('input[type="text"]')
            .at(0)
            .simulate('change', { target: { value: '12:34:56' } });

        expect(wrapper.children().state('value')).toEqual('12:34:56');

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

        expect(wrapper.children().state('value')).toEqual('12:34 am');

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

        expect(wrapper.children().state('value')).toEqual('12:34 am');

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

        expect(wrapper.children().state('value')).toEqual('4:12:00 am');

        wrapper = mount(twelveHourTime);
        wrapper
            .find('input[type="text"]')
            .at(0)
            .simulate('change', { target: { value: '12:24:34 pm' } });

        expect(wrapper.children().state('value')).toEqual('12:24:34 pm');

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

        expect(wrapper.children().state('value')).toEqual('12:34 am');

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

        expect(wrapper.children().state('value')).toEqual('00:24:00 am');

        // just hour and minute, 12 hr format with pm
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
            .simulate('change', { target: { value: '10:30 pm' } });

        expect(wrapper.children().state('value')).toEqual('10:30 pm');
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

        expect(wrapper.children().state('value')).toEqual('12:34');

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

        expect(wrapper.children().state('value')).toEqual('24:34');
    });

    test('check value change', () => {
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
            .find('.fd-time__unit')
            .at(0)
            .simulate('click');
        expect(wrapper.children().state('time').hour).toEqual(9);

        wrapper
            .find('.fd-time__col')
            .at(1)
            .simulate('click');

        wrapper
            .find('.fd-time__unit')
            .at(0)
            .simulate('click');
        expect(wrapper.children().state('time').minute).toEqual(57);

        wrapper
            .find('.fd-time__col')
            .at(2)
            .simulate('click');

        wrapper
            .find('.fd-time__unit')
            .at(0)
            .simulate('click');
        expect(wrapper.children().state('time').second).toEqual(57);

        expect(wrapper.children().state('value')).toEqual('09:57:57 am');
    });

    test('check for onBlur of text input', () => {
        let wrapper = mount(<TimePicker format12Hours />);

        // check valid input
        wrapper
            .find('input[type="text"]')
            .at(0)
            .simulate('change', { target: { value: '12:34:56 am' } });

        expect(wrapper.children().state('value')).toEqual('12:34:56 am');

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

        expect(wrapper.children().state('value')).toEqual('');
    });

    test('check for onBlur of text input with initial value', () => {
        // check valid input with 12 Hour Clock
        let wrapper = mount(<TimePicker format12Hours value='10:10:10 pm' />);
        wrapper
            .find('input[type="text"]')
            .at(0)
            .simulate('blur');
        expect(wrapper.children().state('value')).toEqual('10:10:10 pm');
        // check invalid input with 12 Hour Clock
        wrapper = mount(<TimePicker format12Hours value='13:10:10 pm' />);
        wrapper
            .find('input[type="text"]')
            .at(0)
            .simulate('blur');
        expect(wrapper.children().state('value')).toEqual('');
        // check valid input with 24 Hour Clock
        wrapper = mount(<TimePicker value='23:10:10' />);
        wrapper
            .find('input[type="text"]')
            .at(0)
            .simulate('blur');
        expect(wrapper.children().state('value')).toEqual('23:10:10');
        // check invalid input with 24 Hour Clock
        wrapper = mount(<TimePicker value='25:10:10' />);
        wrapper
            .find('input[type="text"]')
            .at(0)
            .simulate('blur');
        expect(wrapper.children().state('value')).toEqual('');
        // check valid input with 12 Hour Clock with Hours and Minutes
        wrapper = mount(<TimePicker format12Hours showSecond={false}
            value='10:10 am' />);
        wrapper
            .find('input[type="text"]')
            .at(0)
            .simulate('blur');
        expect(wrapper.children().state('value')).toEqual('10:10 am');
        // check invalid input with 12 Hour Clock with Hours and Minutes
        wrapper = mount(<TimePicker format12Hours showSecond={false}
            value='13:10 an' />);
        wrapper
            .find('input[type="text"]')
            .at(0)
            .simulate('blur');
        expect(wrapper.children().state('value')).toEqual('');
        // check valid input with 24 Hour Clock with Hours and Minutes
        wrapper = mount(<TimePicker showSecond={false} value='23:10' />);
        wrapper
            .find('input[type="text"]')
            .at(0)
            .simulate('blur');
        expect(wrapper.children().state('value')).toEqual('23:10');
        // check invalid input with 24 Hour Clock with Hours and Minutes
        wrapper = mount(<TimePicker showSecond={false} value='24:10' />);
        wrapper
            .find('input[type="text"]')
            .at(0)
            .simulate('blur');
        expect(wrapper.children().state('value')).toEqual('');
    });

    test('check for initial value', () => {
        let wrapper = mount(timepickerWithInitialValue);
        expect(wrapper.children().state('value')).toEqual('10:30:34 pm');
        // check valid input
        wrapper
            .find('input[type="text"]')
            .at(0)
            .simulate('change', { target: { value: '12:34:56 am' } });

        expect(wrapper.children().state('value')).toEqual('12:34:56 am');
    });

    describe('onChange callback', () => {
        test('should call onChange after input value change', () => {
            const change = jest.fn();
            let wrapper = mount(<TimePicker onChange={change} />);
            wrapper
                .find('input[type="text"]')
                .at(0)
                .simulate('change', { target: { value: '10:34:56' } });
            expect(change).toHaveBeenCalledTimes(1);
        });
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
                element.find('div.fd-popover').first().getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
