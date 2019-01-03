import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Button, ButtonGroup } from './Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  const defaultButton = <Button>Regular Button</Button>;
  const optionButton = <Button option='emphasized'>Emphasized Button</Button>;
  const typeButton = <Button type='positive'>Positive Button</Button>;
  const iconButton = <Button glyph='cart'>Icon Button</Button>;
  const compactButton = <Button compact>Compact</Button>;
  const dropdownButton = <Button dropdown>Dropdown Button</Button>;
  const navBarButton = <Button navbar>Navbar button</Button>;

  const selectedButton = (
      <Button option='emphasized' selected>
      Selected State
      </Button>
  );
  const disabledButton = (
      <Button option='emphasized' disabled>
      Disabled State
      </Button>
  );

  const buttonGroup = (
      <ButtonGroup>
          <Button className='blue' glyph='survey' />
          <Button glyph='pie-chart' selected />
          <Button glyph='pool' />
      </ButtonGroup>
  );

  test('create buttons', () => {
    // default button
    let component = renderer.create(defaultButton);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // option button
    component = renderer.create(optionButton);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // type button
    component = renderer.create(typeButton);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // icon button
    component = renderer.create(iconButton);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // compact button
    component = renderer.create(compactButton);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // selected button
    component = renderer.create(selectedButton);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // disabled button
    component = renderer.create(disabledButton);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // dropdown button
    component = renderer.create(dropdownButton);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // nav bar button
    component = renderer.create(navBarButton);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('create button group', () => {
    const component = renderer.create(buttonGroup);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
