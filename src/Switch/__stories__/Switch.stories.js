/* eslint-disable react/no-multi-comp */
import React from 'react';
import Switch from '../Switch';
import SwitchItem from '../_SwitchItem';
import {
    boolean,
    object,
    text
} from '@storybook/addon-knobs';

export default {
    title: 'Component API/Switch',
    component: Switch,
    subcomponents: { SwitchItem }
};

export const primary = () => (
    <Switch>Switch label</Switch>
);
export const checked = () => (
    <Switch checked>Switch label</Switch>
);
export const compact = () => (
    <Switch compact>Switch label</Switch>
);
export const disabled = () => (
    <Switch disabled>Switch label</Switch>
);
export const withIcons = () => (
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
);
export const semantic = () => (
    <Switch semantic>Switch label</Switch>
);
export const withNoLabel = () => (
    <Switch />
);

export const internalLabels = () => (
    <>
        <Switch
            internalLabels={{
                checked: {
                    text: 'on'
                },
                unchecked: {
                    text: 'off'
                }
            }}
            showInternalLabels>Show Internal Labels</Switch>
        <Switch
            internalLabels={{
                checked: {
                    text: 'on',
                    glyph: 'accept'
                },
                unchecked: {
                    text: 'off',
                    glyph: 'decline'
                }
            }}
            semantic
            showInternalLabels>Show Internal Labels and Icons</Switch>
    </>
);

export const dev = () => (
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
);

dev.story = {
    parameters: { docs: { disable: true } }
};
