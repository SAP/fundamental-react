import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { InputGroup, FormGroup } from './InputGroup';
import { Button } from '../Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<InputGroup />', () => {
  const inputTextPosBefore = (
      <InputGroup
          inputType='text'
          addonPos='before'
          inputValue='1234567890'
          addon='$' />
  );
  const inputTextPosAfter = (
      <InputGroup
          inputType='text'
          addonPos='after'
          inputValue='1234567890'
          addon='€' />
  );
  const inputTextPosBeforeCompact = (
      <InputGroup
          inputType='text'
          addonPos='before'
          inputValue='1234567890'
          addon='$'
          compact />
  );
  const inputTextPosAfterCompact = (
      <InputGroup
          inputType='text'
          addonPos='after'
          inputValue='1234567890'
          addon='€'
          compact />
  );
  const numberInput = <InputGroup inputType='number' inputValue={100} />;
  const numberInputCompact = (
      <InputGroup inputType='number' inputValue={100}
          compact />
  );
  const searchText = (
      <InputGroup inputType='search' inputPlaceholder='Search Term' />
  );
  const searchTextCompact = (
      <InputGroup
          inputType='search'
          inputValue='search me'
          inputPlaceholder='Search Term'
          compact />
  );
  const inputWithIcon = (
      <InputGroup
          inputType='text'
          addonPos='before'
          inputValue='1234567890'
          glyph='globe' />
  );
  const inputWithIconCompact = (
      <InputGroup
          inputType='text'
          addonPos='before'
          inputValue='1234567890'
          glyph='globe'
          compact />
  );
  const inputWithIconAfter = (
      <InputGroup
          inputType='text'
          addonPos='after'
          inputValue='1234567890'
          glyph='hide' />
  );
  const inputWithIconAfterCompact = (
      <InputGroup
          inputType='text'
          addonPos='after'
          inputValue='1234567890'
          glyph='hide'
          compact />
  );
  const inputWithActions = (
      <InputGroup
          inputType='text'
          addonPos='after'
          inputValue='1234567890'
          actions>
          <Button option='light'>Button</Button>
      </InputGroup>
  );
  const inputWithActionsCompact = (
      <InputGroup
          inputType='text'
          addonPos='after'
          inputValue='1234567890'
          actions
          compact>
          <Button option='light'>Button</Button>
      </InputGroup>
  );

  const inputWithActionsNoButtons = (
      <InputGroup
          inputType='text'
          addonPos='before'
          inputValue='1234567890'
          actions />
  );
  const formGroup = <FormGroup>{inputTextPosAfter}</FormGroup>;

  test('create input group items', () => {
    // create input text before
    let component = renderer.create(inputTextPosBefore);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // create input text after
    component = renderer.create(inputTextPosAfter);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // create input text before compact
    component = renderer.create(inputTextPosBeforeCompact);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // create input text after compact
    component = renderer.create(inputTextPosAfterCompact);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // create input number
    component = renderer.create(numberInput);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // create input number compact
    component = renderer.create(numberInputCompact);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // create input search
    component = renderer.create(searchText);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // create input search compact
    component = renderer.create(searchTextCompact);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // create input icon
    component = renderer.create(inputWithIcon);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // create input icon compact
    component = renderer.create(inputWithIconCompact);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // create input icon after
    component = renderer.create(inputWithIconAfter);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // create input icon after compact
    component = renderer.create(inputWithIconAfterCompact);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // create input actions
    component = renderer.create(inputWithActions);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // create input actions compact
    component = renderer.create(inputWithActionsCompact);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // create input actions but no buttons
    component = renderer.create(inputWithActionsNoButtons);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // create form group
    component = renderer.create(formGroup);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // default input group
    component = renderer.create('<InputGroup />');
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('input text entered', () => {
    const wrapper = mount(inputTextPosBefore);

    // click up
    wrapper.setState({ value: '' });
    wrapper
      .find('input[type="text"]')
      .simulate('change', { target: { value: 'hello' } });

    expect(wrapper.state('value')).toEqual('hello');
  });

  test('search input then clear button click', () => {
    const wrapper = mount(searchText);

    // enter text into search box
    wrapper
      .find('input[type="search"]')
      .simulate('change', { target: { value: 'hello' } });

    expect(wrapper.state('searchValue')).toEqual('hello');

    // clear search box
    wrapper
      .find('.fd-input-group__button.fd-input-group__button--clear')
      .simulate('click');

    expect(wrapper.state('searchValue')).toEqual('');
  });

  test('number input handle up and down', () => {
    const wrapper = mount(numberInput);

    // click up
    wrapper.setState({ value: 0 });
    wrapper
      .find(
        'button.fd-input-group__button.fd-input-group__button--step-up.sap-icon--slim-arrow-up'
      )
      .simulate('click');
    expect(wrapper.state('value')).toEqual(1);

    wrapper
      .find(
        'button.fd-input-group__button.fd-input-group__button--step-down.sap-icon--slim-arrow-down'
      )
      .simulate('click');
    expect(wrapper.state('value')).toEqual(0);
  });
});
