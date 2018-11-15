import React from 'react';
import {} from '../';
import { DocsTile, DocsText, Separator, Header, Import, Properties } from '..';
import { LocalizationEditor } from '..';

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

    return (
        <div>
            <Header>Localization Editor</Header>

            <Import module="LocalizationEditor" path="/fundamental-react/src/" />

            <Separator />

            <Properties type="Inputs" properties={[{ name: '...', description: '... - ...' }]} />

            <Separator />

            <h2>Localization Editor with Input</h2>
            <DocsTile>
                <LocalizationEditor
                    control={{ label: 'Localization Editor Label', placeholder: 'Enter Label', language: 'EN*' }}
                    menu={[
                        { placeholder: 'Enter Label', language: 'ES' },
                        { placeholder: 'Enter Label', language: 'CH' },
                        { placeholder: 'Enter Label', language: 'PL' }
                    ]}
                />
                <br />
                <LocalizationEditor
                    compact
                    control={{ label: 'Localization Editor Compact Mode', placeholder: 'Enter Label', language: 'EN*' }}
                    menu={[
                        { placeholder: 'Enter Label', language: 'ES' },
                        { placeholder: 'Enter Label', language: 'CH' },
                        { placeholder: 'Enter Label', language: 'PL' }
                    ]}
                />
            </DocsTile>
            <DocsText>{localizationEditorCode}</DocsText>
            <Separator />
        </div>
    );
};
