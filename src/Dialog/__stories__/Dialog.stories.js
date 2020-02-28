import Dialog from '../Dialog';
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    withKnobs
} from '@storybook/addon-knobs';

storiesOf('Components|Dialog', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <Dialog show title='Product Added'>
            <p><b>The new product have been added to your catalog.</b></p>
            <p>Automatic Product ID: <b>PD-3465334</b></p>
            <p>Expiration date: <b>13/03/2018</b></p>
        </Dialog>
    ))
    .add('disable styles', () => (
        <Dialog disableStyles show
            title='Product Added'>
            <p><b>The new product have been added to your catalog.</b></p>
            <p>Automatic Product ID: <b>PD-3465334</b></p>
            <p>Expiration date: <b>13/03/2018</b></p>
        </Dialog>
    ));
