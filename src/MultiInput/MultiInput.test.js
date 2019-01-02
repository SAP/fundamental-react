import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MultiInput } from './MultiInput';

Enzyme.configure({ adapter: new Adapter() });

describe('<MultiInput />', () => {
  const mockOnTagsUpdate = jest.fn();
  const data = [
    'Apple',
    'Apricot',
    'Acai',
    'African Moringa',
    'Bearberry',
    'Bilberry',
    'Blood orange',
    'Barbadine',
    'Barbados cherry',
    'Balsam Apple',
    'Chokeberry',
    'Cranberry',
    'Cupuacu'
  ];
  const multiInput = (
      <MultiInput
          data={data}
          onTagsUpdate={mockOnTagsUpdate}
          placeHolder='Select a Fruit' />
  );

  const compactMultiInput = (
      <MultiInput
          className='blue'
          data={data}
          onTagsUpdate={mockOnTagsUpdate}
          placeHolder='Select a Fruit'
          compact />
  );

  let wrapper;

  const getListStatus = (wrapper, bIsShown) => {
    const combobox = wrapper.find(
      `div.fd-combobox-control[aria-expanded=${bIsShown}]`
    );

    const popover = wrapper.find(
      `div.fd-popover__body.fd-popover__body--no-arrow[aria-hidden=${!bIsShown}]`
    );

    return { combobox: combobox, popover: popover };
  };

  beforeEach(() => {
    wrapper = shallow(multiInput);
  });

  // create a default multi-input control
  test('create multi-input', () => {
    const component = renderer.create(multiInput);
    const tree = component.toJSON();

    // todo: multi-input uses randon number for some elements which cause snapshot to fail
    // todo: work on testing solution
    // expect(tree).toMatchSnapshot();
  });

  // create a compact multi-input control
  test('create compact multi-input', () => {
    const component = renderer.create(compactMultiInput);
    const tree = component.toJSON();

    // todo: multi-input uses randon number for some elements which cause snapshot to fail
    // todo: work on testing solution
    // expect(tree).toMatchSnapshot();
  });

  // check that the tag list is hidden
  test('check that tag list is hidden', () => {
    // check if bShowList state is changed
    expect(wrapper.state(['bShowList'])).toBe(false);

    // check to see if list is not shown
    let results = getListStatus(wrapper, false);
    expect(results.combobox).toHaveLength(1);
    expect(results.popover).toHaveLength(1);
  });

  // check to display tag list on input text click
  test('check that tag list is shown when input text is clicked', () => {
    // check if bShowList state is changed
    expect(wrapper.state(['bShowList'])).toBe(false);

    // check to see if list is not shown
    let results = getListStatus(wrapper, false);
    expect(results.combobox).toHaveLength(1);
    expect(results.popover).toHaveLength(1);

    // simulate click on input text box
    wrapper.find('input[type="text"].fd-input').simulate('click');

    // check if bShowList state is changed
    expect(wrapper.state(['bShowList'])).toBe(true);

    // check to see if list is shown
    results = getListStatus(wrapper, true);
    expect(results.combobox).toHaveLength(1);
    expect(results.popover).toHaveLength(1);
  });

  // check that tag list is shown on drop down click
  test('check that tag list is shown when dropdown button is clicked', () => {
    // check if bShowList state is changed
    expect(wrapper.state(['bShowList'])).toBe(false);

    // check to see if list is not shown
    let results = getListStatus(wrapper, false);
    expect(results.combobox).toHaveLength(1);
    expect(results.popover).toHaveLength(1);

    // simulate click on dropdown button
    wrapper
      .find('button.fd-button--light.sap-icon--navigation-down-arrow')
      .simulate('click');

    // check if bShowList state is changed
    expect(wrapper.state(['bShowList'])).toBe(true);

    // check to see if list is shown
    results = getListStatus(wrapper, true);
    expect(results.combobox).toHaveLength(1);
    expect(results.popover).toHaveLength(1);
  });

  test('add tag to tagList', () => {
    // check that no tags exist
    expect(wrapper.state(['tags'])).toHaveLength(0);

    // add tag to list
    wrapper
      .find('li:first-child>label>input.fd-checkbox[type="checkbox"]')
      .simulate('change', { target: { value: data[0] } });

    // check that tag list contains value
    expect(wrapper.state(['tags'])).toHaveLength(1);

    // check to see if tag button is created
    expect(wrapper.find('span.fd-token[role="button"]')).toHaveLength(1);

    // check that tag text is correct
    expect(wrapper.find('span.fd-token[role="button"]').text()).toEqual(
      data[0]
    );
  });

  test('remove tag from taglist by unchecking', () => {
    // check that no tags exist
    expect(wrapper.state(['tags'])).toHaveLength(0);

    // add tag to list
    wrapper
      .find('li:first-child>label>input.fd-checkbox[type="checkbox"]')
      .simulate('change', { target: { value: data[0] } });

    // check that tag list contains value
    expect(wrapper.state(['tags'])).toHaveLength(1);

    // simulate unchecking tag from tag list
    wrapper
      .find('li:first-child>label>input.fd-checkbox[type="checkbox"]')
      .simulate('change', { target: { value: data[0] } });

    // check that no tags exist
    expect(wrapper.state(['tags'])).toHaveLength(0);
  });

  test('remove tag from taglist by clicking on tag', () => {
    // check that no tags exist
    expect(wrapper.state(['tags'])).toHaveLength(0);

    // add tag to list
    wrapper
      .find('li:first-child>label>input.fd-checkbox[type="checkbox"]')
      .simulate('change', { target: { value: data[0] } });

    // add another tag to list
    wrapper
      .find('li')
      .at(3)
      .find('label>input.fd-checkbox[type="checkbox"]')
      .simulate('change', { target: { value: data[2] } });

    // check that tag list contains value
    expect(wrapper.state(['tags'])).toHaveLength(2);

    // simulate clicking on tag in tag collection under input box
    wrapper
      .find('span.fd-token[role="button"]')
      .at(1)
      .simulate('click', { target: { innerText: data[2] } });

    // check that no tags exist
    expect(wrapper.state(['tags'])).toHaveLength(1);
  });
});
