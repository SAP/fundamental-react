import Button from '../../Button/Button';
import FormInput from '../../Forms/FormInput';
import FormTextarea from '../../Forms/FormTextarea';
import Icon from '../../Icon/Icon';
import InputGroup from '../InputGroup';
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    boolean,
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
    .add('addon button before', () => (
        <InputGroup
            compact={boolean('compact', false)}>
            <InputGroup.Addon isButton>
                <Button
                    compact
                    glyph='navigation-down-arrow'
                    option='light' />
            </InputGroup.Addon>
            <FormInput />
        </InputGroup>
    ))
    .add('addon button after', () => (
        <InputGroup
            compact={boolean('compact', false)}>
            <FormInput />
            <InputGroup.Addon isButton>
                <Button
                    compact
                    glyph='navigation-down-arrow'
                    option='light' />
            </InputGroup.Addon>
        </InputGroup>
    ))
    .add('addon text before', () => (
        <InputGroup
            compact={boolean('compact', false)}>
            <InputGroup.Addon>€</InputGroup.Addon>
            <FormInput placeholder='Type text here' />
        </InputGroup>
    ))
    .add('addon text after', () => (
        <InputGroup
            compact={boolean('compact', false)}>
            <FormInput placeholder='Type text here' />
            <InputGroup.Addon>€</InputGroup.Addon>
        </InputGroup>
    ))
    .add('addon icon before', () => (
        <InputGroup compact={boolean('compact', false)}>
            <InputGroup.Addon>
                <Icon glyph='globe' />
            </InputGroup.Addon>
            <FormInput placeholder='Type text here' />
        </InputGroup>
    ))
    .add('addon icon after', () => (
        <InputGroup compact={boolean('compact', false)}>
            <FormInput placeholder='Type text here' />
            <InputGroup.Addon>
                <Icon glyph='hide' />
            </InputGroup.Addon>
        </InputGroup>
    ))
    .add('textarea', () => (
        <InputGroup>
            <FormTextarea>Default</FormTextarea>
            <InputGroup.Addon>
                <Icon glyph='hide' />
            </InputGroup.Addon>
        </InputGroup>
    ));
