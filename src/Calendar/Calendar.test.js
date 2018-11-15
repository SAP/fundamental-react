import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Calendar } from './Calendar';

Enzyme.configure({ adapter: new Adapter() });

describe('<Calendar />', () => {
  const defaultCalendar = <Calendar />;
  const disabledWeekEnds = <Calendar disableWeekends={true} />;
  const disabledBeforeDate = (
    <Calendar disableBeforeDate={new Date(2018, 7, 3, 0, 0, 0, 0)} />
  );
  const disabledAfterDate = (
    <Calendar disableAfterDate={new Date(2018, 7, 3, 0, 0, 0, 0)} />
  );
  const disabledWeekDays = <Calendar disableWeekday={['Monday', 'Tuesday']} />;
  const disabledPastDays = <Calendar disablePastDates={true} />;
  const disabledFutureDays = <Calendar disableFutureDates={true} />;
  const disabledDates = (
    <Calendar
      disabledDates={[
        new Date(2018, 1, 1, 0, 0, 0, 0),
        new Date(2018, 3, 3, 0, 0, 0, 0)
      ]}
    />
  );
  const blockedDates = (
    <Calendar
      blockedDates={[
        new Date(2018, 1, 1, 0, 0, 0, 0),
        new Date(2018, 3, 3, 0, 0, 0, 0)
      ]}
    />
  );
  const rangeSelectCalendar = <Calendar enableRangeSelection={true} />;

  test('Create calendars', () => {
    //default calendar
    let component = renderer.create(defaultCalendar);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // calendar with disabled weekends
    component = renderer.create(disabledWeekEnds);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // calendar with disabled before date
    component = renderer.create(disabledBeforeDate);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // calendar with disabled after date
    component = renderer.create(disabledAfterDate);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // calendar with disabled past dates
    component = renderer.create(disabledPastDays);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // calendar with disabled future dates
    component = renderer.create(disabledFutureDays);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // calendar with disabled dates
    component = renderer.create(disabledDates);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // calendar with disabled weekdays
    component = renderer.create(disabledWeekDays);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // calendar with blocked dates
    component = renderer.create(blockedDates);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // calendar with range selection
    component = renderer.create(rangeSelectCalendar);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
