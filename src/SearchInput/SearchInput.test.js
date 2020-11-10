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


    const defaultSearchInputOnEnter = jest.fn();
    const defaultSearchInputOnChange = jest.fn();
    const defaultSearchInput = (
        <SearchInput
            className='blue'
            onChange={defaultSearchInputOnChange}
            onEnter={defaultSearchInputOnEnter}
            placeholder='Enter a fruit'
            searchList={searchData} />
    );

    let wrapper = null;
    beforeEach(() => {
        wrapper = mount(defaultSearchInput);
    });

    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
            wrapper = null;
        }
    });

    test('check for enter key press on search input', () => {
        act(() => {
            // enter text into search input
            wrapper
                .find(searchInput)
                .simulate('change', { target: { value: searchData[0].text } });
        });

        act(() => {
            // press enter key
            wrapper.find(searchInput).simulate('keypress',
                {
                    keyCode: 13
                }
            );
        });

        expect(defaultSearchInputOnEnter).toHaveBeenLastCalledWith(searchData[0].text);
    });

    test('click outside search input to close list', () => {
        let event = new MouseEvent('mousedown', {});

        act(() => {
            // outside click, search list not shown
            document.dispatchEvent(event);
        });

        act(() => {
            // enter text into search input
            wrapper
                .find(searchInput)
                .simulate('change', { target: { value: searchData[0].text } });
        });

        act(() => {
            // click outside to close list
            document.dispatchEvent(event);
        });

        expect(document.querySelectorAll('ul').length).toBe(0);
    });

    test('show/hide auto complete list', () => {
        act(() => {
            // click in search box to show
            wrapper.find(searchInput).simulate('click');
        });
        expect(document.querySelectorAll('ul').length).toBe(1);

        act(() => {
            // click in search box to hide
            wrapper.find(searchInput).simulate('click');
        });

        expect(document.querySelectorAll('ul').length).toBe(0);
    });

    test('check for enter key press on search input without autocomplete', () => {

        const noListSearchInputOnEnter = jest.fn();
        const noListSearchInput = (
            <SearchInput
                onEnter={noListSearchInputOnEnter}
                placeholder='Enter a fruit' />
        );

        const internalWrapper = mount(noListSearchInput);

        act(() => {
            // click in search box
            internalWrapper.find(searchInput).simulate('click');
        });

        act(() => {
            // enter text into search input
            internalWrapper
                .find(searchInput)
                .simulate('change', { target: { value: searchData[2].text } });
        });

        act(() => {
            // press enter key
            internalWrapper.find(searchInput).simulate('keypress',
                {
                    keyCode: 13
                }
            );
        });

        expect(noListSearchInputOnEnter).toHaveBeenLastCalledWith(searchData[2].text);

        internalWrapper.unmount();
    });

    test('click on result in autocomplete', () => {
        act(() => {
            // click in search box to show
            wrapper.find(searchInput).simulate('click');
        });

        expect(document.querySelectorAll('ul').length).toBe(1);

        act(() => {
            // select option
            document
                .querySelectorAll('.fd-menu__link')[0]
                .click();
        });

        act(() => {
            // click in search box to hide
            wrapper.find(searchInput).simulate('click');
        });

        expect(document.querySelectorAll('ul').length).toBe(0);
    });

    test('check search executed on search button click', () => {
        act(() => {
            wrapper
                .find(searchInput)
                .simulate('change', { target: { value: searchData[0].text } });
        });

        // check if searchTerm state is updated
        expect(defaultSearchInputOnChange).toHaveBeenLastCalledWith(
            expect.objectContaining({ target: { value: searchData[0].text } }),
            expect.arrayContaining([expect.objectContaining({ text: searchData[0].text })])
        );

        act(() => {
            wrapper.find('.fd-button--transparent').simulate('click');
        });

        expect(defaultSearchInputOnChange).toHaveBeenLastCalledWith(
            expect.objectContaining({ target: { value: searchData[0].text } }),
            expect.arrayContaining([expect.objectContaining({ text: searchData[0].text })])
        );
    });

    test('pressing Esc key to close search list', () => {
        act(() => {
            // click in search box to show
            wrapper.find(searchInput).simulate('click');
        });

        expect(document.querySelectorAll('ul').length).toBe(1);

        act(() => {
            // handle esc key
            let event = new KeyboardEvent('keydown', { keyCode: 27 });
            document.dispatchEvent(event);
        });

        expect(document.querySelectorAll('ul').length).toBe(0);
    });


    describe('onChange handler', () => {
        test('calling parent onChange event', () => {
            const onChangeHandler = jest.fn();

            const searchOnChange = (
                <SearchInput
                    onChange={onChangeHandler}
                    onEnter={term => getInputValue(term)}
                    placeholder='Enter a fruit'
                    searchList={searchData} />
            );
            const internalWrapper = mount(searchOnChange);

            act(() => {
                // enter text into search input
                internalWrapper
                    .find(searchInput)
                    .simulate('change', { target: { value: searchData[0].text } });
            });

            expect(onChangeHandler).toHaveBeenLastCalledWith(
                expect.objectContaining({ target: { value: searchData[0].text } }),
                expect.arrayContaining([expect.objectContaining({ text: searchData[0].text })])
            );

            internalWrapper.unmount();
        });

        test('should dispatch the onChange callback with the event', () => {
            let f = jest.fn();
            const element = mount(<SearchInput onChange={f} />);

            act(() => {
                element.find('input').simulate('change');
            });

            expect(f).toHaveBeenCalledTimes(1);
            element.unmount();
        });


        test('subString Search', () => {
            let internalWrapper;

            act(() => {
                internalWrapper = mount(
                    <SearchInput
                        placeholder='Enter a value'
                        searchList={[
                            { text: 'who is a supplier user?' },
                            { text: 'who is a buyer user?' },
                            { text: 'who is a worker user?' },
                            { text: 'how to change the pin?' },
                            { text: 'how to set the pin?' }
                        ]}
                        subStringSearch />
                );
            });

            act(() => {
                internalWrapper.find(searchInput).simulate('click');
            });

            act(() => {
                internalWrapper.find(searchInput).simulate('change', { target: { value: 'supplier' } });
            });

            expect(document.querySelectorAll('li').length).toBe(1);

            internalWrapper.unmount();

        });
    });

    describe('Internal component prop spreading', () => {
        let setup = (props) => mount(<SearchInput searchList={searchData} {...props} />);
        afterEach(() => {
            document.body.innerHTML = '';
        });

        const getFormMessage = () => document.body.querySelector('.fd-popover__popper > div > .fd-form-message');

        test('should spread popoverProps to Popover', () => {
            const internalWrapper = setup({
                popoverProps: { 'data-sample': 'Sample', className: 'wonderful-styles' }
            });

            const popover = internalWrapper.find('.fd-popover').first().getDOMNode();

            expect(
                popover.attributes['data-sample'].value
            ).toBe('Sample');

            expect(
                popover.classList
            ).toContain('wonderful-styles');
        });

        test('should spread formMessageProps to FormMessage', async() => {
            let internalWrapper;
            await act(async() => {
                internalWrapper = setup({
                    formMessageProps: { 'data-sample': 'Sample', className: 'wonderful-styles' },
                    validationState: {
                        state: 'error',
                        text: 'Test validation state'
                    }
                });
            });

            await act(() => {
                internalWrapper.find(searchInput).simulate('click');
            });

            const messageNode = getFormMessage();

            expect(
                messageNode.attributes['data-sample'].value
            ).toBe('Sample');

            expect(
                messageNode.classList
            ).toContain('wonderful-styles');
        });
    });

    describe('Prop spreading', () => {

        beforeEach(() => {
            document.body.innerHTML = '';

        });

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

        const searchDataNew = [
            { text: 'peaches' },
            { text: 'pear' }
        ];

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
            let internalWrapper;

            act(() => {
                internalWrapper = mount(<Test />);
            });

            act(() => {
                internalWrapper.find('.fd-input').simulate('click');
            });


            expect(document.querySelectorAll('li')).toHaveLength(searchData.length);

            act(() => {
                internalWrapper
                    .find(searchInput)
                    .simulate('change', { target: { value: 'pe' } });
            });

            expect(document.querySelectorAll('li')).toHaveLength(searchDataNew.length);

            act(() => {
                internalWrapper
                    .find(searchInput)
                    .simulate('change', { target: { value: searchDataNew[0].text } });
            });

            expect(document.querySelectorAll('li')).toHaveLength(1);
            internalWrapper.unmount();

        });
    });
});
