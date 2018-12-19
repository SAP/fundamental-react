import React from 'react';
import renderer from 'react-test-renderer';
import { SearchInput } from './SearchInput';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<SearchInput />', () => {
  const mockOnSearch = jest.fn();
  const mockOnAutoComplete = jest.fn();
  const data = ['apple', 'banana', 'orange'];
  const defaultSearchInput = (
    <SearchInput placeHolder='Hello there' onSearch={mockOnSearch} />
  );
  const autoCompleteSearchInput = (
    <SearchInput
      placeHolder='Hello there'
      onAutoComplete={mockOnAutoComplete}
      data={data}
      onSearch={mockOnSearch}
    />
  );
  const autoCompleteNoDataSearchInput = (
    <SearchInput
      placeHolder='Hello there'
      data={[]}
      onAutoComplete={mockOnAutoComplete}
      onSearch={mockOnSearch}
    />
  );
  const searchInput = 'input[type="text"].fd-input';

  const getListStatus = (wrapper, bIsShown) => {
    const combobox = wrapper.find(
      `div.fd-combobox-control[aria-expanded=${bIsShown}]`
    );

    const popover = wrapper.find(
      `div.fd-popover__body.fd-popover__body--no-arrow[aria-hidden=${!bIsShown}]`
    );

    return { combobox: combobox, popover: popover };
  };

  // create default search input component
  test('create basic Search input', () => {
    const component = renderer.create(defaultSearchInput);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('check for enter key press on basic search input', () => {
    const wrapper = shallow(defaultSearchInput);

    // enter text into search input
    wrapper
      .find(searchInput)
      .simulate('change', { target: { value: data[0] } });

    wrapper
      .find('input[type="text"].fd-input')
      .simulate('keypress', { key: 'Enter' });

    expect(wrapper.state(['searchTerm'])).toBe(data[0]);
  });

  test('create autocomplete Search input with no data', () => {
    const component = renderer.create(autoCompleteNoDataSearchInput);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  // create auto complete search input component
  test('create auto-complete Search input', () => {
    const component = renderer.create(autoCompleteSearchInput);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    const wrapper = shallow(autoCompleteSearchInput);

    // check to see if 3 list items are created for auto complete list
    expect(wrapper.find('li')).toHaveLength(3);

    // check to see if first item is selected in auto complete list
    expect(wrapper.find('li:first-child a').hasClass('is-selected')).toEqual(
      true
    );
  });

  test('check that auto complete list is hidden', () => {
    const wrapper = shallow(autoCompleteSearchInput);

    // check if bShowList state is changed
    expect(wrapper.state(['bShowList'])).toBe(false);

    // check to see if list is not shown
    let results = getListStatus(wrapper, false);
    expect(results.combobox).toHaveLength(1);
    expect(results.popover).toHaveLength(1);
  });

  test('check that auto complete list is hidden on blur', () => {
    const wrapper = shallow(autoCompleteSearchInput);

    wrapper
      .find(searchInput)
      .simulate('change', { target: { value: data[0] } });

    // check if bShowList state is changed
    expect(wrapper.state(['bShowList'])).toBe(true);

    // check to see if list is shown
    let results = getListStatus(wrapper, true);
    expect(results.combobox).toHaveLength(1);
    expect(results.popover).toHaveLength(1);

    wrapper.find(searchInput).simulate('blur');

    // check to see if list is not shown
    results = getListStatus(wrapper, false);
    expect(results.combobox).toHaveLength(1);
    expect(results.popover).toHaveLength(1);
  });

  test('check that auto complete list is shown when text entered', () => {
    const wrapper = shallow(autoCompleteSearchInput);
    wrapper
      .find(searchInput)
      .simulate('change', { target: { value: data[0] } });

    // check if searchTerm state is updated
    expect(wrapper.state(['searchTerm'])).toBe(data[0]);

    // check if bShowList state is changed
    expect(wrapper.state(['bShowList'])).toBe(true);

    // check to see if list is shown
    let results = getListStatus(wrapper, true);
    expect(results.combobox).toHaveLength(1);
    expect(results.popover).toHaveLength(1);
  });

  test('check that auto complete list is not shown when text removed', () => {
    const wrapper = shallow(autoCompleteSearchInput);
    wrapper
      .find(searchInput)
      .simulate('change', { target: { value: data[0] } });

    // check if searchTerm state is updated
    expect(wrapper.state(['searchTerm'])).toBe(data[0]);

    // check if bShowList state is changed
    expect(wrapper.state(['bShowList'])).toBe(true);

    // check to see if list is shown
    let results = getListStatus(wrapper, true);
    expect(results.combobox).toHaveLength(1);
    expect(results.popover).toHaveLength(1);

    wrapper.find(searchInput).simulate('change', { target: { value: '' } });

    // check if searchTerm state is updated
    expect(wrapper.state(['searchTerm'])).toBe('');

    // check if bShowList state is changed
    expect(wrapper.state(['bShowList'])).toBe(false);

    // check to see if list is shown
    results = getListStatus(wrapper, false);
    expect(results.combobox).toHaveLength(1);
    expect(results.popover).toHaveLength(1);
  });

  test('check for enter key press on auto complete search input', () => {
    const wrapper = shallow(autoCompleteSearchInput);
    wrapper.find(searchInput).simulate('keypress', { key: 'Esc' });
    wrapper.find(searchInput).simulate('keypress', { key: 'Enter' });

    expect(wrapper.state(['searchTerm'])).toBe(data[0]);
  });

  test('check search executed on search button click', () => {
    const wrapper = shallow(autoCompleteSearchInput);
    wrapper
      .find(searchInput)
      .simulate('change', { target: { value: data[0] } });

    // check if searchTerm state is updated
    expect(wrapper.state(['searchTerm'])).toBe(data[0]);

    wrapper.find('.fd-button--light.sap-icon--search').simulate('click');

    expect(wrapper.state(['searchTerm'])).toBe(data[0]);
  });

  test('set search term on list item selection', () => {
    const wrapper = shallow(autoCompleteSearchInput);
    wrapper
      .find('li a')
      .at(2)
      .simulate('click', { target: { innerText: data[2] } });

    // check if searchTerm state is updated
    expect(wrapper.state(['searchTerm'])).toBe(data[2]);

    // check if bShowList state is changed
    expect(wrapper.state(['bShowList'])).toBe(false);
  });
});
