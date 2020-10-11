/* eslint-disable react/no-multi-comp */
import { action } from '@storybook/addon-actions';
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

/**
 * The **MessageStrip** provides information that is useful and relevant, but not critical. It can also provide
 * feedback that an action has been executed. The user will need to dismiss the message.
 */

export const dismissible = () => (
    <MessageStrip dismissible>MessageStrip</MessageStrip>
);

dismissible.storyName = 'Dismissible';

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



export const statesWithCustomContentAndLinks = () => (
    <>
        <MessageStrip
            dismissible
            link='https://experience.sap.com'
            linkText='Learn more'
            localizedText={{
                close: 'Dismiss alert'
            }}
            type='error'>
            <b>Error</b><br />
            {'There was some error. There was some error. There was some error. There was some error.    '}
        </MessageStrip>
        <MessageStrip
            dismissible
            link='https://experience.sap.com'
            linkText='Learn more'
            localizedText={{
                close: 'Dismiss alert'
            }}
            type='warning'>
            <b>Issue</b><br />
            {'There is some problem.'} <br /> {'There is some problem. There is some problem. There is some problem.    '}
        </MessageStrip>
        <MessageStrip
            dismissible
            link='https://experience.sap.com'
            linkText='Learn more'
            localizedText={{
                close: 'Dismiss alert'
            }}
            type='success'>
            <b>Done</b><br />
            {'Task completed successfully.'} <br />{' Task completed successfully. '} <br />  {'Task completed successfully. Task completed successfully.    '}
        </MessageStrip>
        <MessageStrip
            dismissible
            link='https://experience.sap.com'
            linkText='Learn more'
            localizedText={{
                close: 'Dismiss alert'
            }}
            type='information'>
            <b>Info</b><br />
            {'For your information. For your information. For your information. For your information. For your information.    '}
        </MessageStrip>
    </>
);

export const dev = () => (
    <MessageStrip
        dismissible={boolean('dismissible', false)}
        link={text('href', '')}
        linkText={text('linkText', 'Default MessageStrip')}
        noGlyph={boolean('noGlyph', false)}
        onCloseClicked={action('on-close-clicked')}
        type={select('Validation State', {
            'default': null,
            'warning': 'warning',
            'error': 'error',
            'success': 'success',
            'information': 'information'
        })}>Default MessageStrip</MessageStrip>
);

dev.parameters = { docs: { disable: true } };

export const noStyles = () => (
    <MessageStrip cssNamespace='xxx'>Default MessageStrip</MessageStrip>
);
noStyles.parameters = { docs: { disable: true } };
