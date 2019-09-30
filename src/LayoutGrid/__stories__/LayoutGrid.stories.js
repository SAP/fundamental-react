import LayoutGrid from '../LayoutGrid';
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    withKnobs
} from '@storybook/addon-knobs';

storiesOf('Components|LayoutGrid', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <LayoutGrid>
            <div>Default1</div>
            <div>Default2</div>
            <div>Default3</div>
        </LayoutGrid>
    ))
    .add('disable styles', () => (
        <LayoutGrid disableStyles>
            <div>Default1</div>
            <div>Default2</div>
            <div>Default3</div>
        </LayoutGrid>
    ))
    .add('custom styles', () => (
        <LayoutGrid
            customStyles={require('../../utils/WithStyles/customStylesTest.css')}>
            <div>Default1</div>
            <div>Default2</div>
            <div>Default3</div>
        </LayoutGrid>
    ));
