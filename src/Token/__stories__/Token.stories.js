/* eslint-disable react/no-multi-comp */
import { boolean } from '@storybook/addon-knobs';
import React from 'react';
import Token from '../Token';

export default {
    title: 'Component API/Token',
    component: Token
};

export const primary = () => (
    <Token>Default</Token>
);

export const compact = () => (
    <Token compact>Compact</Token>
);
export const readOnly = () => (
    <Token readOnly>Compact</Token>
);

export const dev = () => (
    <Token
        compact={boolean('compact', false)}
        readOnly={boolean('readOnly', false)}>Default</Token>
);
dev.story = {
    parameters: { docs: { disable: true } }
};
