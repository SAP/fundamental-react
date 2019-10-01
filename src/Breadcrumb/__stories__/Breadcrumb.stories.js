import Breadcrumb from '../Breadcrumb';
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    withKnobs
} from '@storybook/addon-knobs';

storiesOf('Components|Breadcrumb', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <Breadcrumb>
            <Breadcrumb.Item name='Link Text' url='#' />
            <Breadcrumb.Item name='Link Text' url='#' />
            <Breadcrumb.Item name='Link Text' url='#' />
        </Breadcrumb>
    ))
    .add('disable styles', () => (
        <Breadcrumb disableStyles>
            <Breadcrumb.Item name='Link Text' url='#' />
            <Breadcrumb.Item name='Link Text' url='#' />
            <Breadcrumb.Item name='Link Text' url='#' />
        </Breadcrumb>
    ))
    .add('custom styles', () => (
        <Breadcrumb
            customStyles={require('../../utils/WithStyles/customStylesTest.css')}>
            <Breadcrumb.Item name='Link Text' url='#' />
            <Breadcrumb.Item name='Link Text' url='#' />
            <Breadcrumb.Item name='Link Text' url='#' />
        </Breadcrumb>
    ));
