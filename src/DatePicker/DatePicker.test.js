import { DatePicker } from '../DatePicker/DatePicker';
import { mount } from 'enzyme';
import React from 'react';

describe('<DatePicker />', () => {
    const defaultDatePicker = <DatePicker />;
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
        wrapper = mount(defaultDatePicker);
        expect(wrapper.state('hidden')).toBeTruthy();

        wrapper
            .find('button.fd-popover__control.fd-button--light.sap-icon--calendar')
            .simulate('click', { type: 'input' });

        expect(wrapper.state('hidden')).toBeFalsy();
    });

    test('open/close calendar', () => {
        wrapper = mount(defaultDatePicker);
        expect(wrapper.state('hidden')).toBeTruthy();

        wrapper.find('input[type="text"]').simulate('click', { type: 'input' });

        expect(wrapper.state('hidden')).toBeFalsy();

        wrapper.find('input[type="text"]').simulate('click', { type: 'input' });

        expect(wrapper.state('hidden')).toBeFalsy();

        wrapper.instance().componentWillMount();

        let event = new MouseEvent('mousedown', {
            target: document.querySelector('body')
        });
        document.dispatchEvent(event);

        expect(wrapper.state('hidden')).toBeTruthy();

        wrapper.find('input[type="text"]').simulate('click', { type: '' });

        expect(wrapper.state('hidden')).toBeFalsy();
    });

    test('open/close range calendar', () => {
        wrapper = mount(rangeDatePicker);
        //open date picker calendar
        expect(wrapper.state('hidden')).toBeTruthy();

        wrapper.find('input[type="text"]').simulate('click', { type: 'input' });

        expect(wrapper.state('hidden')).toBeFalsy();

        wrapper.instance().componentWillMount();

        let event = new MouseEvent('mousedown', {
            target: document.querySelector('body')
        });
        document.dispatchEvent(event);

        expect(wrapper.state('hidden')).toBeTruthy();

        // show date picker, select date range then close
        wrapper.find('input[type="text"]').simulate('click', { type: '' });

        expect(wrapper.state('hidden')).toBeFalsy();

        wrapper = mount(rangeDatePicker);
        let startRangeDate = new Date();
        let endRangeDate = new Date();
        endRangeDate.setDate(endRangeDate.getDate() + 3);

        let arrDates = [startRangeDate, endRangeDate];
        wrapper.instance().updateDate(arrDates);

        document.dispatchEvent(event);

        // make start date bigger than end date
        arrDates = [endRangeDate, startRangeDate];
        wrapper.instance().updateDate(arrDates);

        let switchFormattedDate = `${endRangeDate.getMonth() +
            1}/${endRangeDate.getDate()}/${endRangeDate.getFullYear()}-${startRangeDate.getMonth() +
            1}/${startRangeDate.getDate()}/${startRangeDate.getFullYear()}`;

        expect(wrapper.state('formattedDate')).toEqual(switchFormattedDate);
        expect(wrapper.state('arrSelectedDates').length).toEqual(2);

        document.dispatchEvent(event);
    });

    test('update date method', () => {
        // choose one day in default picker
        wrapper = mount(defaultDatePicker);
        const date = new Date();
        wrapper.instance().updateDate(date);
        expect(wrapper.state('selectedDate')).toEqual(date);
        let formattedDate = `${date.getMonth() +
            1}/${date.getDate()}/${date.getFullYear()}`;
        expect(wrapper.state('formattedDate')).toEqual(formattedDate);

        // choose 1 day in range picker
        wrapper = mount(rangeDatePicker);
        let startRangeDate = new Date();

        let arrDates = [startRangeDate];
        wrapper.instance().updateDate(arrDates);

        formattedDate = `${startRangeDate.getMonth() +
            1}/${startRangeDate.getDate()}/${startRangeDate.getFullYear()}`;
        expect(wrapper.state('formattedDate')).toEqual(formattedDate);
        expect(wrapper.state('arrSelectedDates').length).toEqual(1);

        // choose 2 days in range picker
        wrapper = mount(rangeDatePicker);
        startRangeDate = new Date();
        let endRangeDate = new Date();
        endRangeDate.setDate(endRangeDate.getDate() + 3);

        arrDates = [startRangeDate, endRangeDate];
        wrapper.instance().updateDate(arrDates);

        formattedDate = `${startRangeDate.getMonth() +
            1}/${startRangeDate.getDate()}/${startRangeDate.getFullYear()}-${endRangeDate.getMonth() +
            1}/${endRangeDate.getDate()}/${endRangeDate.getFullYear()}`;

        expect(wrapper.state('formattedDate')).toEqual(formattedDate);
        expect(wrapper.state('arrSelectedDates').length).toEqual(2);
    });

    test('enter date value', () => {
        wrapper = mount(rangeDatePicker);

        let startRangeDate = new Date();
        let endRangeDate = new Date();
        endRangeDate.setDate(endRangeDate.getDate() + 3);

        let arrDates = [startRangeDate, endRangeDate];
        wrapper.instance().updateDate(arrDates);

        let formattedDate = `${startRangeDate.getMonth() +
            1}/${startRangeDate.getDate()}/${startRangeDate.getFullYear()}-${endRangeDate.getMonth() +
            1}/${endRangeDate.getDate()}/${endRangeDate.getFullYear()}`;

        expect(wrapper.state('formattedDate')).toEqual(formattedDate);
        expect(wrapper.state('arrSelectedDates').length).toEqual(2);

        wrapper.find('input[type="text"]').simulate('keypress', { key: 'Enter' });

        // make start date bigger than end date
        arrDates = [endRangeDate, startRangeDate];
        wrapper.instance().updateDate(arrDates);

        let switchFormattedDate = `${endRangeDate.getMonth() +
            1}/${endRangeDate.getDate()}/${endRangeDate.getFullYear()}-${startRangeDate.getMonth() +
            1}/${startRangeDate.getDate()}/${startRangeDate.getFullYear()}`;

        expect(wrapper.state('formattedDate')).toEqual(switchFormattedDate);
        expect(wrapper.state('arrSelectedDates').length).toEqual(2);

        wrapper.find('input[type="text"]').simulate('keypress', { key: 'Enter' });

        wrapper = mount(defaultDatePicker);
        let date = new Date();
        wrapper.instance().updateDate(date);
        expect(wrapper.state('selectedDate')).toEqual(date);
        formattedDate = `${date.getMonth() +
            1}/${date.getDate()}/${date.getFullYear()}`;
        expect(wrapper.state('formattedDate')).toEqual(formattedDate);
        wrapper.find('input[type="text"]').simulate('keypress', { key: 'Enter' });

        // press Esc key
        wrapper.find('input[type="text"]').simulate('keypress', { key: 'Esc' });
    });

    test('format date', () => {
        wrapper = mount(rangeDatePicker);
        let startRangeDate = new Date();
        let endRangeDate = new Date();
        endRangeDate.setDate(endRangeDate.getDate() + 3);

        let formattedDate = `${startRangeDate.getMonth() +
            1}/${startRangeDate.getDate()}/${startRangeDate.getFullYear()}-${endRangeDate.getMonth() +
            1}/${endRangeDate.getDate()}/${endRangeDate.getFullYear()}`;

        let arrDates = [startRangeDate, endRangeDate];
        expect(wrapper.instance().formatDate(arrDates)).toEqual(formattedDate);

        expect(wrapper.instance().formatDate([])).toEqual('');

        // enter end year of 3001
        wrapper = mount(rangeDatePicker);

        startRangeDate = new Date();
        endRangeDate = new Date();
        endRangeDate.setFullYear(3001);

        arrDates = [startRangeDate, endRangeDate];
        expect(wrapper.instance().formatDate(arrDates)).toEqual('');

        expect(wrapper.instance().formatDate([])).toEqual('');

        // default date picker format date
        wrapper = mount(defaultDatePicker);
        startRangeDate = new Date();

        formattedDate = `${startRangeDate.getMonth() +
            1}/${startRangeDate.getDate()}/${startRangeDate.getFullYear()}`;

        expect(wrapper.instance().formatDate(startRangeDate)).toEqual('');
    });

    test('modify date on change', () => {
        wrapper = mount(defaultDatePicker);
        wrapper
            .find('input[type="text"]')
            .simulate('change', { target: { value: '05/04/2018' } });
        expect(wrapper.state('formattedDate')).toEqual('05/04/2018');
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the DatePicker component', () => {
            const element = mount(<DatePicker data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        xtest('should allow props to be spread to the DatePicker component\'s input element', () => {
            // TODO: placeholder for this test description once that functionality is built
        });

        xtest('should allow props to be spread to the DatePicker component\'s button element', () => {
            // TODO: placeholder for this test description once that functionality is built
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
