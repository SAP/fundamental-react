import React from 'react';
import Status from '../Status';
import { storiesOf } from '@storybook/react';
import {
    withKnobs
} from '@storybook/addon-knobs';

storiesOf('Components|Status', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <Status>Default</Status>
    ))
    .add('disable styles', () => (
        <Status disableStyles>Default</Status>
    ))
    .add('custom styles', () => (
        <Status
            customStyles={require('../../utils/WithStyles/customStylesTest.css')}>
            Default
        </Status>
    ));
