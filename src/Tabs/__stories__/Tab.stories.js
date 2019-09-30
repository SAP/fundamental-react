import React from 'react';
import { storiesOf } from '@storybook/react';
import Tab from '../Tab';
import {
    withKnobs
} from '@storybook/addon-knobs';

storiesOf('Components|Tab', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <Tab>Default</Tab>
    ))
    .add('disable styles', () => (
        <Tab disableStyles>Default</Tab>
    ))
    .add('custom styles', () => (
        <Tab
            customStyles={require('../../utils/WithStyles/customStylesTest.css')}>
            Default
        </Tab>
    ));
