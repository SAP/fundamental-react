import Pagination from '../Pagination';
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    withKnobs
} from '@storybook/addon-knobs';

storiesOf('Components|Pagination', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <Pagination itemsTotal={101} />
    ))
    .add('disable styles', () => (
        <Pagination disableStyles itemsTotal={101} />
    ))
    .add('custom styles', () => (
        <Pagination customStyles={require('../../utils/WithStyles/customStylesTest.css')} itemsTotal={101} />
    ));
