import LocalizationEditor from '../LocalizationEditor';
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    withKnobs
} from '@storybook/addon-knobs';

storiesOf('Components|LocalizationEditor', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
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
    ))
    .add('disable styles', () => (
        <LocalizationEditor
            control={{
                label: 'Localization Editor Label',
                language: 'EN*',
                placeholder: 'Enter Label'
            }}
            disableStyles
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
    ))
    .add('custom styles', () => (
        <LocalizationEditor
            control={{
                label: 'Localization Editor Label',
                language: 'EN*',
                placeholder: 'Enter Label'
            }}
            customStyles={require('../../utils/WithStyles/customStylesTest.css')}
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
    ));
