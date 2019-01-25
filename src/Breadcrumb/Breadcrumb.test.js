import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import { Breadcrumb, BreadcrumbItem } from './Breadcrumb';

describe('<Breadcrumb />', () => {
    const defaultBreadCrumb = (
        <Breadcrumb>
            <BreadcrumbItem name='Link Text' url='#' />
            <BreadcrumbItem name='Link Text' url='#' />
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

    describe('Prop spreading', () => {
        test('should allow props to be spread to the Breadcrumb component', () => {
            const element = mount(<Breadcrumb data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the BreadcrumbItem component', () => {
            const element = mount(<BreadcrumbItem data-sample='Sample' name='Name' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
