/* eslint-disable react/no-multi-comp */
import Button from '../Button';
import ButtonGroup from '../ButtonGroup';
import React from 'react';

export default {
    title: 'Component API/ButtonGroup',
    component: ButtonGroup
};

export const primary = () => (<ButtonGroup>
    <Button glyph='survey' />
    <Button glyph='pie-chart' selected />
    <Button glyph='pool' />
</ButtonGroup>);


export const compact = () => (
    <ButtonGroup>
        <Button compact>Left</Button>
        <Button compact selected>Middle</Button>
        <Button compact>Right</Button>
    </ButtonGroup>
);

compact.story = {
    name: 'Compact'
};

