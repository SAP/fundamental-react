import Alert from '../Alert';
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    boolean,
    select,
    text,
    withKnobs
} from '@storybook/addon-knobs';


const createProps = (overrides) => ({
    dismissible: boolean('dismissible', false),
    type: select('Validation State', {
        'default': null,
        'warning': 'warning',
        'error': 'error',
        'success': 'success',
        'information': 'information'
    }),
    linkText: text('linkText', 'Default Alert'),
    link: text('href', ''),
    ...overrides
});

storiesOf('Components|Alert', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <Alert {...createProps()}>Default alert</Alert>
    ))
    .add('disable styles', () => (
        <Alert {...createProps()}
            disableStyles>
                    Default alert
        </Alert>
    ));
