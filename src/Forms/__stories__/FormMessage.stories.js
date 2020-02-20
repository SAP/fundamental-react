import FormMessage from '../FormMessage';
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    select,
    withKnobs
} from '@storybook/addon-knobs';

const createProps = (overrides) => ({
    type: select('Types', {
        'default': null,
        'error': 'error',
        'success': 'success',
        'information': 'information',
        'warning': 'warning'
    }),
    ...overrides
});

storiesOf('Components|FormMessage', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <FormMessage {...createProps()}>Default</FormMessage>
    ))
    .add('disable styles', () => (
        <FormMessage disableStyles>Default</FormMessage>
    ));
