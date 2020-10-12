/* eslint-disable react/no-multi-comp */
import Button from '../Button';
import ButtonSegmented from '../ButtonSegmented';
import React from 'react';

export default {
    title: 'Component API/Button/ButtonSegmented',
    component: ButtonSegmented
};

export const primary = () => (<ButtonSegmented>
    <Button glyph='survey' />
    <Button glyph='pie-chart' selected />
    <Button glyph='pool' />
</ButtonSegmented>);


export const compact = () => (
    <ButtonSegmented>
        <Button compact>Left</Button>
        <Button compact selected>Middle</Button>
        <Button compact>Right</Button>
    </ButtonSegmented>
);

compact.storyName = 'Compact';

export const noStyles = () => (
    <ButtonSegmented cssNamespace='xxx'>
        <Button glyph='survey' />
        <Button glyph='pie-chart' selected />
        <Button glyph='pool' />
    </ButtonSegmented>
);
noStyles.parameters = { docs: { disable: true } };
