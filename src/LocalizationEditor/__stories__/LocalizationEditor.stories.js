/* eslint-disable react/no-multi-comp */
import LocalizationEditor from '../LocalizationEditor';
import React from 'react';

export default {
    title: 'Component API/LocalizationEditor',
    component: LocalizationEditor,
    parameters: {
        description: `
> **DEPRECATED**. Localization Editor does not exist as a Fiori 3 component so it has been deprecated. `
    }
};


export const primary = () => (
    <LocalizationEditor
        control={{
            label: 'Localization Editor Label',
            language: 'EN*',
            placeholder: 'Enter Label'
        }}
        menu={[
            {
                language: 'ES',
                placeholder: 'Enter Label'
            },
            {
                language: 'CH',
                placeholder: 'Enter Label'
            },
            {
                language: 'PL',
                placeholder: 'Enter Label'
            }
        ]} />
);

export const compact = () => (
    <LocalizationEditor
        compact
        control={{
            label: 'Localization Editor Label',
            language: 'EN*',
            placeholder: 'Enter Label'
        }}
        menu={[
            {
                language: 'ES',
                placeholder: 'Enter Label'
            },
            {
                language: 'CH',
                placeholder: 'Enter Label'
            },
            {
                language: 'PL',
                placeholder: 'Enter Label'
            }
        ]} />
);

export const textArea = () => (
    <LocalizationEditor
        control={{
            label: 'Localization Editor Label',
            language: 'EN*',
            placeholder: 'Enter Label'
        }}
        menu={[
            {
                language: 'ES',
                placeholder: 'Enter Label'
            },
            {
                language: 'CH',
                placeholder: 'Enter Label'
            },
            {
                language: 'PL',
                placeholder: 'Enter Label'
            }
        ]}
        textarea />
);

