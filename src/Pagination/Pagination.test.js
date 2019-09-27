import Pagination from './Pagination';
import React from 'react';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';

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

    const itemsPerPagePagination = (
        <Pagination itemsPerPage={25} itemsTotal={101}
            onClick={handleClick} />
    );

    const hideTotalItemsPagination = (
        <Pagination
            displayTotal={false}
            itemsTotal={101}
            onClick={handleClick} />
    );

    const totalTextPagination = (
        <Pagination
            itemsTotal={101}
            onClick={handleClick}
            totalText='Dalmations' />
    );

    const itemsPerPageZeroPagination = (
        <Pagination itemsPerPage={0} itemsTotal={101}
            onClick={handleClick} />
    );

    test('create default Pagination component', () => {
        const component = renderer.create(defaultPagination);
        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();
    });

    test('create default Pagination component with displayTotalProps', () => {
        const component = renderer.create(defaultPaginationDisplayTotalProps);
        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();
    });

    test('create default Pagination component with linkProps', () => {
        const component = renderer.create(defaultPaginationLinkProps);
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
        const wrapper = shallow(initialSetPagination).dive().dive();
        wrapper.setState({ selectedPage: 5 });
        expect(wrapper.state(['selectedPage'])).toEqual(5);
        wrapper.find('nav>a[aria-label="Previous"]').simulate('click');
        expect(wrapper.state(['selectedPage'])).toEqual(4);
    });

    test('navigate to previous page when on first page', () => {
        const wrapper = shallow(initialSetPagination).dive().dive();
        expect(wrapper.state(['selectedPage'])).toEqual(1);
        wrapper.find('nav>a[aria-label="Previous"]').simulate('click');
        expect(wrapper.state(['selectedPage'])).toEqual(1);
    });

    test('navigate to next page', () => {
        const wrapper = shallow(defaultPagination).dive().dive();
        expect(wrapper.state(['selectedPage'])).toEqual(1);
        wrapper.find('nav>a[aria-label="Next"]').simulate('click');
        expect(wrapper.state(['selectedPage'])).toEqual(2);
    });

    test('navigate to next page when on last page', () => {
        const wrapper = shallow(defaultPagination).dive().dive();
        wrapper.setState({ selectedPage: 11 });
        expect(wrapper.state(['selectedPage'])).toEqual(11);
        wrapper.find('nav>a[aria-label="Next"]').simulate('click');
        expect(wrapper.state(['selectedPage'])).toEqual(11);
    });

    test('navigate to page clicked', () => {
        const wrapper = shallow(defaultPagination).dive().dive();
        expect(wrapper.state(['selectedPage'])).toEqual(1);
        wrapper
            .find('a.fd-pagination__link')
            .at(2)
            .simulate('click', { target: { text: '4' } });
        expect(wrapper.state(['selectedPage'])).toEqual(4);
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
                element.find('span').getDOMNode().attributes['data-sample']
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
