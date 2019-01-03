import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Icon } from './Icon';

Enzyme.configure({ adapter: new Adapter() });

describe('<Icon />', () => {
  const mockOnClick = jest.fn();
  const defaultIcon = (
      <Icon glyph='cart' className='blue'
          clickHandler={mockOnClick} />
  );
  const iconWithSize = <Icon glyph='cart' size='s' />;

  test('create icon', () => {
    // default icon
    let component = renderer.create(defaultIcon);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // icon with different size
    component = renderer.create(iconWithSize);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('click on icon', () => {
    let wrapper = mount(defaultIcon);
    wrapper.find('.sap-icon--cart').simulate('click');
    expect(wrapper.prop('clickHandler')).toBeCalledTimes(1);

    wrapper = shallow(iconWithSize);
    wrapper.find('span.sap-icon--cart').simulate('click');
    expect(wrapper.prop('clickHandler')).toBeUndefined;
  });
});
