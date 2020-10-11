/* eslint-disable react/no-multi-comp */
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import React from 'react';
import Token from '../Token';

export default {
    title: 'Component API/Token',
    component: Token
};

export const primary = () => (
    <Token buttonLabel='Clear' >Default</Token>
);

export const compact = () => (
    <Token buttonLabel='Clear' compact>Compact</Token>
);
export const readOnly = () => (
    <Token buttonLabel='Clear' readOnly>Read Only</Token>
);

export const dev = () => (
    <Token
        buttonLabel='Clear'
        compact={boolean('compact', false)}
        onClick={action('on-click')}
        readOnly={boolean('readOnly', false)}>Dev</Token>
);
dev.parameters = { docs: { disable: true } };

export const noStyles = () => (
    <Token buttonLabel='Clear' cssNamespace='xxx'>Default</Token>
);
noStyles.parameters = { docs: { disable: true } };
