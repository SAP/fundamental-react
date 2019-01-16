import React from 'react';
import renderer from 'react-test-renderer';
import { SearchInput } from './SearchInput';
import { mount, shallow } from 'enzyme';

describe('<SearchInput />', () => {
    const searchInput = 'input[type="text"].fd-input';

    const getInputValue = value => {
        return value;
    };

    const searchData = [
        { text: 'apple', callback: jest.fn() },
        { text: 'apricot', callback: jest.fn() },
        { text: 'banana', callback: jest.fn() },
        { text: 'blueberry', callback: jest.fn() },
        { text: 'blackberry', callback: jest.fn() },
        { text: 'calabash', callback: jest.fn() },
        { text: 'clementines', callback: jest.fn() },
        { text: 'kiwi', callback: jest.fn() },
        { text: 'orange', callback: jest.fn() }
    ];

    const defaultSearchInput = (
        <SearchInput
            className='blue'
            onEnter={term => getInputValue(term)}
            placeholder='Enter a fruit'
            searchList={searchData} />
    );

    const shellBarSearchInput = (
        <SearchInput
            inShellbar
            onEnter={term => getInputValue(term)}
            placeholder='Enter a fruit'
            searchList={searchData} />
    );

    const noListSearchInput = (
        <SearchInput
            onEnter={term => getInputValue(term)}
            placeholder='Enter a fruit' />
    );

    let component;

    afterEach(() => {
        component.unmount();
    });

    test('create SearchInput', () => {
        component = renderer.create(defaultSearchInput);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        component = renderer.create(shellBarSearchInput);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        component = renderer.create(noListSearchInput);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('check for enter key press on search input', () => {
        const wrapper = shallow(defaultSearchInput);

        // enter text into search input
        wrapper
            .find(searchInput)
            .simulate('change', { target: { value: searchData[0].text } });

        // press Esc
        wrapper.find(searchInput).simulate('keypress', { key: 'Esc' });

        // press enter key
        wrapper.find(searchInput).simulate('keypress', { key: 'Enter' });

        expect(wrapper.state(['value'])).toBe(searchData[0].text);
    });

    test('show/hide auto complete list', () => {
        const wrapper = shallow(defaultSearchInput);

        // click in search box to show
        wrapper.find(searchInput).simulate('click');

        expect(wrapper.state('isExpanded')).toBeTruthy();

        // click in search box to hide
        wrapper.find(searchInput).simulate('click');

        expect(wrapper.state('isExpanded')).toBeFalsy();
    });

    test('show/hide auto complete list for inShellBar', () => {
        const wrapper = shallow(shellBarSearchInput);

        // click in search box to show
        wrapper.find(searchInput).simulate('click');

        expect(wrapper.state('isExpanded')).toBeTruthy();

        // click in search box to hide
        wrapper.find(searchInput).simulate('click');

        expect(wrapper.state('isExpanded')).toBeFalsy();
    });

    test('check for enter key press on search input without autocomplete', () => {
        const wrapper = shallow(noListSearchInput);

        // click in search box
        wrapper.find(searchInput).simulate('click');

        // enter text into search input
        wrapper
            .find(searchInput)
            .simulate('change', { target: { value: searchData[2].text } });

        // press enter key
        wrapper.find(searchInput).simulate('keypress', { key: 'Enter' });

        expect(wrapper.state(['value'])).toBe(searchData[2].text);
    });

    test('click on result in autocomplete', () => {
        const wrapper = shallow(defaultSearchInput);

        // click in search box to show
        wrapper.find(searchInput).simulate('click');

        expect(wrapper.state('isExpanded')).toBeTruthy();

        // enter text into search input
        wrapper
            .find('.fd-menu__item')
            .at(0)
            .simulate('click', searchData[0]);

        // click in search box to hide
        wrapper.find(searchInput).simulate('click');

        expect(wrapper.state('isExpanded')).toBeFalsy();
    });

    test('check search results in shellbar with NO results', () => {
        const wrapper = shallow(shellBarSearchInput);

        wrapper
            .find(searchInput)
            .simulate('change', { target: { value: 'HELLO WORLD' } });

        // check if searchTerm state is updated
        expect(wrapper.state(['value'])).toBe('HELLO WORLD');
    });

    test('check search executed on search button click in shellbar', () => {
        const wrapper = shallow(shellBarSearchInput);

        wrapper
            .find(searchInput)
            .simulate('change', { target: { value: searchData[0].text } });

        // check if searchTerm state is updated
        expect(wrapper.state(['value'])).toBe(searchData[0].text);

        wrapper.find('.sap-icon--search.fd-button--shell').simulate('click');

        expect(wrapper.state(['value'])).toBe(searchData[0].text);
    });

    test('pressing Esc key to close search list', () => {
        const wrapper = shallow(shellBarSearchInput);

        // click in search box to show
        wrapper.find(searchInput).simulate('click');

        expect(wrapper.state('isExpanded')).toBeTruthy();

        // handle esc key
        let event = new KeyboardEvent('keydown', { keyCode: 27 });
        document.dispatchEvent(event);

        expect(wrapper.state('isExpanded')).toBeFalsy();
    });

    //   test('click on document to close autocomplete list', () => {
    //     const wrapper = mount(defaultSearchInput);

    //     // click in search box to show
    //     wrapper.find(searchInput).simulate('click');

    //     expect(wrapper.state('isExpanded')).toBeTruthy();

    //     // handle click outside search box
    //     wrapper
    //       .instance()
    //       .onOutsideClickHandler({ target: wrapper, stopPropagation: jest.fn() });

    //   });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the SearchInput component', () => {
            const element = mount(<SearchInput data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        xtest('should allow props to be spread to the SearchInput component\'s input element', () => {
            // TODO: placeholder for this test description once that functionality is built
        });

        xtest('should allow props to be spread to the SearchInput component\'s button element', () => {
            // TODO: placeholder for this test description once that functionality is built
        });

        xtest('should allow props to be spread to the SearchInput component\'s ul element', () => {
            // TODO: placeholder for this test description once that functionality is built
        });
    });
});
