import { LocalizationEditor } from '../';
import path from 'path';
import React from 'react';
import { ComponentPage, Example } from '../_playground';

export const LocalizationEditorComponent = () => {
    return (
        <ComponentPage
            sourceModulePath={path.join(__dirname, './LocalizationEditor')}
            title='Localization Editor'>

            <Example
                title='Localization Editor with Input'>
                <div>
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
                </div>
            </Example>

            <Example
                title='Localization Editor with Textarea'>
                <LocalizationEditor
                    control={{ label: 'Localization Editor Label', placeholder: 'Enter Label', language: 'EN*' }}
                    menu={[
                        { placeholder: 'Enter Label', language: 'ES' },
                        { placeholder: 'Enter Label', language: 'CH' },
                        { placeholder: 'Enter Label', language: 'PL' }
                    ]}
                    textarea />
            </Example>

        </ComponentPage>
    );
};
