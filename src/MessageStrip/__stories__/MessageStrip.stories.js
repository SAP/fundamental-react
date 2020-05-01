import MessageStrip from '../MessageStrip';
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
    noGlyph: boolean('noGlyph', false),
    type: select('Validation State', {
        'default': null,
        'warning': 'warning',
        'error': 'error',
        'success': 'success',
        'information': 'information'
    }),
    linkText: text('linkText', 'Default MessageStrip'),
    link: text('href', ''),
    ...overrides
});

storiesOf('Components|MessageStrip', module)
    .addDecorator(withKnobs)
    .add('Dev', () => (
        <MessageStrip {...createProps()}>Default MessageStrip</MessageStrip>
    ))
    .add('Dismissible', () => (
        <MessageStrip dismissible>MessageStrip</MessageStrip>
    ))
    .add('No Icon', () => (
        <MessageStrip noGlyph>MessageStrip</MessageStrip>
    ))
    .add('Warning', () => (
        <MessageStrip type='warning'>MessageStrip</MessageStrip>
    ))
    .add('Error', () => (
        <MessageStrip type='error'>MessageStrip</MessageStrip>
    ))
    .add('Success', () => (
        <MessageStrip type='success'>MessageStrip</MessageStrip>
    ))
    .add('Information', () => (
        <MessageStrip type='information'>MessageStrip</MessageStrip>
    ))
    .add('disable styles', () => (
        <MessageStrip disableStyles>
            Default MessageStrip
        </MessageStrip>
    ));
