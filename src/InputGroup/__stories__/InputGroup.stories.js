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
    ))
    .add('with addon', () => (
        <InputGroup
            addon='$'
            addonPos='before'
            inputValue='1234567890' />
    ))
    .add('with icon', () => (
        <InputGroup
            addonPos='before'
            glyph='globe'
            inputValue='1234567890' />
    ))
    .add('with number input', () => (
        <InputGroup inputType='number' inputValue={100} />
    ))
    .add('with actions', () => (
        <InputGroup
            actions
            addonPos='after'
            compact
            inputValue='1234567890'>
            <Button
                compact
                option='light'>Button</Button>
        </InputGroup>
    ))
    .add('compact', () => (
        <InputGroup
            addon='$'
            addonPos='before'
            compact
            inputValue='1234567890' />
    ));
