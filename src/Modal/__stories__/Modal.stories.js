import Modal from '../Modal';
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    withKnobs
} from '@storybook/addon-knobs';

storiesOf('Components|Modal', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <Modal show title='Product Added'>
            <p><b>The new product have been added to your catalog.</b></p>
            <p>Automatic Product ID: <b>PD-3465334</b></p>
            <p>Expiration date: <b>13/03/2018</b></p>
        </Modal>
    ))
    .add('disable styles', () => (
        <Modal disableStyles show
            title='Product Added'>
            <p><b>The new product have been added to your catalog.</b></p>
            <p>Automatic Product ID: <b>PD-3465334</b></p>
            <p>Expiration date: <b>13/03/2018</b></p>
        </Modal>
    ))
    .add('custom styles', () => (
        <Modal customStyles={require('../../utils/WithStyles/customStylesTest.css')} show
            title='Product Added'>
            <p><b>The new product have been added to your catalog.</b></p>
            <p>Automatic Product ID: <b>PD-3465334</b></p>
            <p>Expiration date: <b>13/03/2018</b></p>
        </Modal>
    ));
