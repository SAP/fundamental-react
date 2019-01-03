import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Toggle } from './Toggle';

Enzyme.configure({ adapter: new Adapter() });

describe('<Toggle />', () => {
  const defaultToggle = <Toggle>Normal toggle</Toggle>;
  const checkedToggle = (
      <Toggle className='blue' size='s'
          checked>
      Small toggle
      </Toggle>
  );
  const disabledToggle = <Toggle disabled>Normal toggle</Toggle>;
  const disabledCheckedToggle = (
      <Toggle checked disabled>
      Normal toggle
      </Toggle>
  );

  test('create toggle component', () => {
    // Default toggle
    let component = renderer.create(defaultToggle);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // checked toggle
    component = renderer.create(checkedToggle);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // disabled toggle
    component = renderer.create(disabledToggle);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // checked disabled toggle
    component = renderer.create(disabledCheckedToggle);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Toggle state change', () => {
    const wrapper = shallow(defaultToggle);

    // check that toggle is not checked
    expect(wrapper.state(['checked'])).toBeFalsy();

    // simulate changing toggle
    wrapper.find('input[type="checkbox"]').simulate('change');

    // check that toggle is checked
    expect(wrapper.state(['checked'])).toBeTruthy();
  });
});
