import BusyIndicator from '../BusyIndicator';
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

storiesOf('Components|BusyIndicator', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <BusyIndicator show />
    ))
    .add('small', () => (
        <BusyIndicator show size='s' />
    ))
    .add('large', () => (
        <BusyIndicator show size='l' />
    ))
    .add('hidden', () => (
        <BusyIndicator />
    ))
    .add('disable styles', () => (
        <BusyIndicator disableStyles show>Default</BusyIndicator>
    ));
