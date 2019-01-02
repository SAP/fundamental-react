import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Pagination } from './Pagination';

Enzyme.configure({ adapter: new Adapter() });

describe('<Pagination />', () => {
  const handleClick = jest.fn();
  const defaultPagination = (
      <Pagination itemsTotal={101} onClick={handleClick} />
  );
  const initialSetPagination = (
      <Pagination
          className='blue'
          itemsTotal={101}
          initalPage={5}
          onClick={handleClick} />
  );

  const itemsPerPagePagination = (
      <Pagination itemsTotal={101} itemsPerPage={25}
          onClick={handleClick} />
  );

  const hideTotalItemsPagination = (
      <Pagination itemsTotal={101} displayTotal={false}
          onClick={handleClick} />
  );

  const totalTextPagination = (
      <Pagination itemsTotal={101} onClick={handleClick}
          totalText='Dalmations' />
  );

  const itemsPerPageZeroPagination = (
      <Pagination itemsTotal={101} itemsPerPage={0}
          onClick={handleClick} />
  );

  test('create default Pagination component', () => {
    const component = renderer.create(defaultPagination);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('create Pagination component with initial page set', () => {
    const component = renderer.create(initialSetPagination);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('create Pagination component with item per page set', () => {
    const component = renderer.create(itemsPerPagePagination);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('create Pagination component with item per page set to 0', () => {
    const component = renderer.create(itemsPerPageZeroPagination);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('create Pagination component with total item hidden', () => {
    const component = renderer.create(hideTotalItemsPagination);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('create Pagination component with total text set', () => {
    const component = renderer.create(totalTextPagination);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('navigate to previous page', () => {
    const wrapper = shallow(initialSetPagination);
    wrapper.setState({ selectedPage: 5 });
    expect(wrapper.state(['selectedPage'])).toEqual(5);
    wrapper.find('nav>a[aria-label="Previous"]').simulate('click');
    expect(wrapper.state(['selectedPage'])).toEqual(4);
  });

  test('navigate to previous page when on first page', () => {
    const wrapper = shallow(initialSetPagination);
    expect(wrapper.state(['selectedPage'])).toEqual(1);
    wrapper.find('nav>a[aria-label="Previous"]').simulate('click');
    expect(wrapper.state(['selectedPage'])).toEqual(1);
  });

  test('navigate to next page', () => {
    const wrapper = shallow(defaultPagination);
    expect(wrapper.state(['selectedPage'])).toEqual(1);
    wrapper.find('nav>a[aria-label="Next"]').simulate('click');
    expect(wrapper.state(['selectedPage'])).toEqual(2);
  });

  test('navigate to next page when on last page', () => {
    const wrapper = shallow(defaultPagination);
    wrapper.setState({ selectedPage: 11 });
    expect(wrapper.state(['selectedPage'])).toEqual(11);
    wrapper.find('nav>a[aria-label="Next"]').simulate('click');
    expect(wrapper.state(['selectedPage'])).toEqual(11);
  });

  test('navigate to page clicked', () => {
    const wrapper = shallow(defaultPagination);
    expect(wrapper.state(['selectedPage'])).toEqual(1);
    wrapper
      .find('a.fd-pagination__link')
      .at(2)
      .simulate('click', { target: { text: '4' } });
    expect(wrapper.state(['selectedPage'])).toEqual(4);
  });
});
