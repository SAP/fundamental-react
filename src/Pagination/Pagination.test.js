import { mount } from 'enzyme';
import Pagination from './Pagination';
import React from 'react';

describe('<Pagination />', () => {
    const handleClick = jest.fn();
    const defaultPagination = (
        <Pagination itemsTotal={101} onClick={handleClick} />
    );

    const defaultPaginationDisplayTotalProps = (
        <Pagination
            displayTotalProps={{ 'data-sample': 'Sample2' }}
            itemsTotal={101}
            onClick={handleClick} />
    );

    const defaultPaginationLinkProps = (
        <Pagination
            itemsTotal={101}
            linkProps={{ 'data-sample': 'Sample' }}
            nextProps={{ 'data-sample': 'Next Sample' }}
            onClick={handleClick}
            prevProps={{ 'data-sample': 'Prev Sample' }} />
    );

    const initialSetPagination = (
        <Pagination
            className='blue'
            initalPage={5}
            itemsTotal={101}
            onClick={handleClick} />
    );

    const visibleTotalPagesPagination = (
        <Pagination itemsTotal={221}
            onClick={handleClick}
            visiblePageTotal={20} />
    );

    const visibleTotalPagesWithItemTotalPagination = (
        <Pagination itemsPerPage={1} itemsTotal={10}
            onClick={handleClick}
            visiblePageTotal={20} />
    );
    test('navigate to previous page', () => {
        const wrapper = mount(initialSetPagination).children();
        wrapper.setState({ selectedPage: 5 });
        expect(wrapper.state(['selectedPage'])).toEqual(5);
        wrapper.find('nav>a[aria-label="Previous"]').simulate('click');
        expect(wrapper.state(['selectedPage'])).toEqual(4);
    });

    test('navigate to previous page when on first page', () => {
        const wrapper = mount(initialSetPagination).children();
        expect(wrapper.state(['selectedPage'])).toEqual(1);
        wrapper.find('nav>a[aria-label="Previous"]').simulate('click');
        expect(wrapper.state(['selectedPage'])).toEqual(1);
    });

    test('navigate to next page', () => {
        const wrapper = mount(defaultPagination).children();
        expect(wrapper.state(['selectedPage'])).toEqual(1);
        wrapper.find('nav>a[aria-label="Next"]').simulate('click');
        expect(wrapper.state(['selectedPage'])).toEqual(2);
    });

    test('navigate to next page when on last page', () => {
        const wrapper = mount(defaultPagination).children();
        wrapper.setState({ selectedPage: 11 });
        expect(wrapper.state(['selectedPage'])).toEqual(11);
        wrapper.find('nav>a[aria-label="Next"]').simulate('click');
        expect(wrapper.state(['selectedPage'])).toEqual(11);
    });

    test('navigate to page clicked', () => {
        const wrapper = mount(defaultPagination).children();
        expect(wrapper.state(['selectedPage'])).toEqual(1);
        wrapper
            .find('a.fd-pagination__link')
            .at(2)
            .simulate('click', { target: { text: '4' }, preventDefault: () => {} });
        expect(wrapper.state(['selectedPage'])).toEqual(4);
    });

    test('create Pagination component with total pages = 20', () => {
        const wrapper = mount(visibleTotalPagesPagination);
        expect(wrapper.find('a.fd-pagination__link').length).toEqual(23);
    });

    test('create Pagination component with total pages = 20 and itemTotal = 10', () => {
        const wrapper = mount(visibleTotalPagesWithItemTotalPagination);
        expect(wrapper.find('a.fd-pagination__link').length).toEqual(12);
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the Pagination component', () => {
            let element = mount(
                <Pagination
                    data-sample='Sample1'
                    itemsTotal={101}
                    onClick={handleClick} />
            );

            expect(element.getDOMNode().attributes['data-sample'].value).toBe(
                'Sample1'
            );

            element = mount(defaultPaginationLinkProps);

            expect(
                element
                    .find('a')
                    .at(1)
                    .getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');

            element = mount(defaultPaginationDisplayTotalProps);

            expect(
                element.find('span.fd-pagination__total').getDOMNode().attributes['data-sample']
                    .value
            ).toBe('Sample2');
        });

        test('should allow props to be spread to the Pagination component\'s previous a element', () => {
            const element = mount(defaultPaginationLinkProps);

            expect(
                element.find('a[aria-label="Previous"]').getDOMNode()
                    .attributes['data-sample'].value
            ).toBe('Prev Sample');
        });

        test('should allow props to be spread to the Pagination component\'s next a element', () => {
            const element = mount(defaultPaginationLinkProps);

            expect(
                element.find('a[aria-label="Next"]').getDOMNode().attributes[
                    'data-sample'
                ].value
            ).toBe('Next Sample');
        });
    });
});
