import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { DatePicker } from './DatePicker';

Enzyme.configure({ adapter: new Adapter() });

describe('<DatePicker />', () => {
  const datePicker = <DatePicker />;
  const datePickerCompact = <DatePicker compact />;
  const datePickerRange = <DatePicker enableRangeSelection />;
  const datePickerRangeCompact = <DatePicker enableRangeSelection compact />;

  test('create date picker', () => {
    let component = renderer.create(datePicker);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    component = renderer.create(datePickerCompact);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    component = renderer.create(datePickerRange);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    component = renderer.create(datePickerRangeCompact);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
