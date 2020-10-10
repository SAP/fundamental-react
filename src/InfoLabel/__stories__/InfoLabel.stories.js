/* eslint-disable react/no-multi-comp */
import InfoLabel from '../InfoLabel';
import React from 'react';
import {
    boolean,
    number,
    text
} from '@storybook/addon-knobs';

export default {
    title: 'Component API/InfoLabel',
    component: InfoLabel
};

export const primary = () => (<InfoLabel>Default</InfoLabel>);

export const colors = () => (
    <div className='fddocs-container'>
        <InfoLabel color={1}>Color 1</InfoLabel>
        <InfoLabel color={2}>Color 2</InfoLabel>
        <InfoLabel color={3}>Color 3</InfoLabel>
        <InfoLabel color={4}>Color 4</InfoLabel>
        <InfoLabel color={5}>Color 5</InfoLabel>
        <InfoLabel color={6}>Color 6</InfoLabel>
        <InfoLabel color={7}>Color 7</InfoLabel>
        <InfoLabel color={8}>Color 8</InfoLabel>
        <InfoLabel color={9}>Color 9</InfoLabel>
        <InfoLabel color={10}>Color 10</InfoLabel>
    </div>
);

export const glyph = () => (
    <div className='fddocs-container'>
        <InfoLabel glyph='add-activity-2'>add-activity-2</InfoLabel>
        <InfoLabel glyph='bar-code'>bar-code</InfoLabel>
        <InfoLabel glyph='hide'>hide</InfoLabel>
        <InfoLabel glyph='key'>key</InfoLabel>
        <InfoLabel aria-label='upload-to-cloud' glyph='upload-to-cloud' />
    </div>
);

export const numeric = () => (
    <div className='fddocs-container'>
        <InfoLabel numeric>1</InfoLabel>
        <InfoLabel numeric>10000</InfoLabel>
    </div>
);



export const dev = () => (
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
);

dev.parameters = { docs: { disable: true } };

export const noStyles = () => (<InfoLabel cssNamespace='xxx'>Default</InfoLabel>);
noStyles.parameters = { docs: { disable: true } };
