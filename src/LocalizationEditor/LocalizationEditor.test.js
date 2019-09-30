import LocalizationEditor from './LocalizationEditor';
import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

describe('<LocalizationEditor />', () => {
    const defaultControl = {
        label: 'Label',
        placeholder: 'Enter Label',
        language: 'EN*'
    };

    const defaultMenuArray = [
        { placeholder: 'Enter Label', language: 'ES' },
        { placeholder: 'Enter Label', language: 'CH' },
        { placeholder: 'Enter Label', language: 'PL' }
    ];

    const localEditor = (
        <LocalizationEditor
            control={{
                label: 'Localization Editor Label',
                placeholder: 'Enter Label',
                language: 'EN*'
            }}
            menu={defaultMenuArray} />
    );

    const localEditorCompact = (
        <LocalizationEditor
            className='blue'
            compact
            control={{
                label: 'Localization Editor Compact Mode',
                placeholder: 'Enter Label',
                language: 'EN*'
            }}
            menu={defaultMenuArray} />
    );

    const localEditorTextArea = (
        <LocalizationEditor
            control={{
                label: 'Localization Editor Label',
                placeholder: 'Enter Label',
                language: 'EN*'
            }}
            menu={defaultMenuArray}
            textarea />
    );

    test('create localization editor', () => {
        // localization editor
        let component = renderer.create(localEditor);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // localization editor compact
        component = renderer.create(localEditorCompact);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // localization editor with text area
        component = renderer.create(localEditorTextArea);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the LocalizationEditor component', () => {
            const element = mount(
                <LocalizationEditor
                    control={defaultControl}
                    data-sample='Sample'
                    menu={defaultMenuArray} />
            );

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the LocalizationEditor component\'s Popover component', () => {
            const element = mount(
                <LocalizationEditor
                    control={defaultControl}
                    menu={defaultMenuArray}
                    popoverProps={{
                        'data-sample': 'Sample'
                    }} />
            );

            expect(
                element.find('.fd-popover').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the LocalizationEditor component\'s control textarea element', () => {
            const control = {
                ...defaultControl,
                inputProps: {
                    'data-sample': 'Sample'
                }
            };
            const element = mount(
                <LocalizationEditor
                    control={control}
                    menu={defaultMenuArray}
                    textarea />
            );

            expect(
                element.find('textarea').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the LocalizationEditor component\'s control input element', () => {
            const control = {
                ...defaultControl,
                inputProps: {
                    'data-sample': 'Sample',
                    id: 'controlInput'
                }
            };
            const element = mount(
                <LocalizationEditor
                    control={control}
                    menu={defaultMenuArray} />
            );

            expect(
                element.find('input').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the LocalizationEditor component\'s control label element', () => {
            const control = {
                ...defaultControl,
                labelProps: {
                    'data-sample': 'Sample'
                }
            };
            const element = mount(
                <LocalizationEditor
                    control={control}
                    menu={defaultMenuArray} />
            );

            expect(
                element.find('label').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the LocalizationEditor component\'s control button element', () => {
            const control = {
                ...defaultControl,
                buttonProps: {
                    'data-sample': 'Sample',
                    id: 'controlButton'
                }
            };
            const element = mount(
                <LocalizationEditor
                    control={control}
                    menu={defaultMenuArray} />
            );

            expect(
                element.find('button').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the LocalizationEditor component\'s body ul element', () => {
            const element = mount(
                <LocalizationEditor
                    control={defaultControl}
                    listProps={{
                        'data-sample': 'Sample'
                    }}
                    menu={defaultMenuArray} />
            );

            element.find('.fd-popover__control > div').simulate('click');

            expect(
                element.find('.fd-menu__list').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the LocalizationEditor component\'s body list li elements', () => {
            const menu = [
                { placeholder: 'Enter Label', language: 'ES', 'data-sample': 'Sample 1' },
                { placeholder: 'Enter Label', language: 'CH', 'data-sample': 'Sample 2' },
                { placeholder: 'Enter Label', language: 'PL', 'data-sample': 'Sample 3' }
            ];
            const element = mount(
                <LocalizationEditor
                    control={defaultControl}
                    menu={menu} />
            );

            element.find('.fd-popover__control > div').simulate('click');

            const listItems = element.find('.fd-menu__item');

            expect(listItems).toHaveLength(3);
            expect(
                listItems.at(0).getDOMNode().attributes['data-sample'].value
            ).toBe('Sample 1');
            expect(
                listItems.at(1).getDOMNode().attributes['data-sample'].value
            ).toBe('Sample 2');
            expect(
                listItems.at(2).getDOMNode().attributes['data-sample'].value
            ).toBe('Sample 3');
        });

        test('should allow props to be spread to the LocalizationEditor component\'s body list textarea elements', () => {
            const menu = [
                { placeholder: 'Enter Label', language: 'ES', inputProps: { 'data-sample': 'Sample 1' } },
                { placeholder: 'Enter Label', language: 'CH', inputProps: { 'data-sample': 'Sample 2' } },
                { placeholder: 'Enter Label', language: 'PL', inputProps: { 'data-sample': 'Sample 3' } }
            ];
            const element = mount(
                <LocalizationEditor
                    control={defaultControl}
                    menu={menu}
                    textarea />
            );

            element.find('.fd-popover__control > div').simulate('click');

            const listItems = element.find('nav ul li textarea');

            expect(listItems).toHaveLength(3);
            expect(
                listItems.at(0).getDOMNode().attributes['data-sample'].value
            ).toBe('Sample 1');
            expect(
                listItems.at(1).getDOMNode().attributes['data-sample'].value
            ).toBe('Sample 2');
            expect(
                listItems.at(2).getDOMNode().attributes['data-sample'].value
            ).toBe('Sample 3');
        });

        test('should allow props to be spread to the LocalizationEditor component\'s body list input elements', () => {
            const menu = [
                { placeholder: 'Enter Label', language: 'ES', inputProps: { 'data-sample': 'Sample 1' } },
                { placeholder: 'Enter Label', language: 'CH', inputProps: { 'data-sample': 'Sample 2' } },
                { placeholder: 'Enter Label', language: 'PL', inputProps: { 'data-sample': 'Sample 3' } }
            ];
            const element = mount(
                <LocalizationEditor
                    control={defaultControl}
                    menu={menu} />
            );

            element.find('.fd-popover__control > div').simulate('click');

            const listItems = element.find('nav ul li input');

            expect(listItems).toHaveLength(3);
            expect(
                listItems.at(0).getDOMNode().attributes['data-sample'].value
            ).toBe('Sample 1');
            expect(
                listItems.at(1).getDOMNode().attributes['data-sample'].value
            ).toBe('Sample 2');
            expect(
                listItems.at(2).getDOMNode().attributes['data-sample'].value
            ).toBe('Sample 3');
        });
    });

    test('forwards the ref', () => {
        const menu = [
            { placeholder: 'Enter Label', language: 'ES', inputProps: { 'data-sample': 'Sample 1' } },
            { placeholder: 'Enter Label', language: 'CH', inputProps: { 'data-sample': 'Sample 2' } },
            { placeholder: 'Enter Label', language: 'PL', inputProps: { 'data-sample': 'Sample 3' } }
        ];

        let ref;
        class Test extends React.Component {
            constructor(props) {
                super(props);
                ref = React.createRef();
            }
            render = () => (<LocalizationEditor control={defaultControl}
                menu={menu} ref={ref} />);
        }
        mount(<Test />);
        expect(ref.current.tagName).toEqual('DIV');
        expect(ref.current.className).toEqual('fd-localization-editor');
    });
});
