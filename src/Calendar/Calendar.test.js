import { Calendar } from '../Calendar/Calendar';
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
        mount(rangeSelect);
    });

    test('show/hide months', () => {
        let wrapper = mount(defaultCalendar);
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
        expect(wrapper.state('showMonths')).toBeFalsy();
        wrapper
            .find(
                'header.fd-calendar__header button.fd-button--light.fd-button--compact'
            )
            .at(1)
            .simulate('click');

        expect(wrapper.state('showMonths')).toBeTruthy();

        wrapper
            .find('ul.fd-calendar__list li.fd-calendar__item')
            .at(3)
            .simulate('click');

        // check that April was selected
        const currentDateDisplayed = wrapper.state('currentDateDisplayed');
        expect(currentDateDisplayed.getMonth()).toEqual(3);
    });

    test('show/hide years', () => {
        let wrapper = mount(defaultCalendar);
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
        expect(wrapper.state('showYears')).toBeFalsy();
        wrapper
            .find(
                'header.fd-calendar__header button.fd-button--light.fd-button--compact'
            )
            .at(2)
            .simulate('click');

        expect(wrapper.state('showYears')).toBeTruthy();

        wrapper
            .find('ul.fd-calendar__list li.fd-calendar__item')
            .at(3)
            .simulate('click');

        // check that April was selected
        const currentDateDisplayed = wrapper.state('currentDateDisplayed');
        let currentYearDisplayed = new Date(wrapper.state('currentYear'));
        expect(currentDateDisplayed.getFullYear()).toEqual(
            currentYearDisplayed.getFullYear() + 3
        );
    });

    test('click previous button', () => {
        let wrapper = mount(defaultCalendar);
        let currentDateDisplayed = new Date(wrapper.state('currentDateDisplayed'));

        wrapper
            .find(
                'header.fd-calendar__header button.fd-button--light.fd-button--compact'
            )
            .at(0)
            .simulate('click');
        let newDateDisplayed = wrapper.state('currentDateDisplayed');
        currentDateDisplayed.setMonth(currentDateDisplayed.getMonth() - 1);

        expect(newDateDisplayed.getMonth()).toEqual(
            currentDateDisplayed.getMonth()
        );

        // previous button when year shown
        wrapper
            .find(
                'header.fd-calendar__header button.fd-button--light.fd-button--compact'
            )
            .at(2)
            .simulate('click');

        expect(wrapper.state('showYears')).toBeTruthy();

        let currentYearDisplayed = new Date(wrapper.state('currentYear'));
        wrapper
            .find(
                'header.fd-calendar__header button.fd-button--light.fd-button--compact'
            )
            .at(0)
            .simulate('click');

        let newYearDisplayed = wrapper.state('currentYear');
        currentYearDisplayed.setFullYear(currentYearDisplayed.getFullYear() - 12);
        expect(newYearDisplayed.getFullYear()).toEqual(
            currentYearDisplayed.getFullYear()
        );
    });

    test('click next button', () => {
        let wrapper = mount(defaultCalendar);
        let currentDateDisplayed = new Date(wrapper.state('currentDateDisplayed'));

        wrapper
            .find(
                'header.fd-calendar__header button.fd-button--light.fd-button--compact'
            )
            .at(3)
            .simulate('click');
        let newDateDisplayed = wrapper.state('currentDateDisplayed');

        currentDateDisplayed.setMonth(currentDateDisplayed.getMonth() + 1);

        expect(newDateDisplayed.getMonth()).toEqual(
            currentDateDisplayed.getMonth()
        );

        // previous button when year shown
        wrapper
            .find(
                'header.fd-calendar__header button.fd-button--light.fd-button--compact'
            )
            .at(2)
            .simulate('click');

        expect(wrapper.state('showYears')).toBeTruthy();

        let currentYearDisplayed = new Date(wrapper.state('currentYear'));

        wrapper
            .find(
                'header.fd-calendar__header button.fd-button--light.fd-button--compact'
            )
            .at(3)
            .simulate('click');

        let newYearDisplayed = wrapper.state('currentYear');

        currentYearDisplayed.setFullYear(currentYearDisplayed.getFullYear() + 12);
        expect(newYearDisplayed.getFullYear()).toEqual(
            currentYearDisplayed.getFullYear()
        );
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

        const currentDateDisplayed = new Date(wrapper.state('selectedDate'));

        // select 2nd day of month
        wrapper
            .find(
                'table.fd-calendar__table tbody.fd-calendar__group tr.fd-calendar__row td.fd-calendar__item:not(.fd-calendar__item--other-month)'
            )
            .at(1)
            .simulate('click');

        const newDateDisplayed = wrapper.state('selectedDate');
        currentDateDisplayed.setDate(currentDateDisplayed.getDate() + 1);

        expect(newDateDisplayed.getDate()).toEqual(currentDateDisplayed.getDate());
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

    describe('Prop spreading', () => {
        test('should allow props to be spread to the Calendar component', () => {
            const element = mount(<Calendar data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        xtest('should allow props to be spread to the Calendar component\'s month list ul element', () => {
            // TODO: placeholder for this test description once that functionality is built
        });

        xtest('should allow props to be spread to the Calendar component\'s year list ul element', () => {
            // TODO: placeholder for this test description once that functionality is built
        });

        xtest('should allow props to be spread to the Calendar component\'s table element', () => {
            // TODO: placeholder for this test description once that functionality is built
        });

        xtest('should allow props to be spread to the Calendar component\'s thead element', () => {
            // TODO: placeholder for this test description once that functionality is built
        });

        xtest('should allow props to be spread to the Calendar component\'s tbody element', () => {
            // TODO: placeholder for this test description once that functionality is built
        });
    });
});
