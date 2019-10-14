import Button from '../../Button/Button';
import FormInput from '../../Forms/FormInput';
import Icon from '../../Icon/Icon';
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
            <FormInput />
            <InputGroup.Addon>
                <Button
                    compact
                    glyph='navigation-down-arrow'
                    option='light' />
            </InputGroup.Addon>
        </InputGroup>
    ))
    .add('disable styles', () => (
        <InputGroup
            disableStyles>
            <FormInput />
            <InputGroup.Addon>
                <Button
                    compact
                    glyph='navigation-down-arrow'
                    option='light' />
            </InputGroup.Addon>
        </InputGroup>
    ))
    .add('custom styles', () => (
        <InputGroup
            customStyles={require('../../utils/WithStyles/customStylesTest.css')}>
            <FormInput />
            <InputGroup.Addon>
                <Button
                    compact
                    glyph='navigation-down-arrow'
                    option='light' />
            </InputGroup.Addon>
        </InputGroup>
    ))
    .add('addon text before', () => (
        <InputGroup>
            <InputGroup.Addon>$</InputGroup.Addon>
            <FormInput
                placeholder='Type text here' />
        </InputGroup>
    ))
    .add('addon text after', () => (
        <InputGroup>
            <FormInput placeholder='Type text here' />
            <InputGroup.Addon>€</InputGroup.Addon>
        </InputGroup>
    ))
    .add('addon text compact', () => (
        <InputGroup compact>
            <FormInput
                placeholder='Type text here' />
            <InputGroup.Addon>€</InputGroup.Addon>
        </InputGroup>
    ))
    .add('addon icon before', () => (
        <InputGroup>
            <InputGroup.Addon>
                <Icon glyph='globe' />
            </InputGroup.Addon>
            <FormInput placeholder='Type text here' />
        </InputGroup>
    ))
    .add('addon icon after', () => (
        <InputGroup>
            <FormInput placeholder='Type text here' />
            <InputGroup.Addon>
                <Icon glyph='hide' />
            </InputGroup.Addon>
        </InputGroup>
    ))
    .add('addon icon compact', () => (
        <InputGroup compact>
            <FormInput placeholder='Type text here' />
            <InputGroup.Addon>
                <Icon glyph='hide' />
            </InputGroup.Addon>
        </InputGroup>
    ))
    .add('addon button before', () => (
        <InputGroup>
            <InputGroup.Addon isButton>
                <Button option='light'>Button</Button>
            </InputGroup.Addon>
            <FormInput placeholder='Type text here' />
        </InputGroup>
    ))
    .add('addon button after', () => (
        <InputGroup>
            <FormInput placeholder='Type text here' />
            <InputGroup.Addon isButton>
                <Button option='light'>Button</Button>
            </InputGroup.Addon>
        </InputGroup>
    ))
    .add('addon button compact', () => (
        <InputGroup compact>
            <FormInput placeholder='Type text here' />
            <InputGroup.Addon isButton>
                <Button compact option='light'>Button</Button>
            </InputGroup.Addon>
        </InputGroup>
    ));
