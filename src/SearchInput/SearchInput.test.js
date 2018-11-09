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
    <SearchInput placeHolder="Hello there" onSearch={mockOnSearch} />
  );
  const autoCompleteSearchInput = (
    <SearchInput
      placeHolder="Hello there"
      onAutoComplete={mockOnAutoComplete}
      data={data}
      onSearch={mockOnSearch}
    />
  );

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

  test('check that auto complete list is shown when text entered', () => {
    const wrapper = shallow(autoCompleteSearchInput);
    wrapper
      .find('input[type="text"].fd-input')
      .simulate('change', { target: { value: 'ap' } });

    // check if searchTerm state is updated
    expect(wrapper.state(['searchTerm'])).toBe('ap');

    // check if bShowList state is changed
    expect(wrapper.state(['bShowList'])).toBe(true);

    // check to see if list is shown
    let results = getListStatus(wrapper, true);
    expect(results.combobox).toHaveLength(1);
    expect(results.popover).toHaveLength(1);
  });
});
