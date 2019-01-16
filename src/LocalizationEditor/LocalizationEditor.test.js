import { LocalizationEditor } from './LocalizationEditor';
import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

describe('<LocalizationEditor />', () => {
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
                    control={{
                        label: 'Label',
                        placeholder: 'Enter Label',
                        language: 'EN*'
                    }}
                    data-sample='Sample'
                    menu={defaultMenuArray} />
            );

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        xtest('should allow props to be spread to the LocalizationEditor component\'s Popover component', () => {
            // TODO: placeholder for this test description once that functionality is built
        });

        xtest('should allow props to be spread to the LocalizationEditor component\'s input/textarea element', () => {
            // TODO: placeholder for this test description once that functionality is built
        });

        xtest('should allow props to be spread to the LocalizationEditor component\'s label element', () => {
            // TODO: placeholder for this test description once that functionality is built
        });

        xtest('should allow props to be spread to the LocalizationEditor component\'s button element', () => {
            // TODO: placeholder for this test description once that functionality is built
        });

        xtest('should allow props to be spread to the LocalizationEditor component\'s ul element', () => {
            // TODO: placeholder for this test description once that functionality is built
        });
    });
});
