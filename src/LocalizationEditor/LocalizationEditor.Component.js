import { LocalizationEditor } from '../';
import React from 'react';
import { DocsText, DocsTile, Header, Import, Properties, Separator } from '../_playground';

export const LocalizationEditorComponent = () => {
    const localizationEditorCode = `<LocalizationEditor
    control={{ label: 'Localization Editor Label', placeholder: 'Enter Label', language: 'EN*' }}
    menu={[
        { placeholder: 'Enter Label', language: 'ES' },
        { placeholder: 'Enter Label', language: 'CH' },
        { placeholder: 'Enter Label', language: 'PL' }
    ]}
/>

<LocalizationEditor
    compact
    control={{ label: 'Localization Editor Compact Mode', placeholder: 'Enter Label', language: 'EN*' }}
    menu={[
        { placeholder: 'Enter Label', language: 'ES' },
        { placeholder: 'Enter Label', language: 'CH' },
        { placeholder: 'Enter Label', language: 'PL' }
    ]}
/>`;

    const localizationEditorTextareaCode = `<LocalizationEditor
    textarea
    control={{ label: 'Localization Editor Label', placeholder: 'Enter Label', language: 'EN*' }}
    menu={[
        { placeholder: 'Enter Label', language: 'ES' },
        { placeholder: 'Enter Label', language: 'CH' },
        { placeholder: 'Enter Label', language: 'PL' }
    ]}
/>`;

    return (
        <div>
            <Header>Localization Editor</Header>

            <Import module='LocalizationEditor' path='/fundamental-react/src/' />

            <Separator />

            <Properties properties={[
                { name: 'control', description: 'object (required) - An object of shape "{ label: string, placeholder: string, language: string }" containing the values of the control localization editor.' },
                { name: 'menu', description: 'array (required) - An array of objects that represent the values of the elements in the dropdown menu. The shape of the objects in the array is "{ placeholder: string, language: string }".' },
                { name: 'id', description: 'string (optional) - The id of the Localization Editor.' },
                { name: 'compact', description: 'bool - set to true to enable a compact mode. This property can be applied only to Localization Editor with an input.' },
                { name: 'textarea', description: 'bool - set to true to enable a Localization Editor with a textarea.' }]} type='Inputs' />

            <Separator />

            <h2>Localization Editor with Input</h2>
            <DocsTile>
                <LocalizationEditor
                    control={{ label: 'Localization Editor Label', placeholder: 'Enter Label', language: 'EN*' }}
                    menu={[
                        { placeholder: 'Enter Label', language: 'ES' },
                        { placeholder: 'Enter Label', language: 'CH' },
                        { placeholder: 'Enter Label', language: 'PL' }
                    ]} />
                <br />
                <LocalizationEditor
                    compact
                    control={{ label: 'Localization Editor Compact Mode', placeholder: 'Enter Label', language: 'EN*' }}
                    menu={[
                        { placeholder: 'Enter Label', language: 'ES' },
                        { placeholder: 'Enter Label', language: 'CH' },
                        { placeholder: 'Enter Label', language: 'PL' }
                    ]} />
            </DocsTile>
            <DocsText>{localizationEditorCode}</DocsText>

            <Separator />

            <h2>Localization Editor with Textarea</h2>
            <DocsTile>
                <LocalizationEditor
                    control={{ label: 'Localization Editor Label', placeholder: 'Enter Label', language: 'EN*' }}
                    menu={[
                        { placeholder: 'Enter Label', language: 'ES' },
                        { placeholder: 'Enter Label', language: 'CH' },
                        { placeholder: 'Enter Label', language: 'PL' }
                    ]}
                    textarea />
            </DocsTile>
            <DocsText>{localizationEditorTextareaCode}</DocsText>
            <Separator />
        </div>
    );
};
