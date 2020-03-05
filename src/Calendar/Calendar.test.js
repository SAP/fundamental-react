import Calendar from '../Calendar/Calendar';
import moment from 'moment';
import { mount } from 'enzyme';
import React from 'react';

describe('<Calendar />', () => {
    const mockOnChange = jest.fn();
    const defaultCalendar = <Calendar onChange={mockOnChange} />;
    const disabledWeekEnds = <Calendar disableWeekends />;
    const disabledBeforeDay = (
        <Calendar disableBeforeDate={moment(new Date(2018, 7, 3, 0, 0, 0, 0))} />
    );
    const disabledAfterDay = (
        <Calendar disableAfterDate={moment(new Date(2018, 7, 3, 0, 0, 0, 0))} />
    );
    const blockedDays = (
        <Calendar
            blockedDates={[
                moment(new Date(2018, 1, 1, 0, 0, 0, 0)),
                moment(new Date(2018, 3, 3, 0, 0, 0, 0))
            ]} />
    );
    const disabledDates = (
        <Calendar
            disabledDates={[
                moment(new Date(2018, 1, 1, 0, 0, 0, 0)),
                moment(new Date(2018, 3, 3, 0, 0, 0, 0))
            ]} />
    );
    const disabledWeekDay = <Calendar disableWeekday={['Monday', 'Tuesday']} />;
    const disabledWeekDayFakeDays = <Calendar disableWeekday={['Humpday', 'Funday']} />;
    const rangeSelect = <Calendar enableRangeSelection onChange={mockOnChange} />;
    const disablePast = <Calendar disablePastDates />;
    const disableFuture = <Calendar disableFutureDates />;

    test('create calendar components', () => {
        mount(defaultCalendar);
        mount(disabledWeekEnds);
        mount(disabledBeforeDay);
        mount(disabledAfterDay);
        mount(blockedDays);
        mount(disabledDates);
        mount(disablePast);
        mount(disableFuture);
        mount(disabledWeekDay);
        mount(disabledWeekDayFakeDays);
        mount(rangeSelect);
    });

    test('show/hide months', () => {
        let wrapper = mount(defaultCalendar);
        expect(wrapper.state('showMonths')).toBeFalsy();
        wrapper
            .find(
                'header.fd-calendar__header button.fd-button--transparent.fd-button--compact'
            )
            .at(1)
            .simulate('click');

        expect(wrapper.state('showMonths')).toBeTruthy();

        wrapper
            .find(
                'header.fd-calendar__header button.fd-button--transparent.fd-button--compact'
            )
            .at(1)
            .simulate('click');

        expect(wrapper.state('showMonths')).toBeFalsy();
    });

    test('click month from list', () => {
        let wrapper = mount(defaultCalendar);

        expect(wrapper.state('showMonths')).toBeFalsy();

        //set baseline initial date
        let initialDate = moment('1/15/2019');
        wrapper.setState({ currentDateDisplayed: initialDate });

        //open month overlay
        wrapper
            .find(
                'header.fd-calendar__header button.fd-button--transparent.fd-button--compact'
            )
            .at(1)
            .simulate('click');

        expect(wrapper.state('showMonths')).toBeTruthy();

        wrapper
            .find('.fd-calendar__item')
            .at(3)
            .simulate('click');

        // check that April was selected
        const currentDateDisplayed = wrapper.state('currentDateDisplayed');

        expect(currentDateDisplayed.month()).toEqual(3);
    });

    test('click month from list with date range', () => {
        let wrapper = mount(rangeSelect);
        expect(wrapper.state('showMonths')).toBeFalsy();

        //set baseline initial date
        let initialDate = moment('1/15/2019');
        wrapper.setState({ currentDateDisplayed: initialDate });

        //open months view
        wrapper
            .find(
                'header.fd-calendar__header button.fd-button--transparent.fd-button--compact'
            )
            .at(1)
            .simulate('click');

        expect(wrapper.state('showMonths')).toBeTruthy();

        wrapper
            .find('.fd-calendar__item')
            .at(3)
            .simulate('click');

        // check that April was selected
        const currentDateDisplayed = wrapper.state('currentDateDisplayed');

        expect(currentDateDisplayed.month()).toEqual(3);
    });

    test('show/hide years', () => {
        let wrapper = mount(defaultCalendar);
        expect(wrapper.state('showYears')).toBeFalsy();
        wrapper
            .find(
                'header.fd-calendar__header button.fd-button--transparent.fd-button--compact'
            )
            .at(2)
            .simulate('click');

        expect(wrapper.state('showYears')).toBeTruthy();

        wrapper
            .find(
                'header.fd-calendar__header button.fd-button--transparent.fd-button--compact'
            )
            .at(2)
            .simulate('click');

        expect(wrapper.state('showYears')).toBeFalsy();
    });

    test('click year from list', () => {
        let wrapper = mount(defaultCalendar);
        const currentDateDisplayed = Object.assign(moment(), wrapper.state('currentDateDisplayed'));
        expect(wrapper.state('showYears')).toBeFalsy();
        wrapper
            .find(
                'header.fd-calendar__header button.fd-button--transparent.fd-button--compact'
            )
            .at(2)
            .simulate('click');

        expect(wrapper.state('showYears')).toBeTruthy();

        wrapper
            .find('.fd-calendar__item')
            .at(3)
            .simulate('click');

        let newDateDisplayed = moment(new Date(wrapper.state('currentDateDisplayed')));
        expect(newDateDisplayed.year()).toEqual(
            currentDateDisplayed.year() + 3
        );
    });

    test('click disabled day', () => {
        const wrapper = mount(disabledWeekEnds);
        // select day of month
        wrapper
            .find(
                'table.fd-calendar__table tbody.fd-calendar__group tr.fd-calendar__row td.fd-calendar__item:not(.fd-calendar__item--other-month)'
            )
            .at(0)
            .simulate('click');

        const currentDateDisplayed = moment(new Date(wrapper.state('selectedDate')));

        // select a disabled day of month
        wrapper
            .find(
                'table.fd-calendar__table tbody.fd-calendar__group tr.fd-calendar__row td.fd-calendar__item.is-disabled'
            )
            .at(0)
            .simulate('click');

        // previously selected date should not change
        expect(wrapper.state('selectedDate').date()).toEqual(currentDateDisplayed.date());
    });

    test('click year from list from range selector', () => {
        let wrapper = mount(rangeSelect);
        const currentDateDisplayed = Object.assign(moment(), wrapper.state('currentDateDisplayed'));
        expect(wrapper.state('showYears')).toBeFalsy();
        wrapper
            .find(
                'header.fd-calendar__header button.fd-button--transparent.fd-button--compact'
            )
            .at(2)
            .simulate('click');

        expect(wrapper.state('showYears')).toBeTruthy();

        wrapper
            .find('.fd-calendar__item')
            .at(3)
            .simulate('click');

        const newDateDisplayed = moment(new Date(wrapper.state('currentDateDisplayed')));
        expect(newDateDisplayed.year()).toEqual(
            currentDateDisplayed.year() + 3
        );
    });

    test('click previous button', () => {
        let wrapper = mount(defaultCalendar);

        let initialDate = moment('3/28/2019');
        wrapper.setState({ currentDateDisplayed: initialDate });

        wrapper
            .find(
                'header.fd-calendar__header button.fd-button--transparent.fd-button--compact'
            )
            .at(0)
            .simulate('click');
        const newDateDisplayed = wrapper.state('currentDateDisplayed');

        expect(newDateDisplayed.month()).toEqual(1);

        // previous button when year shown
        wrapper
            .find(
                'header.fd-calendar__header button.fd-button--transparent.fd-button--compact'
            )
            .at(2)
            .simulate('click');

        expect(wrapper.state('showYears')).toBeTruthy();

        wrapper
            .find(
                'header.fd-calendar__header button.fd-button--transparent.fd-button--compact'
            )
            .at(0)
            .simulate('click');
        //should show 2007-2018 (12 years)
        const newYearDisplayed = wrapper.state('currentDateDisplayed');
        expect(newYearDisplayed.year()).toEqual(2007);
    });

    test('click next button', () => {
        let wrapper = mount(defaultCalendar);

        let initialDate = moment('3/28/2019');
        wrapper.setState({ currentDateDisplayed: initialDate });

        wrapper
            .find(
                'header.fd-calendar__header button.fd-button--transparent.fd-button--compact'
            )
            .at(3)
            .simulate('click');
        const newDateDisplayed = wrapper.state('currentDateDisplayed');

        expect(newDateDisplayed.month()).toEqual(3);

        // previous button when year shown
        wrapper
            .find(
                'header.fd-calendar__header button.fd-button--transparent.fd-button--compact'
            )
            .at(2)
            .simulate('click');

        expect(wrapper.state('showYears')).toBeTruthy();

        wrapper
            .find(
                'header.fd-calendar__header button.fd-button--transparent.fd-button--compact'
            )
            .at(3)
            .simulate('click');

        const newYearDisplayed = wrapper.state('currentDateDisplayed');

        expect(newYearDisplayed.year()).toEqual(2031);
    });

    test('click next button on the 31st of month', () => {
        let wrapper = mount(defaultCalendar);

        let initialDate = moment('5/31/2019');
        wrapper.setState({ currentDateDisplayed: initialDate });

        wrapper
            .find(
                'header.fd-calendar__header button.fd-button--transparent.fd-button--compact'
            )
            .at(3)
            .simulate('click');
        const newDateDisplayed = wrapper.state('currentDateDisplayed');

        expect(newDateDisplayed.month()).toEqual(5);
    });

    test('click on day', () => {
        const wrapper = mount(defaultCalendar);
        // select first day of month
        wrapper
            .find(
                'table.fd-calendar__table tbody.fd-calendar__group tr.fd-calendar__row td.fd-calendar__item:not(.fd-calendar__item--other-month)'
            )
            .at(0)
            .simulate('click');

        let selectedDate = moment(new Date(wrapper.state('selectedDate')));
        let currentDateDisplayed = moment(new Date(wrapper.state('currentDateDisplayed')));

        expect(selectedDate.date()).toEqual(currentDateDisplayed.date());
    });

    test('click on day with range enabled', () => {
        const wrapper = mount(rangeSelect);
        // select first day of month
        wrapper
            .find(
                'table.fd-calendar__table tbody.fd-calendar__group tr.fd-calendar__row td.fd-calendar__item:not(.fd-calendar__item--other-month)'
            )
            .at(0)
            .simulate('click');

        const currentDateDisplayed = moment(new Date(wrapper.state('selectedDate')));

        // select 5nd day of month
        wrapper
            .find(
                'table.fd-calendar__table tbody.fd-calendar__group tr.fd-calendar__row td.fd-calendar__item:not(.fd-calendar__item--other-month)'
            )
            .at(4)
            .simulate('click');

        const newDateDisplayed = wrapper.state('selectedDate');
        currentDateDisplayed.add(4, 'days');
        expect(newDateDisplayed.date()).toEqual(currentDateDisplayed.date());

        expect(wrapper.state('arrSelectedDates').length).toEqual(2);
    });

    test('click on multiple days with range enabled', () => {
        const wrapper = mount(rangeSelect);
        // select first day of month
        wrapper
            .find(
                'table.fd-calendar__table tbody.fd-calendar__group tr.fd-calendar__row td.fd-calendar__item:not(.fd-calendar__item--other-month)'
            )
            .at(0)
            .simulate('click');

        let currentDateDisplayed = moment(new Date(wrapper.state('selectedDate')));

        // select 5th day of month
        wrapper
            .find(
                'table.fd-calendar__table tbody.fd-calendar__group tr.fd-calendar__row td.fd-calendar__item:not(.fd-calendar__item--other-month)'
            )
            .at(4)
            .simulate('click');

        let newDateDisplayed = wrapper.state('selectedDate');
        currentDateDisplayed.add(4, 'days');
        expect(newDateDisplayed.date()).toEqual(currentDateDisplayed.date());

        // select 15th day of month
        wrapper
            .find(
                'table.fd-calendar__table tbody.fd-calendar__group tr.fd-calendar__row td.fd-calendar__item:not(.fd-calendar__item--other-month)'
            )
            .at(14)
            .simulate('click');

        newDateDisplayed = wrapper.state('selectedDate');
        currentDateDisplayed.add(10, 'days');
        expect(newDateDisplayed.date()).toEqual(currentDateDisplayed.date());

        // should clear out previous selections
        expect(wrapper.state('arrSelectedDates').length).toEqual(1);

        // select day in past
        wrapper
            .find(
                'table.fd-calendar__table tbody.fd-calendar__group tr.fd-calendar__row td.fd-calendar__item:not(.fd-calendar__item--other-month)'
            )
            .at(4)
            .simulate('click');

        newDateDisplayed = wrapper.state('selectedDate');
        currentDateDisplayed.subtract(10, 'days');
        expect(newDateDisplayed.date()).toEqual(currentDateDisplayed.date());

        expect(wrapper.state('arrSelectedDates').length).toEqual(2);
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the Calendar component', () => {
            const element = mount(<Calendar data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the Calendar component\'s month list table element', () => {
            const element = mount(<Calendar monthListProps={{ 'data-sample': 'Sample' }} />);

            element.find('.fd-calendar__action').at(1).childAt(0).simulate('click');

            expect(
                element.find('table').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the Calendar component\'s year list table element', () => {
            const element = mount(<Calendar yearListProps={{ 'data-sample': 'Sample' }} />);

            element.find('.fd-calendar__action').at(2).childAt(0).simulate('click');

            expect(
                element.find('table').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the Calendar component\'s table element', () => {
            const element = mount(<Calendar tableProps={{ 'data-sample': 'Sample' }} />);

            expect(
                element.find('table').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the Calendar component\'s thead element', () => {
            const element = mount(<Calendar tableHeaderProps={{ 'data-sample': 'Sample' }} />);

            expect(
                element.find('thead').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the Calendar component\'s tbody element', () => {
            const element = mount(<Calendar tableBodyProps={{ 'data-sample': 'Sample' }} />);

            expect(
                element.find('tbody').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
