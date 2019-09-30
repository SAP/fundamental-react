import Alert from '../Alert';
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    withKnobs
} from '@storybook/addon-knobs';

storiesOf('Components|Alert', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <Alert
            dismissible
            link='#'
            linkText='link'>
                    Default alert
        </Alert>
    ))
    .add('disable styles', () => (
        <Alert
            disableStyles
            dismissible
            link='#'
            linkText='link'>
                    Default alert
        </Alert>
    ))
    .add('custom styles', () => (
        <Alert
            customStyles={require('../../utils/WithStyles/customStylesTest.css')}
            dismissible
            link='#'
            linkText='link'>
                    Default alert
        </Alert>
    ));
