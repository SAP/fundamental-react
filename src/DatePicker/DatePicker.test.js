import DatePicker from '../DatePicker/DatePicker';
import moment from 'moment';
import { mount } from 'enzyme';
import { mountComponentWithStyles } from '../utils/testUtils';
import React from 'react';

describe('<DatePicker />', () => {
    const defaultDatePicker = <DatePicker />;
    const disabledFuturePicker = <DatePicker disableFutureDates />;
    const disabledFutureRangePicker = <DatePicker disableFutureDates enableRangeSelection />;
    const compactDatePicker = <DatePicker className='blue' compact />;
    const rangeDatePicker = <DatePicker enableRangeSelection />;
    const compactRangeDatepicker = <DatePicker compact enableRangeSelection />;
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

    test('open/close by calendar icon button', () => {
        wrapper = mountComponentWithStyles(defaultDatePicker);
        expect(wrapper.state('hidden')).toBeTruthy();

        wrapper
            .find('button.fd-button--light.sap-icon--calendar')
            .simulate('click', { type: 'input' });

        expect(wrapper.state('hidden')).toBeFalsy();
    });

    test('open/close calendar', () => {
        wrapper = mountComponentWithStyles(defaultDatePicker);
        // check to make sure calendar is hidden
        expect(wrapper.state('hidden')).toBeTruthy();

        // click to show calendar
        wrapper.find('input[type="text"]').simulate('click', { type: 'input' });

        // check to make sure calendar is shown
        expect(wrapper.state('hidden')).toBeFalsy();

        // clicking on input text should keep calendar displayed
        wrapper.find('input[type="text"]').simulate('click', { type: 'input' });

        // check to make sure calendar is shown
        expect(wrapper.state('hidden')).toBeFalsy();

        // click to show calendar
        wrapper.find('input[type="text"]').simulate('click', { type: '' });

        // check to make sure calendar is shown
        expect(wrapper.state('hidden')).toBeFalsy();
    });

    test('open/close range calendar', () => {
        wrapper = mountComponentWithStyles(rangeDatePicker);
        //open date picker calendar
        expect(wrapper.state('hidden')).toBeTruthy();

        // click to show calendar
        wrapper.find('input[type="text"]').simulate('click', { type: 'input' });

        // check to make sure calendar is shown
        expect(wrapper.state('hidden')).toBeFalsy();

        wrapper.instance().componentWillMount();

        // click on body element
        let event = new MouseEvent('mousedown', {
            target: document.querySelector('body')
        });
        document.dispatchEvent(event);

        // check to make sure calendar is hidden
        expect(wrapper.state('hidden')).toBeTruthy();

        // show date picker, select date range then close
        wrapper.find('input[type="text"]').simulate('click', { type: '' });

        // check to make sure calendar is shown
        expect(wrapper.state('hidden')).toBeFalsy();
    });

    test('start date and end date range', () => {
        wrapper = mountComponentWithStyles(rangeDatePicker);
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

        // check to make sure calendar is hidden
        expect(wrapper.state('hidden')).toBeTruthy();
    });

    test('check start date greater than end date for range', () => {
        wrapper = mountComponentWithStyles(rangeDatePicker);
        // set dates
        let startRangeDate = moment();
        let endRangeDate = moment();
        endRangeDate.add(3, 'day');

        let arrDates = [startRangeDate, endRangeDate];

        // make start date bigger than end date
        arrDates = [endRangeDate, startRangeDate];
        wrapper.instance().updateDate(arrDates);

        let switchFormattedDate = `${endRangeDate.format('MM/DD/YYYY')}-${startRangeDate.format('MM/DD/YYYY')}`;

        expect(wrapper.state('formattedDate')).toEqual(switchFormattedDate);
        expect(wrapper.state('arrSelectedDates').length).toEqual(2);

        // click on body element to hide calendar
        let event = new MouseEvent('mousedown', {
            target: document.querySelector('body')
        });
        document.dispatchEvent(event);

        // check to make sure calendar is hidden
        expect(wrapper.state('hidden')).toBeTruthy();
    });

    test('entering start date and disabled end range dates', () => {
        wrapper = mountComponentWithStyles(disabledFutureRangePicker);
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
        wrapper = mountComponentWithStyles(defaultDatePicker);
        const date = moment();
        wrapper.instance().updateDate(date);
        expect(wrapper.state('selectedDate')).toEqual(date);
        let formattedDate = date.format('MM/DD/YYYY');
        expect(wrapper.state('formattedDate')).toEqual(formattedDate);

        // choose 1 day in range picker
        wrapper = mountComponentWithStyles(rangeDatePicker);
        let startRangeDate = moment();

        let arrDates = [startRangeDate];
        wrapper.instance().updateDate(arrDates);

        formattedDate = startRangeDate.format('MM/DD/YYYY');
        expect(wrapper.state('formattedDate')).toEqual(formattedDate);
        expect(wrapper.state('arrSelectedDates').length).toEqual(1);

        // choose 2 days in range picker
        wrapper = mountComponentWithStyles(rangeDatePicker);
        startRangeDate = moment();
        let endRangeDate = moment();
        endRangeDate.add(3, 'day');

        arrDates = [startRangeDate, endRangeDate];
        wrapper.instance().updateDate(arrDates);

        formattedDate = `${startRangeDate.format('MM/DD/YYYY')}-${endRangeDate.format('MM/DD/YYYY')}`;

        expect(wrapper.state('formattedDate')).toEqual(formattedDate);
        expect(wrapper.state('arrSelectedDates').length).toEqual(2);
    });

    test('pressing enter key on date input', () => {
        wrapper = mountComponentWithStyles(rangeDatePicker);

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
        wrapper = mountComponentWithStyles(rangeDatePicker);

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
        wrapper = mountComponentWithStyles(defaultDatePicker);
        let date = moment().startOf('day');
        let formattedDate = date.format('MM/DD/YYYY');
        wrapper.find('input[type="text"]')
            .simulate('change', { target: { value: formattedDate } });

        expect(wrapper.state('formattedDate')).toEqual(formattedDate);
        wrapper.find('input[type="text"]').simulate('keypress', { key: 'Enter' });

        expect(wrapper.state('selectedDate').toDate()).toEqual(date.toDate());
    });

    test('enter a disabled date string', () => {
        // enter a valid date input
        wrapper = mountComponentWithStyles(disabledFuturePicker);
        let date = moment().add(1, 'days');
        let formattedDate = date.format('MM/DD/YYYY');
        wrapper.find('input[type="text"]')
            .simulate('change', { target: { value: formattedDate } });

        expect(wrapper.state('formattedDate')).toEqual(formattedDate);
        wrapper.find('input[type="text"]').simulate('keypress', { key: 'Enter' });

        expect(wrapper.state('selectedDate')).toEqual(null);
    });

    test('enter text string for date', () => {
        wrapper = mountComponentWithStyles(defaultDatePicker);

        wrapper.find('input[type="text"]')
            .simulate('change', { target: { value: 'May 14th, 2018' } });

        wrapper.find('input[type="text"]').simulate('keypress', { key: 'Enter' });

        expect(wrapper.state('formattedDate')).toEqual('');
    });

    test('enter text string for date on date range component', () => {
        wrapper = mountComponentWithStyles(rangeDatePicker);

        wrapper.find('input[type="text"]')
            .simulate('change', { target: { value: 'May 14th, 2018-May 15th, 2018' } });

        wrapper.find('input[type="text"]').simulate('keypress', { key: 'Enter' });

        expect(wrapper.state('formattedDate')).toEqual('');
    });

    test('modify date on change', () => {
        wrapper = mountComponentWithStyles(defaultDatePicker);
        wrapper
            .find('input[type="text"]')
            .simulate('change', { target: { value: '05/04/2018' } });
        expect(wrapper.state('formattedDate')).toEqual('05/04/2018');
    });

    describe('onBlur callback', () => {
        test('should call onBlur after clicking outside calendar overlay', () => {
            const blur = jest.fn();
            const element = mount(<DatePicker onBlur={blur} />);

            element.find('button.fd-button--light.sap-icon--calendar').simulate('click', { type: 'input' });

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

            element.find('input[type="text"]').simulate('click', { type: 'input' });

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
                element.find('button.fd-button--light.sap-icon--calendar').getDOMNode().attributes['data-sample'].value
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
