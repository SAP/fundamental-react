import Panel from '../Panel';
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    withKnobs
} from '@storybook/addon-knobs';

storiesOf('Components|Panel', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <Panel>Default</Panel>
    ))
    .add('disable styles', () => (
        <Panel disableStyles>Default</Panel>
    ))
    .add('custom styles', () => (
        <Panel
            customStyles={require('../../utils/WithStyles/customStylesTest.css')}>
            Default
        </Panel>
    ));
