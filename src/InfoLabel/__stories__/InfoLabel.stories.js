import InfoLabel from '../InfoLabel';
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    boolean,
    number,
    text,
    withKnobs
} from '@storybook/addon-knobs';

storiesOf('Components|InfoLabel', module)
    .addDecorator(withKnobs)
    .add('Dev', () => (
        <InfoLabel
            color={number('color', 1, {
                range: true,
                min: 1,
                max: 10,
                step: 1
            })}
            glyph={text('glyph', 'future')}
            numeric={boolean('numeric', false)}>
            {text('text', 'Default')}
        </InfoLabel>
    ))
    .add('Colors', () => (
        <>
            <InfoLabel color={1}>Default</InfoLabel>
            <InfoLabel color={2}>Default</InfoLabel>
            <InfoLabel color={3}>Default</InfoLabel>
            <InfoLabel color={4}>Default</InfoLabel>
            <InfoLabel color={5}>Default</InfoLabel>
            <InfoLabel color={6}>Default</InfoLabel>
            <InfoLabel color={7}>Default</InfoLabel>
            <InfoLabel color={8}>Default</InfoLabel>
            <InfoLabel color={9}>Default</InfoLabel>
            <InfoLabel color={10}>Default</InfoLabel>
        </>
    ))
    .add('Glyph', () => (
        <>
            <InfoLabel glyph='add-activity-2'>Default</InfoLabel>
            <InfoLabel glyph='bar-code'>Default</InfoLabel>
            <InfoLabel glyph='hide'>Default</InfoLabel>
            <InfoLabel glyph='key'>Default</InfoLabel>
            <InfoLabel glyph='upload-to-cloud' />
        </>
    )).add('Numeric', () => (
        <>
            <InfoLabel numeric>1</InfoLabel>
            <InfoLabel numeric>10000</InfoLabel>
        </>
    ))
    .add('disable styles', () => (
        <InfoLabel disableStyles>Default</InfoLabel>
    ));
