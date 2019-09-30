import Button from '../Button';
import ButtonGroup from '../ButtonGroup';
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    withKnobs
} from '@storybook/addon-knobs';

storiesOf('Components|ButtonGroup', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <ButtonGroup>
            <Button glyph='survey' />
            <Button glyph='pie-chart' selected />
            <Button glyph='pool' />
        </ButtonGroup>
    ))
    .add('disable styles', () => (
        <ButtonGroup disableStyles>
            <Button disableStyles glyph='survey' />
            <Button disableStyles glyph='pie-chart'
                selected />
            <Button disableStyles glyph='pool' />
        </ButtonGroup>
    ))
    .add('custom styles', () => (
        <ButtonGroup
            customStyles={require('../../utils/WithStyles/customStylesTest.css')}>
            <Button glyph='survey' />
            <Button glyph='pie-chart' selected />
            <Button glyph='pool' />
        </ButtonGroup>
    ));
