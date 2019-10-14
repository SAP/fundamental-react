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
    .add('addon text before', () => (
        <InputGroup>
            <InputGroup.Addon>$</InputGroup.Addon>
            <InputGroup.Input
                placeholder='Type text here' />
        </InputGroup>
    ))
    .add('addon text after', () => (
        <InputGroup>
            <InputGroup.Input placeholder='Type text here' />
            <InputGroup.Addon>€</InputGroup.Addon>
        </InputGroup>
    ))
    .add('addon text compact', () => (
        <InputGroup compact>
            <InputGroup.Input
                placeholder='Type text here' />
            <InputGroup.Addon>€</InputGroup.Addon>
        </InputGroup>
    ))
    .add('addon icon before', () => (
        <InputGroup addon='icon'>
            <InputGroup.Addon glyph='globe' />
            <InputGroup.Input placeholder='Type text here' />
        </InputGroup>
    ))
    .add('addon icon after', () => (
        <InputGroup addon='icon'>
            <InputGroup.Input placeholder='Type text here' />
            <InputGroup.Addon glyph='hide' />
        </InputGroup>
    ))
    .add('addon icon compact', () => (
        <InputGroup addon='icon' compact>
            <InputGroup.Input placeholder='Type text here' />
            <InputGroup.Addon glyph='hide' />
        </InputGroup>
    ))
    .add('addon button before', () => (
        <InputGroup actions addon='button'>
            <InputGroup.Addon>
                <Button option='light'>Button</Button>
            </InputGroup.Addon>
            <InputGroup.Input placeholder='Type text here' />
        </InputGroup>
    ))
    .add('addon button after', () => (
        <InputGroup actions addon='button'>
            <InputGroup.Input placeholder='Type text here' />
            <InputGroup.Addon>
                <Button option='light'>Button</Button>
            </InputGroup.Addon>
        </InputGroup>
    ))
    .add('addon button compact', () => (
        <InputGroup actions addon='button'
            compact>
            <InputGroup.Input placeholder='Type text here' />
            <InputGroup.Addon>
                <Button compact option='light'>Button</Button>
            </InputGroup.Addon>
        </InputGroup>
    ));
