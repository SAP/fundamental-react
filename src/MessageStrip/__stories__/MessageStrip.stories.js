/* eslint-disable react/no-multi-comp */
import MessageStrip from '../MessageStrip';
import React from 'react';
import {
    boolean,
    select,
    text
} from '@storybook/addon-knobs';

export default {
    title: 'Component API/MessageStrip',
    component: MessageStrip
};

export const primary = () => (
    <MessageStrip>Default MessageStrip</MessageStrip>
);

export const dismissible = () => (
    <MessageStrip dismissible>MessageStrip</MessageStrip>
);

dismissible.story = {
    name: 'Dismissible',
    parameters: {
        docs: {
            storyDescription: `The MessageStrip provides information
            that is useful and relevant, but not critical. It can also provide
            feedback that an action has been executed. The user will need to dismiss the message.`
        }
    }
};
export const noGlyph = () => (
    <MessageStrip noGlyph>MessageStrip</MessageStrip>
);

export const states = () => (
    <>
        <MessageStrip type='error'>MessageStrip</MessageStrip>
        <MessageStrip type='warning'>MessageStrip</MessageStrip>
        <MessageStrip type='success'>MessageStrip</MessageStrip>
        <MessageStrip type='information'>MessageStrip</MessageStrip>
    </>
);

export const dev = () => (
    <MessageStrip
        dismissible={boolean('dismissible', false)}
        link={text('href', '')}
        linkText={text('linkText', 'Default MessageStrip')}
        noGlyph={boolean('noGlyph', false)}
        type={select('Validation State', {
            'default': null,
            'warning': 'warning',
            'error': 'error',
            'success': 'success',
            'information': 'information'
        })}>Default MessageStrip</MessageStrip>
);

dev.story = {
    parameters: { docs: { disable: true } }
};
