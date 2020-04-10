import BusyIndicator from '../BusyIndicator';
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

storiesOf('Components|BusyIndicator', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <BusyIndicator />
    ))
    .add('small', () => (
        <BusyIndicator size='s' />
    ))
    .add('large', () => (
        <BusyIndicator size='l' />
    ))
    .add('disable styles', () => (
        <BusyIndicator disableStyles>Default</BusyIndicator>
    ));
