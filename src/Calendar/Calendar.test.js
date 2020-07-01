/* eslint-disable compat/compat */
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
    const openToDate = <Calendar openToDate={moment().year('2000').month(0).date(1)} />;
    const weekdayStart = (_weekdayStart = 0) => <Calendar weekdayStart={_weekdayStart} />;
    const showTodayButton = <Calendar showToday />;

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
        mount(weekdayStart());
        mount(openToDate);
    });

    test('show/hide months', () => {
        let wrapper = mount(defaultCalendar);
        expect(wrapper.state('showMonths')).toBeFalsy();
        wrapper
            .find(
                'header.fd-calendar__header button.fd-button--transparent'
            )
            .at(1)
            .simulate('click');

        expect(wrapper.state('showMonths')).toBeTruthy();

        wrapper
            .find(
                'header.fd-calendar__header button.fd-button--transparent'
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
                'header.fd-calendar__header button.fd-button--transparent'
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
                'header.fd-calendar__header button.fd-button--transparent'
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
                'header.fd-calendar__header button.fd-button--transparent'
            )
            .at(2)
            .simulate('click');

        expect(wrapper.state('showYears')).toBeTruthy();

        wrapper
            .find(
                'header.fd-calendar__header button.fd-button--transparent'
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
                'header.fd-calendar__header button.fd-button--transparent'
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
                'header.fd-calendar__header button.fd-button--transparent'
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
                'header.fd-calendar__header button.fd-button--transparent'
            )
            .at(0)
            .simulate('click');
        const newDateDisplayed = wrapper.state('currentDateDisplayed');

        expect(newDateDisplayed.month()).toEqual(1);

        // previous button when year shown
        wrapper
            .find(
                'header.fd-calendar__header button.fd-button--transparent'
            )
            .at(2)
            .simulate('click');

        expect(wrapper.state('showYears')).toBeTruthy();

        wrapper
            .find(
                'header.fd-calendar__header button.fd-button--transparent'
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
                'header.fd-calendar__header button.fd-button--transparent'
            )
            .at(3)
            .simulate('click');
        const newDateDisplayed = wrapper.state('currentDateDisplayed');

        expect(newDateDisplayed.month()).toEqual(3);

        // previous button when year shown
        wrapper
            .find(
                'header.fd-calendar__header button.fd-button--transparent'
            )
            .at(2)
            .simulate('click');

        expect(wrapper.state('showYears')).toBeTruthy();

        wrapper
            .find(
                'header.fd-calendar__header button.fd-button--transparent'
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
                'header.fd-calendar__header button.fd-button--transparent'
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

    test('click on Today button', () => {
        const wrapper = mount(showTodayButton);
        // select a different day first
        wrapper
            .find(
                'table.fd-calendar__table tbody.fd-calendar__group tr.fd-calendar__row td.fd-calendar__item:not(.fd-calendar__item--other-month)'
            )
            .at(0)
            .simulate('click');

        // now click Today
        wrapper
            .find(
                'header.fd-calendar__header button.fd-button--transparent'
            )
            .at(4)
            .simulate('click');

        let selectedDate = moment(new Date(wrapper.state('selectedDate')));
        let todayDate = moment(new Date(wrapper.state('todayDate')));

        expect(selectedDate.date()).toEqual(todayDate.date());
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

    describe('openToDate', () => {
        test('should open today date if not specified', () => {
            let wrapper = mount(defaultCalendar);

            expect(wrapper.state('currentDateDisplayed')).toEqual(moment().startOf('day'));
        });

        test('should open to specified date when mounted', () => {
            let wrapper = mount(openToDate);
            const focusedDateElement = wrapper.find('[data-is-focused=true] span');

            expect(focusedDateElement.prop('aria-label')).toEqual('January 1, 2000');
        });
    });

    describe('weekdayStart', () => {
        // testing with specific date so we can verify our weekdays actually line up with the proper dates
        const date = moment('6/1/2020');
        test('should render weekday start as Sunday', () => {
            const wrapper = mount(weekdayStart());
            wrapper.setState({ currentDateDisplayed: date });
            const firstWeekday = wrapper.find('th.fd-calendar__item .fd-calendar__text').first().text();
            const firstDate = wrapper.find('td').first().text();
            expect(firstWeekday).toBe('Su');
            expect(firstDate).toBe('31'); // May 31, 2020
        });
        test('should render weekday start as Monday', () => {
            const wrapper = mount(weekdayStart(1));
            wrapper.setState({ currentDateDisplayed: date });
            const firstWeekday = wrapper.find('th.fd-calendar__item .fd-calendar__text').first().text();
            const firstDate = wrapper.find('td').first().text();
            expect(firstWeekday).toBe('Mo');
            expect(firstDate).toBe('1'); // June 1, 2020
        });
        test('should render weekday start as Tuesday', () => {
            const wrapper = mount(weekdayStart(2));
            wrapper.setState({ currentDateDisplayed: date });
            const firstWeekday = wrapper.find('th.fd-calendar__item .fd-calendar__text').first().text();
            const firstDate = wrapper.find('td').first().text();
            expect(firstWeekday).toBe('Tu');
            expect(firstDate).toBe('26'); // May 26, 2020 because our starting weekday is now after the first day of the month
        });
        test('should render weekday start as Wednesday', () => {
            const wrapper = mount(weekdayStart(3));
            wrapper.setState({ currentDateDisplayed: date });
            const firstWeekday = wrapper.find('th.fd-calendar__item .fd-calendar__text').first().text();
            const firstDate = wrapper.find('td').first().text();
            expect(firstWeekday).toBe('We');
            expect(firstDate).toBe('27'); // May 27, 2020
        });
        test('should render weekday start as Thursday', () => {
            const wrapper = mount(weekdayStart(4));
            wrapper.setState({ currentDateDisplayed: date });
            const firstWeekday = wrapper.find('th.fd-calendar__item .fd-calendar__text').first().text();
            const firstDate = wrapper.find('td').first().text();
            expect(firstWeekday).toBe('Th');
            expect(firstDate).toBe('28'); // May 28, 2020
        });
        test('should render weekday start as Friday', () => {
            const wrapper = mount(weekdayStart(5));
            wrapper.setState({ currentDateDisplayed: date });
            const firstWeekday = wrapper.find('th.fd-calendar__item .fd-calendar__text').first().text();
            const firstDate = wrapper.find('td').first().text();
            expect(firstWeekday).toBe('Fr');
            expect(firstDate).toBe('29'); // May 29, 2020
        });
        test('should render weekday start as Saturday', () => {
            const wrapper = mount(weekdayStart(6));
            wrapper.setState({ currentDateDisplayed: date });
            const firstWeekday = wrapper.find('th.fd-calendar__item .fd-calendar__text').first().text();
            const firstDate = wrapper.find('td').first().text();
            expect(firstWeekday).toBe('Sa');
            expect(firstDate).toBe('30'); // May 30, 2020
        });
        test('should render even when number as a string is passed in', () => {
            const wrapper = mount(weekdayStart('6'));
            wrapper.setState({ currentDateDisplayed: date });
            const firstWeekday = wrapper.find('th.fd-calendar__item .fd-calendar__text').first().text();
            const firstDate = wrapper.find('td').first().text();
            expect(firstWeekday).toBe('Sa');
            expect(firstDate).toBe('30'); // May 30, 2020
        });
        test('should default to Sunday view when prop is not a number or a number as a string', () => {
            const consoleSpy = jest.spyOn(console, 'error').mockImplementation(jest.fn());
            const wrapper = mount(weekdayStart({}));
            wrapper.setState({ currentDateDisplayed: date });
            const firstWeekday = wrapper.find('th.fd-calendar__item .fd-calendar__text').first().text();
            const firstDate = wrapper.find('td').first().text();
            expect(consoleSpy).toHaveBeenCalled();
            expect(firstWeekday).toBe('Su');
            expect(firstDate).toBe('31'); // May 31, 2020
        });
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the Calendar component', () => {
            const element = mount(<Calendar data-sample='Sample' />);

            expect(
                element.find('.fd-calendar').getDOMNode().attributes['data-sample'].value
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
