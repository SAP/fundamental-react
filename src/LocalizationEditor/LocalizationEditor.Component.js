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
            <Import sourceModule={require('./LocalizationEditor')} />

            <Separator />

            <Properties sourceModule={require('./LocalizationEditor')} />

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
        </div>
    );
};
