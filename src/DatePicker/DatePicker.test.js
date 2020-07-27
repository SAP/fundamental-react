/* eslint-disable compat/compat */
import DatePicker from '../DatePicker/DatePicker';
import moment from 'moment';
import { mount } from 'enzyme';

import React from 'react';

describe('<DatePicker />', () => {
    const defaultDatePicker = <DatePicker dateFormat='MM/DD/YYYY' />;
    const disabledFuturePicker = <DatePicker disableFutureDates />;
    const disabledFutureRangePicker = <DatePicker disableFutureDates enableRangeSelection />;
    const compactDatePicker = <DatePicker className='blue' compact />;
    const rangeDatePicker = <DatePicker dateFormat='MM/DD/YYYY' enableRangeSelection />;
    const compactRangeDatepicker = <DatePicker compact enableRangeSelection />;
    const prePopulatedDatepicker = <DatePicker dateFormat='MM/DD/YYYY' defaultValue='03/13/2020' />;
    let wrapper;

    afterAll(() => {
        wrapper.unmount();
    });

    test('create Date picker components', () => {
        mount(defaultDatePicker);
        mount(compactDatePicker);
        mount(rangeDatePicker);
        mount(compactRangeDatepicker);
    });

    test('adds a custom className to the outermost div', () => {
        wrapper = mount(<DatePicker className='my-class-name' />);
        expect(wrapper.find('div.my-class-name').length).toBe(1);
    });

    test('start date and end date range', () => {
        wrapper = mount(rangeDatePicker);
        // set dates
        let startRangeDate = moment();
        let endRangeDate = moment();
        endRangeDate.add(3, 'day');

        let arrDates = [startRangeDate, endRangeDate];
        wrapper.instance().updateDate(arrDates);

        expect(wrapper.state('arrSelectedDates').length).toEqual(2);

        //trigger onBlur by clicking outside
        simulateBlur();

        // check to make sure calendar is not expanded
        expect(wrapper.state('isExpanded')).toBeFalsy();
    });

    test('check start date greater than end date for range', () => {
        wrapper = mount(rangeDatePicker);
        // set dates
        let startRangeDate = moment();
        let endRangeDate = moment();
        endRangeDate.add(3, 'day');

        let arrDates = [startRangeDate, endRangeDate];

        // make start date bigger than end date
        arrDates = [endRangeDate, startRangeDate];
        wrapper.instance().updateDate(arrDates);

        let switchFormattedDate = `${endRangeDate.format('L')} - ${startRangeDate.format('L')}`;

        expect(wrapper.state('formattedDate')).toEqual(switchFormattedDate);
        expect(wrapper.state('arrSelectedDates').length).toEqual(2);

        //trigger onBlur by clicking outside
        simulateBlur();

        // check to make sure calendar is not expanded
        expect(wrapper.state('isExpanded')).toBeFalsy();
    });

    test('entering start date and disabled end range dates', () => {
        wrapper = mount(disabledFutureRangePicker);
        // set dates
        let startRangeDate = moment();
        let endRangeDate = moment();
        endRangeDate.add(3, 'day');

        let startDate = `${startRangeDate.month() +
            1}/${startRangeDate.date()}/${startRangeDate.year()}`;
        let endDate = `${endRangeDate.month() +
            1}/${endRangeDate.date()}/${endRangeDate.year()}`;

        wrapper.find('input[type="text"]')
            .simulate('change', { target: { value: `${startDate}-${endDate}` } });

        wrapper.find('input[type="text"]').simulate('keypress', { key: 'Enter' });

        expect(wrapper.state('arrSelectedDates')).toEqual([]);
    });

    test('updateDate method', () => {
        // choose one day in default picker
        const ISO_FORMAT = 'YYYY-MM-DD';
        wrapper = mount(defaultDatePicker);
        const date = moment();
        wrapper.instance().updateDate(date);
        expect(wrapper.state('selectedDate')).toEqual(date);
        let formattedDate = date.format('L');
        expect(wrapper.state('formattedDate')).toEqual(formattedDate);
        let isoFormattedDate = date.format(ISO_FORMAT);
        expect(wrapper.state('isoFormattedDate')).toEqual(isoFormattedDate);

        // choose 1 day in range picker
        wrapper = mount(rangeDatePicker);
        let startRangeDate = moment();

        let arrDates = [startRangeDate];
        wrapper.instance().updateDate(arrDates);

        formattedDate = startRangeDate.format('L');
        isoFormattedDate = startRangeDate.format(ISO_FORMAT);
        expect(wrapper.state('formattedDate')).toEqual(formattedDate);
        expect(wrapper.state('arrSelectedDates').length).toEqual(1);
        expect(wrapper.state('isoFormattedDate')).toEqual(isoFormattedDate);

        // choose 2 days in range picker
        wrapper = mount(rangeDatePicker);
        startRangeDate = moment();
        let endRangeDate = moment();
        endRangeDate.add(3, 'day');

        arrDates = [startRangeDate, endRangeDate];
        wrapper.instance().updateDate(arrDates);

        formattedDate = `${startRangeDate.format('L')} - ${endRangeDate.format('L')}`;
        isoFormattedDate = `${startRangeDate.format(ISO_FORMAT)} - ${endRangeDate.format(ISO_FORMAT)}`;

        expect(wrapper.state('formattedDate')).toEqual(formattedDate);
        expect(wrapper.state('arrSelectedDates').length).toEqual(2);
        expect(wrapper.state('isoFormattedDate')).toEqual(isoFormattedDate);
    });

    test('pressing enter key on date input', () => {
        wrapper = mount(rangeDatePicker);

        wrapper.find('input[type="text"]')
            .simulate('change', { target: { value: '3.16.20 - 3.19.20' } });

        wrapper.find('input[type="text"]').simulate('keypress', { key: 'Enter' });

        expect(wrapper.state('formattedDate')).toEqual('03/16/2020 - 03/19/2020');
        expect(wrapper.state('arrSelectedDates').length).toEqual(2);
    });

    test('pressing enter key on date input where start date > than end date', () => {
        wrapper = mount(rangeDatePicker);

        // set start date greater than end date
        wrapper.find('input[type="text"]')
            .simulate('change', { target: { value: '3.19.20 - 3.16.20' } });

        wrapper.find('input[type="text"]').simulate('keypress', { key: 'Enter' });

        //check if date start date is less than end date i.e. switched
        expect(wrapper.state('formattedDate')).toEqual('03/16/2020 - 03/19/2020');
        expect(wrapper.state('arrSelectedDates').length).toEqual(2);
    });

    test('enter a valid date string', () => {
        // enter a valid date input
        wrapper = mount(defaultDatePicker);
        let date = moment().startOf('day');
        let formattedDate = date.format('L');
        wrapper.find('input[type="text"]')
            .simulate('change', { target: { value: formattedDate } });

        expect(wrapper.state('formattedDate')).toEqual(formattedDate);
        wrapper.find('input[type="text"]').simulate('keypress', { key: 'Enter' });

        expect(wrapper.state('selectedDate').toDate()).toEqual(date.toDate());
    });

    test('enter a disabled date string', () => {
        // enter a valid date input
        wrapper = mount(disabledFuturePicker);
        let date = moment().add(1, 'days');
        let formattedDate = date.format('L');
        wrapper.find('input[type="text"]')
            .simulate('change', { target: { value: formattedDate } });

        expect(wrapper.state('formattedDate')).toEqual(formattedDate);
        wrapper.find('input[type="text"]').simulate('keypress', { key: 'Enter' });

        expect(wrapper.state('selectedDate')).toEqual(null);
    });

    test('enter text string for date', () => {
        wrapper = mount(defaultDatePicker);

        wrapper.find('input[type="text"]')
            .simulate('change', { target: { value: 'May 14th, 2018' } });

        wrapper.find('input[type="text"]').simulate('keypress', { key: 'Enter' });

        expect(wrapper.state('formattedDate')).toEqual('');
    });

    test('enter text string for date on date range component', () => {
        wrapper = mount(rangeDatePicker);

        wrapper.find('input[type="text"]')
            .simulate('change', { target: { value: 'May 14th, 2018 - May 15th, 2018' } });

        wrapper.find('input[type="text"]').simulate('keypress', { key: 'Enter' });

        expect(wrapper.state('formattedDate')).toEqual('');
    });

    test('modify date on change', () => {
        wrapper = mount(defaultDatePicker);
        wrapper
            .find('input[type="text"]')
            .simulate('change', { target: { value: '05/04/2018' } });
        expect(wrapper.state('formattedDate')).toEqual('05/04/2018');
    });

    test('pre-populated value for date', () => {
        wrapper = mount(prePopulatedDatepicker);
        expect(wrapper.state('formattedDate')).toEqual('03/13/2020');
        wrapper
            .find('input[type="text"]')
            .simulate('change', { target: { value: '04/14/2020' } });
        expect(wrapper.state('formattedDate')).toEqual('04/14/2020');
    });

    test('auto format to specified dateFormat', () => {
        wrapper = mount(defaultDatePicker); // dateFormat='MM/DD/YYYY'

        const input = wrapper.find('input[type="text"]');
        //set date input value
        input.simulate('change', { target: { value: '3.16.20' } }); // input format D.MM.YY
        input.simulate('blur');

        //expect date value to be auto formatted
        expect(wrapper.state('formattedDate')).toEqual('03/16/2020');
    });

    test('default value with dateFormat and locale set', ()=>{
        const compToTest = (
            <DatePicker
                dateFormat='MM/DD/YYYY'
                defaultValue='3.16.20'
                locale='hi' />
        );
        wrapper = mount(compToTest);
        expect(wrapper.state('formattedDate')).toEqual('०३/१६/२०२०');
    });

    test('set defaultDate, unset dateFormat, set locale', ()=>{
        const compToTest = (
            <DatePicker
                defaultValue='17.3.20'
                locale='fr' /> //locale date format DD/MM/YYYY
        );
        wrapper = mount(compToTest);

        //trigger onBlur by clicking outside
        simulateBlur();

        //expect date value to be auto formatted
        expect(wrapper.state('formattedDate')).toEqual('17/03/2020');
    });

    test('date range selection with custom dateFormat set', () => {
        wrapper = mount(rangeDatePicker); // dateFormat='MM/DD/YYYY'

        const input = wrapper.find('input[type="text"]');
        //set date input value
        input.simulate('change', { target: { value: '3.16.20 - 3.11.20' } }); // input format D.MM.YY
        input.simulate('blur');

        //expect date value to be auto formatted
        expect(wrapper.state('formattedDate')).toEqual('03/11/2020 - 03/16/2020');
    });

    test('provide ISO-8601 format date', () => {
        wrapper = mount(prePopulatedDatepicker);
        expect(wrapper.state('isoFormattedDate')).toEqual('2020-03-13');
        wrapper
            .find('input[type="text"]')
            .simulate('change', { target: { value: '04/14/2020' } });
        expect(wrapper.state('isoFormattedDate')).toEqual('2020-04-14');
    });

    test('provide ISO-8601 format date with custom dateFormat in props', () => {
        wrapper = mount(<DatePicker dateFormat='DD-MM-YYYY' defaultValue='01-06-2020' />);
        expect(wrapper.state('isoFormattedDate')).toEqual('2020-06-01');
        wrapper
            .find('input[type="text"]')
            .simulate('change', { target: { value: '14-04-2020' } });
        expect(wrapper.state('isoFormattedDate')).toEqual('2020-04-14');
    });

    test('should update value if defaultValue prop is updated', () => {
        wrapper = mount(prePopulatedDatepicker);
        wrapper = wrapper.setProps({
            defaultValue: '12-21-2016'
        });
        expect(wrapper.state('formattedDate')).toEqual('12/21/2016');
    });

    describe('With today footer button', () => {

        test('renders today button when todayAction.type=\'select\' AND valid todayAction.label is specified', () => {
            wrapper = mount(
                <DatePicker
                    todayAction={{
                        type: 'select',
                        label: 'Today'
                    }} />);
            wrapper.find('button.fd-button--transparent.sap-icon--appointment-2').simulate('click');
            const todayButtonWrapper = wrapper.find('button.fd-dialog__decisive-button');
            expect(todayButtonWrapper.exists()).toBe(true);
            expect(todayButtonWrapper.getDOMNode().innerHTML).toBe('Today');
        });

        test('doesn\'t render today button when todayAction.type=\'select\' AND valid todayAction.label is specified but date range selection is enabled', () => {
            wrapper = mount(
                <DatePicker
                    enableRangeSelection
                    todayAction={{
                        type: 'select',
                        label: 'Today'
                    }} />);
            wrapper.find('button.fd-button--transparent.sap-icon--appointment-2').simulate('click');
            const todayButtonWrapper = wrapper.find('button.fd-dialog__decisive-button');
            expect(todayButtonWrapper.exists()).toBe(false);
        });

        test('sets todays date when today button is pressed', () => {
            wrapper = mount(
                <DatePicker
                    todayAction={{
                        type: 'select',
                        label: 'Today'
                    }} />);
            wrapper.find('button.fd-button--transparent.sap-icon--appointment-2').simulate('click');
            const todayButtonWrapper = wrapper.find('button.fd-dialog__decisive-button');
            expect(todayButtonWrapper.exists()).toBe(true);
            todayButtonWrapper.simulate('click');
            expect(moment().isSame(wrapper.state('selectedDate'), 'day')).toBe(true);
        });

        test('calls onChange date when today button is pressed', () => {
            const change = jest.fn();
            wrapper = mount(
                <DatePicker
                    dateFormat='YYYY/MM/DD'
                    onChange={change}
                    todayAction={{
                        type: 'select',
                        label: 'Today'
                    }} />);
            wrapper.find('button.fd-button--transparent.sap-icon--appointment-2').simulate('click');
            const todayButtonWrapper = wrapper.find('button.fd-dialog__decisive-button');
            todayButtonWrapper.simulate('click');
            expect(change).toHaveBeenCalledWith(expect.objectContaining({ formattedDate: moment().format('YYYY/MM/DD') }));

        });
    });

    describe('onBlur callback', () => {
        test('should call onBlur after leaving input', () => {
            const blur = jest.fn();
            const element = mount(<DatePicker onBlur={blur} />).find('input[type="text"]');
            element.find('input[type="text"]').simulate('click');
            element.find('input[type="text"]').simulate('blur');

            expect(blur).toHaveBeenCalledTimes(1);
        });
        test('should format isoFormattedDate when a custom dateFormat is passed in props', () => {
            const blur = jest.fn();
            const element = mount(<DatePicker
                dateFormat='DD-MM-YYYY'
                defaultValue='01-06-2020'
                onBlur={blur} />).find('input[type="text"]');
            element.find('input[type="text"]').simulate('click');
            element.find('input[type="text"]').simulate('change', { target: { value: '30-06-2020' } });
            element.find('input[type="text"]').simulate('blur');

            expect(blur).toHaveBeenCalledTimes(1);
            expect(blur).toHaveBeenCalledWith(expect.objectContaining({
                isoFormattedDate: '2020-06-30'
            }));
        });
        test('should call onBlur after leaving input, with validated data', () => {
            const blur = jest.fn();
            const element = mount(<DatePicker onBlur={blur} />).find('input[type="text"]');
            element.simulate('change', { target: { value: 'rubbish' } });
            element.find('input[type="text"]').simulate('blur');

            expect(blur).toHaveBeenCalledWith(expect.objectContaining({
                date: null,
                formattedDate: '',
                isoFormattedDate: ''
            }));
        });
    });

    describe('onDatePickerClose callback', () => {
        test('should call onDatePickerClose after selecting date in calendar', () => {
            const datePickerClose = jest.fn();
            const element = mount(<DatePicker dateFormat='YYYY-MM-DD' defaultValue='2020-03-13'
                onDatePickerClose={datePickerClose} />);
            element.find('button.fd-button--transparent.sap-icon--appointment-2').simulate('click');
            element.find('.fd-calendar__text').at(8).simulate('click');
            expect(datePickerClose).toHaveBeenCalledWith(expect.objectContaining({ formattedDate: '2020-03-02' }));
            expect(datePickerClose).toHaveBeenCalledTimes(1);
        });
    });

    describe('first displayed day', () => {
        beforeEach(() => {
            document.body.innerHTML = '';
        });
        test('should be the first sunday before the start of the month in locale "es"', () => {
            const element = mount(<DatePicker
                dateFormat='DD/MM/YYYY'
                defaultValue='20/06/2020'
                locale='es' />);
            element.find('button').simulate('click');
            const firstDisplayedDay = document.body.querySelectorAll('.fd-calendar__item--other-month')[0].textContent;
            expect(firstDisplayedDay).toBe('31'); // May 31st is the first day shown
        });
        test('should be the first sunday before the start of the month in locale "fr"', () => {
            const element = mount(<DatePicker
                dateFormat='DD/MM/YYYY'
                defaultValue='01/07/2020'
                locale='fr' />);
            element.find('button').simulate('click');
            const firstDisplayedDay = document.body.querySelectorAll('.fd-calendar__item--other-month')[0].textContent;
            expect(firstDisplayedDay).toBe('28'); // June 28th is the first day shown
        });
        test('should be the first sunday of the start of the month, when the 1st is the start of the month in locale "fr"', () => {
            const element = mount(<DatePicker
                dateFormat='DD/MM/YYYY'
                defaultValue='01/11/2020'
                locale='fr' />);
            element.find('button').simulate('click');
            const firstDisplayedDay = document.body.querySelectorAll('.fd-calendar__item--other-month')[0].textContent;
            expect(firstDisplayedDay).toBe('1'); // In this case December 1st is the first other-month date shown
        });
    });

    describe('onChange callback', () => {
        test('should call onChange on entering text input', () => {
            const change = jest.fn();
            const element = mount(<DatePicker defaultValue='2020-03-13' onChange={change} />);

            element
                .find('input[type="text"]')
                .simulate('change', { target: { value: '04/14/2020' } });

            expect(change).toHaveBeenCalledWith(expect.objectContaining({ formattedDate: '04/14/2020' }));
        });

        test('should call onChange on selecting a calendar item', () => {
            const change = jest.fn();
            let element = mount(<DatePicker dateFormat='YYYY-MM-DD' defaultValue='2020-03-13'
                onChange={change} />);
            element = element.setProps({
                dateFormat: 'MM/DD/YYYY'
            });
            element.find('button.fd-button--transparent.sap-icon--appointment-2').simulate('click');
            element.find('.fd-calendar__text').at(8).simulate('click');

            expect(change).toHaveBeenCalledWith(expect.objectContaining({ formattedDate: '03/02/2020' }));
        });
    });

    describe('onFocus callback', () => {
        test('should call onFocus on focusing input', () => {
            const focus = jest.fn();
            const element = mount(
                <DatePicker
                    dateFormat='YYYY-MM-DD'
                    defaultValue='2020-03-13'
                    onFocus={focus} />
            );

            element.find('input[type="text"]').prop('onFocus')();

            expect(focus).toHaveBeenCalledTimes(1);
            expect(focus).toHaveBeenCalledWith(expect.objectContaining({ date: expect.any(moment) }));
        });
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the DatePicker component', () => {
            const element = mount(<DatePicker data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the DatePicker component\'s input element', () => {
            const element = mount(<DatePicker inputProps={{ 'data-sample': 'Sample' }} />);

            expect(
                element.find('input').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the DatePicker component\'s button element', () => {
            const element = mount(<DatePicker buttonProps={{ 'data-sample': 'Sample' }} />);

            expect(
                element.find('button.fd-button--transparent.sap-icon--appointment-2').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the DatePicker component\'s Calendar component\'s month list ul element', () => {
            const calendarProps = {
                monthListProps: {
                    'data-sample': 'Sample'
                }
            };
            wrapper = mount(<DatePicker calendarProps={calendarProps} />);
            wrapper.find('button.fd-button--transparent.sap-icon--appointment-2').simulate('click');
            wrapper.find('.fd-calendar__action').at(1).childAt(0).simulate('click');

            expect(
                wrapper.find('.fd-calendar__months').childAt(0).getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the DatePicker component\'s Calendar component\'s year list ul element', () => {
            const calendarProps = {
                yearListProps: {
                    'data-sample': 'Sample'
                }
            };
            wrapper = mount(<DatePicker calendarProps={calendarProps} />);
            wrapper.find('button.fd-button--transparent.sap-icon--appointment-2').simulate('click');
            wrapper.find('.fd-calendar__action').at(2).childAt(0).simulate('click');

            expect(
                wrapper.find('.fd-calendar__years').childAt(0).getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the DatePicker component\'s Calendar component\'s table element', () => {
            const calendarProps = {
                tableProps: {
                    'data-sample': 'Sample'
                }
            };
            wrapper = mount(<DatePicker calendarProps={calendarProps} />);
            wrapper.find('button.fd-button--transparent.sap-icon--appointment-2').simulate('click');

            expect(
                wrapper.find('.fd-calendar__dates').childAt(0).getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the DatePicker component\'s Calendar component\'s thead element', () => {
            const calendarProps = {
                tableHeaderProps: {
                    'data-sample': 'Sample'
                }
            };
            wrapper = mount(<DatePicker calendarProps={calendarProps} />);
            wrapper.find('button.fd-button--transparent.sap-icon--appointment-2').simulate('click');

            expect(
                wrapper.find('.fd-calendar__group').at(0).getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the DatePicker component\'s Calendar component\'s tbody element', () => {
            const calendarProps = {
                tableBodyProps: {
                    'data-sample': 'Sample'
                }
            };
            wrapper = mount(<DatePicker calendarProps={calendarProps} />);
            wrapper.find('button.fd-button--transparent.sap-icon--appointment-2').simulate('click');

            expect(
                wrapper.find('tbody').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
function simulateBlur() {
    let event = new MouseEvent('mousedown', { target: document.querySelector('body') });
    document.dispatchEvent(event);
}

