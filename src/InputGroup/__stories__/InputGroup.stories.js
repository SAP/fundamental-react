import Button from '../../Button/Button';
import InputGroup from '../InputGroup';
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    withKnobs
} from '@storybook/addon-knobs';

storiesOf('Components|InputGroup', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <InputGroup>
            <Button
                compact
                glyph='navigation-down-arrow'
                option='light' />
        </InputGroup>
    ))
    .add('disable styles', () => (
        <InputGroup
            disableStyles>
            <Button
                compact
                glyph='navigation-down-arrow'
                option='light' />
        </InputGroup>
    ))
    .add('custom styles', () => (
        <InputGroup
            customStyles={require('../../utils/WithStyles/customStylesTest.css')}>
            <Button
                compact
                glyph='navigation-down-arrow'
                option='light' />
        </InputGroup>
    ));
