import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Time } from './Time';

Enzyme.configure({ adapter: new Adapter() });

describe('<Time />', () => {
  const defaultTime = <Time />;
  const meridiemTime = <Time name="meridiem" />;
  const twelveHour = <Time format12Hours={true} />;
  const falseSpinners = <Time spinners={false} />;
  const hideSeconds = <Time showSecond={false} />;
  const disabledTime = <Time disabled={true} />;

  test('create time component', () => {
    // default time
    let component = renderer.create(defaultTime);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // meridiem time
    component = renderer.create(meridiemTime);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // twelve hour time
    component = renderer.create(twelveHour);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // false spinners time
    component = renderer.create(falseSpinners);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // hide seconds time
    component = renderer.create(hideSeconds);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // disabled time
    component = renderer.create(disabledTime);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
