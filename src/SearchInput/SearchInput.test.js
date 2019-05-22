import React from 'react';
import renderer from 'react-test-renderer';
import SearchInput from './SearchInput';
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

    const searchOnChange = (
        <SearchInput
            onChange={term => getInputValue(term)}
            onEnter={term => getInputValue(term)}
            placeholder='Enter a fruit'
            searchList={searchData} />
    );

    const defaultSearchNoButton = (
        <SearchInput
            noSearchBtn
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

        component = renderer.create(searchOnChange);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        component = renderer.create(defaultSearchNoButton);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe('onChange handler', () => {
        test('calling parent onChange event', () => {
            const wrapper = shallow(searchOnChange);

            // enter text into search input
            wrapper
                .find(searchInput)
                .simulate('change', { target: { value: searchData[0].text } });

            expect(wrapper.state(['value'])).toBe(searchData[0].text);
            expect(wrapper.state(['isExpanded'])).toBe(true);
            expect(wrapper.state(['filteredResult'])).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({ text: searchData[0].text })
                ])
            );
        });

        test('should dispatch the onChange callback with the event', () => {
            let f = jest.fn();
            const element = mount(<SearchInput onChange={f} />);

            element.find('input').simulate('change');

            expect(f).toHaveBeenCalledTimes(1);
        });
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

    test('click outside search input to close list', () => {
        const wrapper = mount(defaultSearchInput);
        let event = new MouseEvent('click', {});

        // outside click, search list not shown
        document.dispatchEvent(event);

        // enter text into search input
        wrapper
            .find(searchInput)
            .simulate('change', { target: { value: searchData[0].text } });

        // click outside to close list
        document.dispatchEvent(event);

        expect(wrapper.state(['value'])).toBe(searchData[0].text);
    });

    test('click outside ShellBar search input with NO text to close list', () => {
        const wrapper = mount(shellBarSearchInput);
        let event = new MouseEvent('click', {});

        // outside click, search list not shown
        document.dispatchEvent(event);

        // click in search box to show
        wrapper.find(searchInput).simulate('click');
        wrapper.find('button.sap-icon--search.fd-button--shell').simulate('click');

        // click outside to close list
        document.dispatchEvent(event);

        expect(wrapper.state(['value'])).toBe('');
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

    test('check search executed on search button click in shellbar with list expanded', () => {
        const wrapper = shallow(shellBarSearchInput);

        wrapper
            .find(searchInput)
            .simulate('change', { target: { value: searchData[0].text } });


        // click in search box to show
        wrapper.find(searchInput).simulate('click');

        // check if searchTerm state is updated
        expect(wrapper.state(['value'])).toBe(searchData[0].text);

        wrapper.find('.sap-icon--search.fd-button--shell').simulate('click');

        expect(wrapper.state(['value'])).toBe(searchData[0].text);
    });

    test('check search executed on search button click', () => {
        const wrapper = shallow(defaultSearchInput);

        wrapper
            .find(searchInput)
            .simulate('change', { target: { value: searchData[0].text } });

        // check if searchTerm state is updated
        expect(wrapper.state(['value'])).toBe(searchData[0].text);

        wrapper.find('.fd-button--light.sap-icon--search').simulate('click');

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

    describe('Prop spreading', () => {
        test('should allow props to be spread to the SearchInput component', () => {
            const element = mount(<SearchInput data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the SearchInput component\'s input element', () => {
            let element = mount(<SearchInput inputProps={{ 'data-sample': 'Sample' }} />);

            expect(
                element.find('input').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');

            element = mount(<SearchInput inShellbar inputProps={{ 'data-sample': 'Sample1' }} />);

            expect(
                element.find('input').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample1');
        });

        test('should allow props to be spread to the SearchInput component\'s button element', () => {
            let element = mount(<SearchInput searchBtnProps={{ 'data-sample': 'Sample' }} />);

            expect(
                element.find('button').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');

            element = mount(<SearchInput inShellbar searchBtnProps={{ 'data-sample': 'Sample1' }} />);

            expect(
                element.find('button').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample1');
        });

        test('should allow props to be spread to the SearchInput component\'s ul element', () => {
            const element = mount(<SearchInput listProps={{ 'data-sample': 'Sample' }} searchList={searchData} />);

            expect(
                element.find('ul').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');

        });
    });
});
