import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Calendar } from '../Calendar/Calendar';

Enzyme.configure({ adapter: new Adapter() });

describe('<Calendar />', () => {
  const mockOnChange = jest.fn();
  const defaultCalendar = <Calendar onChange={mockOnChange} />;
  const disabledWeekEnds = <Calendar disableWeekends={true} />;
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
      ]}
    />
  );
  const disabledDates = (
    <Calendar
      disabledDates={[
        new Date(2018, 1, 1, 0, 0, 0, 0),
        new Date(2018, 3, 3, 0, 0, 0, 0)
      ]}
    />
  );
  const disabledWeekDay = <Calendar disableWeekday={['Monday', 'Tuesday']} />;
  const rangeSelect = (
    <Calendar enableRangeSelection={true} onChange={mockOnChange} />
  );
  const disablePast = <Calendar disablePastDates={true} />;
  const disableFuture = <Calendar disableFutureDates={true} />;

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
    expect(currentDateDisplayed.getFullYear()).toEqual(2021);
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

    expect(newDateDisplayed.getMonth()).toEqual(
      currentDateDisplayed.getMonth() - 1
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

    expect(newYearDisplayed.getFullYear()).toEqual(
      currentYearDisplayed.getFullYear() - 12
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

    expect(newDateDisplayed.getMonth()).toEqual(
      currentDateDisplayed.getMonth() + 1
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

    expect(newYearDisplayed.getFullYear()).toEqual(
      currentYearDisplayed.getFullYear() + 12
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

    expect(newDateDisplayed.getDate()).toEqual(
      currentDateDisplayed.getDate() + 1
    );
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

    expect(newDateDisplayed.getDate()).toEqual(
      currentDateDisplayed.getDate() + 4
    );

    expect(wrapper.state('arrSelectedDates').length).toEqual(2);
  });
});
