import React from 'react';
import { storiesOf } from '@storybook/react';
import Switch from '../Switch';
import {
    boolean,
    object,
    text,
    withKnobs
} from '@storybook/addon-knobs';

storiesOf('Components|Switch', module)
    .addDecorator(withKnobs)
    .add('Dev', () => (
        <Switch
            checked={boolean('checked', false)}
            compact={boolean('compact', false)}
            disabled={boolean('disabled', false)}
            internalLabels={object('internalLabels', {
                checked: {
                    text: 'on',
                    glyph: 'accept'
                },
                unchecked: {
                    text: 'off',
                    glyph: 'decline'
                }
            })}
            semantic={boolean('semantic', false)}>{text('label', 'label')}</Switch>
    ))
    .add('Default', () => (
        <Switch>Switch label</Switch>
    ))
    .add('Checked', () => (
        <Switch checked>Switch label</Switch>
    ))
    .add('Compact', () => (
        <Switch compact>Switch label</Switch>
    ))
    .add('Disabled', () => (
        <Switch disabled>Switch label</Switch>
    ))
    .add('with Icons', () => (
        <Switch internalLabels={{
            checked: {
                text: 'on',
                glyph: 'accept'
            },
            unchecked: {
                text: 'off',
                glyph: 'decline'
            }
        }}>Switch label</Switch>
    ))
    .add('Semantic', () => (
        <Switch semantic>Switch label</Switch>
    ))
    .add('No Label', () => (
        <Switch />
    ))
    .add('disable styles', () => (
        <Switch disableStyles>Switch</Switch>
    ));
