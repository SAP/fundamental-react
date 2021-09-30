import { act } from 'react-dom/test-utils';
import ComboboxInput from './ComboboxInput';
import countriesData from '../../data/countries.json';
import { mount } from 'enzyme';
import React from 'react';
import { unmountComponentAtNode } from 'react-dom';

let container = null;

const setupForInteraction = (props, domContainer) => mount(
    <ComboboxInput
        ariaLabel='Dummy options'
        arrowLabel='Show options'
        id='interactionTesting'
        options={countriesData}
        {...props} />,
    {
        attachTo: domContainer
    }
);

describe('<ComboboxInput />', () => {
    const defaultOptions = [
        { key: '1', text: 'List Item 1' },
        { key: '2', text: 'List Item 2' },
        { key: '3', text: 'List Item 3' },
        { key: '4', text: 'List Item 4' }
    ];

    describe('Prop spreading', () => {
        test('should allow props to be spread to the ComboboxInput component', () => {
            const element = mount(
                <ComboboxInput
                    ariaLabel='Dummy options'
                    arrowLabel='Show options'
                    data-sample='Sample'
                    id='propSpreadingTesting'
                    options={defaultOptions} />
            );

            expect(
                element.find('.fd-input-group').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the ComboboxInput component\'s Popover component', () => {
            const element = mount(
                <ComboboxInput
                    ariaLabel='Dummy options'
                    arrowLabel='Show options'
                    id='popoverPropSpreadingTesting'
                    options={defaultOptions}
                    popoverProps={{ 'data-sample': 'Sample' }} />
            );

            expect(
                element.find('div.fd-popover').first().getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the ComboboxInput component\'s input element', () => {
            const element = mount(
                <ComboboxInput
                    ariaLabel='Dummy options'
                    arrowLabel='Show options'
                    id='inputFieldPropSpreadingTesting'
                    inputProps={{ 'data-sample': 'Sample' }}
                    options={defaultOptions} />
            );

            expect(
                element.find('input').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the ComboboxInput component\'s button element', () => {
            const element = mount(
                <ComboboxInput
                    ariaLabel='Dummy options'
                    arrowLabel='Show options'
                    buttonProps={{ 'data-sample': 'Sample' }}
                    id='buttonPropSpreadingTesting'
                    options={defaultOptions}
                    selectionType='auto-inline' />
            );
            expect(
                element.find('button').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });

    describe('validationOverlayProps', () => {

        test('pass validationOverlayProps to InputGroup', () => {
            const element = mount(
                <ComboboxInput
                    ariaLabel='Dummy options'
                    arrowLabel='Show options'
                    id='validationOverlayTest'
                    options={defaultOptions}
                    validationOverlayProps={{
                        className: 'foo'
                    }} />
            );

            expect(
                element.find('InputGroup').at(1).prop('validationOverlayProps')
            ).toMatchObject({
                className: 'foo'
            });
        });
    });

    describe('interactions', () => {
        beforeEach(() => {
            container = document.createElement('div');
            document.body.appendChild(container);
        });

        afterEach(() => {
            unmountComponentAtNode(container);
            container.remove();
            container = null;
        });

        describe('should pre select an option when selectedKey is passed', () => {
            const selectionChangeHandler = jest.fn();
            act(() => {

                setupForInteraction({
                    selectedKey: 'CR',
                    selectionType: 'auto-inline',
                    onSelectionChange: selectionChangeHandler
                }, container);

            });
            expect(selectionChangeHandler).toHaveBeenLastCalledWith(null, expect.objectContaining({
                text: 'Costa Rica',
                key: 'CR'
            }), 'preSelection');
        });

        describe('When selectionType is \'manual\'', () => {

            test('should not show multiple validation overlays', () => {
                let wrapper;
                act(() => {
                    wrapper = setupForInteraction({
                        validationState: { state: 'error', text: 'Test validation state' }
                    }, container);
                    wrapper.find('input').simulate('change', { target: { value: 'mal' } });
                    wrapper.find('input').simulate('focus');
                });
                expect(document.querySelectorAll('.fd-form-message').length).toBe(1);
            });

            test('should show filtered options when text is entered in the input field', () => {
                let wrapper;
                act(() => {
                    wrapper = setupForInteraction({}, container);
                    wrapper.find('input').simulate('change', { target: { value: 'island' } });
                });
                const filteredOptions = document.querySelectorAll('.fd-list__item');
                expect(filteredOptions.length).toBe(22);
            });

            test('should not auto select the first filtered option when list is shown', () => {
                const selectionChangeHandler = jest.fn();
                let wrapper;
                act(() => {

                    wrapper = setupForInteraction({
                        onSelectionChange: selectionChangeHandler
                    }, container);

                    wrapper.find('input').simulate('change', { target: { value: 'island' } });
                });
                expect(selectionChangeHandler).toHaveBeenLastCalledWith(expect.anything(), { key: -1, text: 'island' }, 'inputChange');
            });

            test('should not auto select the first filtered option on input field blur', () => {
                const selectionChangeHandler = jest.fn();
                let wrapper;
                act(() => {

                    wrapper = setupForInteraction({
                        onSelectionChange: selectionChangeHandler
                    }, container);

                    wrapper.find('input').simulate('change', { target: { value: 'island' } });
                });

                act(() => {
                    wrapper.find('input').simulate('blur');
                });

                expect(selectionChangeHandler).toHaveBeenLastCalledWith(expect.anything(), {
                    text: 'island',
                    key: -1 // key is set to -1 for custom input in manual combobox
                }, 'inputChange');
            });

            test('should select the clicked option and update input field value', () => {
                const selectionChangeHandler = jest.fn();
                let wrapper;
                act(() => {

                    wrapper = setupForInteraction({
                        onSelectionChange: selectionChangeHandler
                    }, container);

                    wrapper.find('input').simulate('change', { target: { value: 'island' } });
                });
                const fourthOption = document.body.querySelectorAll('.fd-list__item')[3];
                let clickEvent = new MouseEvent('click', { bubbles: true });
                act(() => {
                    fourthOption.dispatchEvent(clickEvent);
                });
                expect(selectionChangeHandler).toHaveBeenLastCalledWith(expect.anything(), expect.objectContaining({
                    text: 'Cocos (Keeling) Islands',
                    key: 'CC'
                }), 'optionClick');
                expect(wrapper.find('input').getDOMNode().value).toBe('Cocos (Keeling) Islands');
            });

            test('should clear the input field when Escape key is pressed', () => {
                const selectionChangeHandler = jest.fn();
                let wrapper;
                act(() => {

                    wrapper = setupForInteraction({
                        onSelectionChange: selectionChangeHandler
                    }, container);

                    wrapper.find('input').getDOMNode().value = 'island';

                    wrapper.find('input').simulate('keydown', {
                        keyCode: 27,
                        target: {
                            value: 'island'
                        }
                    });
                });
                expect(wrapper.find('input').getDOMNode().value).toBe('');
            });

        });

        describe('When selectionType is \'auto\'', () => {
            test('should show filtered options when text is entered in the input field', () => {
                let wrapper;
                act(() => {

                    wrapper = setupForInteraction({
                        selectionType: 'auto'
                    }, container);

                    wrapper.find('input').simulate('change', { target: { value: 'island' } });
                });
                const filteredOptions = document.querySelectorAll('.fd-list__item');
                expect(filteredOptions.length).toBe(22);
            });

            test('should auto select the first filtered option when list is shown', () => {
                const selectionChangeHandler = jest.fn();
                let wrapper;
                act(() => {

                    wrapper = setupForInteraction({
                        selectionType: 'auto',
                        onSelectionChange: selectionChangeHandler
                    }, container);

                    wrapper.find('input').simulate('change', { target: { value: 'island' } });
                });
                expect(selectionChangeHandler).toHaveBeenLastCalledWith(expect.anything(), expect.objectContaining({
                    text: 'Ascension Island',
                    key: 'AC'
                }), 'inputChange');
            });

            test('should auto select the first filtered option on input field blur', () => {
                const selectionChangeHandler = jest.fn();
                let wrapper;
                act(() => {

                    wrapper = setupForInteraction({
                        selectionType: 'auto',
                        onSelectionChange: selectionChangeHandler
                    }, container);

                    wrapper.find('input').simulate('change', { target: { value: 'island' } });
                });

                act(() => {
                    wrapper.find('input').simulate('blur');
                });

                expect(selectionChangeHandler).toHaveBeenLastCalledWith(expect.anything(), expect.objectContaining({
                    text: 'Ascension Island',
                    key: 'AC'
                }), 'inputChange');
            });

            test('should select the clicked option and update input field value', () => {
                const selectionChangeHandler = jest.fn();
                let wrapper;
                act(() => {

                    wrapper = setupForInteraction({
                        selectionType: 'auto',
                        onSelectionChange: selectionChangeHandler
                    }, container);

                    wrapper.find('input').simulate('change', { target: { value: 'island' } });
                });
                const fourthOption = document.body.querySelectorAll('.fd-list__item')[3];
                let clickEvent = new MouseEvent('click', { bubbles: true });
                act(() => {
                    fourthOption.dispatchEvent(clickEvent);
                });
                expect(selectionChangeHandler).toHaveBeenLastCalledWith(expect.anything(), expect.objectContaining({
                    text: 'Cocos (Keeling) Islands',
                    key: 'CC'
                }), 'optionClick');
                expect(wrapper.find('input').getDOMNode().value).toBe('Cocos (Keeling) Islands');
            });

            test('should clear the input field when Escape key is pressed', () => {
                const selectionChangeHandler = jest.fn();
                let wrapper;
                act(() => {

                    wrapper = setupForInteraction({
                        selectionType: 'auto',
                        onSelectionChange: selectionChangeHandler
                    }, container);

                    wrapper.find('input').getDOMNode().value = 'island';
                    wrapper.find('input').simulate('keydown', {
                        keyCode: 27,
                        target: {
                            value: 'island'
                        }
                    });
                });
                expect(wrapper.find('input').getDOMNode().value).toBe('');
            });

        });

        describe('When selectionType is \'auto-inline\'', () => {
            test('should show filtered options when text is entered in the input field', () => {
                let wrapper;
                act(() => {

                    wrapper = setupForInteraction({
                        selectionType: 'auto-inline'
                    }, container);

                    wrapper.find('input').simulate('change', { target: { value: 'island' } });
                });
                const filteredOptions = document.querySelectorAll('.fd-list__item');
                expect(filteredOptions.length).toBe(22);
            });

            test('should auto select the first filtered option when list is shown', () => {
                const selectionChangeHandler = jest.fn();
                let wrapper;
                act(() => {

                    wrapper = setupForInteraction({
                        selectionType: 'auto-inline',
                        onSelectionChange: selectionChangeHandler
                    }, container);

                    wrapper.find('input').simulate('change', { target: { value: 'island' } });
                });
                expect(selectionChangeHandler).toHaveBeenLastCalledWith(expect.anything(), expect.objectContaining({
                    text: 'Ascension Island',
                    key: 'AC'
                }), 'inputChange');
            });

            test('should auto complete the input field with text from the first filtered option', () => {
                const selectionChangeHandler = jest.fn();
                let wrapper;
                act(() => {

                    wrapper = setupForInteraction({
                        selectionType: 'auto-inline',
                        onSelectionChange: selectionChangeHandler
                    }, container);

                    wrapper.find('input').simulate('change', { target: { value: 'sw' } });
                });
                const inputNode = wrapper.find('input').getDOMNode();
                expect(inputNode.value).toBe('Switzerland');
                expect(inputNode.selectionStart).toBe(2);
                expect(inputNode.selectionEnd).toBe(11);
            });

            test('should auto select the first filtered option on input field blur', () => {
                const selectionChangeHandler = jest.fn();
                let wrapper;
                act(() => {

                    wrapper = setupForInteraction({
                        selectionType: 'auto-inline',
                        onSelectionChange: selectionChangeHandler
                    }, container);

                    wrapper.find('input').simulate('change', { target: { value: 'island' } });
                });

                act(() => {
                    wrapper.find('input').simulate('blur');
                });

                expect(selectionChangeHandler).toHaveBeenLastCalledWith(expect.anything(), expect.objectContaining({
                    text: 'Ascension Island',
                    key: 'AC'
                }), 'inputChange');
            });

            test('should toggle listbox visibility when addon button is clicked', () => {
                const selectionChangeHandler = jest.fn();
                let wrapper;
                act(() => {

                    wrapper = setupForInteraction({
                        selectionType: 'auto-inline',
                        onSelectionChange: selectionChangeHandler
                    }, container);

                    wrapper.find('button').simulate('click');
                });
                let list = document.querySelectorAll('ul#interactionTesting-listbox-list');
                expect(list.length).toBeGreaterThan(0);
                act(() => {
                    wrapper.find('button').simulate('click');
                });
                list = document.querySelectorAll('ul#interactionTesting-listbox-list');
                expect(list.length).toBe(0);
            });

            test('should select the clicked option and update input field value', () => {
                const selectionChangeHandler = jest.fn();
                let wrapper;
                act(() => {

                    wrapper = setupForInteraction({
                        selectionType: 'auto-inline',
                        onSelectionChange: selectionChangeHandler
                    }, container);

                    wrapper.find('input').simulate('change', { target: { value: 'm' } });
                });
                const fifthOption = document.body.querySelectorAll('.fd-list__item')[4];
                let clickEvent = new MouseEvent('click', { bubbles: true });
                act(() => {
                    fifthOption.dispatchEvent(clickEvent);
                });
                expect(selectionChangeHandler).toHaveBeenLastCalledWith(expect.anything(), expect.objectContaining({
                    text: 'Morocco',
                    key: 'MA'
                }), 'optionClick');
                expect(wrapper.find('input').getDOMNode().value).toBe('Morocco');
            });

            test('should clear the input field when Escape key is pressed', () => {
                const selectionChangeHandler = jest.fn();
                let wrapper;
                act(() => {

                    wrapper = setupForInteraction({
                        selectionType: 'auto-inline',
                        onSelectionChange: selectionChangeHandler
                    }, container);

                    wrapper.find('input').getDOMNode().value = 'island';
                    wrapper.find('input').simulate('keydown', {
                        keyCode: 27,
                        target: {
                            value: 'island'
                        }
                    });
                });
                expect(wrapper.find('input').getDOMNode().value).toBe('');
            });
        });

        describe('When showAllEntries is set to\'true\'', () => {
            test('should show only all options when text is entered in the input field', () => {
                let wrapper;
                act(() => {

                    wrapper = setupForInteraction({
                        selectionType: 'auto-inline',
                        showAllEntries: true
                    }, container);

                    wrapper.find('input').simulate('change', { target: { value: 'island' } });
                });
                const filteredOptions = document.querySelectorAll('.fd-list__item');
                expect(filteredOptions.length).toBe(258);
            });
        });
    });

    test('forwards the ref', () => {
        let ref;
        class Test extends React.Component {
            constructor(props) {
                super(props);
                ref = React.createRef();
            }
            render = () => (
                <ComboboxInput
                    ariaLabel='Dummy options'
                    arrowLabel='Show options'
                    id='refForwardingTesting'
                    options={defaultOptions}
                    ref={ref}
                    selectionType='auto-inline' />
            );
        }
        mount(<Test />);
        expect(ref.current.button.tagName).toEqual('BUTTON');
    });
});
