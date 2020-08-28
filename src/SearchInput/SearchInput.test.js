import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import React from 'react';
import SearchInput from './SearchInput';

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

    const searchDataNew = [
        { text: 'peaches', callback: jest.fn() },
        { text: 'pear', callback: jest.fn() }
    ];

    const substringSearchData = [
        { text: 'who is a supplier user?', callback: jest.fn() },
        { text: 'who is a buyer user?', callback: jest.fn() },
        { text: 'who is a worker user?', callback: jest.fn() },
        { text: 'how to change the pin?', callback: jest.fn() },
        { text: 'how to set the pin?', callback: jest.fn() }
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

    const noListSearchInput = (
        <SearchInput
            onEnter={term => getInputValue(term)}
            placeholder='Enter a fruit' />
    );

    const searchOnChangeForSubstringSearch = (
        <SearchInput
            onChange={term => getInputValue(term)}
            onEnter={term => getInputValue(term)}
            placeholder='Enter a value'
            searchList={substringSearchData}
            subStringSearch />
    );

    describe('onChange handler', () => {
        test('calling parent onChange event', () => {
            const wrapper = mount(searchOnChange);

            // enter text into search input
            wrapper
                .find(searchInput)
                .simulate('change', { target: { value: searchData[0].text } });

            expect(wrapper.state(['value'])).toBe(searchData[0].text);
            expect(wrapper.state(['isExpanded'])).toBe(true);

        });

        test('should dispatch the onChange callback with the event', () => {
            let f = jest.fn();
            const element = mount(<SearchInput onChange={f} />);

            element.find('input').simulate('change');

            expect(f).toHaveBeenCalledTimes(1);
        });

        test('subString Search', () => {
            const wrapper = mount(searchOnChangeForSubstringSearch);

            expect(wrapper.find(SearchInput).prop('subStringSearch')).toBe(true);

            wrapper.find(searchInput).simulate('click');

            wrapper.find(searchInput).simulate('change', { target: { value: 'sup' } });
            let rows = wrapper.find('li');

            expect(rows).toHaveLength(1);

        });
    });

    test('check for enter key press on search input', () => {
        const wrapper = mount(defaultSearchInput);

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

    test('show/hide auto complete list', () => {
        const wrapper = mount(defaultSearchInput);

        // click in search box to show
        wrapper.find(searchInput).simulate('click');

        expect(wrapper.state('isExpanded')).toBeTruthy();

        // click in search box to hide
        wrapper.find(searchInput).simulate('click');

        expect(wrapper.state('isExpanded')).toBeFalsy();
    });

    test('check for enter key press on search input without autocomplete', () => {
        const wrapper = mount(noListSearchInput);

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
        const wrapper = mount(defaultSearchInput);

        // click in search box to show
        wrapper.find(searchInput).simulate('click');

        expect(wrapper.state('isExpanded')).toBeTruthy();

        // enter text into search input
        wrapper
            .find('.fd-menu__link')
            .at(0)
            .simulate('click', searchData[0]);

        // click in search box to hide
        wrapper.find(searchInput).simulate('click');
        expect(wrapper.state('isExpanded')).toBeTruthy();
    });

    test('check search executed on search button click', () => {
        const wrapper = mount(defaultSearchInput);

        wrapper
            .find(searchInput)
            .simulate('change', { target: { value: searchData[0].text } });

        // check if searchTerm state is updated
        expect(wrapper.state(['value'])).toBe(searchData[0].text);

        wrapper.find('.fd-button--transparent.sap-icon--search').simulate('click');

        expect(wrapper.state(['value'])).toBe(searchData[0].text);
    });

    test('pressing Esc key to close search list', () => {
        const wrapper = mount(defaultSearchInput);

        // click in search box to show
        wrapper.find(searchInput).simulate('click');

        expect(wrapper.state('isExpanded')).toBeTruthy();

        // handle esc key
        let event = new KeyboardEvent('keydown', { keyCode: 27 });
        document.dispatchEvent(event);

        expect(wrapper.state('isExpanded')).toBeFalsy();
    });

    describe('validationOverlayProps', () => {
        let setup = (props) => mount(<SearchInput searchList={searchData} {...props} />);
        afterEach(() => {
            document.body.innerHTML = '';
        });

        const getFormMessage = () => document.body.querySelector('.fd-popover__popper > div > .fd-form-message');


        test('should allow spreading className to ValidationOverlay popover', () => {
            const wrapper = setup({
                validationState: { state: 'error', text: 'Test validation state' },
                validationOverlayProps: { className: 'wonderful-styles' }
            });

            expect(
                wrapper.find('.fd-popover').at(1).getDOMNode().classList
            ).toContain('wonderful-styles');
        });

        test('should allow spreading className to ValidationOverlay reference div', () => {
            const wrapper = setup({
                validationState: { state: 'error', text: 'Test validation state' },
                validationOverlayProps: { referenceClassName: 'wonderful-styles' }
            });

            expect(
                wrapper.find('.fd-popover__control').at(1).getDOMNode().classList
            ).toContain('wonderful-styles');
        });

        test('should spread formMessageProps to ValidationOverlay\'s FormMessage', async() => {
            await act(async() => {
                setup({
                    validationState: {
                        state: 'error',
                        text: 'Test validation state'
                    },
                    validationOverlayProps: {
                        formMessageProps: { 'data-sample': 'Sample', className: 'wonderful-styles' },
                        show: true
                    }
                });
            });

            const messageNode = getFormMessage();

            expect(
                messageNode.attributes['data-sample'].value
            ).toBe('Sample');

            expect(
                messageNode.classList
            ).toContain('wonderful-styles');
        });

        test('should spread props to Validation overlay wrapper div', async() => {
            const wrapper = setup({
                validationState: { state: 'error', text: 'Test validation state' },
                validationOverlayProps: { wrapperProps: { 'data-sample': 'Sample' }, show: true }
            });

            expect(
                wrapper.find('.fd-popover').at(1).getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should set class on the Validation Overlay Popper', async() => {
            await act(async() => {
                setup({
                    validationState: { state: 'error', text: 'Test validation state' },
                    validationOverlayProps: { popperClassName: 'wonderful-styles', show: true }
                });
            });

            expect(
                document.body.querySelector('.fd-popover__popper').classList
            ).toContain('wonderful-styles');
        });
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

            element.find('.fd-input').simulate('click');

            expect(
                element.find('ul').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');

        });

        test('should allow props list to be changed after creation', () => {
            class Test extends React.Component {
                constructor(props) {
                    super(props);
                    this.state = {
                        list: searchData
                    };
                }

                handleChange = (e) => {
                    if (e.target.value === 'pe') {
                        this.setState({
                            list: searchDataNew
                        });
                    }
                }
                render = () => (<SearchInput onChange={this.handleChange}
                    searchList={this.state.list} />);
            }
            const wrapper = mount(<Test />);

            wrapper.find('.fd-input').simulate('click');
            let rows = wrapper.find('li');
            expect(rows).toHaveLength(searchData.length);

            wrapper
                .find(searchInput)
                .simulate('change', { target: { value: 'pe' } });

            rows = wrapper.find('li');

            expect(rows).toHaveLength(searchDataNew.length);

            wrapper
                .find(searchInput)
                .simulate('change', { target: { value: searchDataNew[0].text } });

            rows = wrapper.find('li');

            expect(rows).toHaveLength(1);

        });
    });
});
