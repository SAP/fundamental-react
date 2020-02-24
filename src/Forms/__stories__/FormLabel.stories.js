import FormLabel from '../FormLabel';
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    boolean,
    withKnobs
} from '@storybook/addon-knobs';

storiesOf('Components|FormLabel', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <FormLabel>Default</FormLabel>
    ))
    .add('Required', () => (
        <FormLabel required>Default</FormLabel>
    ))
    .add('Props', () => (
        <FormLabel
            required={boolean('Required?', true)}>
            Default</FormLabel>
    ))
    .add('disable styles', () => (
        <FormLabel disableStyles>Default</FormLabel>
    ));
