import DatePicker from '../DatePicker/DatePicker';
import moment from 'moment';
import { mount } from 'enzyme';

import React from 'react';

describe('<DatePicker />', () => {
    const defaultDatePicker = <DatePicker />;
    const disabledFuturePicker = <DatePicker disableFutureDates />;
    const disabledFutureRangePicker = <DatePicker disableFutureDates enableRangeSelection />;
    const compactDatePicker = <DatePicker className='blue' compact />;
    const rangeDatePicker = <DatePicker enableRangeSelection />;
    const compactRangeDatepicker = <DatePicker compact enableRangeSelection />;
    const prePopulatedDatepicker = <DatePicker defaultValue='2020-03-13' />;
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

    test('start date and end date range', () => {
        wrapper = mount(rangeDatePicker);
        // set dates
        let startRangeDate = moment();
        let endRangeDate = moment();
        endRangeDate.add(3, 'day');

        let arrDates = [startRangeDate, endRangeDate];
        wrapper.instance().updateDate(arrDates);

        expect(wrapper.state('arrSelectedDates').length).toEqual(2);

        // click on body element
        let event = new MouseEvent('mousedown', {
            target: document.querySelector('body')
        });
        document.dispatchEvent(event);

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

        let switchFormattedDate = `${endRangeDate.format('L')}-${startRangeDate.format('L')}`;

        expect(wrapper.state('formattedDate')).toEqual(switchFormattedDate);
        expect(wrapper.state('arrSelectedDates').length).toEqual(2);

        // click on body element to hide calendar
        let event = new MouseEvent('mousedown', {
            target: document.querySelector('body')
        });
        document.dispatchEvent(event);

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
        wrapper = mount(defaultDatePicker);
        const date = moment();
        wrapper.instance().updateDate(date);
        expect(wrapper.state('selectedDate')).toEqual(date);
        let formattedDate = date.format('L');
        expect(wrapper.state('formattedDate')).toEqual(formattedDate);

        // choose 1 day in range picker
        wrapper = mount(rangeDatePicker);
        let startRangeDate = moment();

        let arrDates = [startRangeDate];
        wrapper.instance().updateDate(arrDates);

        formattedDate = startRangeDate.format('L');
        expect(wrapper.state('formattedDate')).toEqual(formattedDate);
        expect(wrapper.state('arrSelectedDates').length).toEqual(1);

        // choose 2 days in range picker
        wrapper = mount(rangeDatePicker);
        startRangeDate = moment();
        let endRangeDate = moment();
        endRangeDate.add(3, 'day');

        arrDates = [startRangeDate, endRangeDate];
        wrapper.instance().updateDate(arrDates);

        formattedDate = `${startRangeDate.format('L')}-${endRangeDate.format('L')}`;

        expect(wrapper.state('formattedDate')).toEqual(formattedDate);
        expect(wrapper.state('arrSelectedDates').length).toEqual(2);
    });

    test('pressing enter key on date input', () => {
        wrapper = mount(rangeDatePicker);

        let startRangeDate = moment();
        let endRangeDate = moment();
        endRangeDate.add(3, 'day');

        let formattedDate = `${startRangeDate.month() +
            1}/${startRangeDate.date()}/${startRangeDate.year()}-${endRangeDate.month() +
            1}/${endRangeDate.date()}/${endRangeDate.year()}`;

        wrapper.find('input[type="text"]')
            .simulate('change', { target: { value: formattedDate } });

        wrapper.find('input[type="text"]').simulate('keypress', { key: 'Enter' });

        expect(wrapper.state('formattedDate')).toEqual(formattedDate);
        expect(wrapper.state('arrSelectedDates').length).toEqual(2);
    });

    test('pressing enter key on date input where start date > than end date', () => {
        wrapper = mount(rangeDatePicker);

        let startRangeDate = moment();
        let endRangeDate = moment();
        endRangeDate.add(3, 'day');

        let switchFormattedDate = `${endRangeDate.month() +
            1}/${endRangeDate.date()}/${endRangeDate.year()}-${startRangeDate.month() +
            1}/${startRangeDate.date()}/${startRangeDate.year()}`;

        wrapper.find('input[type="text"]')
            .simulate('change', { target: { value: switchFormattedDate } });

        wrapper.find('input[type="text"]').simulate('keypress', { key: 'Enter' });

        expect(wrapper.state('formattedDate')).toEqual(switchFormattedDate);
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
            .simulate('change', { target: { value: 'May 14th, 2018-May 15th, 2018' } });

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

    describe('onBlur callback', () => {
        test('should call onBlur after clicking outside calendar overlay', () => {
            const blur = jest.fn();
            const element = mount(<DatePicker onBlur={blur} />);

            element.find('button.fd-button--transparent.sap-icon--calendar').simulate('click');

            element.find('table.fd-calendar__table tbody.fd-calendar__group tr.fd-calendar__row td.fd-calendar__item:not(.fd-calendar__item--other-month)')
                .at(0)
                .simulate('click');

            let event = new MouseEvent('mousedown', { target: document.querySelector('body') });
            document.dispatchEvent(event);

            expect(blur).toHaveBeenCalledTimes(1);

            expect(blur).toHaveBeenCalledWith(expect.objectContaining({ date: expect.any(moment) }));
        });
        test('should call onBlur after leaving input', () => {
            const blur = jest.fn();
            const element = mount(<DatePicker onBlur={blur} />);

            element.find('input[type="text"]').simulate('click');

            let event = new MouseEvent('mousedown', { target: document.querySelector('body') });
            document.dispatchEvent(event);

            expect(blur).toHaveBeenCalledTimes(1);
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
                element.find('button.fd-button--transparent.sap-icon--calendar').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        xtest('should allow props to be spread to the DatePicker component\'s Calendar component\'s month list ul element', () => {
            // TODO: placeholder for this test description once that functionality is built
        });

        xtest('should allow props to be spread to the DatePicker component\'s Calendar component\'s year list ul element', () => {
            // TODO: placeholder for this test description once that functionality is built
        });

        xtest('should allow props to be spread to the DatePicker component\'s Calendar component\'s table element', () => {
            // TODO: placeholder for this test description once that functionality is built
        });

        xtest('should allow props to be spread to the DatePicker component\'s Calendar component\'s thead element', () => {
            // TODO: placeholder for this test description once that functionality is built
        });

        xtest('should allow props to be spread to the DatePicker component\'s Calendar component\'s tbody element', () => {
            // TODO: placeholder for this test description once that functionality is built
        });
    });
});
