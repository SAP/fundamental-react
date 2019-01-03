import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from './Breadcrumb';

describe('<Breadcrumb />', () => {
  const defaultBreadCrumb = (
      <Breadcrumb>
          <BreadcrumbItem url='#' name='Link Text' />
          <BreadcrumbItem url='#' name='Link Text' />
          <BreadcrumbItem name='Link Text' />
      </Breadcrumb>
  );

  const breadCrumbRouterLink = (
      <MemoryRouter>
          <Breadcrumb className='blue'>
              <BreadcrumbItem className='blue' name='Link Text' />
              <BreadcrumbItem link='/' name='Link Text' />
              <BreadcrumbItem link='/' name='Link Text' />
          </Breadcrumb>
      </MemoryRouter>
  );

  test('create default breadcrumbs', () => {
    const component = renderer.create(defaultBreadCrumb);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('create breadcrumbs using router links', () => {
    const component = renderer.create(breadCrumbRouterLink);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
