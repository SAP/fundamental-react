import { act } from 'react-dom/test-utils';
import ComboboxInput from './ComboboxInput';
import { mount } from 'enzyme';
import React from 'react';
import { unmountComponentAtNode } from 'react-dom';

let container = null;
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
                element.find('div.fd-popover').getDOMNode().attributes['data-sample'].value
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
                element.find('button.sap-icon--navigation-down-arrow').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });

    describe('interaction', () => {
        describe('Selection Type is \'auto-inline\'', () => {
            beforeEach(() => {
                container = document.createElement('div');
                document.body.appendChild(container);
            });

            afterEach(() => {
                unmountComponentAtNode(container);
                container.remove();
                container = null;
            });

            test('should call onSelect when the first listbox option is clicked', () => {
                const selectionChangeHandler = jest.fn();
                act(() => {
                    mount(
                        <ComboboxInput
                            ariaLabel='Dummy options'
                            arrowLabel='Show options'
                            id='interactionTesting'
                            onSelectionChange={selectionChangeHandler}
                            options={defaultOptions}
                            selectionType='auto-inline' />,
                        {
                            attachTo: container
                        }
                    );
                });
                const button = document.getElementById('interactionTesting-combobox-arrow');
                act(() => {
                    button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
                });
                const firstOption = document.body.querySelectorAll('.fd-list__item')[0];
                let clickEvent = new MouseEvent('click', { bubbles: true });
                act(() => {
                    firstOption.dispatchEvent(clickEvent);
                });
                expect(selectionChangeHandler).toHaveBeenCalledTimes(1);
                expect(selectionChangeHandler).toHaveBeenCalledWith(expect.anything(), defaultOptions[0]);
            });

            test('should call onSelect when the second listbox option is clicked', () => {
                const selectionChangeHandler = jest.fn();
                act(() => {
                    mount(
                        <ComboboxInput
                            ariaLabel='Dummy options'
                            arrowLabel='Show options'
                            id='interactionTesting'
                            onSelectionChange={selectionChangeHandler}
                            options={defaultOptions}
                            selectionType='auto-inline' />,
                        {
                            attachTo: container
                        }
                    );
                });
                const button = document.getElementById('interactionTesting-combobox-arrow');
                act(() => {
                    button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
                });
                const firstOption = document.body.querySelectorAll('.fd-list__item')[1];
                let clickEvent = new MouseEvent('click', { bubbles: true });
                act(() => {
                    firstOption.dispatchEvent(clickEvent);
                });
                expect(selectionChangeHandler).toHaveBeenCalledTimes(1);
                expect(selectionChangeHandler).toHaveBeenCalledWith(expect.anything(), defaultOptions[1]);
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
        expect(ref.current.tagName).toEqual('BUTTON');
    });
});
