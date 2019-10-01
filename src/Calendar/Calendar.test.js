import Calendar from '../Calendar/Calendar';
import { mount } from 'enzyme';
import React from 'react';

describe('<Calendar />', () => {
    const mockOnChange = jest.fn();
    const defaultCalendar = <Calendar onChange={mockOnChange} />;
    const disabledWeekEnds = <Calendar disableWeekends />;
    const disabledBeforeDay = (
        <Calendar disableBeforeDate={new Date(2018, 7, 3, 0, 0, 0, 0)} />
    );
    const disabledAfterDay = (
        <Calendar disableAfterDate={new Date(2018, 7, 3, 0, 0, 0, 0)} />
    );
    const blockedDays = (
        <Calendar
            blockedDates={[
                new Date(2018, 1, 1, 0, 0, 0, 0),
                new Date(2018, 3, 3, 0, 0, 0, 0)
            ]} />
    );
    const disabledDates = (
        <Calendar
            disabledDates={[
                new Date(2018, 1, 1, 0, 0, 0, 0),
                new Date(2018, 3, 3, 0, 0, 0, 0)
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
        let wrapper = mount(defaultCalendar).children().children();
        expect(wrapper.state('showMonths')).toBeFalsy();
        wrapper
            .find(
                'header.fd-calendar__header button.fd-button--light.fd-button--compact'
            )
            .at(1)
            .simulate('click');

        expect(wrapper.state('showMonths')).toBeTruthy();

        wrapper
            .find(
                'header.fd-calendar__header button.fd-button--light.fd-button--compact'
            )
            .at(1)
            .simulate('click');

        expect(wrapper.state('showMonths')).toBeFalsy();
    });

    test('click month from list', () => {
        let wrapper = mount(defaultCalendar);

        expect(wrapper.children().children().state('showMonths')).toBeFalsy();

        //set baseline initial date
        let initialDate = new Date('1/15/2019');
        wrapper.children().children().setState({ currentDateDisplayed: initialDate });

        //open month overlay
        wrapper
            .find(
                'header.fd-calendar__header button.fd-button--light.fd-button--compact'
            )
            .at(1)
            .simulate('click');

        expect(wrapper.children().children().state('showMonths')).toBeTruthy();

        wrapper
            .find('.fd-calendar__item')
            .at(3)
            .simulate('click');

        // check that April was selected
        const currentDateDisplayed = wrapper.children().children().state('currentDateDisplayed');

        expect(currentDateDisplayed.getMonth()).toEqual(3);

        // check that first of month is selected
        expect(currentDateDisplayed.getDate()).toEqual(1);
    });

    test('click month from list with date range', () => {
        let wrapper = mount(rangeSelect);
        expect(wrapper.children().children().state('showMonths')).toBeFalsy();

        //set baseline initial date
        let initialDate = new Date('1/15/2019');
        wrapper.children().children().setState({ currentDateDisplayed: initialDate });

        //open months view
        wrapper
            .find(
                'header.fd-calendar__header button.fd-button--light.fd-button--compact'
            )
            .at(1)
            .simulate('click');

        expect(wrapper.children().children().state('showMonths')).toBeTruthy();

        wrapper
            .find('ul.fd-calendar__list li.fd-calendar__item')
            .at(3)
            .simulate('click');

        // check that April was selected
        const currentDateDisplayed = wrapper.children().children().state('currentDateDisplayed');

        expect(currentDateDisplayed.getMonth()).toEqual(3);
    });

    test('show/hide years', () => {
        let wrapper = mount(defaultCalendar).children().children();
        expect(wrapper.state('showYears')).toBeFalsy();
        wrapper
            .find(
                'header.fd-calendar__header button.fd-button--light.fd-button--compact'
            )
            .at(2)
            .simulate('click');

        expect(wrapper.state('showYears')).toBeTruthy();

        wrapper
            .find(
                'header.fd-calendar__header button.fd-button--light.fd-button--compact'
            )
            .at(2)
            .simulate('click');

        expect(wrapper.state('showYears')).toBeFalsy();
    });

    test('click year from list', () => {
        let wrapper = mount(defaultCalendar);
        const currentDateDisplayed = Object.assign(new Date(), wrapper.children().children().state('currentDateDisplayed'));
        expect(wrapper.children().children().state('showYears')).toBeFalsy();
        wrapper
            .find(
                'header.fd-calendar__header button.fd-button--light.fd-button--compact'
            )
            .at(2)
            .simulate('click');

        expect(wrapper.children().children().state('showYears')).toBeTruthy();

        wrapper
            .find('ul.fd-calendar__list li.fd-calendar__item')
            .at(3)
            .simulate('click');

        let newDateDisplayed = new Date(wrapper.children().children().state('currentDateDisplayed'));
        expect(newDateDisplayed.getFullYear()).toEqual(
            currentDateDisplayed.getFullYear() + 3
        );
    });

    test('click disabled day', () => {
        const wrapper = mount(disabledWeekEnds).children().children();
        // select day of month
        wrapper
            .find(
                'table.fd-calendar__table tbody.fd-calendar__group tr.fd-calendar__row td.fd-calendar__item:not(.fd-calendar__item--other-month)'
            )
            .at(0)
            .simulate('click');

        const currentDateDisplayed = new Date(wrapper.state('selectedDate'));

        // select a disabled day of month
        wrapper
            .find(
                'table.fd-calendar__table tbody.fd-calendar__group tr.fd-calendar__row td.fd-calendar__item.is-disabled'
            )
            .at(0)
            .simulate('click');

        // previously selected date should not change
        expect(wrapper.state('selectedDate').getDate()).toEqual(currentDateDisplayed.getDate());
    });

    test('click year from list from range selector', () => {
        let wrapper = mount(rangeSelect);
        const currentDateDisplayed = Object.assign(new Date(), wrapper.children().children().state('currentDateDisplayed'));
        expect(wrapper.children().children().state('showYears')).toBeFalsy();
        wrapper
            .find(
                'header.fd-calendar__header button.fd-button--light.fd-button--compact'
            )
            .at(2)
            .simulate('click');

        expect(wrapper.children().children().state('showYears')).toBeTruthy();

        wrapper
            .find('ul.fd-calendar__list li.fd-calendar__item')
            .at(3)
            .simulate('click');

        const newDateDisplayed = new Date(wrapper.children().children().state('currentDateDisplayed'));
        expect(newDateDisplayed.getFullYear()).toEqual(
            currentDateDisplayed.getFullYear() + 3
        );
    });

    test('click previous button', () => {
        let wrapper = mount(defaultCalendar).children().children();

        let initialDate = new Date('3/28/2019');
        wrapper.setState({ currentDateDisplayed: initialDate });

        wrapper
            .find(
                'header.fd-calendar__header button.fd-button--light.fd-button--compact'
            )
            .at(0)
            .simulate('click');
        const newDateDisplayed = wrapper.state('currentDateDisplayed');

        expect(newDateDisplayed.getMonth()).toEqual(1);

        // previous button when year shown
        wrapper
            .find(
                'header.fd-calendar__header button.fd-button--light.fd-button--compact'
            )
            .at(2)
            .simulate('click');

        expect(wrapper.state('showYears')).toBeTruthy();

        wrapper
            .find(
                'header.fd-calendar__header button.fd-button--light.fd-button--compact'
            )
            .at(0)
            .simulate('click');
        //should show 2007-2018 (12 years)
        const newYearDisplayed = wrapper.state('currentDateDisplayed');
        expect(newYearDisplayed.getFullYear()).toEqual(2007);
    });

    test('click next button', () => {
        let wrapper = mount(defaultCalendar).children().children();

        let initialDate = new Date('3/28/2019');
        wrapper.setState({ currentDateDisplayed: initialDate });

        wrapper
            .find(
                'header.fd-calendar__header button.fd-button--light.fd-button--compact'
            )
            .at(3)
            .simulate('click');
        const newDateDisplayed = wrapper.state('currentDateDisplayed');

        expect(newDateDisplayed.getMonth()).toEqual(3);

        // previous button when year shown
        wrapper
            .find(
                'header.fd-calendar__header button.fd-button--light.fd-button--compact'
            )
            .at(2)
            .simulate('click');

        expect(wrapper.state('showYears')).toBeTruthy();

        wrapper
            .find(
                'header.fd-calendar__header button.fd-button--light.fd-button--compact'
            )
            .at(3)
            .simulate('click');

        const newYearDisplayed = wrapper.state('currentDateDisplayed');

        expect(newYearDisplayed.getFullYear()).toEqual(2031);
    });

    // broken test for 31st of month -> needs to be tested once calendar is refactored.
    xtest('click next button on the 31st of month', () => {
        let wrapper = mount(defaultCalendar).children().children();

        let initialDate = new Date('5/31/2019');
        wrapper.setState({ currentDateDisplayed: initialDate });

        wrapper
            .find(
                'header.fd-calendar__header button.fd-button--light.fd-button--compact'
            )
            .at(3)
            .simulate('click');
        const newDateDisplayed = wrapper.state('currentDateDisplayed');

        expect(newDateDisplayed.getMonth()).toEqual(5);
    });

    test('click on day', () => {
        const wrapper = mount(defaultCalendar).children().children();
        // select first day of month
        wrapper
            .find(
                'table.fd-calendar__table tbody.fd-calendar__group tr.fd-calendar__row td.fd-calendar__item:not(.fd-calendar__item--other-month)'
            )
            .at(0)
            .simulate('click');

        let selectedDate = new Date(wrapper.state('selectedDate'));
        let currentDateDisplayed = new Date(wrapper.state('currentDateDisplayed'));

        expect(selectedDate.getDate()).toEqual(currentDateDisplayed.getDate());
    });

    test('click on day with range enabled', () => {
        const wrapper = mount(rangeSelect).children().children();
        // select first day of month
        wrapper
            .find(
                'table.fd-calendar__table tbody.fd-calendar__group tr.fd-calendar__row td.fd-calendar__item:not(.fd-calendar__item--other-month)'
            )
            .at(0)
            .simulate('click');

        const currentDateDisplayed = new Date(wrapper.state('selectedDate'));

        // select 5nd day of month
        wrapper
            .find(
                'table.fd-calendar__table tbody.fd-calendar__group tr.fd-calendar__row td.fd-calendar__item:not(.fd-calendar__item--other-month)'
            )
            .at(4)
            .simulate('click');

        const newDateDisplayed = wrapper.state('selectedDate');
        currentDateDisplayed.setDate(currentDateDisplayed.getDate() + 4);
        expect(newDateDisplayed.getDate()).toEqual(currentDateDisplayed.getDate());

        expect(wrapper.state('arrSelectedDates').length).toEqual(2);
    });

    test('click on multiple days with range enabled', () => {
        const wrapper = mount(rangeSelect).children().children();
        // select first day of month
        wrapper
            .find(
                'table.fd-calendar__table tbody.fd-calendar__group tr.fd-calendar__row td.fd-calendar__item:not(.fd-calendar__item--other-month)'
            )
            .at(0)
            .simulate('click');

        let currentDateDisplayed = new Date(wrapper.state('selectedDate'));

        // select 5nd day of month
        wrapper
            .find(
                'table.fd-calendar__table tbody.fd-calendar__group tr.fd-calendar__row td.fd-calendar__item:not(.fd-calendar__item--other-month)'
            )
            .at(4)
            .simulate('click');

        let newDateDisplayed = wrapper.state('selectedDate');
        currentDateDisplayed.setDate(currentDateDisplayed.getDate() + 4);
        expect(newDateDisplayed.getDate()).toEqual(currentDateDisplayed.getDate());

        // select 15th day of month
        wrapper
            .find(
                'table.fd-calendar__table tbody.fd-calendar__group tr.fd-calendar__row td.fd-calendar__item:not(.fd-calendar__item--other-month)'
            )
            .at(14)
            .simulate('click');

        newDateDisplayed = wrapper.state('selectedDate');
        currentDateDisplayed.setDate(currentDateDisplayed.getDate() + 10);
        expect(newDateDisplayed.getDate()).toEqual(currentDateDisplayed.getDate());

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
        currentDateDisplayed.setDate(currentDateDisplayed.getDate() - 10);
        expect(newDateDisplayed.getDate()).toEqual(currentDateDisplayed.getDate());

        expect(wrapper.state('arrSelectedDates').length).toEqual(2);
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the Calendar component', () => {
            const element = mount(<Calendar data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the Calendar component\'s month list ul element', () => {
            const element = mount(<Calendar monthListProps={{ 'data-sample': 'Sample' }} />);

            element.find('.fd-calendar__action').at(1).childAt(0).simulate('click');

            expect(
                element.find('ul').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the Calendar component\'s year list ul element', () => {
            const element = mount(<Calendar yearListProps={{ 'data-sample': 'Sample' }} />);

            element.find('.fd-calendar__action').at(2).childAt(0).simulate('click');

            expect(
                element.find('ul').getDOMNode().attributes['data-sample'].value
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
