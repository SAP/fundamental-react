import MultiInput from '../MultiInput';
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    withKnobs
} from '@storybook/addon-knobs';

const data = [
    'Apple',
    'Apricot',
    'Acai',
    'African Moringa',
    'Bearberry',
    'Bilberry',
    'Blood orange',
    'Barbadine',
    'Barbados cherry',
    'Balsam Apple',
    'Chokeberry',
    'Cranberry',
    'Cupuacu'
];

storiesOf('Components|MultiInput', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <MultiInput data={data}
            placeHolder='Select a Fruit' />
    ))
    .add('disable styles', () => (
        <MultiInput data={data} disableStyles
            placeHolder='Select a Fruit' />
    ))
    .add('custom styles', () => (
        <MultiInput customStyles={require('../../utils/WithStyles/customStylesTest.css')} data={data}
            placeHolder='Select a Fruit' />
    ));
